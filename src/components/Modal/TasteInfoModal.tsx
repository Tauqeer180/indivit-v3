import React from "react";

import { useState } from "react";
export default function TasteInfoModal({}) {
  // const [closeRef, setCloseRef] = useState();
  return (
    <div>
      <div
        className="modal fade"
        id="TasteInfoModal"
        tabIndex="-1"
        aria-labelledby="TasteInfoModalLabel"
        aria-hidden="true"
        // data-bs-backdrop="static"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="TasteInfoModalLabel">
                Wie schmeckt mein Smoothie?
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
                    Du willst dir den perfekten Smoothie kreieren und du suchst
                    nach dem optimalen Mischungsverhältnis aller Zutaten? Ganz
                    ehrlich – wir wissen nicht was dir persönlich am besten
                    schmeckt Aber vielleicht helfen dir die angezeigten Daten
                    aus unserer Testreihe mit über 50 Teilnehmern – so haben
                    nämlich unsere Testkandidaten deine Zutaten im Durchschnitt
                    empfunden. Geschmack ist natürlich subjektiv, daher darf
                    deine Kreation selbstverständlich von den angezeigten
                    Durchschnittswerten abweichen.
                    <br />
                    <br />
                    Denn am Ende gilt: Der perfekte Smoothie ist DEIN Smoothie!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
