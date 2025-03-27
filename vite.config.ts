import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/property-assistant/',
  plugins: [react()],
  server: {
    open: '/home',
  },
})
