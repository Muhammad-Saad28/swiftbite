import type { Metadata } from 'next';
import { supabase } from '../../lib/supabase';
import MenuClientView, { MenuItem } from '../../components/menu/MenuClientView';

export const metadata: Metadata = {
  title: 'SwiftBite Menu & Prices | Burgers, Pizza & Fast Food in Lahore',
  description: 'Explore the full SwiftBite Lahore menu with up-to-date prices in PKR. Zinger burgers, beef smash burgers, shawarma, paratha rolls, loaded fries, and pizza.',
  alternates: {
    canonical: '/menu',
  },
  openGraph: {
    title: 'SwiftBite Menu & Prices | Lahore Fast Food',
    description: 'Check out the authentic SwiftBite menu featuring prices, burger varieties, pizzas, shawarma, and loaded fries.',
    url: 'https://swiftbite.food/menu',
  },
};

export const revalidate = 60; // ISR revalidation every 60 seconds

export default async function MenuPage() {
  let categories: string[] = ["ALL"];
  let menuItems: MenuItem[] = [];

  try {
    const { data: catData } = await supabase
      .from('categories')
      .select('name')
      .eq('active', true)
      .order('name');

    if (catData && catData.length > 0) {
      categories = ["ALL", ...catData.map((c: any) => c.name)];
    }

    const { data: itemData } = await supabase
      .from('menu_items')
      .select('id, category_id, name, description, price, image, available, featured, categories(name)')
      .order('name');

    if (itemData) {
      menuItems = itemData.map((i: any) => ({
        id: i.id,
        name: i.name,
        category: (Array.isArray(i.categories) ? i.categories[0]?.name : i.categories?.name) || "General",
        category_id: i.category_id,
        price: i.price,
        description: i.description || "",
        image: i.image || "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        available: i.available ?? true,
        featured: i.featured ?? false,
      }));
    }
  } catch (err) {
    console.error("Server-side menu load failed, falling back:", err);
  }

  // Generate Menu JSON-LD structured data for Google Search
  const menuJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    '@id': 'https://swiftbite.food/menu#menu',
    name: 'SwiftBite Lahore Full Menu',
    url: 'https://swiftbite.food/menu',
    inLanguage: 'en',
    hasMenuSection: categories
      .filter(cat => cat !== 'ALL')
      .map(cat => ({
        '@type': 'MenuSection',
        name: cat,
        hasMenuItem: menuItems
          .filter(item => item.category === cat)
          .map(item => ({
            '@type': 'MenuItem',
            name: item.name,
            description: item.description,
            image: item.image,
            offers: {
              '@type': 'Offer',
              price: item.price,
              priceCurrency: 'PKR',
              availability: item.available ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock'
            }
          }))
      }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd) }}
      />
      <MenuClientView initialCategories={categories} initialItems={menuItems} />
    </>
  );
}
