import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      primary: 'var(--font-josefin-sans)'
    },
    extend: {
      screens: {
        xs: '480px'
      }
    }
  },
  plugins: [],
}
export default config
