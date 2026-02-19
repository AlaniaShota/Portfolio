import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";
import { fileURLToPath } from "url";

// Эмулируем __dirname для работы в ES-модулях
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Настраиваем алиасы (теперь и @, и @src будут работать)
      "@": path.resolve(__dirname, "./src"),
      "@src": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Добавляем точку с запятой в конце и проверяем путь.
        // Теперь переменные будут доступны во ВСЕХ .scss файлах автоматически.
        additionalData: `@import "@src/style/variables.scss";`,
      },
    },
  },
});
