import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {PrimeVueResolver} from "@primevue/auto-import-resolver";
import Components from 'unplugin-vue-components/vite';
import tailwindcss from "@tailwindcss/vite";
import {fileURLToPath} from 'url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), vue(), Components({
    resolvers: [
      PrimeVueResolver()
    ]
  })],
    resolve: {
        alias: [
            { find: '@src', replacement: fileURLToPath(new URL('./src', import.meta.url)) }
        ],
    },
})
