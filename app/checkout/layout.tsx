import type { Metadata } from 'next';
import CheckoutPage from './page';

export const metadata: Metadata = {
  title: 'Secure Checkout | SwiftBite Lahore',
  robots: {
    index: false,
    follow: false,
  },
};

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
