import type { Metadata } from 'next';
import AboutClientView from '../../components/about/AboutClientView';

export const metadata: Metadata = {
  title: 'About SwiftBite | Authentic Fast Food Kitchen in Lahore',
  description: 'Learn the story behind SwiftBite Lahore. Born in an alleyway kitchen, built on fresh daily beef, crispy hand-breaded zinger chicken, and late-night cravings.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About SwiftBite | Fast Food Revolution in Lahore',
    description: 'Fresh ingredients, precision smash burgers, and uncompromising flavor delivered late night in Lahore.',
    url: 'https://swiftbite.food/about',
  },
};

export default function AboutPage() {
  return <AboutClientView />;
}
