import React from 'react';
import { RESTAURANT_INFO } from '../../lib/seo-data';

export default function RestaurantJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FastFoodRestaurant',
    '@id': `${RESTAURANT_INFO.url}/#restaurant`,
    name: RESTAURANT_INFO.name,
    legalName: RESTAURANT_INFO.legalName,
    url: RESTAURANT_INFO.url,
    logo: RESTAURANT_INFO.logoUrl,
    image: [
      RESTAURANT_INFO.heroImageUrl,
      RESTAURANT_INFO.logoUrl
    ],
    description: 'SwiftBite is a premier fast food restaurant in Lahore, serving crispy zinger burgers, beef smash burgers, artisan pizza, shawarma, loaded fries, and late-night deals.',
    telephone: RESTAURANT_INFO.telephone,
    priceRange: RESTAURANT_INFO.priceRange,
    currenciesAccepted: RESTAURANT_INFO.currenciesAccepted,
    paymentAccepted: RESTAURANT_INFO.paymentAccepted,
    servesCuisine: RESTAURANT_INFO.servesCuisine,
    hasMenu: RESTAURANT_INFO.hasMenu,
    menu: RESTAURANT_INFO.hasMenu,
    acceptsReservations: 'False',
    address: {
      '@type': 'PostalAddress',
      streetAddress: RESTAURANT_INFO.address.streetAddress,
      addressLocality: RESTAURANT_INFO.address.addressLocality,
      addressRegion: RESTAURANT_INFO.address.addressRegion,
      postalCode: RESTAURANT_INFO.address.postalCode,
      addressCountry: RESTAURANT_INFO.address.addressCountry
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: RESTAURANT_INFO.geo.latitude,
      longitude: RESTAURANT_INFO.geo.longitude
    },
    openingHoursSpecification: RESTAURANT_INFO.openingHoursSpecification.map(spec => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: spec.dayOfWeek,
      opens: spec.opens,
      closes: spec.closes
    })),
    areaServed: RESTAURANT_INFO.areaServed.map(area => ({
      '@type': 'AdministrativeArea',
      name: area
    })),
    potentialAction: [
      {
        '@type': 'OrderAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://swiftbite.food/menu',
          inLanguage: 'en',
          actionPlatform: [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform'
          ]
        },
        deliveryMethod: [
          'http://purl.org/goodrelations/v1#DeliveryModePickUp',
          'http://purl.org/goodrelations/v1#DeliveryModeOwnFleet'
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
