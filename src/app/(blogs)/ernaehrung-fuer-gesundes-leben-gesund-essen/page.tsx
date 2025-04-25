import { fetcher } from '@/lib/fetcher'
import React from 'react'
import BlogsHero from '../components/BlogsHero'
import { BlogCard } from '@/components/Cards'
import { BreadCrumb } from '@/components/common/Common'
import { MarkdownDisplay } from '@/components/common/MarkdownDisplay'
import IntroText from '@/constant/IntroText.json'

export async function generateMetadata() {
  // const data = await fetcher('about_us', { cache: true, revalidate: 86400 })
  // let aboutData = data?.data?.length > 0 ? data?.data[0] : {}

  return {
    alternates: { canonical: 'https://indivit.de/ernaehrung-fuer-gesundes-leben-gesund-essen' },
    title: `Gesund essen & abnehmen: Ernährung als Schlüssel zur Gesundheit`,
    description: `Entdecke, wie gesunde Ernährung und Intervallfasten dein Wohlbefinden steigern. Praxistipps für dauerhafte Gesundheit und natürliches Abnehmen. Jetzt mehr erfahren!`,
    authors: [{ name: 'Indivit' }],
    // keywords: data?.keywords,
    openGraph: {
      title: `Gesund essen & nachhaltig abnehmen: Dein wissenschaftlicher Ernährungsguide`,
      description: `Wie du durch bewusste Ernährung deine Gesundheit revolutionierst. Praxistaugliche Tipps zu Intervallfasten, Meal-Prep & Nährstoffoptimierung. Wissenschaftlich fundiert, alltagstauglich umgesetzt.`,
    },
    twitter: {
      site: '@indivitsmoothie',
      creator: '@indivitsmoothie',
      title: `Gesund essen & abnehmen: Ernährung als Schlüssel zur Gesundheit`,
      description: `Entdecke, wie gesunde Ernährung und Intervallfasten dein Wohlbefinden steigern. Praxistipps für dauerhafte Gesundheit und natürliches Abnehmen. Jetzt mehr erfahren!`,
    },
  }
}
export default async function Page() {
  let res = await fetcher('blogs?page=1&limit=12', { cache: true, revalidate: 3600 * 4 })
  res = JSON.parse(JSON.stringify(res))
  return (
    <div>
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
    </div>
  )
}
