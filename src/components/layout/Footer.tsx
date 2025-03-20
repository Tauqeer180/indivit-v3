import React from "react";
// import { Link, useNavigate } from "react-router-dom";
import FooterTop from "./FooterTop";

import { fetcher } from "@/lib/fetcher";
import Link from "next/link";
import Image from "next/image";
// import { useSelector } from "react-redux";
export default async function Footer() {
  const data = await fetcher(`box_category`, { cache: true });

  // const {
  //   isLoading: boxLoading,
  //   error: boxError,
  //   data: boxCat,
  // } = useQuery({
  //   queryKey: ["boxCategories"],
  //   queryFn: getAllBoxCategories,
  // });
  const categories = data?.data;
  // const settings = useSelector((state) => state?.settings?.settings);

  // console.log("Site Setings ", settings);
  return (
    <div>
      {/* <!-- footer start --> */}
      {/* <FooterTop /> */}
      {/* {JSON.stringify(categories)} */}
      <footer id="flx-footer">
        <div className="container">
          <div className="row d-flex pb-5 pb-md-0">
            <div className=" d-none d-lg-block pb-5 ps-sm-1">
              <Image
                className=" img-fluid"
                src={"/assets/icon/logo1.png"}
                width={80}
                height={80}
                alt="Indivit"
              />
            </div>
            {/* <!-- shop colum --> */}
            <div className="col-12 custom-md-col pb-3">
              <h6 className="text-uppercase fw-bold">PRODUKTE</h6>
              {/* means SHOP */}
              <ul className="list-group list-unstyled">
                {categories?.map((box, index) => {
                  return (
                    <li key={index} className="lh-lg" aria-current="true">
                      <Link
                        href={`/category/${box?.name + "_" + box?.id}`}
                        className="text-decoration-none text-reset"
                      >
                        {box?.name}
                      </Link>
                    </li>
                  );
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
                    href="/rightrecipes"
                  >
                    Smoothie Rezepte
                  </Link>
                </li>
                <li className="lh-lg" aria-current="true">
                  <Link
                    className="text-decoration-none text-reset"
                    href="/smoothiemixer"
                  >
                    Online Smoothie Mixer
                  </Link>
                </li>
                <li className="lh-lg" aria-current="true">
                  <Link
                    className="text-decoration-none text-reset"
                    href="/ingredients"
                  >
                    Zutaten
                  </Link>
                </li>
                <li className="lh-lg" aria-current="true">
                  <Link
                    className="text-decoration-none text-reset"
                    href="/custombox"
                  >
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
                    href="/sustainability"
                  >
                    Sustainability
                  </Link>
                </li>
                <li className="lh-lg" aria-current="true">
                  <Link className="text-decoration-none text-reset" href="/hpp">
                    HPP Procedure
                  </Link>
                </li>
                <li className="lh-lg" aria-current="true">
                  <Link
                    className="text-decoration-none text-reset"
                    href="/imprint"
                  >
                    Imprint
                  </Link>
                </li> */}
                <li className="lh-lg" aria-current="true">
                  <Link
                    className="text-decoration-none text-reset"
                    href="/about"
                  >
                    Über uns
                  </Link>
                </li>
                <li className="lh-lg" aria-current="true">
                  <Link
                    className="text-decoration-none text-reset"
                    href="/whyindivit"
                  >
                    Warum indivit
                  </Link>
                </li>
                <li className="lh-lg" aria-current="true">
                  <Link
                    className="text-decoration-none text-reset"
                    href="/Sustainability"
                  >
                    Nachhaltigkeit
                  </Link>
                </li>

                <li className="lh-lg" aria-current="true">
                  <Link className="text-decoration-none text-reset" href="/hpp">
                    HPP Prozess
                  </Link>
                </li>
                <li className="lh-lg" aria-current="true">
                  <Link
                    className="text-decoration-none text-reset"
                    href="/smoothie-wissen"
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
                    href="/faqs"
                  >
                    FAQs
                  </Link>
                </li>
                <li className="lh-lg" aria-current="true">
                  <Link
                    className="text-decoration-none text-reset"
                    href="/contact"
                  >
                    Kontaktiere uns
                  </Link>
                </li>
                <li className="lh-lg" aria-current="true">
                  <Link
                    className="text-decoration-none text-reset"
                    href="/delivery"
                  >
                    Lieferung
                  </Link>
                </li>
                {/* <li className="lh-lg" aria-current="true">
                  <Link
                    className="text-decoration-none text-reset"
                    href="/terms-conditions"
                  >
                    Terms & Conditions
                  </Link>
                </li> */}
                {/* <li className="lh-lg" aria-current="true">
                  <Link
                    className="text-decoration-none text-reset"
                    href="/privacy-statement"
                  >
                    Privacy Policy
                  </Link>
                </li> */}
              </ul>
            </div>
            {/* <!-- HELP & CONTACT colum end--> */}
          </div>
        </div>
      </footer>
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
            <Link
              className="text-decoration-none text-muted"
              href="/terms-conditions"
            >
              <small>AGB</small>
            </Link>
          </div>
          <div className="col-6 col-lg-auto order-lg-2 order-1">
            <Link
              href="/privacy-statement"
              className="text-decoration-none text-muted"
            >
              <small>Datenschutzerklärung</small>
            </Link>
          </div>
          <div className="col-6 col-lg-auto order-lg-3 order-2">
            <Link
              href="/zahlungsmöglichkeiten"
              className="text-decoration-none text-muted"
            >
              <small>Zahlungsmöglichkeiten</small>
            </Link>
          </div>
          <div className="col-6 col-lg-auto order-lg-4 order-3">
            <Link
              href="/cancellation_policy"
              className="text-decoration-none text-muted"
            >
              <small>Widerrufsbelehrung</small>
            </Link>
          </div>
          <div className="col-6 col-lg-auto order-lg-5 order-4">
            <Link href="/imprint" className="text-decoration-none text-muted">
              <small>Impressum</small>
            </Link>
          </div>
        </div>
      </div>
      {/*  <!-- footer end --> */}
    </div>
  );
}
