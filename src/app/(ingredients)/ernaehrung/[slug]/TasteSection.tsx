'use client'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import ProgressBarElement from '@/components/common/ProgressBarElement'
import { formatToGerman1 } from '@/utils/germanFormat'
import { fetcher } from '@/lib/fetcher'

export default function TasteSection({ data, basiColor, suggest }) {
  const { data: SmoothieRecipeLevelData } = useQuery({
    queryKey: ['SmoothieRecipeLevelListing'],
    queryFn: () => fetcher('smoothie_recipe_level'),
  })
  const Ingredientlevel = SmoothieRecipeLevelData?.data?.data

  const getTitle = (name, tasteType) => {
    const tasteObj = Ingredientlevel?.find((d) => d?.recipe_tastes?.toLowerCase() == tasteType)
    return data?.[name] < tasteObj?.much_less
      ? 'Sehr wenig'
      : data?.[name] < tasteObj?.less
        ? 'Etwas weniger'
        : data?.[name] < tasteObj?.medium
          ? 'Genau richtig'
          : data?.[name] < tasteObj?.much
            ? 'Etwas stärker'
            : 'Sehr stark'
  }
  const getColor = (name, tasteType) => {
    const tasteObj = Ingredientlevel?.find((d) => d?.recipe_tastes?.toLowerCase() == tasteType)
    return data?.[name] < tasteObj?.much_less
      ? tasteObj?.much_less_color
      : data?.[name] < tasteObj?.less
        ? tasteObj?.less_color
        : data?.[name] < tasteObj?.medium
          ? tasteObj?.medium_color
          : data?.[name] < tasteObj?.much
            ? tasteObj?.high_color
            : tasteObj?.much_more_color
  }
  const sweetColor = getColor('sweet', 'sweet')
  const SourColor = getColor('sauer', 'sour')
  const bitterColor = getColor('bitter', 'bitter')
  const intensityColor = getColor('intensity', 'intensity')
  const creamyColor = getColor('creaming', 'creamy')
  const sweetTitle = getTitle('sweet', 'sweet')
  const sourTitle = getTitle('sauer', 'sour')
  const bitterTitle = getTitle('bitter', 'bitter')
  const intensityTitle = getTitle('intensity', 'intensity')
  const creamyTitle = getTitle('creaming', 'creamy')

  return (
    <div>
      <ProgressBarElement
        name="süß"
        value={data?.sweet == 0 ? 0.1 * 20 : data?.sweet * 20}
        label={`${formatToGerman1(
          data?.sweet > 5.0 ? 5.0 : data?.sweet
        )} / ${formatToGerman1(5.0)}`}
        // if Value Exceeds Convert it to 5.0 Ref 2024-01-27 page 4
        color={basiColor ? basiColor : sweetColor ? sweetColor : '#81CA00'}
        suggest={suggest == 'no' ? suggest : ''}
        ingredient={true}
        tasteTool={true}
        title={sweetTitle}
      />
      <ProgressBarElement
        name="sauer"
        value={data?.sauer == 0 ? 0.1 * 20 : data?.sauer * 20}
        label={`${formatToGerman1(
          data?.sauer > 5.0 ? 5.0 : data?.sauer
        )} / ${formatToGerman1(5.0)}`}
        color={basiColor ? basiColor : SourColor ? SourColor : '#81CA00'}
        suggest={suggest == 'no' ? suggest : ''}
        ingredient={true}
        tasteTool={true}
        title={sourTitle}
      />
      <ProgressBarElement
        name="bitter"
        value={data?.bitter == 0 ? 0.1 * 20 : data?.bitter * 20}
        label={`${formatToGerman1(
          data?.bitter > 5.0 ? 5.0 : data?.bitter
        )} / ${formatToGerman1(5.0)}`}
        color={basiColor ? basiColor : bitterColor ? bitterColor : '#81CA00'}
        suggest={suggest == 'no' ? suggest : ''}
        ingredient={true}
        tasteTool={true}
        title={bitterTitle}
      />
      <ProgressBarElement
        name="intensiv"
        value={data?.intensity == 0 ? 0.1 * 20 : data?.intensity * 20}
        label={`${formatToGerman1(
          data?.intensity > 5.0 ? 5.0 : data?.intensity
        )} / ${formatToGerman1(5.0)}`}
        color={basiColor ? basiColor : intensityColor ? intensityColor : '#81CA00'}
        suggest={suggest == 'no' ? suggest : ''}
        ingredient={true}
        tasteTool={true}
        title={intensityTitle}
      />
      <ProgressBarElement
        name="cremig"
        value={data?.creaming == 0 ? 0.1 * 20 : data?.creaming * 20}
        label={`${formatToGerman1(
          data?.creaming > 5.0 ? 5.0 : data?.creaming
        )} / ${formatToGerman1(5.0)}`}
        color={basiColor ? basiColor : creamyColor ? creamyColor : '#81CA00'}
        suggest={suggest == 'no' ? suggest : ''}
        ingredient={true}
        tasteTool={true}
        title={creamyTitle}
      />
    </div>
  )
}
