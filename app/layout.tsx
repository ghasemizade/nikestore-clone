import Head from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: "NIKE SHOE",
    template: "%s | NIKE"
  },
  description: 'NIKE SHOP ABOUT SHOES',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Head />
        {children}
        <Footer />
      </body>
    </html>
  )
}
