import vue from '@vitejs/plugin-vue';
import path from "path";

export default {
  plugins: [vue()],
  hmr: true,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src'),
    },
  },
}
