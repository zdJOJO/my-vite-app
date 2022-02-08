import react from '@vitejs/plugin-react'
import { defineConfig, ServerOptions } from 'vite'
import vitePluginImp from 'vite-plugin-imp'
import viteCompression from 'vite-plugin-compression' //压缩gzip
import { getThemeVariables } from 'antd/dist/theme'
import path from 'path'
import alias from '@rollup/plugin-alias'

// const env: 'dev' | 'test' = 'dev'

const server: ServerOptions = {
  port: 8003
  // proxy: {
  //   '/schedule': {
  //     target: `http://pubtrans-ias.schedule-${env}.dtwb.ibuscloud.com/v2/dispatch`,
  //     changeOrigin: true
  //   },
  //   '/api': {
  //     target: `http://pubtrans-ias.schedule-${env}.dtwb.ibuscloud.com`,
  //     changeOrigin: true
  //   }
  // }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    viteCompression(),
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
            dark: false
          }),
          'primary-color': '#009688'
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
  server: { ...server },
  build: {
    rollupOptions: {
      output: {}
    }
  }
})
