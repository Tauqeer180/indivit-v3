import React from 'react'
import ToolTip from './ToolTip'
import { InfoIcon } from 'lucide-react'
// import "rc-tooltip/assets/bootstrap.css";

interface ProgressBarElementProps {
  name?: string
  value: number | string
  label: number | string
  color: string
  ingredient: boolean
  suggest: string
  title?: string
  tasteTool?: any
  handleIngredientView?: any
}

export default function ProgressBarElement({
  name,
  value,
  label,
  color,
  ingredient,
  handleIngredientView,
  suggest,
  tasteTool,
  title,
}: ProgressBarElementProps) {
  let customize
  if (tasteTool) {
    if (name == 'süß') {
      customize =
        'Süße verstärkt die Aromen deiner Kreation. Allerdings kehrt sich dieser Effekt ab einem gewissen Grad um.'
    } else if (name == 'bitter') {
      customize =
        'Bitterstoffe verleihen deinem Smoothie Gehalt und Kraft. Aber zu viele davon schmecken in der Regel herb und kratzend.'
    } else if (name == 'sauer') {
      customize =
        'Eine spürbare Säure stützt die Aromen im Smoothie und lässt ihn lebendig und frisch daherkommen. Zu viel Säure wird allerdings oft als aggressiv und unangenehm empfunden.'
    } else if (name == 'intensiv') {
      customize =
        'Die Intensität beschreibt die Stärke der enthaltenen Aromen. Dies kann zwischen Quellwasser und Ingwer variieren.'
    } else if (name == 'cremig') {
      customize =
        'Das Spektrum der Cremigkeit reicht von dünnflüssig und wässrig bis zähflüssig und massig. Wie du deinen Smoothie am liebsten magst entscheidest du selbst.'
    }
  }
  let ingredientData
  if (name == 'vitamine') {
    ingredientData = handleIngredientView?.vitamins_description
  } else if (name == 'mineralstoffe') {
    ingredientData = handleIngredientView?.mineral_description
  } else if (name == 'ballaststoffe') {
    // fiber
    ingredientData = undefined
  } else if (name == 'weitere vitalstoffe') {
    ingredientData = handleIngredientView?.other_vital_substance_description
  } else if (name == 'verträglichkeit') {
    // fructose
    ingredientData = (
      <div>
        {handleIngredientView?.fructose_g_100g} <br />
        {handleIngredientView?.fructose_glucose}
      </div>
    )
  }
  return (
    <>
      <div className="tw-grid tw-grid-cols-12 tw-pt-6 tw-gap-2 tw-items-center">
        {ingredient ? (
          <div className="tw-col-span-6 sm:tw-col-span-3 md:tw-col-span-6 xl:tw-col-span-3 tw-order-1 xl:tw-order-1  tw-flex tw-justify-start sm:tw-justify-between md:tw-justify-start xl:tw-justify-between tw-items-center flx-rdetailed-probar tw-gap-1">
            <p className="fw-bold tw-capitalize tw-truncate tw-mb-0" title={name}>
              {name}
            </p>
            <span className="">
              <ToolTip
                title={name}
                label={
                  customize
                    ? customize
                    : ingredientData == undefined
                      ? 'Keine weiteren Informationen verfügbar'
                      : ingredientData
                }
              >
                {/* <InfoIcon fill="red" stroke="green" /> */}
                <img
                  src="/assets/icon/allingredientsinfo.png"
                  alt=""
                  className="img-fluid tw-invert tw-opacity-90"
                  width="18"
                  loading="lazy"
                />
              </ToolTip>
            </span>
          </div>
        ) : (
          <div className="tw-col-span-6 sm:tw-col-span-2 md:tw-col-span-6 xl:tw-col-span-2 xl:order-1 tw-order-1 flx-rdetailed-probar">
            <p className="fw-bold text-capitalize text-truncate" title={name}>
              {name}
            </p>
          </div>
        )}
        <div className="tw-col-span-12 sm:tw-col-span-7 md:tw-col-span-12 xl:tw-col-span-7 xl:tw-order-2 tw-order-3   flx-rdetailed-probar">
          <div
            className="progress position-relative !tw-rounded-full !tw-h-5"
            role="progressbar"
            aria-label="Success example"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className={'progress-bar tw-h-5 tw-rounded-full'}
              style={{
                width: `${parseFloat(value).toFixed(1)}%`,
                backgroundColor: color ? color : '#81CA00',
              }}
            ></div>
          </div>
          <p className="text-green text-center mb-0">
            <small>{suggest == 'no' ? '' : title == null ? '' : title}</small>
          </p>
        </div>
        <div className="tw-col-span-6 sm:tw-col-span-2 md:tw-col-span-6 xl:tw-col-span-2 tw-order-2 sm:tw-order-3 md:tw-order-2 xl:tw-order-3   tw-text-end sm:tw-text-start md:tw-text-end xl:tw-text-start  flx-rdetailed-probar">
          <p className="tw-font-bold tw-mb-0">{label}</p>
        </div>
      </div>
    </>
  )
}
