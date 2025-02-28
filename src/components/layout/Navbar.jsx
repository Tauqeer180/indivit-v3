"use client";
import React, { useEffect, useState, useRef } from "react";

import Link from "next/link";

// import waveSvg from "../../assets/svg/wave.svg";
export default function Navbar() {
  const closeRef = useRef();
  const [loading, setLoading] = useState(false);

  // console.log("German ", new Intl.NumberFormat("de-DE").format(1236.31));

  const handleLogout = () => {
    setLoading(true);
    // session.clear();

    // navigate("/login");
  };

  useEffect(() => {
    const menuItems = document.querySelectorAll(".dropdown-item");
    const logoItem = document.querySelectorAll(".navbar-brand");
    const btnItems = document.querySelectorAll(".btn");
    const boxBtnItems = document.querySelectorAll(".hsn-box-btn");

    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        closeRef.current.click();
      });
    });
    logoItem.forEach((item) => {
      item.addEventListener("click", () => {
        closeRef.current.click();
      });
    });
    btnItems.forEach((item) => {
      item.addEventListener("click", () => {
        closeRef.current.click();
      });
    });
    boxBtnItems.forEach((item) => {
      item.addEventListener("click", () => {
        closeRef.current.click();
      });
    });
  }, []);

  return (
    <div>
      {loading && <Loader />}

      {/* <!-- navbar start --> */}
      <div className="container flx-navbar-style">
        <nav
          id="header"
          className=" tw-duration-500 row container xs:!tw-mt-6 mx-auto fixed-top navbar navbar-expand-lg px-3 px-lg-4 bg-white  shadow-sm sm:tw-rounded py-0"
        >
          <div
            className="offcanvas offcanvas-end position-lg-initial transform-lg-none border-lg-none col-lg-5 py-2"
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
            // visibility={visible}
            style={{ visibility: "visible" }}
          >
            {/* {JSON.stringify(boxCategories)} */}
            <div className="offcanvas-header d-lg-none">
              <div className="flx-logo">
                <Link className="navbar-brand " href="/">
                  <img width="50px" src={"/assets/icon/logo1.png"} alt="" />
                </Link>
              </div>
              <button
                ref={closeRef}
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="d-lg-flex offcanvas-body p-lg-0">
              {/* <!-- Dropdown menu start shop--> */}
              <div id="navbarExampleOnHover" className="mx-2">
                <ul className="navbar-nav">
                  {/* <!-- Navbar dropdown --> */}
                  <li className="nav-item ">
                    <a
                      className="nav-link dropdown-toggle"
                      type="button"
                      id="defaultDropdown"
                      data-bs-toggle="dropdown"
                    >
                      Shop
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- Dropdown menu end shop--> */}
              {/* <!-- Dropdown menu smoothie start--> */}
              <div id="navbarExampleOnHover" className="mx-2">
                <ul className="navbar-nav">
                  {/* <!-- Navbar dropdown --> */}
                  <li className="nav-item">
                    <a
                      className="nav-link dropdown-toggle"
                      type="button"
                      id="defaultDropdown"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="true"
                      aria-expanded="false"
                    >
                      Smoothies
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- Dropdown menu smoothie end--> */}
              {/* <!-- Dropdown menu discover start--> */}
              <div id="navbarExampleOnHover" className="mx-2">
                <ul className="navbar-nav">
                  {/* <!-- Navbar dropdown --> */}
                  <li className="nav-item">
                    <a
                      className="nav-link dropdown-toggle"
                      type="button"
                      id="defaultDropdown"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="true"
                      aria-expanded="false"
                    >
                      Entdecken
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- Dropdown menu discover end--> */}
          <div className="col-lg-2 col-2 text-lg-center tw-relative">
            <Link className="navbar-brand flx-navbar-logo " href="/">
              <img
                width="100px"
                src={"/assets/icon/logo1.png"}
                className="img-fluid  tw-left-1/2 -tw-translate-x-1/2 min-[991px]:!-tw-top-7 !-tw-top-3"
                alt=""
              />
            </Link>
          </div>
          <div className="flx-social-media col-12 d-none d-lg-flex col-sm-12 col-md-12 col-lg-3 text-lg-end text-center d-flex justify-content-lg-end order-1 order-lg-0 justify-content-center pb-2 pb-lg-0">
            {/* <CountDown /> */}
          </div>
          {/*  */}
          <div className="flx-social-media col-sm-6 col-7 col-lg-auto text-lg-end text-center d-flex justify-content-center py-3">
            <ul className="navbar-nav justify-content-md-end justify-content-center">
              {/* <!-- Navbar dropdown --> */}

              <li className="nav-item d-flex align-items-center">
                <a
                  className=""
                  type="button"
                  id="defaultDropdown"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="true"
                  aria-expanded="false"
                >
                  <img
                    className="mx-xl-3 mx-2"
                    src={"/assets/svg/account-svgrepo-com.svg"}
                    alt=""
                    width="24px"
                    height="24px"
                  />
                </a>
                <ul
                  className="dropdown-menu border-0 shadow position-absolute"
                  aria-labelledby="defaultDropdown"
                >
                  <li>
                    <a
                      role="button"
                      onClick={handleLogout}
                      className="dropdown-item text-muted "
                    >
                      Login
                    </a>
                    <hr className="m-0" />
                  </li>
                </ul>
                {/* </li> */}

                {/* <Link href={isAuthenticated ? "/profile" : "/login"}>
            </Link> */}
                <Link href="/wishlist" className="position-relative hsn-border">
                  <img
                    className="mx-xl-3 mx-2"
                    src={"/assets/svg/heart-svgrepo-com.svg"}
                    alt=""
                    width="25px"
                    // height="24px"
                  />
                  <span className="position-absolute end-0 top-0 translate-middle badge rounded-pill hsn-badge">
                    {0}
                  </span>
                </Link>
                <Link href="/cart" className="position-relative hsn-border">
                  <img
                    className="mx-xl-3 mx-2"
                    src={"/assets/svg/cart-4-svgrepo-com.svg"}
                    alt=""
                    width="26px"
                    height="26px"
                  />
                  <span className="position-absolute end-0 top-0 translate-middle badge rounded-pill hsn-badge">
                    {0}
                  </span>
                </Link>
                <div className="d-block d-lg-none">{/* <CountDown /> */}</div>
              </li>
            </ul>
          </div>
          {/* <!-- sidebarmobile menu --> */}
          <div
            className="mobile-toggler flx-mobile-toggle d-lg-none col-2  text-lg-end text-center"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <i
              className="fa-solid fa-bars"
              style={{ color: "var(--green)" }}
            ></i>
          </div>
        </nav>
      </div>
      {/* <!-- mobile menu --> */}
      {/* <!-- navbar end --> */}
    </div>
  );
}
