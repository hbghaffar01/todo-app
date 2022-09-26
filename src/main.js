import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/main.css"

console.log('env', JSON.stringify(process.env))

createApp(App).use(router).mount('#app')
