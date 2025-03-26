'use client'
import React, { useState } from 'react'

// import { RecipeCard } from '../../components/Cards'
import { useBoxDetail } from './useBoxDetail'
import { RecipeCard } from '@/components/Cards'
export default function ViewBoxPopup() {
  const { selectedBoxData: data } = useBoxDetail()

  return (
    <div>
      <div
        className="modal fade"
        id="viewBoxModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body px-5 pt-0 position-relative">
              <div className="text-center">
                <h4>Das steckt drin</h4>
                <p>Das sind die ausgewählten Smoothies in dieser Box.</p>
              </div>
              <div className="row">
                {data &&
                  data?.smoothie_box?.map((d, index) => {
                    return (
                      <div key={index} className="col-md-4 position-relative ">
                        <span className="position-absolute end-0 p-2">
                          x <span className="fw-bold">{d?.qty}</span>{' '}
                        </span>
                        <RecipeCard data={d.smoothie} isButton={false} hideWishIcon={true} />
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
