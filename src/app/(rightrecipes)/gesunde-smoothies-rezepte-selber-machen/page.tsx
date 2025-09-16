import { RecipeCard, SkeltonCard } from '@/components/Cards'
import { MarkdownDisplay } from '@/components/common/MarkdownDisplay'
import { fetcher } from '@/lib/fetcher'
import { cookies } from 'next/headers'
import Link from 'next/link'
import React from 'react'
import IntroText from '@/constant/IntroText.json'
import { getSEOData } from '@/services/common'
import { SWRKeys } from '@/constant/SWRKeys'
import { SEOSchema } from '@/constant/SEOSchema'
import { BreadCrumb } from '@/components/common/Common'
import { H1 } from '@/components/common/Typography'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
// Right Recipes Page

export async function generateMetadata() {
  const { data } = await getSEOData(SWRKeys?.RightRecipes)

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
// const BreadCrumb = ({ name }) => {
//   return (
//     <nav aria-label="breadcrumb" className="px-0">
//       <ol className="breadcrumb lg:tw-justify-center tw-text-sm">
//         <li className="breadcrumb-item">
//           <Link href="/">Home</Link>
//         </li>
//         <li className="breadcrumb-item active" aria-current="page">
//           {name}
//         </li>
//       </ol>
//     </nav>
//   )
// }
export async function getSmoothiesData(token) {
  const data = await fetcher('get_smoothie', { token })
  return data
}

export default async function Page() {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value || ''

  const response = await getSmoothiesData(token)
  const smoothies = response?.smoothies
  const categories = response?.categories

  return (
    <div className="tw-relative tw-overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [...SEOSchema?.Common?.schema, ...SEOSchema?.RightRecipes?.schema],
            null,
            2
          ),
        }}
      />
      {/* {JSON.stringify(smoothies[0])} */}
      <div className="tw-bg-[#BFEAB3] tw-pt-[140px] tw-pb-10  ">
        <div className="container">
          <Image
            alt="red barries"
            src="/assets/img/smoothie_list_graphics.png"
            className="tw-absolute -tw-right-6 xl:-tw-right-20 tw-top-52 tw-object-contain  tw-hidden lg:tw-block tw-w-36 tw-h-24  xl:tw-w-[264px] xl-tw-h-[164px]"
            width={264}
            height={180}
            // sizes="(min-width: 1280px) 264px, 164px"
          />
          <section className="">
            <div className="">
              <BreadCrumb name={'Smoothie Rezepte'} />
            </div>
            <div className="tw-pt-5  lg:tw-max-w-[943px]">
              <H1 className=" ">FsmoothieLoadinginde dein Lieblingsrezept</H1>
              <p className="tw-text-justify pb-2 tw-pt-5 tw-text-lg tw-text-dark">
                Unsere Smoothie-Rezepte sind nicht nur köstlich, sondern auch eine fantastische
                Möglichkeit, eine schnelle und gesunde Mahlzeit zu sich zu nehmen. Egal, ob Du ein
                Frühstück für unterwegs, einen Snack nach dem Training oder einfach nur eine
                erfrischende Leckerei suchst, es gibt ein Smoothie-Rezept für jede Gelegenheit. Du
                kannst jedes Rezept natürlich ganz individuell an deinen Geschmack anpassen – öffne
                es einfach mit dem Online Smoothie Mixer.
              </p>
            </div>
          </section>

          <section className="!tw-pt-10 ">
            <div>
              <Tabs defaultValue="alle">
                <TabsList className="tw-gap-4 tw-mb-14 tw-flex-wrap !tw-h-auto tw-bg-transparent ">
                  <TabsTrigger value="alle">Alle</TabsTrigger>
                  {categories?.map((categ, index) => {
                    return (
                      <TabsTrigger key={index} value={categ?.name?.toLowerCase() + '-' + categ?.id}>
                        {categ?.name}
                      </TabsTrigger>
                    )
                  })}
                </TabsList>
                <TabsContent value="alle">
                  <div className=" tw-grid tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-5 ">
                    {smoothies?.map((smooth, index) => {
                      return (
                        <div className="" key={index} data-aos="fade-up" data-aos-duration="1000">
                          <RecipeCard
                            isButton={true}
                            data={smooth}
                            actionTitle="Mehr anzeigen"
                            action={`/rezepte/${smooth?.slug || smooth?.unique_id}`}
                          />
                        </div>
                      )
                    })}
                  </div>
                </TabsContent>

                {categories?.map((categ, index) => {
                  return (
                    <TabsContent key={index} value={categ?.name?.toLowerCase() + '-' + categ?.id}>
                      <div
                        className=" tw-grid tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-5 "
                        key={index}
                      >
                        {smoothies
                          ?.filter((obj) =>
                            obj?.smoothie_categories?.some(
                              (categSub) => categSub?.category_id == categ?.id
                            )
                          )
                          .map((smooth, index) => {
                            return (
                              <div className="" data-aos="fade-up" data-aos-duration="1000">
                                <RecipeCard
                                  data={smooth}
                                  isButton={true}
                                  actionTitle="Mehr anzeigen"
                                  action={`/rezepte/${smooth?.slug || smooth?.unique_id}`}
                                />
                              </div>
                            )
                          })}
                      </div>
                    </TabsContent>
                  )
                })}
              </Tabs>
            </div>
          </section>
        </div>
      </div>
      <div className="container">
        <MarkdownDisplay>{IntroText?.recipe_content_2}</MarkdownDisplay>
      </div>
    </div>
  )
}

{
  /* <div className="d-flex justify-content-center mt-5">
          <ReactPaginate
            breakLabel="..."
            nextLabel={<i className="fa-solid fa-greater-than"></i>}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={smoothies?.last_page}
            previousLabel={<i className="fa-solid fa-less-than"></i>}
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            activeClassName="active"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
          />
        </div> */
}
