import react from '@vitejs/plugin-react'
import { defineConfig, ServerOptions } from 'vite'
import vitePluginImp from 'vite-plugin-imp'
import { getThemeVariables } from 'antd/dist/theme'
import path from 'path'
import alias from '@rollup/plugin-alias'

// http:pubtrans-ias.schedule-${env}.dtwb.ibuscloud.com/schedule/v2

const env: 'dev' | 'test' = 'dev'

const server: ServerOptions = {
  port: 8003,
  proxy: {
    '/dispatch': {
      target: `http:pubtrans-ias.schedule-${env}.dtwb.ibuscloud.com/schedule/v2`,
      changeOrigin: true,
      rewrite: path => path.replace(/^\/dispatch/, '')
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    alias(),
    react(),
    vitePluginImp({
      optimize: true,
      libList: [
        {
          libName: 'antd',
          libDirectory: 'es',
          style: name => `antd/es/${name}/style`
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
            dark: true
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
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/pages')
      }
    ]
  },
  server: { ...server }
})
