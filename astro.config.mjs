// astro.config.mjs  ★修正版
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  site: 'https://nanofrontier.jp',
  integrations: [tailwind()],
});
