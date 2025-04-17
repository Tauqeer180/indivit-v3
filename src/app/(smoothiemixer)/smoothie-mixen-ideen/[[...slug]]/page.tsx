import HeroBanner from '@/components/common/HeroBanner'
import FeedbackInfoModal from '@/components/Modal/FeedbackInfoModal'
import TasteInfoModal from '@/components/Modal/TasteInfoModal'
import { fetcher } from '@/lib/fetcher'
import React from 'react'
import SmoothieMixer from './components/SmoothieMixer'
import { cookies } from 'next/headers'
// Smoothie Mixer

export async function generateMetadata() {
  // const data = await fetcher('about_us', { cache: true, revalidate: 86400 })
  // let aboutData = data?.data?.length > 0 ? data?.data[0] : {}

  return {
    alternates: { canonical: 'https://indivit.de/smoothie-mixen-ideen' },
    title: `Individuelle Smoothies mixen ohne Mixer – Kreation & Lieferung`,
    description: `Erstelle deinen perfekten Smoothie mit unserem Konfigurator: Zutaten zusammenstellen, Nährwerte berechnen & cremige Kreationen ohne Mixer bestellen. Jetzt ausprobieren!`,
    authors: [{ name: 'Indivit' }],
    // keywords: data?.keywords,
    openGraph: {
      title: `Dein individueller Smoothie: Mixen ohne Küchengeräte | Indivit`,
      description: `Kreiere mit unserem Tool einzigartige Smoothie-Kreationen: Nährwertoptimierung, Geschmacksprognosen & Lieferung. Nutze Food Innovation für DIY-Ernährung & aktuelle Food Trends.`,
    },
    twitter: {
      site: '@indivitsmoothie',
      creator: '@indivitsmoothie',
      title: `Individuelle Smoothies mixen ohne Mixer – Kreation & Lieferung`,
      description: `Erstelle deinen perfekten Smoothie mit unserem Konfigurator: Zutaten zusammenstellen, Nährwerte berechnen & cremige Kreationen ohne Mixer bestellen. Jetzt ausprobieren!`,
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
    revalidate: 86400,
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
    tags: ['smoothieListing'],
  })
  const smoothieRecipes = recipeData?.smoothies || []
  return (
    <div>
      {/* {JSON.stringify(token, smoothieByIdData)} */}
      <TasteInfoModal />
      <FeedbackInfoModal />
      <HeroBanner
        data={{
          title: 'Online Smoothie Mixer',
          description:
            'Ein Smoothie. Unendliche Gestaltungsfreiheit. Kreiere deinen persönlichen Smoothie einfach selbst.',
        }}
        bgImg=" !tw-bg-mixer"
      />
      <SmoothieMixer
        ingredients={ingredients}
        categories={categories}
        smoothieData={smoothieData}
        id={id}
        smoothieByIdData={smoothieByIdData}
        smoothieRecipes={smoothieRecipes}
      />
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
