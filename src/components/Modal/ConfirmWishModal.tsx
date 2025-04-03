import React, { useState, createContext, useContext } from 'react'

// Create a context to hold the showToast function
const ModalContext = createContext()

interface ConfirmWishModalProps {
  fun: () => void
  isLoading?: boolean
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  innerHtml: string
  title?: string
  okLabel: string
}
export default function ConfirmWishModal({
  fun,
  isLoading,
  setModalVisible,
  innerHtml,
  title,
  okLabel,
}: ConfirmWishModalProps) {
  const [visible, setVisible] = useState(true)

  const openModal = (message) => {
    setVisible(true)
  }

  return (
    <ModalContext.Provider value={openModal}>
      <div className="overlay">
        <div>
          {visible && (
            <div className="modal fade show d-block">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">{title || 'Wirklich?'}</h5>
                    {/* Confirm */}
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setModalVisible(false)}

                      //    ref={closeRef}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: innerHtml,
                      }}
                    ></div>
                    {}
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn" onClick={() => setModalVisible(false)}>
                      Abbrechen
                    </button>
                    <button
                      id="confirmAction"
                      type="button"
                      className="btn btn-danger shadow-none"
                      onClick={fun}
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
                        okLabel || 'Ja, weiter zum Online Smoothie Mixer'
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </ModalContext.Provider>
  )
}

// export const useModal = () => useContext(ModalContext);

// export default ModalContainer;
