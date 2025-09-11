import HeroBanner from '@/components/common/HeroBanner'
import FeedbackInfoModal from '@/components/Modal/FeedbackInfoModal'
import TasteInfoModal from '@/components/Modal/TasteInfoModal'
import { fetcher } from '@/lib/fetcher'
import React from 'react'
import SmoothieMixer from './components/SmoothieMixer'
import { cookies } from 'next/headers'
import { BreadCrumb } from '@/components/common/Common'
import IntroText from '@/constant/IntroText.json'
import { MarkdownDisplay } from '@/components/common/MarkdownDisplay'
import { getSEOData } from '@/services/common'
import { SWRKeys } from '@/constant/SWRKeys'
import { SEOSchema } from '@/constant/SEOSchema'
// Smoothie Mixer

export async function generateMetadata() {
  const { data } = await getSEOData(SWRKeys?.SmoothieMixer)

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
export default async function page({ params }) {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value || ''

  const { slug = [] } = params
  let [id] = slug
  // const {
  //   isLoading: ingredientLoading,
  //   error: ingredientError,
  //   data: ingredientData,
  // } = useQuery({
  //   queryKey: ["ingredientListing"],
  //   queryFn: getIngredients,
  // });
  let ingredientData = await fetcher('get_ingredient', {
    cache: true,
    revalidate: 3600,
    tags: ['ingredientListing'],
  })
  let ingredients = ingredientData?.ingredient
  let categories = ingredientData?.category

  // r ==recipe == smoothie by ID
  let smoothieByIdData =
    id &&
    (await fetcher(`r/${id}`, {
      token,
      cache: true,
      tags: ['smoothieById', id],
    }))
  let smoothieData = smoothieByIdData?.smoothie
  let tempIngredients = smoothieData?.smoothie_ingredient?.map((d) => {
    let {
      sweet,
      sauer,
      bitter,
      creaming,
      intensity,
      name,
      id,
      ingredient_filling,
      ingredient_filling_types_id,
      ingredient_color,
      picture,
      ingredient_category,
      ingredient_status,
      order_number,
    } = d?.ingredient
    return {
      ...d,
      sweet,
      sauer,
      bitter,
      creaming,
      intensity,
      name,
      id,
      picture,
      ingredient_category,
      ingredient_status,
      order_number,
      filling_index: ingredient_filling.findIndex((m) =>
        parseFloat(d?.factor_value) > 0
          ? parseFloat(m?.factor) == parseFloat(d?.factor_value)
          : parseFloat(m?.fixed) == parseFloat(d?.fixed_value)
      ),
      ingredient_filling,
      ingredient_filling_types_id,
      ingredient_color,
    }
  })
  let recipeData = await fetcher(`get_smoothie`, {
    token,
    // cache: true,
    tags: ['smoothieListing'],
  })
  const smoothieRecipes = recipeData?.smoothies || []
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [...SEOSchema?.Common?.schema, ...SEOSchema?.SmoothieMixer?.schema],
            null,
            2
          ),
        }}
      />
      {/* {JSON.stringify(token, smoothieByIdData)} */}
      <TasteInfoModal />
      <FeedbackInfoModal />
      <HeroBanner
        data={{
          title: 'Online Smoothie Mixer',
          // description: IntroText?.mixer_content_1,
          // markdown: true,
        }}
        breadCrumb={<BreadCrumb name="Online Smoothie Mixer" />}
        bgImg=" !tw-bg-mixer"
      />
      <div className="tw-pt-10 !tw-h-auto   container">
        <MarkdownDisplay className="tw-text-justify pb-2">
          {IntroText?.mixer_content_1}
        </MarkdownDisplay>
      </div>
      <SmoothieMixer
        ingredients={ingredients}
        categories={categories}
        smoothieData={smoothieData}
        id={id}
        smoothieByIdData={smoothieByIdData}
        smoothieRecipes={smoothieRecipes}
      />
      <div className="container">
        <MarkdownDisplay>{IntroText?.mixer_content_2}</MarkdownDisplay>
      </div>
      {/* {JSON.stringify(ingredientData)} */}
      {/* Smoothie Mixer
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}
      {/* {JSON.stringify(smoothieData)} */}
    </div>
  )
}
