import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { resolve } from 'path'

// https://vitejs.dev/config/
function viteSvgPlygin() {
  return createSvgIconsPlugin({
    iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
    symbolId: 'icon-[name]'
  })
}

export default defineConfig(({ mode }) => {
  return {
    plugins: [vue(), viteSvgPlygin()],
    resolve: {
      alias: { '@': resolve(__dirname, 'src') },
      extensions: ['.js', '.ts', '.tsx', '.jsx', '.tsx', '.vue']
    },
    define: {
      'process.env': loadEnv(mode, process.cwd())
    },
    server: {
      proxy: {
        '/api': {
          target: 'https://api.imooc-front.lgdsunday.club/',
          changeOrigin: true
        }
      }
    }
  }
})
