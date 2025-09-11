import moment from 'moment'

export const modifyRecipeSchema = (data, newImages = []) => {
  const {
    energy_per_250ml_in_kcal,
    fat_per_250ml_in_g,
    carbohydrate_per_250ml_in_g,
    sugar_per_250ml_in_g,
    protein_per_250ml_in_g,
    fiber_per_250ml_in_g,
    saturated_fat_per_250ml_in_g,
  } = data?.smoothie_nutrients
  return [
    {
      '@context': 'http://schema.org/',
      '@type': 'Recipe',
      name: data?.name,
      image: newImages,
      recipeCategory: 'Drink',
      prepTime: 'PT9M',
      cookTime: 'PT0M',
      totalTime: 'PT9M',
      recipeYield: '1 Portion (= 250ml)',
      datePublished: moment(data?.created_at).format('YYYY-MM-DD'),
      description: data?.meta_description,
      keywords: data?.keywords,
      recipeCuisine: 'German',
      author: {
        '@type': 'Organization',
        name: 'Indivit',
      },
      nutrition: {
        '@type': 'NutritionInformation',
        servingSize: '1 Portion (= 250ml)',
        calories: `${parseFloat(energy_per_250ml_in_kcal)?.toFixed(1)} calories`,
        fatContent: `${parseFloat(fat_per_250ml_in_g)?.toFixed(1)} g`,
        saturatedFatContent: `${parseFloat(saturated_fat_per_250ml_in_g)?.toFixed(1)} g`,
        carbohydrateContent: `${parseFloat(carbohydrate_per_250ml_in_g)?.toFixed(1)} g`,
        sugarContent: `${parseFloat(sugar_per_250ml_in_g)?.toFixed(1)} g`,
        fiberContent: `${parseFloat(fiber_per_250ml_in_g)?.toFixed(1)} g`,
        proteinContent: `${parseFloat(protein_per_250ml_in_g)?.toFixed(1)} g`,
      },
      recipeIngredient: data?.smoothie_ingredient?.map((i) => i?.ingredient?.name),
      recipeInstructions: [
        {
          '@type': 'HowToStep',
          name: 'Vorbereitung',
          text: 'Himbeeren in Sieb unter kaltem Wasser abspülen. Brokkoli in blenderfähige Stücke zerteilen. Avocado schälen und würfeln.',
          image: 'TBA',
        },
        {
          '@type': 'HowToStep',
          name: 'Schichtweise einfüllen',
          text: 'Kokoswasser und Quellwasser zuerst. Avocado und Himbeeren folgen. Brokkoli zuoberst platzieren.',
          image: 'TBA',
        },
        {
          '@type': 'HowToStep',
          name: 'Mixprozess',
          text: 'Hochleistungsmixer ab 1.000 Watt verwenden. 60 Sekunden bei 30.000 U/min mixen. Bei Bedarf mit Quellwasser auf 250ml auffüllen.',
          image: 'TBA',
        },
        {
          '@type': 'HowToStep',
          name: 'Serviervorschlag',
          text: 'Sofort in gekühltem Glas genießen. Optional mit frischer Minze garnieren.',
          image: 'TBA',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: Number(data?.ratings) || 0,
        ratingCount: Number(data?.counts) || 0,
      },
      suitableForDiet: [
        'https://schema.org/LowCalorieDiet',
        'https://schema.org/LowFatDiet',
        'https://schema.org/DiabeticDiet',
        'https://schema.org/GlutenFreeDiet',
        'https://schema.org/VeganDiet',
        'https://schema.org/VegetarianDiet',
      ],
    },
  ]
}
