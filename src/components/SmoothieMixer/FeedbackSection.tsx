import React, { useState, useEffect } from 'react'
import { Badge } from '../Cards'

export default function FeedbackSection({
  feedback,
  selectedData,
  isFeedBackVisible,
  feedbackLoading,
  handleFeedBack,
  ingredients,
  handleNavigate,
}) {
  return (
    <div>
      <div className="d-flex ">
        <h3>Tipps vom Smoothie Ninja</h3>
        <button
          className="btn pt-2 mt-0 me-0 shadow-none d-flex align-items-start"
          data-bs-toggle="modal"
          data-bs-target="#FeedbackInfoModal"
          data-bs-whatever="@getbootstrap"
        >
          <img
            src={'/assets/icon/allingredientsinfo.png'}
            alt=""
            className="img-fluid"
            width="18"
            loading="lazy"
          />
        </button>
      </div>
      {selectedData?.length > 0 ? (
        !isFeedBackVisible || !feedback?.feedBack_text_1?.length > 0 ? (
          <>
            <button
              type="button"
              disabled={feedbackLoading}
              className="btn btn-primary btn-solid-success"
              onClick={handleFeedBack}
            >
              {feedbackLoading ? (
                <div>
                  <span
                    className="spinner-grow spinner-grow-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Loading...
                </div>
              ) : (
                'Gib mir Feedback'
              )}
            </button>

            <div className="mt-4">
              Du hast deinen Smoothie geändert. Dein Feedback wurde angepasst.
            </div>
          </>
        ) : (
          feedback?.feedBack_text_1?.length > 0 && (
            <div className="max-h-460 overflow-auto px-2">
              {Array.from(Array(feedback.feedBack_text_1?.length)).map((d, i) => {
                return (
                  <div key={i} className="shadow-sm border rounded-8 p-3 my-4">
                    <h6 className="text-center">{feedback.feedBack_headline[i]}</h6>
                    <p> {feedback.feedBack_text_1[i]} </p>
                    <p> {feedback.feedBack_text_2[i]} </p>
                    <div>
                      {feedback?.suggested_ingredients[i] &&
                        feedback?.suggested_ingredients[i].length > 0 && (
                          <h6 className="">Hier kannst du deine Kreation direkt verbessern</h6>
                        )}
                      <div className="d-flex flex-wrap">
                        {feedback?.suggested_ingredients[i] &&
                          ingredients &&
                          ingredients
                            ?.filter((ing) => feedback?.suggested_ingredients[i]?.includes(ing?.id))
                            ?.map((x, ind) => {
                              return (
                                <span key={ind}>
                                  <Badge
                                    data={x}
                                    list={selectedData}
                                    handleNavigate={handleNavigate}
                                  />
                                </span>
                              )
                            })}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )
        )
      ) : (
        <div>
          <p>Wir haben noch kein Feedback zu deinem Smoothie, da er leer ist.</p>
          <button
            type="button"
            className="btn btn-primary btn-solid-success"
            data-bs-toggle="modal"
            data-bs-target="#ingredientSelectionModal"
            data-bs-whatever="@getbootstrap"
          >
            Zutat hinzufügen
          </button>
        </div>
      )}
    </div>
  )
}
