import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: "0.0.0.0",
    port: 3000, // 指定服务器端口
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    strictPort: false, // 设为 false 时，若端口已被占用则会尝试下一个可用端口,而不是直接退出
    https: false, // 是否开启 https
    hmr: true,
    cors: true, // 为开发服务器配置 CORS。默认启用并允许任何源
    proxy: {
      "/rtc": {
        target: "http://192.168.135.113:1985", // 后端服务实际地址
        rewrite: (path) => path.replace(/^\/rtc/, "/rtc"),
        changeOrigin: true, // true/false, Default: false - changes the origin of the host header to the target URL
      },
    },
  },
})
