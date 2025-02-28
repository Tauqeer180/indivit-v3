import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function FooterTop() {
  const location = useLocation();
  let pathName = location?.pathname;
  return (
    <>
      {pathName == "/login" ||
      pathName == "/signup" ||
      pathName == "/" ||
      pathName == "/forgotpassword" ? (
        <></>
      ) : (
        <section
          id="flx-top-footer"
          className={`
         ${(pathName == "/cart" || pathName == "/checkout") && "bg-white "} 
         ${pathName == "/profile" && " bg-transparent"}
        ${pathName == "/orders" && " flx-customcol-bg"}`}
          // className={pathName === "/profile" ? "flx-customcol-bg" : ""}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 252">
            <path
              fill="var(--green)"
              fillOpacity="1"
              d="M0,96L48,128C96,160,192,224,288,218.7C384,213,480,139,576,96C672,53,768,43,864,74.7C960,107,1056,181,1152,197.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <div className="container-fluid flx-bg-footer ">
            <div className="row align-items-center flx-topfooter-height ">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 flx-top-footer-col">
                <div className="text-center">
                  <h2 data-aos="fade-up" data-aos-duration="1000">
                    Mix nicht einfach einen Smoothie. <br />
                    Mix dir DEINEN <span className="text-white">Smoothie.</span>
                  </h2>
                  <p
                    className="text-white"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    Mit über 78 Milliarden möglichen Variationen müsste in
                    unserem Online <br />
                    Smoothie Mixer doch das passende für dich dabei sein
                  </p>
                  <Link
                    to="/smoothiemixer"
                    className="btn btn-outline-light"
                    data-aos="fade-up"
                    data-aos-duration="2500"
                  >
                    Online Smoothie Mixer
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
