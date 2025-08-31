import type { APIRoute } from 'astro';

export const prerender = false;

function extractDriveId(input: string): string | null {
  if (!input) return null;
  const m1 = input.match(/\/d\/([^/]+)/);
  if (m1) return m1[1];
  const m2 = input.match(/[?&]id=([^&]+)/);
  if (m2) return m2[1];
  if (/^[A-Za-z0-9_-]{20,}$/.test(input)) return input;
  return null;
}

async function tryFetchPDF(id: string): Promise<Response | null> {
  // 複数のGoogle Drive URLパターンを試行
  const urls = [
    `https://drive.google.com/uc?export=download&id=${id}`,
    `https://drive.google.com/file/d/${id}/uc?export=download`,
    `https://drive.google.com/file/d/${id}/view?usp=sharing`,
    `https://drive.google.com/file/d/${id}/preview`,
    `https://drive.google.com/file/d/${id}/view`
  ];

  for (const url of urls) {
    try {
      console.log(`Trying URL: ${url}`);
      
      const resp = await fetch(url, { 
        redirect: 'follow',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      });
      
      if (!resp.ok) {
        console.log(`URL ${url} failed with status: ${resp.status}`);
        continue;
      }

      const contentType = resp.headers.get('content-type') || '';
      console.log(`Content-Type: ${contentType}`);
      
      // PDFまたはバイナリファイルの場合
      if (contentType.includes('application/pdf') || 
          contentType.includes('octet-stream') ||
          contentType.includes('application/octet-stream')) {
        
        const arrayBuffer = await resp.arrayBuffer();
        console.log(`Successfully fetched PDF, size: ${arrayBuffer.byteLength} bytes`);
        
        const headers = new Headers();
        headers.set('Content-Type', 'application/pdf');
        headers.set('Cache-Control', 'public, max-age=3600');
        headers.set('Access-Control-Allow-Origin', '*');
        headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
        headers.set('Access-Control-Allow-Headers', 'Content-Type');

        return new Response(arrayBuffer, { headers });
      }
      
      // HTMLレスポンスの場合は次のURLを試行
      if (contentType.includes('text/html')) {
        console.log(`URL ${url} returned HTML, trying next...`);
        continue;
      }
      
    } catch (error) {
      console.log(`Error with URL ${url}:`, error);
      continue;
    }
  }
  
  return null;
}

export const GET: APIRoute = async ({ request }) => {
  const u = new URL(request.url);
  const id = extractDriveId(u.searchParams.get('id') ?? u.searchParams.get('url') ?? u.searchParams.get('drive') ?? '');
  
  if (!id) {
    return new Response('Missing Google Drive id/url', { status: 400 });
  }

  console.log(`Attempting to fetch PDF for Drive ID: ${id}`);

  try {
    const pdfResponse = await tryFetchPDF(id);
    
    if (pdfResponse) {
      return pdfResponse;
    }
    
    // すべてのURLが失敗した場合
    console.error(`All URLs failed for Drive ID: ${id}`);
    return new Response('Failed to fetch PDF from Google Drive. Please check sharing settings.', { 
      status: 404,
      headers: {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'
      }
    });
    
  } catch (error) {
    console.error('Drive proxy error:', error);
    return new Response('Internal server error', { 
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
};

export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
