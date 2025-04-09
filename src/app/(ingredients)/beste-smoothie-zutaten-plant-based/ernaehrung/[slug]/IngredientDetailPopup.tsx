import React from 'react'
import TasteSection from './TasteSection'
import IngredientBasicInfoSection from './IngredientBasicInfoSection'

export default function IngredientDetailPopup({ data, setNull }) {
  return (
    <div
      className="modal fade"
      id="ingredientDetailPopup"
      tabIndex="-1"
      aria-labelledby="ingredientDetailPopupLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content p-4 ">
          <div className="position-absolute pe-5 pt-4 end-0 z-index-10">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              // onClick={setNull}
            ></button>
          </div>
          <div className="modal-body">
            <IngredientBasicInfoSection data={data} />

            <TasteSection data={data} suggest="no" basiColor={'green'} />
          </div>
        </div>
      </div>
    </div>
  )
}
