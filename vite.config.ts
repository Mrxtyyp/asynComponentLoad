import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// https://vitejs.dev/config/, {VantResolve}
export default defineConfig({
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, "public/index.html"),
    },
  },
  plugins: [vue()],
  base: "./", //打包路径
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), //设置别名
    },
  },
  server: {
    port: 4000, //启动端口
    open: true,
    proxy: {
      // 选项写法
      "/api": {
        target: "http://api-hh209.haichuang.pro",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
    cors: true,
  },
});
