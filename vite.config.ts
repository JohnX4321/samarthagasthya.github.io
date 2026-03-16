import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split large dependencies
          'vendor-ui': [
            'react',
            'react-dom',
            'framer-motion',
            'react-intersection-observer'
          ],
          'vendor-icons': [
            '@fortawesome/react-fontawesome',
            '@fortawesome/free-solid-svg-icons',
            '@fortawesome/free-brands-svg-icons',
            'react-icons'
          ],
          'vendor-misc': [
            'lucide-react'
          ],
          // Split components by feature
          'components-sections': [
            './src/components/sections/Home.tsx',
            './src/components/sections/Projects.tsx',
            './src/components/sections/Skills.tsx',
            './src/components/sections/Experience.tsx',
            './src/components/sections/Education.tsx',
            './src/components/sections/Certifications.tsx'
          ],
          // Data and utilities
          'utils': [
            './src/utils/imageMap.ts',
            './src/schemas/portfolio.schema.ts',
            './src/types/portfolio.ts'
          ]
        }
      }
    },
    // Increase chunk size warning limit temporarily to monitor
    chunkSizeWarningLimit: 600
  }
});
