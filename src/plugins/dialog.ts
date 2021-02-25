
import { App } from 'vue'
import { Dialog } from '@/types/plugins/dialog'

export default {
  install: (app: App) => {
    const dialogModule: Dialog = {
      confirm: (name: string) => {
        console.log('confirmed', name)
      }
    }

    app.config.globalProperties.$dialog = dialogModule
    app.provide('dialog', dialogModule)
  }
}


