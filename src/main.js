import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import './assets/app.sass'

createApp(App).use(store).mount('#calc_app')
