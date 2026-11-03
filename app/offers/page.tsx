import type { Metadata } from 'next';
import { supabase } from '../../lib/supabase';
import OffersClientView, { DealItem } from '../../components/offers/OffersClientView';

export const metadata: Metadata = {
  title: 'SwiftBite Deals & Combos | Fast Food Discounts in Lahore',
  description: 'Save big with official SwiftBite Lahore deals: Zinger burger combos, family pizza deals, wings deals, and midnight specials. Delivered hot across Lahore.',
  alternates: {
    canonical: '/offers',
  },
  openGraph: {
    title: 'SwiftBite Deals & Combos | Fast Food Discounts in Lahore',
    description: 'Save big with official SwiftBite Lahore deals: Zinger burger combos, pizza deals, and midnight specials.',
    url: 'https://swiftbite.food/offers',
  },
};

export const revalidate = 60;

const fallbackDeals: DealItem[] = [
  {
    id: "f0000000-0000-0000-0000-000000000030",
    name: "Deal 1 — Zinger Combo",
    price: 550,
    description: "1 Zinger Burger + 1 Regular Fries + 1 Regular Drink",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
    active: true
  },
  {
    id: "f0000000-0000-0000-0000-000000000031",
    name: "Deal 2 — Patty Burger Combo",
    price: 550,
    description: "1 Chicken Patty Burger + 1 Regular Fries + 1 Regular Drink + 2 Pc Nuggets",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    active: true
  },
  {
    id: "f0000000-0000-0000-0000-000000000032",
    name: "Deal 3 — Wings Combo",
    price: 630,
    description: "6 Pc Chicken Wings + 1 Regular Drink + 1 Dip Sauce",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80",
    active: true
  },
  {
    id: "f0000000-0000-0000-0000-000000000033",
    name: "Deal 4 — Small Pizza Deal",
    price: 1099,
    description: "2 Small Pizzas + 1 Half-Litre Drink",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    active: true
  },
  {
    id: "f0000000-0000-0000-0000-000000000034",
    name: "Deal 5 — Medium Pizza Deal",
    price: 2499,
    description: "2 Medium Pizzas + 1 One-Litre Drink",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
    active: true
  },
  {
    id: "f0000000-0000-0000-0000-000000000035",
    name: "Deal 6 — Burger & Pizza Combo",
    price: 999,
    description: "1 Zinger Burger + 1 Small Pizza + 1 Half-Litre Drink",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80",
    active: true
  },
  {
    id: "f0000000-0000-0000-0000-000000000036",
    name: "Deal 7 — Large Pizza Deal",
    price: 3099,
    description: "2 Large Pizzas + 1 One-Litre Drink",
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=600&q=80",
    active: true
  }
];

export default async function OffersPage() {
  let deals: DealItem[] = fallbackDeals;

  try {
    const { data } = await supabase
      .from('menu_items')
      .select('id, name, price, description, image, available, categories!inner(name)')
      .eq('categories.name', 'Combo Deals');

    if (data && data.length > 0) {
      deals = data.map((d: any) => ({
        id: d.id,
        name: d.name,
        price: d.price,
        description: d.description || '',
        image: d.image || fallbackDeals[0].image,
        active: d.available ?? true
      }));
    }
  } catch (e) {
    console.error("Server-side offers load failed:", e);
  }

  return <OffersClientView initialDeals={deals} />;
}
