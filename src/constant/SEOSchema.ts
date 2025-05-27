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
  RightRecipes: {
    title: '',
    description: '',
    og_title: '',
    og_description: '',
    schema: [{
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        {
        "@type": "ListItem",
        "position": 1,
        "url": "https://indivit.de/rezepte/genialer-bananen-apfel-und-beeren-smoothie"
        },
        {
        "@type": "ListItem",
        "position": 2,
        "url": "https://indivit.de/rezepte/obst-fruechte-smoothie-genuss"
        },
        {
        "@type": "ListItem",
        "position": 3,
        "url": "https://indivit.de/rezepte/gesunder-gruener-smoothie-nicht-bitter"
        },
        {
        "@type": "ListItem",
        "position": 4,
        "url": "https://indivit.de/rezepte/vegan-healthy-smoothie-mit-superfoods"
        },
        {
        "@type": "ListItem",
        "position": 5,
        "url": "https://indivit.de/rezepte/frisch-gepresster-orangensaft-smoothie-mit-ingwer"
        },
        {
        "@type": "ListItem",
        "position": 6,
        "url": "https://indivit.de/rezepte/erfrischender-mango-lassi-smoothie"
        },
        {
        "@type": "ListItem",
        "position": 7,
        "item": {
          "@type": "Recipe",
          "name": "Low-Carb Himbeer Smoothie",
          "image": [
            " https://indivit.de/static/media/logo1.2f3c6f6529a9f1e4ab65.png ",
            " https://indivit.de/static/media/logo1.2f3c6f6529a9f1e4ab65.png "
          ],
          "recipeCategory": "Drink",
          "prepTime": "PT11M",
          "cookTime": "PT0M",
          "totalTime": "PT11M",
          "recipeYield": "1 Portion (= 250ml)",
          "datePublished": "2024-03-28",
          "description": "Gut bekömmlicher Smoothie mit wenig Fructose: Nur ca. 2,8g Fructose pro Portion. Beitrag zur Erhaltung normaler Knochen durch Vitamin C und K. Ideal für Low-Carb-Ernährung und bei Fructoseintoleranz!",
          "keywords": "low calorie, ernährung bei fructoseintoleranz",
          "author": {
            "@type": "Organization",
            "name": "Indivit"
          },
          "nutrition": {
            "@type": "NutritionInformation",
            "servingSize": "1 Portion (= 250ml)",
            "calories": "94 calories",
            "fatContent": "3.9 g",
            "carbohydrateContent": "8.4 g",
            "sugarContent": "7.6 g",
            "proteinContent": "3.6 g",
            "fiberContent": "10.4 g"
          },
          "recipeIngredient": [
            "drei kleine handvoll Bio-Himbeeren",
            "zwei große Bio-Brokkoli-Röschen",
            "zwei knappe Schnapsgläser reines Wasser einer frischen Bio-Kokosnuss",
            "1/4 einer kleinen-mittelgroßen Bio-Avocado",
            "einen ordentlichen Schuss weiches Quellwasser"
          ],
          "recipeInstructions": [
            {
              "@type": "HowToStep",
              "name": "Wort oder Wortgruppe zur Zusammenfassung des Schritts",
              "text": "Vollständiger Anweisungstext des Schritts",
              "url": "URL, die direkt auf den Schritt verweist (sofern verfügbar)",
              "image": "Ein Bild des Schritts"
            },
            {
              "@type": "HowToStep",
              "name": "Wort oder Wortgruppe zur Zusammenfassung des Schritts",
              "text": "Vollständiger Anweisungstext des Schritts",
              "url": "URL, die direkt auf den Schritt verweist (sofern verfügbar)",
              "image": "Ein Bild des Schritts"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "ratingCount": "8"
          },
          "suitableForDiet": [
            "https://schema.org/LowCalorieDiet",
            "https://schema.org/LowFatDiet",
            "https://schema.org/DiabeticDiet",
            "https://schema.org/GlutenFreeDiet",
            "https://schema.org/VeganDiet",
            "https://schema.org/VegetarianDiet"
          ]
        }
        },
        {
        "@type": "ListItem",
        "position": 8,
        "url": "https://indivit.de/rezepte/gurken-smoothie-zum-abnehmen"
        },
        {
        "@type": "ListItem",
        "position": 9,
        "url": "https://indivit.de/rezepte/pfirsich-smoothie-fructoseintoleranz-ernaehrung"
        },
        {
        "@type": "ListItem",
        "position": 10,
        "url": "https://indivit.de/rezepte/avocado-smoothie-zum-fruehstueck"
        },
        {
        "@type": "ListItem",
        "position": 11,
        "url": "https://indivit.de/rezepte/brokkoli-smoothie-schwangerschaft-vorteile"
        },
        {
        "@type": "ListItem",
        "position": 12,
        "url": "https://indivit.de/rezepte/ananas-smoothie-vor-wettkampf-ernaehrung"
        },
        {
        "@type": "ListItem",
        "position": 13,
        "url": "https://indivit.de/rezepte/banane-smoothie-getraenk-beim-sport"
        },
        {
        "@type": "ListItem",
        "position": 14,
        "url": "https://indivit.de/rezepte/regeneration-nach-sport-eiweiss-smoothie"
        },
        {
        "@type": "ListItem",
        "position": 15,
        "url": "https://indivit.de/rezepte/detox-smoothie-anti-kater-drink"
        },
        {
        "@type": "ListItem",
        "position": 16,
        "url": "https://indivit.de/rezepte/vitamin-smoothie-fuer-gesundes-immunsystem"
        },
        {
        "@type": "ListItem",
        "position": 17,
        "url": "https://indivit.de/rezepte/zitrone-und-ingwer-immunsystem-smoothie"
        },
        {
        "@type": "ListItem",
        "position": 18,
        "url": "https://indivit.de/rezepte/kalorienarmer-erdbeer-smoothie-snack"
        },
        {
        "@type": "ListItem",
        "position": 19,
        "url": "https://indivit.de/rezepte/nahrungsergaenzung-shake-mit-mandelmus"
        },
        {
        "@type": "ListItem",
        "position": 20,
        "url": "https://indivit.de/rezepte/brainfood-mango-smoothie"
        },
        {
        "@type": "ListItem",
        "position":21,
        "url": "https://indivit.de/rezepte/smoothies-gesunde-snacks-fuer-kinder"
        }
      ]
    }],
  },
  SmoothieMixer: {
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
		"name": "My Smoothie selber mixen - ohne Mixer Smoothie Ideen kreieren"
		}
	]
}
]

  },
  Subscriptions: {
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
		"name": "Abonnementübersicht"
		}
	]
}
]

  },
  Sustainability: {
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
		"name": "Ökologisch ernähren und nachhaltig essen mit Bio Lebensmitteln"
		}
	]
}
]

  },
  TermsConditions: {
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
		"name": "Allgemeine Geschäftsbedingungen"
		}
	]
}
]
  },
  ThankYou: {
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
		"name": "Danke für dein Feedback zu unseren Rezepten und Produkten"
		}
	]
}
]

  },
  WhyIndivit: {
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
		"name": "Warum Indivit?"
		}
	]
}
]

  },
  Whishlist: {
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
		"name": "Meine favorisierten Zutaten, Smoothies und Smoothie Boxen auf einen Blick"
		}
	]
}
]

  },
  Page8: {
    title: '',
    description: '',
    og_title: '',
    og_description: '',
    schema: null,
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
}


