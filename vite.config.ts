import react from '@vitejs/plugin-react'
import { defineConfig, ServerOptions } from 'vite'
import vitePluginImp from 'vite-plugin-imp'
import { getThemeVariables } from 'antd/dist/theme'
import path from "path";
import alias from '@rollup/plugin-alias'

const server: ServerOptions = {
  port: 8003
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    alias(),
    react(),
    vitePluginImp({
      optimize: true,
      libList: [
        {
          libName: 'antd',
          libDirectory: 'es',
          style: (name) => `antd/es/${name}/style`
        }
      ]
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          ...getThemeVariables({
            dark: true,
          }),
          'primary-color': '#41b883'
        }
      }
    }
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, "src")
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, "src/pages")
      }
    ]
  },
  server: { ...server }
})
