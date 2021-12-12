import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'build',
    minify: false,
    reportCompressedSize: true
  },
  preview: {}
});
