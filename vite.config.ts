import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss({
          darkMode: "class",
          content: [
            "./src/**/*.{ts,tsx}",
            "./index.html",
          ],
          theme: {
            extend: {
              colors: {
                obsidian: "#050505",
                charcoal: "#0A0A0B",
                gold: {
                  DEFAULT: "#C5A059",
                  light: "#E8D5A8",
                  deep: "#A8862E",
                },
                azure: "#007AFF",
                ivory: "#F5F5F7",
              },
              fontFamily: {
                heading: ["Instrument Sans", "ui-sans-serif", "system-ui", "sans-serif"],
                body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
                serif: ["Instrument Serif", "Georgia", "serif"],
              },
              borderRadius: {
                "4xl": "2rem",
              },
              keyframes: {
                "fade-in": {
                  from: { opacity: "0" },
                  to: { opacity: "1" },
                },
                "scroll-bounce": {
                  "0%, 100%": { transform: "translateY(0)" },
                  "50%": { transform: "translateY(8px)" },
                },
              },
              animation: {
                "fade-in": "fade-in 1s ease-out forwards",
                "scroll-bounce": "scroll-bounce 2s ease-in-out infinite",
              },
            },
          },
        }),
        autoprefixer(),
      ],
    },
  },
});
