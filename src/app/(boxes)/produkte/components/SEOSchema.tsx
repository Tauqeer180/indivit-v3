import Head from 'next/head'
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
  name: 'Saftkur 3-Tage Entgiftungskur',
  image: [
    'https://admin.indivit.de/smoothie_box/202502182110smoothie-fastenkur-3-tage.png',
    'https://admin.indivit.de/smoothie_box/202502182110smoothie-fastenkur-varianten.png',
    'https://admin.indivit.de/smoothie_box/202502182110smoothie-fastenkur-fastenguide.png',
    'https://admin.indivit.de/smoothie_box/202502182110smoothie-fastenkur-dauer.png',
    'https://admin.indivit.de/smoothie_box/202502191049smoothie-fastenkur-fastentag.png',
    'https://admin.indivit.de/smoothie_box/202502191049fructover-3.0-fastenkur.png',
    'https://admin.indivit.de/smoothie_box/202502191049mindzup-1.0-fastenkur.png',
    'https://admin.indivit.de/smoothie_box/202502191049all-in-fruit-1.0-fastenkur.png',
    'https://admin.indivit.de/smoothie_box/202502191049feedya-1.0-fastenkur.png',
    'https://admin.indivit.de/smoothie_box/202502191049immuboosta-1.0-fastenkur.png',
    'https://admin.indivit.de/smoothie_box/202502191049mojofit-1.0-fastenkur.png',
  ],
  description:
    '3-Tage Detox mit individuellen Smoothies: Weniger Zucker, mehr Nährstoffe & 4 Ausführungen für Entgiftung oder Reset. Frisch geliefert.',
  gtin13: '4270003949309',
  brand: {
    '@type': 'Brand',
    name: 'Indivit',
  },
  offers: {
    '@type': 'Offer',
    url: 'https://indivit.de/produkte/saftkur-3-tage-entgiftungskur',
    priceSpecification: [
      {
        '@type': 'UnitPriceSpecification',
        price: 69.0,
        priceCurrency: 'EUR',
        referenceQuantity: {
          '@type': 'QuantitativeValue',
          value: '4.5',
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
        price: 69.0,
        priceCurrency: 'EUR',
        referenceQuantity: {
          '@type': 'QuantitativeValue',
          value: '4.5',
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
export default function SEOSchema(data) {
  const schemas = [
    generateWebPageSchema(),
    generateOrganizationSchema(),
    BreadCrumbSchema(data?.name),
    generateProductSchema({}),
  ]

  return (
    <>
      {/* {JSON.stringify(generateWebPageSchema)} */}
      {/* <Head> */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas, null, 2).replace(/</g, '\\u003c'),
        }}
      >
        {/* {` '@context': 'https://schema.org',
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
  
  }`} */}
      </script>
      {/* </Head> */}
    </>
  )
}
