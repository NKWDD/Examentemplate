import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Custom styles
import './styles/main.css'

const app = createApp(App)

// Pinia store
app.use(createPinia())

// Vue Router
app.use(router)

app.mount('#app')