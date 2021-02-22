import { createApp } from 'vue'
import App from './App.vue'
/* PWA */
import './registerServiceWorker'
/* Router */
import router from './router'

/* Store */
import { store, key } from './store'

export const app =
  createApp(App as any)
    .use(store, key)
    .use(router)
    .mount('#app')
