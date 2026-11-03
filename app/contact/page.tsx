import type { Metadata } from 'next';
import ContactClientView from '../../components/contact/ContactClientView';

export const metadata: Metadata = {
  title: 'Contact SwiftBite Lahore | Location, Phone & Delivery Hours',
  description: 'Get in touch with SwiftBite Lahore. Main G.T. Road, near Orange Line Station, Dera Gujran. Order lines: 0321-2490006 & 0306-4656951. Open daily 3:00 PM – 3:00 AM.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact SwiftBite Lahore | Location & Delivery Info',
    description: 'Find SwiftBite Lahore near Orange Line Dera Gujran Station. Call or WhatsApp for late-night delivery.',
    url: 'https://swiftbite.food/contact',
  },
};

export default function ContactPage() {
  return <ContactClientView />;
}
