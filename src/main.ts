import { createApp } from 'vue'
import '@/styles/index.scss'
import App from './App.vue'
/* PWA */
import './registerServiceWorker'
/* Router */
import router from './router'
import '@/router/beforeEach'
import DialogPlugin from '@/plugins/dialog'
import ThemePlugin from '@/plugins/theme'


/* Init dummay data */
import { initDummyData } from '@/dummy'
initDummyData()

/* Store */
import { store, key } from './store'

export const app = createApp(App as any)
  .use(store, key)
  .use(router)
  .use(DialogPlugin)
  .use(ThemePlugin)
  .mount('#app')
