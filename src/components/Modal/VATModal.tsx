import React from 'react'

export default function VATModal() {
  // const [closeRef, setCloseRef] = useState();
  return (
    <div>
      <div
        className="modal fade"
        id="VATModal"
        tabIndex={-1}
        aria-labelledby="VATModalLabel"
        aria-hidden="true"
        // data-bs-backdrop="static"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="VATModalLabel">
                Wir liefern per gekühltem Versand
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
                    Du wählst bei deiner Bestellung deinen Wunschtag aus, an dem du deine Smoothies
                    erhalten möchtest. In vielen Fällen klappt die Zustellung an deinem Wunschdatum
                    - manchmal kann es sich um einen Tag verzögern.
                  </p>

                  <p>Der Versand kostet innerhalb Deutschlands pro Paket 4,95 €.</p>
                  <p>
                    Ab einem Bestellwert von 100 € erfolgt die Lieferung für dich versandkostenfrei.
                  </p>
                  <p>
                    Du hast es eilig? Kein Problem: Für einmalig 10 € zusätzlich garantiert unser
                    Versanddienstleister sogar eine Lieferung an deinem Wunschtag - und das sogar
                    bis 12:00 Uhr mittags.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
