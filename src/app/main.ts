import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import {Noir} from "../shared";
import {createPinia} from "pinia";

const app = createApp(App)
const pinia = createPinia()

app.use(PrimeVue, {
    theme: {
        preset: Noir,
        options: {
            prefix: 'p',
            darkModeSelector: '.p-dark',
            cssLayer: false,
        }
    }
})
app.use(pinia)
app.mount('#app')
