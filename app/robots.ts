import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://swiftbite.food';

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/menu',
          '/offers',
          '/about',
          '/contact',
          '/order-online',
        ],
        disallow: [
          '/checkout',
          '/account',
          '/login',
          '/cart',
          '/wishlist',
          '/search',
          '/api/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
