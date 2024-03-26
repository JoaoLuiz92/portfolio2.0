import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 0,
    outDir: 'dist', // diretório de saída para os arquivos construídos
    assetsDir: 'public/img', // diretório onde os ativos como imagens serão colocados
    rollupOptions: {
      input: {
        main: './index.html', // entrada principal do seu aplicativo
      },
    }
  }

})
