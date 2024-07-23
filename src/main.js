import { createApp } from 'vue'
import router from './router/router.js';
import './assets/css/style.css'
import App from './App.vue'
const app =
    createApp(App)
        .use(router)

app.mount('#app')
