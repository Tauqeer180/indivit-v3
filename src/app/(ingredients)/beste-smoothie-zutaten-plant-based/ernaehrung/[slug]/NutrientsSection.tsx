import ProgressBarElement from '@/components/common/ProgressBarElement'
import { formatToGerman1 } from '@/utils/germanFormat'
import React from 'react'

export default function NutrientsSection({ data, ingVal }) {
  console.log('Vital Substance ', data?.other_vital_substance)
  return (
    <div>
      <ProgressBarElement
        name="vitamine"
        value={
          ingVal ? (data?.vitamins < 0.1 ? 2.0 : (data?.vitamins / 5.0) * 100) : data?.vitamins
        }
        label={
          ingVal
            ? `${formatToGerman1(data?.vitamins)} / ${formatToGerman1(5.0)}`
            : `${formatToGerman1(data?.vitamins)} g / ${formatToGerman1(5.0)}`
        }
        color="green"
        ingredient={true}
        handleIngredientView={data}
        suggest="no"
      />
      <ProgressBarElement
        name="mineralstoffe"
        value={
          ingVal ? (data?.minerals < 0.1 ? 2.0 : (data?.minerals / 5.0) * 100) : data?.minerals
        }
        label={
          ingVal
            ? `${formatToGerman1(data?.minerals)} / ${formatToGerman1(5.0)}`
            : `${formatToGerman1(data?.minerals)} g ${formatToGerman1(5.0)}`
        }
        color="green"
        handleIngredientView={data}
        ingredient={true}
        suggest="no"
      />
      <ProgressBarElement
        name="ballaststoffe"
        value={ingVal ? (data?.fibers < 0.1 ? 2.0 : (data?.fibers / 5.0) * 100) : data?.fibers}
        label={
          ingVal
            ? `${formatToGerman1(data?.fibers)} / ${formatToGerman1(5.0)}`
            : `${formatToGerman1(data?.fibers)} g / ${formatToGerman1(5.0)}`
        }
        color="green"
        ingredient={true}
        handleIngredientView={data}
        suggest="no"
      />
      <ProgressBarElement
        name="weitere vitalstoffe"
        value={
          ingVal
            ? data?.other_vital_substance < 0.1
              ? 2.0
              : (data?.other_vital_substance / 5.0) * 100
            : data?.other_vital_substance
        }
        label={
          ingVal
            ? `${formatToGerman1(data?.other_vital_substance)} / ${formatToGerman1(5.0)}`
            : `${formatToGerman1(data?.other_vital_substance)} g / ${formatToGerman1(5.0)}`
        }
        color="green"
        ingredient={true}
        handleIngredientView={data}
        suggest="no"
      />
      <ProgressBarElement
        name="verträglichkeit"
        // fructose
        value={
          ingVal
            ? data?.fructose_tolerence < 0.1
              ? 2.0 // == 0.1/5.0*100
              : (data?.fructose_tolerence / 5.0) * 100
            : data?.fructose_tolerence
        }
        label={
          ingVal
            ? `${formatToGerman1(data?.fructose_tolerence)} / ${formatToGerman1(5.0)}`
            : `${formatToGerman1(data?.fructose_tolerence)} g / ${formatToGerman1(5.0)}`
        }
        color="green"
        ingredient={true}
        handleIngredientView={data}
        suggest="no"
      />
    </div>
  )
}
