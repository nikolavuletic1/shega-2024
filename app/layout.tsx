import type { Metadata } from 'next';
import './globals.css'
import Navbar from '@/components/Navbar'




export const metadata: Metadata = {
  title: 'Shega',
  description: 'Board Game Playroom landing page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className='hide-scrollbar'>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `history.scrollRestoration = "manual"` }} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="manifest" href="/manifest.json" /> */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand+SC&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <Navbar />
        <main className='relative overflow-hidden'>
          {children}
        </main>
      </body>
    </html>
  )
}
