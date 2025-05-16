import { baseURL } from '@/lib/fetcher'
import React from 'react'

export const generateWebPageSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Indivit Smoothies',
  description:
    'Indivit ist ein innovativer Anbieter bio-zertifizierter, individuell konfigurierbarer Smoothies. Die Produkte werden wissenschaftlich entwickelt und mit High-Pressure-Processing (HPP) schonend haltbar gemacht – ohne künstliche Zusätze. Indivit unterstützt gesunde Ernährung mit nährstoffreichen Smoothies für Fastenkuren, Intervallfasten und ausgewogene Mahlzeiten.',
  publisher: {
    '@type': 'Organization',
    name: 'Indivit',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kiefholzstrasse 25',
      addressLocality: 'Berlin',
      postalcode: '12435',
    },
    telephone: '+49-30-53010813',
  },
  mainEntity: {
    '@type': 'WebApplication',
    name: 'Indivit',
    url: 'https://indivit.de/',
    operatingSystem: 'All',
    applicationCategory: 'Shopping',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
    },
  },
})

export const generateOrganizationSchema = () => ({
  '@context': 'http://schema.org/',
  '@type': 'Organization',
  name: 'Indivit',
  url: 'https://indivit.de/',
  logo: 'https://indivit.de/static/media/logo1.2f3c6f6529a9f1e4ab65.png',
  description:
    'Indivit ist ein innovativer Anbieter bio-zertifizierter, individuell konfigurierbarer Smoothies. Die Produkte werden wissenschaftlich entwickelt und mit High-Pressure-Processing (HPP) schonend haltbar gemacht – ohne künstliche Zusätze. Indivit unterstützt gesunde Ernährung mit nährstoffreichen Smoothies für Fastenkuren, Intervallfasten und ausgewogene Mahlzeiten.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kiefholzstrasse 25',
    addressLocality: 'Berlin',
    addressRegion: 'Berlin',
    postalCode: '12435',
    addressCountry: 'Germany',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'smoothie@indivit.de',
    telephone: '+49-30-53010813',
    areaServed: 'DE',
    availableLanguage: [
      {
        '@type': 'Language',
        name: 'German',
      },
      {
        '@type': 'Language',
        name: 'English',
      },
    ],
  },
  vatID: 'DE353116846',
  iso6523Code: '0088:4270003949309',
  legalName: 'Smoothie Ninja GmbH',
  identifier: {
    '@type': 'PropertyValue',
    propertyID: 'Amtsgericht Charlottenburg',
    value: 'HRB 241307 B',
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=100088113601684',
    'https://www.instagram.com/indivit_smoothie',
    'https://twitter.com/indivitsmoothie',
    'https://www.youtube.com/@indivit-smoothie',
    'https://de.pinterest.com/janlampe0865/',
    'https://www.linkedin.com/company/indivit',
  ],
  founder: {
    '@type': 'Person',
    name: 'Dr. Jan Lampe',
  },
  foundingDate: '2022-03-21',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Smoothie Produkte',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Die besten Saftkur Fastenkur Programme ',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Saftkur 3-Tage Entgiftungskur',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Saftkur 5-Tage Darmsanierung',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Saftkur 7-Tage Heilfasten nach Buchinger',
            },
          },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Saftkur Erfahrung mit 5:2 Intervallfasten',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: '1 Woche Intervallfasten: Gesund durch zwei Fastentage',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: '2 Wochen Intervallfasten: Saftkur und Saftdiät als Abnehmstrategie',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: '3 Wochen Intervallfasten: Fastenkur zum Abnehmen',
            },
          },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Trinkmahlzeiten als Snack für unterwegs',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Smoothie Trinkmahlzeiten: Abnehmen mit Shakes und Snacks',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Individuelle Smoothie Trinkmahlzeiten selber zusammenstellen',
            },
          },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Leckere Smoothies für Foodies',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Süße Snacks und gesunde Smoothies',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Dubai Style Schokolade: Schoko Smoothie',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Leckere Smoothies zum selber konfigurieren',
            },
          },
        ],
      },
    ],
  },
})

export const BreadCrumbSchema = (pageName) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Produkte',
      item: 'https://indivit.de/#uebersicht-smoothie-produkte',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Die besten Saftkur Fastenkur Programme',
      item: 'https://indivit.de/die-besten-saftkur-fastenkur-programme',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: pageName,
    },
  ],
})

export const generateProductSchema = (product) => ({
  '@context': 'http://schema.org/',
  '@type': 'Product',
  name: product?.name,
  image: [product?.smoothie_image?.map((e) => baseURL + 'smoothie_box/' + e?.images)],
  description: product?.meta_description,

  gtin13: '4270003949309',
  brand: {
    '@type': 'Brand',
    name: 'Indivit',
  },
  offers: {
    '@type': 'Offer',
    url: `${baseURL}/produkte/${product?.slug}`,
    priceSpecification: [
      {
        '@type': 'UnitPriceSpecification',
        price:
          parseFloat(
            !product?.smoothie_box_descriptions?.[0]?.price ||
              product?.smoothie_box_descriptions?.[0]?.price == 0
              ? product?.smoothie_box_descriptions?.[0]?.smoothie_box_size?.price
              : product?.smoothie_box_descriptions?.[0]?.price
          )?.toFixed(1) || 0,
        priceCurrency: 'EUR',
        referenceQuantity: {
          '@type': 'QuantitativeValue',
          value: product?.smoothie_box_descriptions?.[0]?.smoothie_box_size?.size * 0.25,
          unitCode: 'LTR',
          valueReference: {
            '@type': 'QuantitativeValue',
            value: '100',
            unitCode: 'MLT',
          },
        },
      },
      {
        '@type': 'UnitPriceSpecification',
        priceType: 'https://schema.org/StrikethroughPrice',
        price: parseFloat(
          !product?.smoothie_box_descriptions?.[0]?.price ||
            product?.smoothie_box_descriptions?.[0]?.price == 0
            ? product?.smoothie_box_descriptions?.[0]?.smoothie_box_size?.price
            : product?.smoothie_box_descriptions?.[0]?.price
        )?.toFixed(1) || 0,
        priceCurrency: 'EUR',
        referenceQuantity: {
          '@type': 'QuantitativeValue',
          value: product?.smoothie_box_descriptions?.[0]?.smoothie_box_size?.size * 0.25,
          unitCode: 'LTR',
          valueReference: {
            '@type': 'QuantitativeValue',
            value: '100',
            unitCode: 'MLT',
          },
        },
      },
    ],
    itemCondition: 'https://schema.org/NewCondition',
    availability: 'https://schema.org/PreOrder',
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingRate: {
        '@type': 'MonetaryAmount',
        value: 4.95,
        currency: 'EUR',
      },
      shippingDestination: {
        '@type': 'DefinedRegion',
        addressCountry: 'DE',
      },
      deliveryTime: {
        '@type': 'ShippingDeliveryTime',
        handlingTime: {
          '@type': 'QuantitativeValue',
          minValue: 0,
          maxValue: 3,
          unitCode: 'DAY',
        },
        transitTime: {
          '@type': 'QuantitativeValue',
          minValue: 1,
          maxValue: 2,
          unitCode: 'DAY',
        },
      },
    },
  },
})
export default function SEOSchema({ data }) {
  const schemas = [
    generateWebPageSchema(),
    generateOrganizationSchema(),
    BreadCrumbSchema(data?.name),
    generateProductSchema(data),
  ]

  return (
    <>
      {/* {JSON.stringify(data, null, 2)} */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas, null, 2).replace(/</g, '\\u003c'),
        }}
      ></script>
    </>
  )
}
