import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@_api', replacement: '/src/api' },
      { find: '@_assets', replacement: '/src/assets' },
      { find: '@_components', replacement: '/src/components' },
      { find: '@_hooks', replacement: '/src/hooks' },
      { find: '@_constants', replacement: '/src/constants' },
      { find: '@_context', replacement: '/src/context' },
      { find: '@_mocks', replacement: '/src/mocks' },
      { find: '@_router', replacement: '/src/router' },
      { find: '@_types', replacement: '/src/types' },
      { find: '@_utils', replacement: '/src/utils' },
    ],
  },
});
