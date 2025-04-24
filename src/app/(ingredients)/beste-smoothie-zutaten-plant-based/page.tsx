import { IngredientCard } from '@/components/Cards'
import HeroBanner from '@/components/common/HeroBanner'
import { MarkdownDisplay } from '@/components/common/MarkdownDisplay'
import { fetcher } from '@/lib/fetcher'
import Link from 'next/link'
import React from 'react'
import IntroText from '@/constant/IntroText.json'
// Ingredients page
const BreadCrumb = ({ name }) => {
  return (
    <nav aria-label="breadcrumb" className="px-0">
      <ol className="breadcrumb lg:tw-justify-center">
        <li className="breadcrumb-item">
          <Link href="/">Home</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {name}
        </li>
      </ol>
    </nav>
  )
}
async function getIngredientsData() {
  const data = await fetcher('get_ingredient', { cache: true, revalidate: 3600 })
  return data
}
export async function generateMetadata() {
  // const data = await fetcher('about_us', { cache: true, revalidate: 86400 })
  // let aboutData = data?.data?.length > 0 ? data?.data[0] : {}

  return {
    alternates: { canonical: 'https://indivit.de/beste-smoothie-zutaten-plant-based' },
    title: `Entdecke die perfekte Balance aus Obst, Gemüse & Superfoods für deine Smoothies. Mit Tipps für pflanzliche Ernährung & Rohkost-Rezepte natürlich essen.`,
    description: `Erstelle deinen perfekten Smoothie mit unserem Konfigurator: Zutaten zusammenstellen, Nährwerte berechnen & cremige Kreationen ohne Mixer bestellen. Jetzt ausprobieren!`,
    authors: [{ name: 'Indivit' }],
    // keywords: data?.keywords,
    openGraph: {
      title: `Smoothie Zutaten Meisterklasse: Von Obst bis Rohkost - Dein Guide für natürliche Ernährung`,
      description: `Lerne die 7 Schlüssel-Kategorien für perfekte Smoothies kennen – von Obst bis Superfoods. Entdecke Tipps für natürliche Ernährung, optimale Konsistenz und gesunde Mahlzeitenersätze. Ideal für Rohkost-Fans und alle, die ihre Ernährung pflanzenbasiert gestalten möchten.`,
    },
    twitter: {
      site: '@indivitsmoothie',
      creator: '@indivitsmoothie',
      title: `Entdecke die perfekte Balance aus Obst, Gemüse & Superfoods für deine Smoothies. Mit Tipps für pflanzliche Ernährung & Rohkost-Rezepte natürlich essen.`,
      description: `Erstelle deinen perfekten Smoothie mit unserem Konfigurator: Zutaten zusammenstellen, Nährwerte berechnen & cremige Kreationen ohne Mixer bestellen. Jetzt ausprobieren!`,
    },
  }
}

export default async function Ingredients() {
  const res = await getIngredientsData()
  const ingredients = res?.ingredient
  const categories = res?.category

  return (
    <div>
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
