import { defineConfig } from 'astro/config';

export default defineConfig({
  // ... otras configuraciones de Astro
  plugins: [
    // ... otros plugins
    require('@tailwindcss/typography'), // Si lo usas
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Ahora esto usa la fuente Inter
      },
    },
  },  
});
