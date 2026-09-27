import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://dare2jo.jjmowlab.com',
  output: 'static',
  integrations: [sitemap()],
  build: {
    format: 'directory'
  }
});
