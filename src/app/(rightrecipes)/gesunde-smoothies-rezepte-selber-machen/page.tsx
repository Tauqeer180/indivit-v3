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
    <div>
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
      <section id="flx-hero-section" className="max-xl:after:!tw-bg-none max-lg:before:!tw-bg-none">
        <div className="container md:!tw-max-w-3xl tw-mx-auto">
          <div className="flx-hero-about md:!tw-pt-6 lg:!tw-pt-20 sm:!tw-pt-5 !tw-pt-3 !tw-h-auto">
            <h1 className="text-center pb-2">FsmoothieLoadinginde dein Lieblingsrezept</h1>
            <div className="tw-hidden lg:tw-block">
              <BreadCrumb name={'Smoothie Rezepte'} />
            </div>
          </div>
        </div>
      </section>
      <div className="container tw-block lg:tw-hidden">
        <BreadCrumb name={'Smoothie Rezepte'} />
      </div>
      <div className="md:!tw-max-w-3xl tw-mx-auto tw-pt-14 !tw-h-auto max-md:!tw-px-4">
        <p className="text-center pb-2">
          Unsere Smoothie-Rezepte sind nicht nur köstlich, sondern auch eine fantastische
          Möglichkeit, eine schnelle und gesunde Mahlzeit zu sich zu nehmen. Egal, ob Du ein
          Frühstück für unterwegs, einen Snack nach dem Training oder einfach nur eine erfrischende
          Leckerei suchst, es gibt ein Smoothie-Rezept für jede Gelegenheit. Du kannst jedes Rezept
          natürlich ganz individuell an deinen Geschmack anpassen – öffne es einfach mit dem Online
          Smoothie Mixer.
        </p>
      </div>
      <section id="flx-nav-pils" className="!tw-pt-10 ">
        <div className="container-fluid custom-container">
          <div className="row">
            <div className="col-12">
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
                {categories?.map((categ, index) => {
                  return (
                    <li className="nav-item" role="presentation" key={index}>
                      <button
                        className="nav-link text-capitalize"
                        //id="pills-fruit-tab"
                        data-bs-toggle="pill"
                        data-bs-target={`#pills-smoothies-${categ.id}`}
                        type="button"
                        role="tab"
                        aria-controls={`pills-smoothies-${categ.id}`}
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
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" tabIndex={0}>
              <div className="row">
                {smoothies?.length == 0
                  ? Array.from(Array(8))?.map((box, index) => {
                      return (
                        <div key={index} className="col-12 col-md-4">
                          <div className="p-3" data-aos="fade-up" data-aos-duration="1000">
                            <SkeltonCard />
                          </div>
                        </div>
                      )
                    })
                  : smoothies?.map((smooth, index) => {
                      return (
                        <div key={index} className="col-12 col-md-4 p-3">
                          <div className="" data-aos="fade-up" data-aos-duration="1000">
                            <RecipeCard
                              isButton={true}
                              data={smooth}
                              actionTitle="Mehr anzeigen"
                              action={`/rezepte/${smooth?.slug || smooth?.unique_id}`}
                            />
                          </div>
                        </div>
                      )
                    })}
              </div>
              {/* <!------Our boxes end------> */}
            </div>
            {/* <!-- All tabs setting end --> */}
            {/* <!-- fruit tabs setting --> */}
            {categories?.map((categ, index) => {
              return (
                <div
                  key={index}
                  className="tab-pane fade"
                  id={`pills-smoothies-${categ.id}`}
                  role="tabpanel"
                  //   aria-labelledby="pills-fruit-tab"
                  tabIndex={categ.id}
                >
                  <div className="row g-4">
                    {smoothies
                      ?.filter((obj) =>
                        obj?.smoothie_categories?.some(
                          (categSub) => categSub?.category_id == categ?.id
                        )
                      )
                      .map((smooth, index) => {
                        return (
                          <div className="col-12 col-md-4" key={index}>
                            <div className="p-3" data-aos="fade-up" data-aos-duration="1000">
                              <RecipeCard
                                data={smooth}
                                isButton={true}
                                actionTitle="Mehr anzeigen"
                                action={`/rezepte/${smooth?.slug || smooth?.unique_id}`}
                              />
                            </div>
                          </div>
                        )
                      })}
                  </div>
                </div>
              )
            })}

            {/* <!--Caffeine tabs setting end --> */}
          </div>

          <div className="container">
            <MarkdownDisplay>{IntroText?.recipe_content_2}</MarkdownDisplay>
          </div>
        </div>
      </section>
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
