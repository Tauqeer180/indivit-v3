import { IngredientCard, RecipeCard } from '@/components/Cards'
import { TextSkelton } from '@/components/common/Common'
import { baseURL, fetcher } from '@/lib/fetcher'
import Link from 'next/link'
import AllNutrientsPopup from './AllNutrientsPopup'
import IngredientBasicInfoSection from './IngredientBasicInfoSection'
import NutrientsSection from './NutrientsSection'
import TasteSection from './TasteSection'
import { MarkdownDisplay } from '@/components/common/MarkdownDisplay'

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
      <section id="flx-hero-rdetailed">
        <div className="container">
          <div className="row">
            <nav aria-label="breadcrumb" className="px-0">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="/beste-smoothie-zutaten-plant-based">Smoothie Zutaten</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {data ? data?.name : <TextSkelton />}
                </li>
              </ol>
            </nav>
          </div>
          <div className="pt-0 pt-md-5">
            <IngredientBasicInfoSection data={data} loading={!data} />
          </div>
        </div>
      </section>
      <div className="container">
        {data?.ingredient_description && (
          <MarkdownDisplay>{data?.ingredient_description || ''}</MarkdownDisplay>
        )}
      </div>

      {/* <!-- progressbar section --> */}
      <section id="flx-idetailed-probr">
        <div className="container">
          <div className="row d-flex g-5">
            <div className="col-12  col-md-6 ">
              <div className="row">
                <div className="col-6 col-md-9">
                  <span className="fs-3 fw-bold">Was steckt drin?</span>
                  <span className="fw-normal fs-6"> (pro 250ml) </span>
                </div>
                <div className="col-6 col-md-3">
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
            <div className="col-12  col-md-6 ">
              <h3>Wie schmeckt’s?</h3>
              <TasteSection data={data} suggest="no" basiColor={'green'} />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- progressbar section --> */}

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

      <section id="flx-other-ingredients">
        <div className="container">
          <div className="mb-5">
            {relativeSmoothies?.length > 0 && (
              <h3 className=" " data-aos="fade-up" data-aos-duration="1000">
                Contained in...
              </h3>
            )}
            {/* {JSON.stringify(relativeSmoothies[0])} */}
            <div className="row pt-4">
              {relativeSmoothies?.slice(0, 6)?.map((smooth) => {
                return (
                  <div
                    key={smooth?.smoothie_id}
                    className="col-12 col-md-4"
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

          {/* <!-- Ingredients --> */}
          <div className="">
            <h3>Weitere Zutaten...</h3>
            <div className="row pt-4 g-4">
              {relativeIngredients?.map((ingred) => {
                return (
                  <div
                    key={ingred?.id}
                    className="col-12 col-md-4"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <IngredientCard data={ingred} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