// "Add: Image Links, Add (automated): Rating picked from Backend


// <script type="application/ld+json">
// [
// {
// 	"@context": "http://schema.org/",
// 	"@type": "Recipe",
// 	"name": "Gesunder grüner Smoothie",
// 	"image": [
// 		"TBA",
// 		"TBA"
// 	],
// 	"recipeCategory": "Drink",
// 	"prepTime": "PT19M",
// 	"cookTime": "PT0M",
// 	"totalTime": "PT19M",
// 	"recipeYield": "1 Portion (= 250ml)",
// 	"datePublished": "2024-11-14",
// 	"description": "Grüner Smoothie für einen frischen Start in den Tag: Ist reich an Vitamin C und K, unterstützt eine gesunde Verdauung und ist perfekt für grüne Smoothie-Fans geeignet!",
// 	"keywords": "grüner smoothie, bitteres erfrischungsgetränk",
// 	"author": {
// 		"@type": "Organization",
// 		"name": "Indivit"
// 	},
// 	"nutrition": {
// 		"@type": "NutritionInformation",
// 		"servingSize": "1 Portion (= 250ml)",
// 		"calories": "128 calories",
// 		"fatContent": "0.5 g",
// 		"carbohydrateContent": "25.2 g",
// 		"sugarContent": "23.9 g",
// 		"proteinContent": "3.3 g",
// 		"fiberContent": "3.1 g"
// 	},
// 	"recipeIngredient": [
// 		"1/2 einer kleinen reifen Bio-Banane",
// 		"sechs haselnussgroße Stücke Bio-Mango",
// 		"ein großes Bio-Brokkoli-Röschen",
// 		"1/2 große handvoll junge Bio-Spinat-Blättchen",
// 		"1/2 Glas frisch gepresster Bio-Orangensaft"
// 	],
// 	"recipeInstructions": [
// 		{
// 			"@type": "HowToStep",
// 			"name": "Vorbereitung",
// 			"text": "Banane: Schälen, in 2cm-Würfel schneiden. Mango: Schälen, Fruchtfleisch vom Kern lösen. Brokkoli: 2 Min. blanchieren, Röschen zerteilen. Spinat: In Eiswasser revitalisieren. Orange: Frisch pressen (ergibt ca. 125ml Saft).",
// 			"image": "TBA"
// 		},
// 		{
// 			"@type": "HowToStep",
// 			"name": "Mixen",
// 			"text": "Alle Zutaten in Hochleistungsmixer geben. Bei 28.000 U/min 90 Sekunden mixen. Bei Bedarf 50ml Quellwasser hinzugeben.",
// 			"image": "TBA"
// 		},
// 		{
// 			"@type": "HowToStep",
// 			"name": "Servieren",
// 			"text": "In gekühltem Ballonglas mit: 1 Minzblatt (frisch) + 1 Mango-Würfel als Garnitur. Optional: Crushed Ice.",
// 			"image": "TBA"
// 		}
// 	],
// 	"aggregateRating": {
// 		"@type": "AggregateRating",
// 		"ratingValue": "5.0",
// 		"ratingCount": "1"
// 	},
// 	"suitableForDiet": [
// 		"https://schema.org/LowCalorieDiet",
// 		"https://schema.org/LowFatDiet",
// 		"https://schema.org/GlutenFreeDiet",
// 		"https://schema.org/VeganDiet",
// 		"https://schema.org/VegetarianDiet"
// 	]
// }
// ]
// </script>"


