import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  server: {
    port:8080
  },

  adapter: netlify(),
});