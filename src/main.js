import { createApp } from 'vue'
import App from './modules/App/index.vue'
import router from './router'
import store from './store'
import VueNotificationList from '@dafcoe/vue-notification'

createApp(App).use(router).use(store).use(VueNotificationList).mount('#app')
