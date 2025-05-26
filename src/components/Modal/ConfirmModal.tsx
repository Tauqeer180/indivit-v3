import React from 'react'

export default function ConfirmModal({
  action,
  className,
  closeRef,
  isLoading,
  innerHtml,
}: {
  action: () => void
  className?: string
  closeRef: any
  isLoading: boolean
  innerHtml: string
}) {
  return (
    <>
      <button
        className={`btn btn-outline-danger p-10-25 mx-2 rounded-8 shadow-none ${className} `}
        data-bs-toggle="modal"
        data-bs-target="#confirmModal"
        type="button"
      >
        Löschen
      </button>

      {/* <!-- Confirm Popup Modal --> */}
      <div
        className="modal fade"
        id="confirmModal"
        tabIndex={-1}
        aria-labelledby="confirmModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="confirmModalLabel">
                Weg-ist-weg
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ref={closeRef}
              ></button>
            </div>
            <div className="modal-body">
              {innerHtml ? innerHtml : `Bist du dir sicher, dass du deine Box löschen möchtest?`}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn" data-bs-dismiss="modal">
                Abbrechen
              </button>
              <button
                id="confirmAction"
                type="button"
                className="btn btn-danger shadow-none"
                onClick={action}
              >
                {isLoading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Entfernen...
                  </>
                ) : (
                  'Ja, löschen'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
