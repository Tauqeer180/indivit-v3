import { fetcher } from '@/lib/fetcher'
import React from 'react'
import BlogsHero from '../components/BlogsHero'
import { BlogCard } from '@/components/Cards'
import { BreadCrumb } from '@/components/common/Common'
import { MarkdownDisplay } from '@/components/common/MarkdownDisplay'
import IntroText from '@/constant/IntroText.json'
import { getSEOData } from '@/services/common'
import { SWRKeys } from '@/constant/SWRKeys'
import { SEOSchema } from '@/constant/SEOSchema'

export async function generateMetadata() {
  const { data } = await getSEOData(SWRKeys?.BlogList)

  return {
    alternates: {
      canonical: data?.canonical || 'https://indivit.de',
    },
    title: data?.meta_title || `Indivit`,
    description: data?.meta_description || `Indivit`,
    authors: [{ name: data?.author_name || 'Indivit' }],
    keywords: data?.keywords,
    openGraph: {
      title: data?.og_title || `Indivit`,
      description: data?.og_description || `Indivit`,
      publishedTime: data?.created_at,
      modifiedTime: data?.updated_at,
    },
    article: {
      published_time: data?.created_at || new Date(),
      modified_time: data?.updated_at || new Date(),
      authors: [data?.author_name || 'Indivit'],
      tags: data?.keywords,
    },
    twitter: {
      site: '@indivitsmoothie',
      creator: '@indivitsmoothie',
      title: data?.meta_title || `Indivit`,
      description: data?.meta_description || `Indivit`,
    },
  }
}
export default async function Page() {
  let res = await fetcher('blogs?page=1&limit=12', { cache: true, revalidate: 3600 * 4 })
  res = JSON.parse(JSON.stringify(res))
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(SEOSchema?.Blogs?.schema, null, 2),
        }}
      />
      <BlogsHero
        data={{
          title: 'Smoothie Wissen',
          description:
            'Entdecken Sie eine köstliche Auswahl an frisch gemixten Smoothies bei unserem Online-Händler. Passen Sie jede Mischung mit unserem Mixer individuell an Ihren Geschmack an. Von belebenden Fruchtmischungen bis hin zu cremigen Genüssen – unsere Smoothies sind ein köstliches Abenteuer, das auf Sie wartet!',
        }}
        breadCrumb={<BreadCrumb name="Smoothie Wissen" />}
      />

      <div className="md:!tw-max-w-3xl tw-mx-auto tw-pt-14 !tw-h-auto max-md:!tw-px-4">
        <MarkdownDisplay>{IntroText?.blog_content_1}</MarkdownDisplay>
      </div>
      <div className="tw-max-w-7xl tw-mt-10 tw-px-4  tw-mx-auto tw-grid 2xl:tw-grid-cols-4 md:tw-grid-cols-3 tw-grid-cols-2 tw-gap-4">
        {res?.data?.data?.map((blog, index) => {
          return (
            <div key={index}>
              <BlogCard data={blog} />
            </div>
          )
        })}
      </div>

      <div className="container tw-my-14">
        <MarkdownDisplay>{IntroText?.blog_content_2}</MarkdownDisplay>
      </div>
    </>
  )
}
