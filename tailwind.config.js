// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

module.exports = {
  // purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      ...colors,
      'primary': 'var(--color-primary)',
      'primary-blur': 'var(--color-primary-blur)',
      'primary-accent': 'var(--color-primary-accent)',
      'secondary': 'var(--color-secondary)',
      'secondary-blur': 'var(--color-secondary-blur)',
      'secondary-accent': 'var(--color-secondary-accent)',
      'accent': 'var(--color-accent)',
      'accent-blur': 'var(--color-accent-blur)',
      'accent-accent': 'var(--color-accent-accent)',
      'error': 'var(--color-error)',
      'error-blur': 'var(--color-error-blur)',
      'error-accent': 'var(--color-error-accent)',
      'info': 'var(--color-info)',
      'info-blur': 'var(--color-info-blur)',
      'info-accent': 'var(--color-info-accent)',
      'success': 'var(--color-success)',
      'success-blur': 'var(--color-success-blur)',
      'success-accent': 'var(--color-success-accent)',
      'warning': 'var(--color-warning)',
      'warning-blur': 'var(--color-warning-blur)',
      'warning-accent': 'var(--color-warning-accent)',
      background: 'var(--color-background)',
      'background-accent':'var(--color-background-accent)',
      textPrimary: 'var(--color-textPrimary)',
      'blueGray': 'var(--color-blueGray)',
      'blueGray-blur': 'var(--color-blueGray-blur)',
      'blueGray-accent': 'var(--color-blueGray-accent)',
    },
    minWidth: {
      0: '0px',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
