import type { Metadata } from 'next'
import { Domine, DM_Sans } from 'next/font/google'
import './globals.css'

const domineFont = Domine({ subsets: ["latin"], variable: '--font-domine' });
const dmSansFont = DM_Sans({ subsets: ["latin"], variable: '--font-dm-sans' });

export const metadata: Metadata = {
  title: 'Grateful',
  description: 'A beautiful landing page showcasing our app with iOS mockup',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${domineFont.variable} ${dmSansFont.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
