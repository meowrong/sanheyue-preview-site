import type { Metadata } from 'next'
import { Noto_Serif_TC, Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSerifTC = Noto_Serif_TC({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
})

const geist = Geist({ 
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: '彡禾悅 | 小琉球包棟民宿',
  description: '傳統三合院的新生，專屬 12 人的復古靜謐時光。你的海島私領域。',
  generator: 'v0.app',
  keywords: ['小琉球', '包棟民宿', '三合院', '寵物友善', '彡禾悅'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-TW" className={`${notoSerifTC.variable} ${geist.variable} bg-background`}>
      <body className="font-serif antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
