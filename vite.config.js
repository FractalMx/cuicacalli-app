import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 👇 cambia al nombre de tu repo
export default defineConfig({
  base: '/cuicacalli-app/',
  plugins: [react()],
});