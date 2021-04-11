import { KeyOfLocalstorage } from '@/types/system/localstorage'

export type ThemeColorOption = Record<string | ColorOption, string>
export type ColorOption =
  'primary' |
  'secondary' |
  'accent' |
  'error' |
  'info' |
  'success' |
  'warning' |
  'background' |
  'textPrimary'

export enum ThemeMode {
  'DARK_MODE' = 'dark',
  'LIGHT_MODE' = 'light'
}

/**
 * get current mode
 */
export const getCurrentTheme = () => {
  return localStorage.getItem(KeyOfLocalstorage.THEME) || ThemeMode.DARK_MODE // Default is dark mode
}
