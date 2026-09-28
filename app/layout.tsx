import type { Metadata } from 'next'
import { Epilogue, Outfit, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '../components/Header';
import Footer from '../components/Footer';

const epilogue = Epilogue({ subsets: ['latin'], variable: '--font-epilogue' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'SwiftBite',
  description: 'Fast. Fresh. Tasty.',
  icons: {
    icon: '/logo.jpeg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${epilogue.variable} ${outfit.variable} ${spaceGrotesk.variable} bg-surface font-body-md text-body-md text-on-surface`}>
        <Header /><main className="bg-surface">{children}</main><Footer />
      </body>
    </html>
  )
}
