import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import {Providers} from "./providers";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';




const poppins = Poppins({ subsets: ['latin'], 
weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
 })

export const metadata: Metadata = {
  title: 'Restaurant App with Next.js',
  description: 'Restaurant App with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Theme>
        <Providers>
          <main className='dark text-foreground bg-background'>{children}</main>
        </Providers>
        </Theme>
      </body>
    </html>
  )
}
