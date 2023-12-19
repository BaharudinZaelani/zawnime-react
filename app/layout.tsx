import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zawnime',
  description: 'Example Straming App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id='header' className='flex justify-center py-2 shadow bg-slate-100 mb-5'>
          <Header />
        </div>
        <div className='flex justify-center'>
          <div id='content' className='w-[90%]'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
