// astro.config.mjs  ★修正版
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  // base: '/corporate-site/',   ← これを消す or '/' に変更
  site: 'https://nanofrontier.jp', // SEO 用に追加しておくと吉
  integrations: [tailwind()],
});
