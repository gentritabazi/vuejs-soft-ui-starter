import { createApp } from 'vue';
import App from './modules/App/index.vue';
import Router from './router';
import Store from './store';
import VueNotification from '@dafcoe/vue-notification';

const app = createApp(App);

app.use(Router);
app.use(Store);
app.use(VueNotification);

app.mount('#app');
