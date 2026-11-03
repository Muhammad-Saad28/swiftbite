import type { Metadata } from 'next';
import { Epilogue, Outfit, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RestaurantJsonLd from '../components/seo/RestaurantJsonLd';
import { CartProvider } from '../components/CartContext';

const epilogue = Epilogue({ subsets: ['latin'], variable: '--font-epilogue' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  metadataBase: new URL('https://swiftbite.food'),
  title: {
    default: 'SwiftBite | Crispy Burgers, Pizza & Fast Food Delivery in Lahore',
    template: '%s | SwiftBite Lahore'
  },
  description: 'Order sizzling crispy zinger burgers, smash beef burgers, artisan pizza, shawarma, and loaded fries from SwiftBite Lahore. Fast delivery in Dera Gujran, Manawan & surrounding areas.',
  applicationName: 'SwiftBite',
  keywords: [
    'SwiftBite',
    'SwiftBite Lahore',
    'Burger Lahore',
    'Zinger Burger Lahore',
    'Fast Food Lahore',
    'Burger delivery Dera Gujran',
    'Pizza delivery Lahore',
    'Shawarma Lahore',
    'Late night food delivery Lahore',
    'Paratha rolls Lahore'
  ],
  authors: [{ name: 'SwiftBite Lahore', url: 'https://swiftbite.food' }],
  creator: 'SwiftBite',
  publisher: 'SwiftBite',
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://swiftbite.food',
    siteName: 'SwiftBite Fast Food',
    title: 'SwiftBite | Crispy Burgers, Pizza & Fast Food Delivery in Lahore',
    description: 'Hot, fresh, and lightning-fast late-night burgers, pizza, shawarma, and combos in Lahore. Open daily 3:00 PM – 3:00 AM.',
    images: [
      {
        url: '/images/hero-burger.jpg',
        width: 1200,
        height: 630,
        alt: 'SwiftBite Lahore Crispy Zinger Burger'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SwiftBite | Crispy Burgers, Pizza & Fast Food Delivery in Lahore',
    description: 'Hot, fresh, and lightning-fast late-night burgers, pizza, shawarma, and combos in Lahore. Open daily 3:00 PM – 3:00 AM.',
    images: ['/images/hero-burger.jpg']
  },
  icons: {
    icon: '/logo-bgremoved.png',
    apple: '/logo-bgremoved.png',
  },
};

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
      <body className={`${epilogue.variable} ${outfit.variable} ${spaceGrotesk.variable} bg-black font-body-md text-body-md text-on-surface`}>
        <RestaurantJsonLd />
        <CartProvider>
          <Header />
          <main className="bg-black">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
