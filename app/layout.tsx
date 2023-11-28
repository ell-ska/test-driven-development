import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'

import Header from '@/components/Header'
import { cn } from '@/utils'
import './globals.css'

const josefinSans = Josefin_Sans({ subsets: ['latin'], variable: '--font-josefin-sans' })

export const metadata: Metadata = {
  title: 'color guessing game',
  description: 'guess the hex color, collect points!',
  icons: {
    icon: '/favicon.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          josefinSans.variable,
          'flex flex-col min-h-screen font-primary bg-slate-800 text-slate-50'
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
