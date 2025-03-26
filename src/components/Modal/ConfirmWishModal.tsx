import React, { useState, createContext, useContext } from "react";

// Create a context to hold the showToast function
const ModalContext = createContext();

export default function ConfirmWishModal({
  fun,
  isLoading,
  setModalVisible,
  innerHtml,
  title,
  okLabel,
}) {
  const [visible, setVisible] = useState(true);

  const openModal = (message) => {
    setVisible(true);
  };

  const closeModal = (id) => {
    setVisible(false);
  };

  return (
    <ModalContext.Provider value={openModal}>
      <div className="overlay">
        <div>
          {visible && (
            <div class="modal fade show d-block">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">{title || "Wirklich?"}</h5>
                    {/* Confirm */}
                    <button
                      type="button"
                      class="btn-close"
                      onClick={() => setModalVisible(false)}

                      //    ref={closeRef}
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: innerHtml,
                      }}
                    ></div>
                    {}
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn"
                      onClick={() => setModalVisible(false)}
                    >
                      Abbrechen
                    </button>
                    <button
                      id="confirmAction"
                      type="button"
                      class="btn btn-danger shadow-none"
                      onClick={fun}
                    >
                      {isLoading ? (
                        <>
                          <span
                            class="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Entfernen...
                        </>
                      ) : (
                        okLabel || "Ja, weiter zum Online Smoothie Mixer"
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
  );
}

// export const useModal = () => useContext(ModalContext);

// export default ModalContainer;
