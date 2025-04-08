import React from 'react'
import Link from 'next/link'

export default function VisionRecipeSection() {
  return (
    <div>
      {/* <!------image and text section name vision start------> */}
      <section id="flx-vision">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 pb-5 md-column-reverse">
              <div className="text-left flx-vision-leave">
                <h1 data-aos="fade-up" data-aos-duration="1000">
                  <span className="hsn-smoothies">Wir hatten eine Vision:</span>
                  <br />
                  Den besten Smoothie der <br /> Welt kreieren.
                  {/* Making the tastiest  smoothies ever. */}
                </h1>
                <p className="pb-3" data-aos="fade-up" data-aos-duration="1500">
                  Smoothies sind nicht nur unser Produkt, sondern unsere große Leidenschaft
                </p>
                <Link
                  href="/wir-sind-die-smoothie-ninjas"
                  className="btn btn-primary btn-solid-success"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  Erfahre mehr über uns
                </Link>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 flx-vision-fruite">
              <img src="/assets/img/vision.png" className="img-fluid " loading="lazy" />
            </div>
          </div>
        </div>
      </section>
      {/* <!------image and text section name vision end------> */}

      {/* <!------image and text section name recipes start------> */}
      <section id="flx-recipes">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 flx-recipes-object">
              <img src="/assets/img/recipes.png" className="img-fluid" loading="lazy" />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="flx-text-left">
                <img
                  src="/assets/img/strawberry.png"
                  alt=""
                  className="img-fluid flx-img-strawberry"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  loading="lazy"
                />
                <h1 data-aos="fade-up" data-aos-duration="1500">
                  Wir haben vielfältige <span className="hsn-smoothies">Smoothie Rezepte </span>{' '}
                  entwickelt
                </h1>
                <p className="pb-3" data-aos="fade-up" data-aos-duration="2000">
                  Mit über 78 Milliarden möglichen Variationen bietet dir unser Online Smoothie
                  Mixer zusätzliche Freiheit für eine ganz persönliche Gestaltung deines Smoothies
                </p>
                <Link
                  href="/gesunde-smoothies-rezepte-selber-machen"
                  className="btn btn-solid-success"
                  data-aos="fade-up"
                  data-aos-duration="2500"
                >
                  Mehr anzeigen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!------image and text section name recipes end------> */}
    </div>
  )
}
