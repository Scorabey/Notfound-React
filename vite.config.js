import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer';
import sort from 'postcss-sort-media-queries';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  css: {
    postcss: {
      plugins: [
        autoprefixer({}),
        sort({})
      ]
    }
  }
})
