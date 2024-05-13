import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/SuperheroDashboard',
  define: {
    'process.env': {
      VITE_CLERK_PUBLISHABLE_KEY:
        JSON.stringify(process.env.VITE_CLERK_PUBLISHABLE_KEY)
    }
  }
});
