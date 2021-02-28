import { App } from 'vue'
import { Theme } from '@/types/plugins/theme'
import { PluginProvideType } from '@/types/provide/plugin'

export default {
  install: (app: App) => {
    const themeModule: Theme = {
      isDark: () => {
        return false
      }
    }

    app.config.globalProperties.$theme = themeModule
    app.provide(PluginProvideType.theme, themeModule)
  }
}