// {
// 	"@context"": ""http://schema.org/"",
// 	""@type"": ""Recipe"",
// 	""name"": ""Low-Carb Himbeer Smoothie"",
// 	""image"": [
// 		""TBA"",
// 		""TBA""
// 	],
// 	""recipeCategory"": ""Drink"",
// 	""prepTime"": ""PT9M"",
// 	""cookTime"": ""PT0M"",
// 	""totalTime"": ""PT9M"",
// 	""recipeYield"": ""1 Portion (= 250ml)"",
// 	""datePublished"": ""2024-03-28"",
// 	""description"": ""Gut bekömmlicher Smoothie mit wenig Fructose: Nur ca. 2,8g Fructose pro Portion. Beitrag zur Erhaltung normaler Knochen durch Vitamin C und K. Ideal für Low-Carb-Ernährung und bei Fructoseintoleranz!"",
// 	""keywords"": ""low calorie, ernährung bei fructoseintoleranz"",
// 	""author"": {
// 		""@type"": ""Organization"",
// 		""name"": ""Indivit""
// 	},
// 	""nutrition"": {
// 		""@type"": ""NutritionInformation"",
// 		""servingSize"": ""1 Portion (= 250ml)"",
// 		""calories"": ""94 calories"",
// 		""fatContent"": ""3.9 g"",
// 		""carbohydrateContent"": ""8.4 g"",
// 		""sugarContent"": ""7.6 g"",
// 		""proteinContent"": ""3.6 g"",
// 		""fiberContent"": ""10.4 g""
// 	},
// 	""recipeIngredient"": [
// 		""drei kleine handvoll Bio-Himbeeren"",
// 		""zwei große Bio-Brokkoli-Röschen"",
// 		""zwei knappe Schnapsgläser reines Wasser einer frischen Bio-Kokosnuss"",
// 		""1/4 einer kleinen-mittelgroßen Bio-Avocado"",
// 		""einen ordentlichen Schuss weiches Quellwasser""
// 	],
// 	""recipeInstructions"": [
// 		{
// 			""@type"": ""HowToStep"",
// 			""name"": ""Vorbereitung"",
// 			""text"": ""Himbeeren in Sieb unter kaltem Wasser abspülen. Brokkoli in blenderfähige Stücke zerteilen. Avocado schälen und würfeln."",
// 			""image"": ""TBA""
// 		},
// 		{
// 			""@type"": ""HowToStep"",
// 			""name"": ""Schichtweise einfüllen"",
// 			""text"": ""Kokoswasser und Quellwasser zuerst. Avocado und Himbeeren folgen. Brokkoli zuoberst platzieren."",
// 			""image"": ""TBA""
// 		},
// 		{
// 			""@type"": ""HowToStep"",
// 			""name"": ""Mixprozess"",
// 			""text"": ""Hochleistungsmixer ab 1.000 Watt verwenden. 60 Sekunden bei 30.000 U/min mixen. Bei Bedarf mit Quellwasser auf 250ml auffüllen."",
// 			""image"": ""TBA""
// 		},
// 		{
// 			""@type"": ""HowToStep"",
// 			""name"": ""Serviervorschlag"",
// 			""text"": ""Sofort in gekühltem Glas genießen. Optional mit frischer Minze garnieren."",
// 			""image"": ""TBA""
// 		}
// 	],
// 	""aggregateRating"": {
// 		""@type"": ""AggregateRating"",
// 		""ratingValue"": ""5.0"",
// 		""ratingCount"": ""8""
// 	},
// 	""suitableForDiet"": [
// 		""https://schema.org/LowCalorieDiet"",
// 		""https://schema.org/LowFatDiet"",
// 		""https://schema.org/DiabeticDiet"",
// 		""https://schema.org/GlutenFreeDiet"",
// 		""https://schema.org/VeganDiet"",
// 		""https://schema.org/VegetarianDiet""
// 	]
// }



