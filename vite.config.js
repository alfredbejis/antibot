import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'gsap', 'lenis'],
          three: ['three', '@react-three/fiber', '@react-three/drei']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true,
    cors: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'gsap', 'lenis', 'three', '@react-three/fiber', '@react-three/drei']
  }
});
