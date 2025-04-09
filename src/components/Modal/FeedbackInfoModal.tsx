import React from 'react'

export default function FeedbackInfoModal({}) {
  // const [closeRef, setCloseRef] = useState();
  return (
    <div>
      <div
        className="modal fade"
        id="FeedbackInfoModal"
        tabIndex="-1"
        aria-labelledby="FeedbackInfoModalLabel"
        aria-hidden="true"
        // data-bs-backdrop="static"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="FeedbackInfoModalLabel">
                Smoothie Feedback
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                // ref={(r) => setCloseRef(r)}
              ></button>
            </div>

            <div className="modal-body pt-0">
              <div className="row">
                <div className="col-12 col-md-12 col-lg-12 p-4 pt-0">
                  <p>
                    Dein Smoothie soll so individuell sein wie du selbst. Als Unterstützung bei
                    deiner Kreation bieten wir dir zusätzlich etwas Feedback an.
                  </p>
                  <p>
                    Das Feedback soll dir als Unterstützung bei deiner Kreation dienen. Strikte
                    Vorgaben oder sogar Mischverbote gibt es hier keine. Dein Smoothie ist perfekt
                    so wie er ist? Du weißt, was du tust? Dann darfst du das Feedback auch gekonnt
                    ignorieren.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="modal-footer justify-content-center">
              <button
                type="button"
                className="btn btn-primary btn-outline-success"
                // data-bs-toggle="modal"
                // data-bs-target="#exampleModal"
                // data-bs-whatever="@getbootstrap"
                data-bs-dismiss="modal"
              >
                Not Now
              </button>
              <button
                type="button"
                className="btn btn-primary btn-solid-success"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
