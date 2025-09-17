import React from 'react'
// import { Link, useNavigate } from "react-router-dom";
import FooterTop from './FooterTop'
import { fetcher } from '@/lib/fetcher'
import Link from 'next/link'
import Image from 'next/image'
// import { useSelector } from "react-redux";
export default async function Footer() {
  const data = await fetcher(`box_category`, { cache: true })

  // const {
  //   isLoading: boxLoading,
  //   error: boxError,
  //   data: boxCat,
  // } = useQuery({
  //   queryKey: ["boxCategories"],
  //   queryFn: getAllBoxCategories,
  // });
  const categories = data?.data
  // const settings = useSelector((state) => state?.settings?.settings);

  // console.log("Site Setings ", settings);
  return (
    <div className="tw-relative tw-bg-[#DCE9C7] lg:tw-pt-20 tw-pt-10">
      {/* <!-- footer start --> */}
      {/* <FooterTop /> */}
      {/* {JSON.stringify(categories)} */}
      <div className="tw-relative">
        <footer className="tw-relative container tw-z-[1]">
          <div className="">
            <section className="tw-relative tw-w-full  tw-rounded-3xl tw-overflow-hidden sm:tw-aspect-[1280/520]">
              {/* Background Image */}
              <Image
                src="/assets/img/ftr.png"
                alt="Background"
                fill
                className="tw-object-cover tw-rounded-3xl tw-z-0 border-2 tw-aspect-[1280/520]"
              />

              {/* Content Box */}
              <div className="tw-relative  lg:tw-px-10 lg:tw-py-20 md:tw-px-5 md:tw-py-10 tw-p-4 tw-flex tw-flex-col md:tw-flex-row tw-items-start tw-justify-between tw-h-full">
                <div className="xl:tw-w-1/2 md-5:tw-w-2/3  tw-flex tw-flex-col tw-justify-between tw-h-full">
                  <div>
                    <h1 className=" tw-text-lg sm:tw-text-2xl md:tw-text-3xl lg:tw-text-4xl xl:tw-text-5xl tw-font-extrabold tw-font-Epilogue-bold tw-text-gray-900 tw-leading-normal">
                      jetzt Deine Smoothie Kur <br className="tw-hidden lg:-tw-block" /> starten
                    </h1>
                    <p className="tw-text-gray-700 tw-font-medium md:tw-leading-relaxed tw-font-Epilogue-bold tw-text-xs  xs:tw-text-sm sm:tw-text-base lg:tw-text-lg lg:tw-pt-5">
                      Starten Sie jetzt Ihre transformative Smoothie-Kur und entdecken Sie ein neues
                      Lebensgefühl! Beginnen Sie noch heute Ihre Reise zu mehr Vitalität und
                      natürlicher Schönheit.
                    </p>
                  </div>
                  <Link
                    href={'/Smoothie%20Fastenkuren_1'}
                    className="btn-theme xl:tw-mt-[70px] lg:tw-mt-10 md:tw-pt"
                  >
                    Erfahren Sie mehr
                  </Link>
                </div>
              </div>
            </section>
          </div>
          <div className="tw-relative  tw-pt-[60px] tw-pb-24">
            <div className=" row d-flex pb-5 pb-md-0">
              <div className=" d-none d-lg-block pb-5 ps-sm-1">
                <Image
                  className=" img-fluid"
                  src={'/assets/icon/logo1.png'}
                  width={80}
                  height={80}
                  alt="Indivit"
                  title="Indivit"
                />
              </div>
              {/* <!-- shop colum --> */}
              <div className=" col-12 custom-md-col pb-3">
                {/* Background Image */}

                <h6 className="text-uppercase fw-bold">PRODUKTE</h6>
                {/* means SHOP */}
                <ul className="list-group list-unstyled">
                  {categories?.map((box, index) => {
                    return (
                      <li key={index} className="lh-lg" aria-current="true">
                        <Link
                          href={`/${box?.name + '_' + box?.id}`}
                          className="text-decoration-none text-reset"
                        >
                          {box?.name}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* <!-- shop colum end--> */}
              {/* <!-- SMOOTHIE colum--> */}
              <div className="col-6 custom-md-col pb-3">
                <h6 className="text-uppercase fw-bold">Smoothies</h6>
                <ul className="list-group list-unstyled">
                  <li className="lh-lg" aria-current="true">
                    <Link
                      className="text-decoration-none text-reset"
                      href="/gesunde-smoothies-rezepte-selber-machen"
                    >
                      Smoothie Rezepte
                    </Link>
                  </li>
                  <li className="lh-lg" aria-current="true">
                    <Link className="text-decoration-none text-reset" href="/smoothie-mixen-ideen">
                      Online Smoothie Mixer
                    </Link>
                  </li>
                  <li className="lh-lg" aria-current="true">
                    <Link
                      className="text-decoration-none text-reset"
                      href="/beste-smoothie-zutaten-plant-based"
                    >
                      Zutaten
                    </Link>
                  </li>
                  <li className="lh-lg" aria-current="true">
                    <Link className="text-decoration-none text-reset" href="/meine-smoothie-box">
                      Eigene Box erstellen
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <!-- SMOOTHIE colum end--> */}
              {/* <!-- discover colum--> */}
              <div className="col-6 custom-md-col pb-3">
                <h6 className="text-uppercase fw-bold">Entdecken</h6>
                <ul className="list-group list-unstyled">
                  {/* <li className="lh-lg" aria-current="true">
                  <Link className="text-decoration-none text-reset" href="/story">
                    Story
                  </Link>
                </li>
                <li className="lh-lg" aria-current="true">
                  <Link
                    className="text-decoration-none text-reset"
                    href="/nachhaltige-bio-lebensmittel-essen"
                  >
                    Sustainability
                  </Link>
                </li>
                <li className="lh-lg" aria-current="true">
                  <Link className="text-decoration-none text-reset" href="/haltbarkeit-smoothie-und-saft">
                    HPP Procedure
                  </Link>
                </li>
                <li className="lh-lg" aria-current="true">
                  <Link
                    className="text-decoration-none text-reset"
                    href="/impressum"
                  >
                    Imprint
                  </Link>
                </li> */}
                  <li className="lh-lg" aria-current="true">
                    <Link
                      className="text-decoration-none text-reset"
                      href="/wir-sind-die-smoothie-ninjas"
                    >
                      Über uns
                    </Link>
                  </li>
                  <li className="lh-lg" aria-current="true">
                    <Link className="text-decoration-none text-reset" href="/warum-indivit">
                      Warum indivit
                    </Link>
                  </li>
                  <li className="lh-lg" aria-current="true">
                    <Link
                      className="text-decoration-none text-reset"
                      href="/nachhaltige-bio-lebensmittel-essen"
                    >
                      Nachhaltigkeit
                    </Link>
                  </li>

                  <li className="lh-lg" aria-current="true">
                    <Link
                      className="text-decoration-none text-reset"
                      href="/haltbarkeit-smoothie-und-saft"
                    >
                      HPP Prozess
                    </Link>
                  </li>
                  <li className="lh-lg" aria-current="true">
                    <Link
                      className="text-decoration-none text-reset"
                      href="/ernaehrung-fuer-gesundes-leben-gesund-essen"
                      // smoothie-wissen
                    >
                      Smoothie Wissen
                    </Link>
                  </li>
                  {/* <li className="lh-lg" aria-current="true">
                  <Link className="text-decoration-none text-reset" href="/story">
                    Story
                  </Link>
                </li> */}
                </ul>
              </div>
              {/* <!-- discover colum end--> */}
              {/* <!-- SOCIAL MEDIA colum--> */}
              <div className="col-12 custom-md-col pb-3">
                <h6 className="text-uppercase fw-bold">Folgen</h6>
                <ul className="list-group list-unstyled">
                  <li className="lh-lg" aria-current="true">
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-reset"
                      href="https://www.facebook.com/profile.php?id=100088113601684"
                    >
                      Facebook
                    </Link>
                  </li>
                  <li className="lh-lg" aria-current="true">
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-reset"
                      href="https://www.instagram.com/indivit_smoothie"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li className="lh-lg" aria-current="true">
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-reset"
                      href="https://twitter.com/indivitsmoothie"
                    >
                      X (Twitter)
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <!-- SOCIAL MEDIA colum end--> */}
              {/* <!-- HELP & CONTACT colum--> */}
              <div className="col-12 custom-md-col pb-3">
                <h6 className="text-uppercase fw-bold">Kundenservice</h6>
                <ul className="list-group list-unstyled">
                  <li className="lh-lg" aria-current="true">
                    <Link
                      className="text-decoration-none text-reset"
                      href="/haeufig-gestellte-fragen"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li className="lh-lg" aria-current="true">
                    <Link className="text-decoration-none text-reset" href="/kontakt">
                      Kontaktiere uns
                    </Link>
                  </li>
                  <li className="lh-lg" aria-current="true">
                    <Link className="text-decoration-none text-reset" href="/lieferung">
                      Lieferung
                    </Link>
                  </li>
                  {/* <li className="lh-lg" aria-current="true">
                  <Link
                    className="text-decoration-none text-reset"
                    href="/agb"
                  >
                    Terms & Conditions
                  </Link>
                </li> */}
                  {/* <li className="lh-lg" aria-current="true">
                  <Link
                    className="text-decoration-none text-reset"
                    href="/datenschutz"
                  >
                    Privacy Policy
                  </Link>
                </li> */}
                </ul>
              </div>
              {/* <!-- HELP & CONTACT colum end--> */}
            </div>
          </div>
          {/* <div className=""> */}
          {/* </div> */}
        </footer>
        <Image
          src="/assets/img/frut.png"
          alt="Background"
          // fill
          className=" -tw-inset-1- pt-4 tw-absolute  tw-bottom-0 tw-right-0 tw-aspect-[1220/180] tw-z-0 max-sm:tw-w-full max-sm:tw-object-contain"
          width={1220}
          height={180}
        />
      </div>
      <div className="container">
        <div className="row d-lg-flex justify-content-lg-between py-1">
          <div className="col-12 col-lg-auto order-lg-0 order-5 text-center text-lg-start">
            <small className="text-muted">
              © Smoothie Ninja GmbH, 2025
              {/* © {settings?.footer_text} */}
            </small>
            {/* Smoothie Ninja GmbH, 2023 */}
          </div>
          <div className="col-6 col-lg-auto order-lg-1 order-0">
            <Link className="text-decoration-none text-muted" href="/agb">
              <small>AGB</small>
            </Link>
          </div>
          <div className="col-6 col-lg-auto order-lg-2 order-1">
            <Link href="/datenschutz" className="text-decoration-none text-muted">
              <small>Datenschutzerklärung</small>
            </Link>
          </div>
          <div className="col-6 col-lg-auto order-lg-3 order-2">
            <Link href="/zahlung" className="text-decoration-none text-muted">
              <small>Zahlungsmöglichkeiten</small>
            </Link>
          </div>
          <div className="col-6 col-lg-auto order-lg-4 order-3">
            <Link href="/widerrruf" className="text-decoration-none text-muted">
              <small>Widerrufsbelehrung</small>
            </Link>
          </div>
          <div className="col-6 col-lg-auto order-lg-5 order-4">
            <Link href="/impressum" className="text-decoration-none text-muted">
              j<small>Impressum</small>
            </Link>
          </div>
        </div>
      </div>

      {/*  <!-- footer end --> */}
    </div>
  )
}
