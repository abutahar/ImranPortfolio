import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import defaultTheme from 'tailwindcss/defaultTheme'; // Import defaultTheme

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        content: [
          './index.html',
          './src/**/*.{js,jsx}',
          './components/**/*.{js,jsx}',
        ],
        theme: {
          extend: {
            fontFamily: {
              'heading': ['Montserrat', ...defaultTheme.fontFamily.sans],
              'subheading': ['Poppins', ...defaultTheme.fontFamily.sans], // Optional
              'body': ['Inter', ...defaultTheme.fontFamily.sans],
              'serif-heading': ['Playfair Display', ...defaultTheme.fontFamily.serif], // Optional elegant heading
              'sans': ['Inter', 'ui-sans-serif', 'system-ui', ...defaultTheme.fontFamily.sans], // Default sans
              'serif': ['Playfair Display', 'ui-serif', 'Georgia', ...defaultTheme.fontFamily.serif], // Default serif
            },
          },
        },
        plugins: [],
      },
    }),
  ],
});