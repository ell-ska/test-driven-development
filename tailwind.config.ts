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
      minHeight: {
        // it works, it's just new
        // @ts-ignore: string[] not assignable to string
        screen: ['100vh', '100svh'],
      },
    }
  },
  plugins: [],
}
export default config
