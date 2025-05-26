export const SEOSchema = {
  HomePage: {
    title: 'Indivit: Gesunde Smoothies & Clean Eating für individuelle Ziele | Bio',
    description: '',
    og_title: '',
    og_description: '',
    schema: [
      {
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
      },
      {
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
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://indivit.de/',
          },
        ],
      },
    ],
  },
  Common: {
    title: '',
    description: '',
    og_title: '',
    og_description: '',
    schema: [
      {
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
      },
      {
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
      },
    ],
  },
  About: {
    title: '',
    description: '',
    og_title: '',
    og_description: '',
    schema: [
      {
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
      },
      {
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
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://indivit.de/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Über uns: Indivit und die Smoothie Ninjas stellen sich vor',
          },
        ],
      },
    ],
  },
  Login: {
    title: '',
    description: '',
    og_title: '',
    og_description: '',
    schema: [
      {
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
      },
      {
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
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://indivit.de/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Login',
          },
        ],
      },
    ],
  },
  ForgotPassword: {
    title: '',
    description: '',
    og_title: '',
    og_description: '',
    schema: [
      {
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
      },
      {
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
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://indivit.de/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Passwort vergessen',
          },
        ],
      },
    ],
  },
  Signup: {
    title: '',
    description: '',
    og_title: '',
    og_description: '',
    schema: [
      {
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
      },
      {
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
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://indivit.de/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Login im Kreationsprozess',
          },
        ],
      },
    ],
  },
  Blogs: {
    title: '',
    description: '',
    og_title: '',
    og_description: '',
    schema: [
      {
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
      },
      {
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
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://indivit.de/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Indivit Blog über Ernährung sowie gesundes Leben und Essen',
          },
        ],
      },
    ],
  },
  Cancellation_policy: {
    title: '',
    description: '',
    og_title: '',
    og_description: '',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://indivit.de/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Widerrufsbedingungen',
          },
        ],
      },
    ],
  },
  Cart: {
    title: '',
    description: '',
    og_title: '',
    og_description: '',
    schema: [
           {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://indivit.de/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Warenkorb',
          },
        ],
      },
    ],
  },
  Checkout: {
    title: '',
    description: '',
    og_title: '',
    og_description: '',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://indivit.de/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Kasse',
          },
        ],
      },
    ],
  },
  Congratulations: {
    title: '',
    description: '',
    og_title: '',
    og_description: '',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://indivit.de/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Du hast dich erfolgreich als Nutzer bei uns registriert',
          },
        ],
      },
    ],
  },
  CustomBox: {
    title: '',
    description: '',
    og_title: '',
    og_description: '',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://indivit.de/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Meine individuell zusammengestellte Smoothie Box: Smoothie Box Konfigurator',
          },
        ],
      },
    ],
  },
  Liferung: {
    title: '',
    description: '',
    og_title: '',
    og_description: '',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://indivit.de/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Informationen zur Lieferung',
          },
        ],
      },
    ],
  },
  FAQ: {
    title: '',
    description: '',
    og_title: '',
    og_description: '',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://indivit.de/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Häufig gestellte Fragen',
          },
        ],
      },
    ],
  },
  HPP: {
    title: '',
    description: '',
    og_title: '',
    og_description: '',
    schema: [
{
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	"itemListElement": [
		{
		"@type": "ListItem",
		"position": 1,
		"name": "Home",
		"item": "https://indivit.de/"
		},
		{
		"@type": "ListItem",
		"position": 2,
		"name": "Haltbarkeit von Smoothies und Säften durch innovative HPP Behandlung"
		}
	]
}
]
  },
  Imprint: {
    title: '',
    description: '',
    og_title: '',
    og_description: '',
    schema: [
{
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	"itemListElement": [
		{
		"@type": "ListItem",
		"position": 1,
		"name": "Home",
		"item": "https://indivit.de/"
		},
		{
		"@type": "ListItem",
		"position": 2,
		"name": "Impressum"
		}
	]
}
],
  },
  Ingredients: {
    title: '',
    description: '',
    og_title: '',
    og_description: '',
    schema:[
{
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	"itemListElement": [
		{
		"@type": "ListItem",
		"position": 1,
		"name": "Home",
		"item": "https://indivit.de/"
		},
		{
		"@type": "ListItem",
		"position": 2,
		"name": "Beste Smoothie Zutaten für Rohkost und pflanzenbasierte Ernährung"
		}
	]
}
]
,
  },
  Annanas: {
    title: '',
    description: '',
    og_title: '',
    og_description: '',
    schema: [
{
	"@context": "https://schema.org",
	"@type": "WebPage",
	"name": "Indivit Smoothies",
	"description": "Indivit ist ein innovativer Anbieter bio-zertifizierter, individuell konfigurierbarer Smoothies. Die Produkte werden wissenschaftlich entwickelt und mit High-Pressure-Processing (HPP) schonend haltbar gemacht – ohne künstliche Zusätze. Indivit unterstützt gesunde Ernährung mit nährstoffreichen Smoothies für Fastenkuren, Intervallfasten und ausgewogene Mahlzeiten.",
	"publisher": {
		"@type": "Organization",
		"name": "Indivit",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "Kiefholzstrasse 25",
			"addressLocality": "Berlin",
			"postalcode": "12435"
			},
		"telephone": "+49-30-53010813"
		},
	"mainEntity": {
		"@type": "WebApplication",
		"name": "Indivit",
		"url": "https://indivit.de/",
		"operatingSystem": "All",
		"applicationCategory": "Shopping",
		"offers": {
			"@type": "Offer",
			"priceCurrency": "EUR"
		}
	}
},
{
	"@context": "http://schema.org/",
	"@type": "Organization",
	"name": "Indivit",
	"url": "https://indivit.de/",
	"logo": "https://indivit.de/static/media/logo1.2f3c6f6529a9f1e4ab65.png",
	"description": "Indivit ist ein innovativer Anbieter bio-zertifizierter, individuell konfigurierbarer Smoothies. Die Produkte werden wissenschaftlich entwickelt und mit High-Pressure-Processing (HPP) schonend haltbar gemacht – ohne künstliche Zusätze. Indivit unterstützt gesunde Ernährung mit nährstoffreichen Smoothies für Fastenkuren, Intervallfasten und ausgewogene Mahlzeiten.",
	"address": {
		"@type": "PostalAddress",
		"streetAddress": "Kiefholzstrasse 25",
		"addressLocality": "Berlin",
		"addressRegion": "Berlin",
		"postalCode": "12435",
		"addressCountry": "Germany"
	},
	"contactPoint": {
    		"@type": "ContactPoint",
    		"contactType": "customer service",
		"email": "smoothie@indivit.de",
		"telephone": "+49-30-53010813",
		"areaServed": "DE",
		"availableLanguage": [
			{
			"@type": "Language",
			"name": "German"
			},
			{
			"@type": "Language",
			"name": "English"
			}
		]
  	},
	"vatID": "DE353116846",
	"iso6523Code": "0088:4270003949309",
	"legalName": "Smoothie Ninja GmbH",
	"identifier": {
		"@type": "PropertyValue",
		"propertyID": "Amtsgericht Charlottenburg",
		"value": "HRB 241307 B"
		},
	"sameAs": [
		"https://www.facebook.com/profile.php?id=100088113601684",
		"https://www.instagram.com/indivit_smoothie",
		"https://twitter.com/indivitsmoothie",
		"https://www.youtube.com/@indivit-smoothie",
		"https://de.pinterest.com/janlampe0865/",
		"https://www.linkedin.com/company/indivit"
	],
	"founder": {
		"@type": "Person",
		"name": "Dr. Jan Lampe"
		},
	"foundingDate": "2022-03-21",
	"hasOfferCatalog": {
		"@type": "OfferCatalog",
		"name": "Smoothie Produkte",
		"itemListElement": [
			{
			"@type": "OfferCatalog",
			"name": "Die besten Saftkur Fastenkur Programme ",
			"itemListElement": [
				{
				"@type": "Offer",
				"itemOffered": {
					"@type": "Product",
					"name": "Saftkur 3-Tage Entgiftungskur"
					}
				},
				{
				"@type": "Offer",
				"itemOffered": {
					"@type": "Product",
					"name": "Saftkur 5-Tage Darmsanierung"
					}
				},
				{
				"@type": "Offer",
				"itemOffered": {
					"@type": "Product",
					"name": "Saftkur 7-Tage Heilfasten nach Buchinger"
					}
				}
				]
			},
			{
			"@type": "OfferCatalog",
			"name": "Saftkur Erfahrung mit 5:2 Intervallfasten",
			"itemListElement": [
				{
				"@type": "Offer",
				"itemOffered": {
					"@type": "Product",
					"name": "1 Woche Intervallfasten: Gesund durch zwei Fastentage"
					}
				},
				{
				"@type": "Offer",
				"itemOffered": {
					"@type": "Product",
					"name": "2 Wochen Intervallfasten: Saftkur und Saftdiät als Abnehmstrategie"
					}
				},
				{
				"@type": "Offer",
				"itemOffered": {
					"@type": "Product",
					"name": "3 Wochen Intervallfasten: Fastenkur zum Abnehmen"
					}
				}
				]
			},
			{
			"@type": "OfferCatalog",
			"name": "Trinkmahlzeiten als Snack für unterwegs",
			"itemListElement": [
				{
				"@type": "Offer",
				"itemOffered": {
					"@type": "Product",
					"name": "Smoothie Trinkmahlzeiten: Abnehmen mit Shakes und Snacks"
					}
				},
				{
				"@type": "Offer",
				"itemOffered": {
					"@type": "Product",
					"name": "Individuelle Smoothie Trinkmahlzeiten selber zusammenstellen"
					}
				}
				]
			},
			{
			"@type": "OfferCatalog",
			"name": "Leckere Smoothies für Foodies",
			"itemListElement": [
				{
				"@type": "Offer",
				"itemOffered": {
					"@type": "Product",
					"name": "Süße Snacks und gesunde Smoothies"
					}
				},
				{
				"@type": "Offer",
				"itemOffered": {
					"@type": "Product",
					"name": "Dubai Style Schokolade: Schoko Smoothie"
					}
				},
				{
				"@type": "Offer",
				"itemOffered": {
					"@type": "Product",
					"name": "Leckere Smoothies zum selber konfigurieren"
					}
				}
				]
			}
		]
	}
},
{
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	"itemListElement": [
		{
		"@type": "ListItem",
		"position": 1,
		"name": "Home",
		"item": "https://indivit.de/"
		},
		{
		"@type": "ListItem",
		"position": 2,
		"name": "Beste Smoothie Zutaten – gesund und plant based",
		"item": "https://indivit.de/beste-smoothie-zutaten-plant-based"
		},
		{
		"@type": "ListItem",
		"position": 3,
		"name": "Ananas"
		}
	]
},
{
	"@context": "https://schema.org",
	"@type": "FAQPage",
	"mainEntity": [
		{
		"@type": "Question",
		"name": "Kann Ananas Fett verbrennen?",
		"acceptedAnswer": {
			"@type": "Answer",
			"text": "Nein, aber ihr niedriger glykämischer Index (GI 59) hilft, Heißhunger zu reduzieren."
			}
		},
		{
		"@type": "Question",
		"name": "Wie erkenne ich reife Ananas?",
		"acceptedAnswer": {
			"@type": "Answer",
			"text": "Die Blätter lassen sich leicht zupfen, die Frucht duftet süßlich und die Schale gibt leicht nach."
			}
		},
		{
		"@type": "Question",
		"name": "Alternative zu frischer Ananas?",
		"acceptedAnswer": {
			"@type": "Answer",
			"text": "Tiefkühlware ohne Zuckerzusatz – alle Nährstoffe bleiben erhalten!"
			}
		},
		{
		"@type": "Question",
		"name": "Warum pelzige Zunge nach Ananas?",
		"acceptedAnswer": {
			"@type": "Answer",
			"text": "Bromelain spaltet Proteine – dieses Gefühl ist harmlos und verschwindet nach 30 Minuten."
			}
		},
		{
		"@type": "Question",
		"name": "Wie viel Ananas ist gesund?",
		"acceptedAnswer": {
			"@type": "Answer",
			"text": "200-300g/Tag frisches Fruchtfleisch und maximal 3x/Woche bei Histaminneigung."
			}
		},
		{
		"@type": "Question",
		"name": "Hilft Ananas bei Cellulite?",
		"acceptedAnswer": {
			"@type": "Answer",
			"text": "Durchblutungsfördernde Effekte sind möglich, jedoch existiert hier kein wissenschaftlicher Nachweis."
			}
		},
		{
		"@type": "Question",
		"name": "Macht Ananas müde?",
		"acceptedAnswer": {
			"@type": "Answer",
			"text": "Ananas enthält Tryptophan (Vorstufe von Melatonin). Ein abendlicher Genuss könnte somit den Schlaf fördern."
		}
	}
	]
}
]
,
  },
  MyCreation: {
    title: '',
    description: '',
    og_title: '',
    og_description: '',
    schema:
[
{
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	"itemListElement": [
		{
		"@type": "ListItem",
		"position": 1,
		"name": "Home",
		"item": "https://indivit.de/"
		},
		{
		"@type": "ListItem",
		"position": 2,
		"name": "Individuell erstellte Smoothies und Smoothie Boxen"
		}
	]
}
]
,
  },
  Orders: {
    title: '',
    description: '',
    og_title: '',
    og_description: '',
    schema: [
{
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	"itemListElement": [
		{
		"@type": "ListItem",
		"position": 1,
		"name": "Home",
		"item": "https://indivit.de/"
		},
		{
		"@type": "ListItem",
		"position": 2,
		"name": "Bestellungsübersicht"
		}
	]
}
]
  },
  // Payment Policy
  Zahlung: {
    title: '',
    description: '',
    og_title: '',
    og_description: '',
    schema: 
[
{
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	"itemListElement": [
		{
		"@type": "ListItem",
		"position": 1,
		"name": "Home",
		"item": "https://indivit.de/"
		},
		{
		"@type": "ListItem",
		"position": 2,
		"name": "Zahlungsmöglichkeiten"
		}
	]
}
]
  },
  Privacy: {
    title: '',
    description: '',
    og_title: '',
    og_description: '',
    schema: 
[

{
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	"itemListElement": [
		{
		"@type": "ListItem",
		"position": 1,
		"name": "Home",
		"item": "https://indivit.de/"
		},
		{
		"@type": "ListItem",
		"position": 2,
		"name": "Datenschutz"
		}
	]
}
]

  },
  Profile: {
    title: '',
    description: '',
    og_title: '',
    og_description: '',
    schema: [
{
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	"itemListElement": [
		{
		"@type": "ListItem",
		"position": 1,
		"name": "Home",
		"item": "https://indivit.de/"
		},
		{
		"@type": "ListItem",
		"position": 2,
		"name": "Nutzerprofil"
		}
	]
}
]
  },
  Page9: {
    title: '',
    description: '',
    og_title: '',
    og_description: '',
    schema: null,
  },
  Page1: {
    title: '',
    description: '',
    og_title: '',
    og_description: '',
    schema: null,
  },
  Page2: {
    title: '',
    description: '',
    og_title: '',
    og_description: '',
    schema: null,
  },
  Page3: {
    title: '',
    description: '',
    og_title: '',
    og_description: '',
    schema: null,
  },
  Page4: {
    title: '',
    description: '',
    og_title: '',
    og_description: '',
    schema: null,
  },
}
