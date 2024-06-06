import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { buildSync } from 'esbuild'
import { join } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      apply: "build",
      enforce: "post",
      transformIndexHtml() {
        buildSync({
          minify: true,
          bundle: true,
          entryPoints: [join(process.cwd(), "src", "sw.js")],
          outfile: join(process.cwd(), "dist", "sw.js"),
        });
      },
    },
  ],
})
