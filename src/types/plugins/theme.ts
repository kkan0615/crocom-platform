import { ThemeColorOption } from '@/types/theme'

export interface Theme {
  isDark: () => boolean
  currentTheme: () => ThemeColorOption
}

export interface ThemePluginOption {
  dark: boolean
  themes: {
    light: ThemeColorOption
    dark: ThemeColorOption
  }
}
