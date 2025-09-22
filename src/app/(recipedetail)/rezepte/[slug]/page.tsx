import React from 'react'
import Content from './Content'
import { baseURL, fetcher } from '@/lib/fetcher'
import { cookies } from 'next/headers'
import { SEOSchema } from '@/constant/SEOSchema'
import { modifyRecipeSchema } from '@/utils/ModifyRecipeSchema'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params
  let cookieStore = cookies()
  let token = cookieStore.get('token')?.value || ''
  let smoothieByIdData
  smoothieByIdData = await fetcher(`r/slug/${slug}`, {
    token,
    cache: true,
    tags: ['smoothieById'],
  })
  if (!smoothieByIdData?.smoothie) {
    smoothieByIdData = await fetcher(`r/${slug}`, {
      token,
      cache: true,
      tags: ['smoothieById'],
    })
  }
  const data = smoothieByIdData?.smoothie

  return {
    alternates: { canonical: data?.canonical || `https://indivit.de/rezepte/${slug}` },
    title: data?.meta_title || `Indivit`,
    description: data?.meta_description,
    authors: [{ name: data?.author_name || 'Indivit' }],
    // keywords: data?.keywords,
    openGraph: {
      title: data?.og_title || `Indivit`,
      description: data?.og_description,
    },
    twitter: {
      site: '@indivitsmoothie',
      creator: '@indivitsmoothie',
      title: data?.meta_title || `Indivit | Uber uns `,
      description: data?.meta_description,
    },
  }
}

export const revalidate = 72000
export const dynamicParams = true // or false, to 404 on unknown paths
async function getRecipeList() {
  const data = await fetcher('allSmoothies', { cache: true, revalidate: 3600 })
  return data
}
export async function generateStaticParams() {
  const posts = await getRecipeList()
  console.log('Smoothies in generateStaticParams: ', JSON.stringify(posts))
  return posts?.smoothies?.map((post: any) => ({
    slug: post?.slug || post?.unique_id,
  }))
}

export default async function page({ params }: { params: { slug: string } }) {
  const smoothieId = params?.slug // `slug` should match the dynamic folder name

  let cookieStore = cookies()
  let token = cookieStore.get('token')?.value || ''
  //   Smoothies For Relative Section
  let smoothieData = await fetcher('get_smoothie', {
    token,
    cache: true,
    tags: ['smoothieListing'],
  })
  const smoothiesListing = smoothieData?.smoothies
  // Smoothie By ID
  let smoothieByIdData
  smoothieByIdData = await fetcher(`r/slug/${smoothieId}`, {
    token,
    cache: true,
    tags: [smoothieId],
  })
  //   if data not available on ID then search Slug
  if (!smoothieByIdData?.smoothie) {
    smoothieByIdData = await fetcher(`r/${smoothieId}`, {
      token,
      cache: true,
      tags: [smoothieId],
    })
  }
  const data = smoothieByIdData?.smoothie
  const relative_boxes = smoothieByIdData?.smoothie_box

  //   Benefits Section
  let benefitsData = await fetcher(`benefits`, {
    token,
    tags: ['smoothieBenefits'],
    cache: true,
    revalidate: 3600 * 24,
  })

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(SEOSchema?.Common?.schema, null, 2),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [
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
                    name: 'gesunde smoothies rezepte selber machen',
                    item: 'https://indivit.de/gesunde-smoothies-rezepte-selber-machen',
                  },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: data?.name,
                  },
                ],
              },
            ],
            null,
            2
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            modifyRecipeSchema(data, [baseURL + 'smoothie/' + data?.smoothie_picture?.picture]),
            null,
            2
          ),
        }}
      />

      {/* <div className="!tw-pt-32">
        <code className="!tw-pt-32">
          {JSON.stringify(
            modifyRecipeSchema(data, [baseURL + 'smoothie/' + data?.smoothie_picture?.picture])
          )}
        </code>
      </div>
      ====================== */}
      {/* {JSON.stringify(data)} */}
      <Content
        smoothiesListing={smoothiesListing}
        data={data}
        relative_boxes={relative_boxes}
        benefitsData={benefitsData}
      />
    </div>
  )
}
