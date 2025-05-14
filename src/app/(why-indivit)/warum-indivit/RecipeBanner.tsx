import Image from 'next/image'
import React from 'react'

export default function RecipeBanner() {
  return (
    <div>
      {/* <!----icon section-----> */}
      <section id="flx-icon-box">
        <div className="pt-5">
          <div className="container">
            <div className="row align-items-start flx-row-mb">
              <div
                className="col-xs-12 col-sm-6 col-md-6 col-lg-4 flx-textcol-center p-4"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="text-white">
                  <Image
                    alt="echte Smoothies aus ganzen Früchten"
                    src="/assets/icon/fruits-and-vegetables_w.png"
                    width={100}
                    height={100}
                    className="img-fluid flx-width-icon"
                  />
                  <h3 className="pt-4 pt-md-3 pb-4 pb-md-3">Echte Smoothies aus ganzen Früchten</h3>
                  <p>
                    Nutzung ganzer Früchte und Verzicht auf gefilterte Säfte ergeben besonders
                    gesunde, ballast- und vitalstoffreiche Smoothies
                  </p>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-6 col-md-6 col-lg-4 flx-textcol-center p-4"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="text-white">
                  <Image
                    alt="bio"
                    src="/assets/icon/bio_w.png"
                    width={100}
                    height={100}
                    className="img-fluid flx-width-icon"
                  />
                  <h3 className="pt-4 pt-md-3 pb-4 pb-md-3">
                    100% frische Bio Zutaten in Rohkostqualität
                  </h3>
                  <p>
                    Jede Zutat gelangt so frisch und unverarbeitet wie möglich in deinen Smoothies –
                    natürlich in 100% Bio-Qualität
                  </p>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-6 col-md-6 col-lg-4 flx-textcol-center p-4"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="text-white pb-5">
                  <Image
                    alt="schutz"
                    src="/assets/icon/schutz_w.png"
                    width={100}
                    height={100}
                    className="img-fluid flx-width-icon"
                  />
                  <h3 className="pt-4 pt-md-3 pb-4 pb-md-3">
                    Nie erhitzt & frei von Konservierungsstoffen
                  </h3>
                  <p>
                    Das schonende HPP Verfahren verlängert die Haltbarkeit – die enthaltenen
                    Vitalstoffe bleiben größtenteils erhalten
                  </p>
                </div>
              </div>

              <div
                className="col-xs-12 col-sm-6 col-md-6 col-lg-4 flx-textcol-center p-4"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="text-white pb-5">
                  <Image
                    alt="frucht"
                    src="/assets/icon/frucht_w.png"
                    width={100}
                    height={100}
                    className="img-fluid flx-width-icon"
                  />
                  <h3 className="pt-4 pt-md-3 pb-4 pb-md-3">
                    Frei von Zusatzstoffen – 100% transparent
                  </h3>
                  <p>
                    In deinen Smoothies landen keine Pulver und Zusätze – zu allen Zutaten versorgen
                    wir dich mit umfangreichen Informationen
                  </p>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-6 col-md-6 col-lg-4 flx-textcol-center p-4"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="text-white pb-5">
                  <Image
                    alt="mixer"
                    src="/assets/icon/mixer_w.png"
                    width={100}
                    height={100}
                    className="img-fluid flx-width-icon"
                  />
                  <h3 className="pt-4 pt-md-3 pb-4 pb-md-3">Nachhaltige on-demand Manufaktur</h3>
                  <p>
                    0% Verschwendung. Das bedeutet, deine Smoothies werden nur auf Bestellung
                    zubereitet – frischer geht's nicht
                  </p>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-6 col-md-6 col-lg-4 flx-textcol-center p-4"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="text-white pb-5">
                  <Image
                    alt="recycling zeichen"
                    src="/assets/icon/recycling-zeichen_w.png"
                    width={100}
                    height={100}
                    className="img-fluid flx-width-icon"
                  />
                  <h3 className="pt-4 pt-md-3 pb-4 pb-md-3">Flasche aus 100% recyceltem PET</h3>
                  <p>
                    Aufwand von lediglich ca. 10% der Energie für die Herstellung im Vergleich zu
                    herkömmlichen PET-Flaschen
                  </p>
                </div>
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
            <path
              fill="#F8F9FA"
              fillOpacity="1"
              d="M0,128L60,106.7C120,85,240,43,360,58.7C480,75,600,149,720,154.7C840,160,960,96,1080,90.7C1200,85,1320,139,1380,165.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
      {/* <!--icon section end------> */}
    </div>
  )
}
