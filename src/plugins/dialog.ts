import { App } from 'vue'
import { Dialog } from '@/types/plugins/dialog'
import { PluginProvideType } from '@/types/provide/plugin'

export default {
  install: (app: App) => {
    const dialogModule: Dialog = {
      confirm: (name: string) => {
        console.log('confirmed', name)
      }
    }

    app.config.globalProperties.$dialog = dialogModule
    app.provide(PluginProvideType.dialog, dialogModule)
  }
}


