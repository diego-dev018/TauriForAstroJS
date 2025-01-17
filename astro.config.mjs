// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  server: {
      port: 3000,
  },

  output: 'static',
  integrations: [
    tailwind({
      configFile: './tailwind.config.js',
    })
  ],
});