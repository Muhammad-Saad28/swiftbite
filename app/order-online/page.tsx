import type { Metadata } from 'next';
import OrderOnlineClientView from '../../components/order-online/OrderOnlineClientView';

export const metadata: Metadata = {
  title: 'Order Online | SwiftBite Fast Food Delivery in Lahore',
  description: 'Order food online from SwiftBite Lahore. Hot zinger burgers, beef patties, loaded fries, and pizzas delivered in 20 minutes across Dera Gujran & Lahore.',
  alternates: {
    canonical: '/order-online',
  },
  openGraph: {
    title: 'Order Food Online | SwiftBite Lahore',
    description: 'Fast food delivery across Lahore. Open late daily 3:00 PM – 3:00 AM.',
    url: 'https://swiftbite.food/order-online',
  },
};

export default function OrderOnlinePage() {
  return <OrderOnlineClientView />;
}
