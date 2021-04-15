import { createApp } from 'vue'
import App from './modules/App/index.vue'
import router from './router'

createApp(App).use(router).mount('#app')
