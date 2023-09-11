import { fileURLToPath, URL } from 'node:url'
import Inspect from 'vite-plugin-inspect'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  transpileDependencies: true,
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/style/index.scss";`
      }
    }
  },
  server: {
    https: false,
    host: true,
    port: 3333,
    open: false,
    cors: true,
    strictPort: false,
    proxy: {
      '/api/v1': {
        target: 'https://www.fastmock.site/mock/761e2dda2b8890ab86c928a74e8f6538/api/v1',
        ws: true,
        /** 是否允许跨域 */
        changeOrigin: true,
        rewrite: (path) => path.replace('/api/v1', '')
      }
    }
  },
  build: {
    /** Vite 2.6.x 以上需要配置 minify: "terser", terserOptions 才能生效 */
    minify: 'terser',
    /** 在打包代码时移除 console.log、debugger 和 注释 */
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: true,
        pure_funcs: ['console.log']
      },
      format: {
        /** 删除注释 */
        comments: false
      }
    },
    /** 打包后静态资源目录 */
    assetsDir: 'static'
  },
  plugins: [
    vue(),
    vueJsx(),
    legacy({
      targets: ['> 0.001%', 'last 1 versions', 'IE 8']
    }),
    Components({
      dirs: ['src/components', 'src/layout/components', 'src/views'],
      include: [/\.vue$/, /\.vue\?vue/]
    }),
    AutoImport({
      imports: ['vue']
    }),
    Inspect()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.js', '.vue', '.json']
  }
})
