import '../../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Topbar } from '../components/topbar/topbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nostromo',
  description: 'Nostromo Ecommerce',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Topbar></Topbar>
          <div className='h-full'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
