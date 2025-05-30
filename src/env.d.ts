/// <reference types="astro/client" />

declare module 'astro:content' {
  interface Render {
    '.md': Promise<{
      Content: import('astro').MarkdownInstance<{}>['Content'];
      headings: import('astro').MarkdownHeading[];
      remarkPluginFrontmatter: Record<string, any>;
    }>;
  }
}

declare module '*.jpg?url' {
  const value: string;
  export default value;
}

declare module '*.png?url' {
  const value: string;
  export default value;
}

declare module '*.mp4?url' {
  const value: string;
  export default value;
}

declare module '*.svg?url' {
  const value: string;
  export default value;
} 