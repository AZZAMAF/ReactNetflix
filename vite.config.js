import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import babel from '@rolldown/plugin-babel'
import path from "path"
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  resolve: {
    alias: {
      "@" : path.resolve(__dirname, "src"),
      "@mods" : path.resolve(__dirname, "src/components/Moduls"),
      "@layouts" : path.resolve(__dirname, "src/components/Layouts")
    }
  }
})
