import { fetcher } from '@/lib/fetcher'
import React from 'react'
import BlogsHero from '../components/BlogsHero'
import { BlogCard } from '@/components/Cards'

export async function generateMetadata() {
  return {
    alternates: { canonical: 'https://indivit.de/ernaehrung-fuer-gesundes-leben-gesund-essen' },
    title: 'Indivit | Ernährung für gesundes Leben - Gesund Essen',
    description:
      'Entdecken Sie die besten Tipps für eine gesunde Ernährung und ein gesundes Leben. Erfahren Sie, wie Sie mit Smoothies Ihre Gesundheit fördern können.',
  }
}
export default async function Page() {
  let res = await fetcher('blogs?page=1&limit=12', { cache: true })
  res = JSON.parse(JSON.stringify(res))
  return (
    <div>
      <BlogsHero
        data={{
          title: 'Smoothie Wissen',
          description:
            'Entdecken Sie eine köstliche Auswahl an frisch gemixten Smoothies bei unserem Online-Händler. Passen Sie jede Mischung mit unserem Mixer individuell an Ihren Geschmack an. Von belebenden Fruchtmischungen bis hin zu cremigen Genüssen – unsere Smoothies sind ein köstliches Abenteuer, das auf Sie wartet!',
        }}
      />
      <div className="tw-max-w-7xl tw-mt-10 tw-px-4  tw-mx-auto tw-grid 2xl:tw-grid-cols-4 md:tw-grid-cols-3 tw-grid-cols-2 tw-gap-4">
        {res?.data?.data?.map((blog, index) => {
          return (
            <div key={index}>
              <BlogCard data={blog} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
