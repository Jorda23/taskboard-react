/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import svgr from '@svgr/rollup';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/task-web',

  resolve: {
    alias: {
      '@': '/src',
    },
  },

  optimizeDeps: {
    include: ['@testing-library/react', 'react', 'react-dom'],
  },

  plugins: [react(), nxViteTsPaths(), svgr()],
  
  server: {
    watch: {
      usePolling: true,
    },
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },



  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  build: {
    outDir: '../../dist/apps/task-web',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/apps/task-web',
      provider: 'v8',
    },
  },
});
