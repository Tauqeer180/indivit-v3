import { IngredientCard, RecipeCard } from '@/components/Cards'
import { BreadCrumb, TextSkelton } from '@/components/common/Common'
import { baseURL, fetcher } from '@/lib/fetcher'
import Link from 'next/link'
import AllNutrientsPopup from './AllNutrientsPopup'
import IngredientBasicInfoSection from './IngredientBasicInfoSection'
import NutrientsSection from './NutrientsSection'
import TasteSection from './TasteSection'
import { MarkdownDisplay } from '@/components/common/MarkdownDisplay'
import HeroBanner from '@/components/common/HeroBanner'

async function getIngredientById(slug: string): Promise<any> {
  let data
  data = await fetcher(`get_ingredient_slug/${slug}`, { cache: true, revalidate: 3600 * 12 })
  if (!data?.data?.ingredients) {
    data = await fetcher(`get_ingredient/${slug}`, { cache: true, revalidate: 3600 * 12 })
  }
  return data
}
export async function generateMetadata({ params }) {
  const { slug } = params

  const res = await getIngredientById(slug)
  const data = res?.data?.ingredients

  return {
    alternates: {
      canonical: 'https://indivit.de/ernaehrung/' + slug,
    },
    title: data?.meta_title || `Indivit | Ingredient | ${data?.name}`,
    description: data?.meta_description,
    authors: [{ name: data?.author_name }],
    robots: 'index, follow',
    keywords: data?.keywords,
    openGraph: {
      title: data?.og_title || `Indivit | ${data?.name}`,
      description: data?.og_description,
      image: data?.picture
        ? `${baseURL}/integredient/${data?.picture}`
        : 'assets/icon/img-icon.png',
      url: 'https://indivit.de/ernaehrung/' + slug,
      site_name: 'Indivit',
      locale: 'de_DE',
    },
    article: {
      published_time: data?.created_at,
      modified_time: data?.updated_at,
      authors: [data?.author_name],
      tags: data?.keywords,
    },
    twitter: {
      site: '@indivitsmoothie',
      creator: '@indivitsmoothie',
      title: data?.meta_title || `Indivit | Ingredient | ${data?.name}`,
      description: data?.meta_description,
      card: 'summary_large_image',
      image: data?.picture
        ? `${baseURL}/integredient/${data?.picture}`
        : 'assets/icon/img-icon.png',
    },
  }
}

export const revalidate = 72000
export const dynamicParams = true // or false, to 404 on unknown paths
async function getIngredientsData() {
  const data = await fetcher('get_ingredient', { cache: true, revalidate: 3600 })
  return data
}
export async function generateStaticParams() {
  const posts = await getIngredientsData()
  // console.log('Posts in generateStaticParams: ', JSON.stringify(posts?.ingredient))
  return posts?.ingredient?.map((post: any) => ({
    slug: post?.slug || post?.unique_id,
  }))
}

