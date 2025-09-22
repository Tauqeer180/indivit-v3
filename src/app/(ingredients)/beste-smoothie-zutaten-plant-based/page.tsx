import { IngredientCard } from '@/components/Cards'
import HeroBanner from '@/components/common/HeroBanner'
import { MarkdownDisplay } from '@/components/common/MarkdownDisplay'
import { fetcher } from '@/lib/fetcher'
import React from 'react'
import IntroText from '@/constant/IntroText.json'
import { BreadCrumb } from '@/components/common/Common'
import { getSEOData } from '@/services/common'
import { SWRKeys } from '@/constant/SWRKeys'
import { SEOSchema } from '@/constant/SEOSchema'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
// Ingredients page

async function getIngredientsData() {
  const data = await fetcher('get_ingredient', { cache: true, revalidate: 3600 })
  return data
}
export async function generateMetadata() {
  const { data } = await getSEOData(SWRKeys?.IngredientsList)

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

export default async function Ingredients() {
  const res = await getIngredientsData()
  const ingredients = res?.ingredient
  const categories = res?.category

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [...SEOSchema?.Common?.schema, ...SEOSchema?.Ingredients?.schema],
            null,
            2
          ),
        }}
      />
      {/* <!-- hero banner start--> */}
      <div className="tw-bg-green tw-pb-10">
        <HeroBanner
          data={{
            title: 'Welche Zutaten sind im Smoothie?',
            description:
              'Unsere vitalen und lebendigen Smoothie-Zutaten vereinen sich zu einem harmonischen Zusammenspiel von Aromen und Nährstoffen und sind ein köstlicher und erfrischender Genuss für deine Geschmacksnerven und deine Gesundheit. Für jede unserer Zutaten haben wir spannende Informationen für dich zusammengetragen – das sollte dir bei der Auswahl für deinen Smoothie helfen.',
          }}
          bgImg=" !tw-bg-mixer"
          breadCrumb={<BreadCrumb name="Smoothie Zutaten" />}
        />
        {/* <!-- hero banner end--> */}

        {/* Tabs and Cards Section Start */}

        <div className="container tw-pt-10">
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
              <div className=" tw-grid sm:tw-grid-cols-2 md-5:tw-grid-cols-3 tw-gap-5 ">
                {ingredients?.map((ingred, index) => {
                  return (
                    <div className="" key={index} data-aos="fade-up" data-aos-duration="1000">
                      <IngredientCard data={ingred} />
                    </div>
                  )
                })}
              </div>
            </TabsContent>

            {categories?.map((categ, index) => {
              return (
                <TabsContent key={index} value={categ?.name?.toLowerCase() + '-' + categ?.id}>
                  <div
                    className=" tw-grid sm:tw-grid-cols-2 md-5:tw-grid-cols-3 tw-gap-5 "
                    key={index}
                  >
                    {ingredients
                      ?.filter((obj) => obj.category_id == categ.id)
                      .map((ingred) => {
                        return (
                          <div key={ingred?.id} data-aos="fade-up" data-aos-duration="1000">
                            <IngredientCard data={ingred} />
                          </div>
                        )
                      })}
                  </div>
                </TabsContent>
              )
            })}
          </Tabs>
        </div>
      </div>
      <div className="container tw-mt-14">
        <MarkdownDisplay>{IntroText?.ingredient_content_2}</MarkdownDisplay>
      </div>
      {/* <div className="d-flex justify-content-center mt-5">
          <ReactPaginate
            breakLabel="..."
            nextLabel={<i className="fa-solid fa-greater-than"></i>}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={ingredients?.last_page}
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
        </div> */}
      {/* Tabs and Cards Section END */}
    </div>
  )
}
