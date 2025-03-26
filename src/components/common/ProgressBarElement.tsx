import React from 'react'
import ToolTip from './ToolTip'
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
      <div className="row pt-4">
        {ingredient ? (
          <div className="col-6 order-md-0 order-0 col-md-3 d-flex justify-content-md-between justify-content-start align-items-center flx-rdetailed-probar">
            <p className="fw-bold text-capitalize text-truncate" title={name}>
              {name}
            </p>
            <span className=" ms-md-0 ms-3 mb-3">
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
                <img
                  src="/assets/icon/allingredientsinfo.png"
                  alt=""
                  className="img-fluid "
                  width="18"
                  loading="lazy"
                />
              </ToolTip>
            </span>
          </div>
        ) : (
          <div className="col-6 order-md-0 order-0 col-md-2 flx-rdetailed-probar">
            <p className="fw-bold text-capitalize text-truncate" title={name}>
              {name}
            </p>
          </div>
        )}
        <div className="col-12 order-md-1 order-2 col-md-7  flx-rdetailed-probar">
          <div
            className="progress position-relative"
            role="progressbar"
            aria-label="Success example"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className={'progress-bar '}
              style={{
                width: `${parseFloat(value).toFixed(1)}%`,
                backgroundColor: color ? color : 'green',
              }}
            ></div>
          </div>
          <p className="text-green text-center mb-0">
            <small>{suggest == 'no' ? '' : title == null ? '' : title}</small>
          </p>
        </div>
        <div className="col-6 order-md-2 order-1  text-md-start text-end  col-md-2  flx-rdetailed-probar">
          <p className="fw-bold">{label}</p>
        </div>
      </div>
    </>
  )
}
