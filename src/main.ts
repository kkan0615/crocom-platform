import { createApp } from 'vue'
import '@/styles/index.scss'
import App from './App.vue'
/* PWA */
import './registerServiceWorker'
/* Router */
import router from './router'
// import '@/types/plugins/index.d.ts'
import DialogPlugin from '@/plugins/dialog'

/* Store */
import { store, key } from './store'

export const app =
  createApp(App as any)
    .use(store, key)
    .use(router)
    .use(DialogPlugin)
    .mount('#app')