export default async function Page({ params }) {
  const { slug } = params
  const res = await getIngredientById(slug)
  const data = res?.data?.ingredients

  const relativeIngredients = res?.data?.relative_ingredients
  const relativeSmoothies = res?.data?.relative_smoothies

  let parsedSchema = {}

  try {
    parsedSchema = JSON.parse(data.seo_scheme || '{}')
  } catch (error) {
    console.error('Invalid JSON in data.seo_scheme:', error)
  }
  return (
    <div>
      {data?.seo_scheme && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(parsedSchema, null, 2).replace(/</g, '\\u003c'),
          }}
        />
      )}
      {/* {JSON.stringify(data?.seo_scheme)} */}
      <AllNutrientsPopup data={data?.nutrients} />
      <div className="tw-bg-green tw-pb-10">
        <HeroBanner
          data={{ title: data?.key_factor_headline }}
          breadCrumb={
            <BreadCrumb
              name={data?.name}
              list={[{ name: 'Smoothie Zutaten', link: '/beste-smoothie-zutaten-plant-based' }]}
            />
          }
        />
        <div className="container">
          <div className="tw-bg-white shadow-theme-lg tw-shadow-[#ccc] tw-py-10 md:tw-py-[60px] tw-rounded-3xl tw-mt-10 tw-relative tw-z-10">
            <section>
              <div className="container">
                <div className="">
                  <IngredientBasicInfoSection data={data} loading={!data} />
                </div>
              </div>
              <div className="container tw-py-10">
                {data?.ingredient_description && (
                  <MarkdownDisplay>{data?.ingredient_description || ''}</MarkdownDisplay>
                )}
              </div>
            </section>

            {/* <!-- progressbar section --> */}
            <section>
              <div className="container">
                <div className="tw-grid md:tw-grid-cols-2 tw-gap-5">
                  <div className="tw-bg-[#f8f9fa] tw-rounded-2.5xl tw-p-5 ">
                    <div className="tw-flex tw-items-center  tw-justify-between tw-text-dark">
                      <div className="">
                        <span className="tw-text-2xl tw-font-extrabold">Was steckt drin?</span>
                        <span className="tw-text-base tw-font-semibold"> (pro 250ml) </span>
                      </div>
                      <div className="">
                        <button
                          type="button"
                          className="btn btn-link btn-solid-success-color ps-0"
                          data-bs-toggle="modal"
                          data-bs-target="#nutrientsModal"
                          data-bs-whatever="@getbootstrap"
                        >
                          Durchschnittliche Nährwerte
                        </button>
                      </div>
                    </div>
                    <NutrientsSection data={data} ingVal={true} />
                  </div>
                  <div className="tw-bg-[#f8f9fa] tw-rounded-2.5xl tw-p-5 ">
                    <h3 className="tw-text-2xl tw-font-extrabold">Wie schmeckt’s?</h3>
                    <TasteSection data={data} suggest="no" basiColor={'#81CA00'} />
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- progressbar section --> */}
          </div>
        </div>
      </div>
      {/* <!-- simple text --> */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>
                {data?.name} stellt sich selbst vor{' '}
                {data?.external_link && (
                  <a
                    className="p-2 fs-4"
                    href={data?.external_link}
                    target="_blank"
                    rel="noopener"
                    title="External Refernce"
                  >
                    <i className="fas fa-link text-theme-success"></i>
                  </a>
                )}{' '}
              </h3>
              {data?.bottom_detail && (
                <MarkdownDisplay>{data?.bottom_detail || ''}</MarkdownDisplay>
              )}

              {/* <p>{data?.ingredient_category?.detail}</p> */}
            </div>
          </div>
        </div>
      </section>
      {/* Simple Text End */}

      {/* Other Ingredients Start */}

      <section className="">
        <section className="tw-bg-green tw-py-10 md:tw-py-14">
          <div className=" container">
            {relativeSmoothies?.length > 0 && (
              <h3
                className="tw-text-5xl tw-font-extrabold "
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Rezepte mit {data?.name}
              </h3>
            )}
            {/* {JSON.stringify(relativeSmoothies[0])} */}
            <div className="tw-grid sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-5 tw-pt-4">
              {relativeSmoothies?.slice(0, 6)?.map((smooth) => {
                return (
                  <div
                    key={smooth?.smoothie_id}
                    className=""
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <RecipeCard
                      isButton={true}
                      data={smooth?.smoothie}
                      actionTitle="Mehr anzeigen"
                      action={`/rezepte/${smooth?.smoothie?.slug || smooth?.smoothie?.unique_id}`}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </section>
        <section className="tw-py-10 md:tw-py-14">
          {/* <!-- Ingredients --> */}
          <div className="container">
            <h3 className="tw-text-5xl tw-font-extrabold ">Weitere Zutaten...</h3>
            <div className="tw-grid sm:tw-grid-cols-2 lg:tw-grid-cols-3  tw-gap-5 tw-pt-4">
              {relativeIngredients?.map((ingred) => {
                return (
                  <div key={ingred?.id} className="" data-aos="fade-up" data-aos-duration="1000">
                    <IngredientCard data={ingred} className="!tw-bg-light-orange" />
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}
