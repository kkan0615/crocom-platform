export interface Theme {
  dark: boolean
  themes: {
    light: ThemeColorOption
    dark: ThemeColorOption
  }
}

export type ThemeColorOption = Record<string, ColorOption | string>
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


