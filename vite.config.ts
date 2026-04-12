import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// Note: @rolldown/plugin-babel + React Compiler was removed — it caused Rolldown
// binding errors on Vercel/Linux. Re-enable when the toolchain stabilizes.
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
