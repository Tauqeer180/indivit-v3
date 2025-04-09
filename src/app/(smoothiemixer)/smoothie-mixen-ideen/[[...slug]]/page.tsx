import HeroBanner from '@/components/common/HeroBanner'
import FeedbackInfoModal from '@/components/Modal/FeedbackInfoModal'
import TasteInfoModal from '@/components/Modal/TasteInfoModal'
import { fetcher } from '@/lib/fetcher'
import React from 'react'
import SmoothieMixer from './components/SmoothieMixer'
import { cookies } from 'next/headers'
// Smoothie Mixer
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
