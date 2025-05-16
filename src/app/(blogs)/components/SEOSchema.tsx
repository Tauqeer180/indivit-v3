import { baseURL } from '@/lib/fetcher'
import React from 'react'

export default function SEOSchema({ data }) {
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${baseURL}/blog/${data?.slug}`,
      },
      headline: data?.title,
      description: data?.short_text,
      image: baseURL + 'blogs/' + data?.image,
      author: {
        '@type': 'Organization',
        name: 'Indivit',
        url: 'https://indivit.de',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Indivit',
        logo: {
          '@type': 'ImageObject',
          url: 'https://indivit.de/static/media/logo1.2f3c6f6529a9f1e4ab65.png',
        },
      },
      datePublished: data?.created_at,
      dateModified: data?.updated_at,
    },
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
