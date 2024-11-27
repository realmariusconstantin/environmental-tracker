import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router'

const app = createApp(App)

// Use the Vue Router
app.use(router)

// Mount the app to the #app div in index.html
app.mount('#app')