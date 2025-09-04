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

      <section id="flx-nav-pils" className="!tw-pt-10 ">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12">
              <ul
                className="nav nav-pills mb-5 justify-content-center flx-pils-btn"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Alle
                  </button>
                </li>

                {categories?.map((categ) => {
                  return (
                    <li key={categ?.id} className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-fruit-tab"
                        data-bs-toggle="pill"
                        data-bs-target={`#pills-ingredient-${categ.id}`}
                        type="button"
                        role="tab"
                        aria-controls={`pills-ingredient-${categ.id}`}
                        aria-selected="false"
                      >
                        {categ.name}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className="tab-content" id="pills-tabContent">
            {/* <!-- All tabs setting --> */}
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabIndex={0}
            >
              <div className="row g-4">
                {ingredients?.map((ingred) => {
                  return (
                    <div
                      key={ingred?.id}
                      className="col-12 col-md-6 col-lg-4"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <IngredientCard data={ingred} />
                    </div>
                  )
                })}
              </div>
            </div>
            {/* <!-- All tabs setting end --> */}
            {/* <!-- ingredients tabs setting --> */}

            {categories?.map((categ) => {
              return (
                <div
                  key={categ.id}
                  className="tab-pane fade"
                  id={`pills-ingredient-${categ.id}`}
                  role="tabpanel"
                  //   aria-labelledby="pills-fruit-tab"
                  tabIndex={categ.id}
                >
                  <div className="row g-4">
                    {ingredients
                      ?.filter((obj) => obj.category_id == categ.id)
                      .map((ingred) => {
                        return (
                          <div
                            key={ingred?.id}
                            className="col-12 col-md-6 col-lg-4"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                          >
                            <IngredientCard data={ingred} />
                          </div>
                        )
                      })}
                  </div>
                </div>
              )
            })}
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
      </section>
      {/* Tabs and Cards Section END */}
    </div>
  )
}
