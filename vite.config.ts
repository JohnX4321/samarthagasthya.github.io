import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Improve caching with named chunks
    cssCodeSplit: true,
    sourceMap: false, // Disable source maps in production to reduce bundle size
    minify: 'esbuild', // Use esbuild (default, faster)
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core dependencies
          if (id.includes('node_modules')) {
            if (id.includes('react') && id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-motion';
            }
            if (id.includes('react-intersection-observer')) {
              return 'vendor-intersection';
            }
            if (id.includes('@fortawesome')) {
              return 'vendor-fontawesome';
            }
            if (id.includes('react-icons')) {
              return 'vendor-react-icons';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-lucide';
            }
            if (id.includes('zod')) {
              return 'vendor-validation';
            }
            return 'vendor-misc';
          }
          // Component splitting
          if (id.includes('src/components/sections')) {
            return 'components-sections';
          }
          if (id.includes('src/components')) {
            return 'components-ui';
          }
          // Utilities
          if (id.includes('src/utils') || id.includes('src/schemas') || id.includes('src/types')) {
            return 'utils';
          }
        },
      },
    },
    // Set chunk limit to acknowledge FontAwesome size but warn for other oversizes
    chunkSizeWarningLimit: 1600,
  },
});
