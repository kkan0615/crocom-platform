import { App } from 'vue'
import { Theme, ThemePluginOption } from '@/types/plugins/theme'
import { PluginProvideType } from '@/types/provide/plugin'

const theme = {
  install: (app: App, option: ThemePluginOption) => {
    const themeModule: Theme = {
      isDark: () => {
        return option.dark
      },
      currentTheme: () => {
        return themeModule.isDark() ? option.themes.dark : option.themes.light
      }
    }

    app.config.globalProperties.$theme = themeModule
    app.provide(PluginProvideType.theme, themeModule)
  }
}

// export const themePluginOption: ThemePluginOption = {
//   dark: false,
//   themes: {
//     light: {
//       primary: 'blue-500',
//       secondary: 'withe',
//       accent: 'purple',
//       error: 'red',
//       info: 'blue-500',
//       success: 'green-500',
//       warning: 'orange-500',
//       background: 'white',
//       textPrimary: 'white'
//     },
//     dark: {
//       primary: 'blue-500',
//       secondary: 'withe',
//       accent: 'purple',
//       error: 'red',
//       info: 'blue-500',
//       success: 'green-500',
//       warning: 'orange-500',
//       background: 'white',
//       textPrimary: 'white'
//     },
//   }
// }

export default theme
