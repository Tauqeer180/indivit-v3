'use client'
import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWishlist, wishlistResetAction } from '@/redux/wishlist'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useCart } from 'react-use-cart'
import { logoutAction } from '../../redux/account'
import Loader from '@/components/common/Loader'
import CountDown from '../CountDown'
import { setCommonImgs, setSiteSettings } from '../../redux/settings'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import WaveSvg from '@/assets/WaveSvg'
import { baseURL, fetcher } from '@/lib/fetcher'

// import waveSvg from "../../assets/svg/wave.svg";
export default function Navbar() {
  const closeRef = useRef()
  const [loading, setLoading] = useState(false)
  const { replace, push } = useRouter()
  const dispatch = useDispatch()
  const { slug } = useParams()
  const queryClient = useQueryClient()
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated)
  const wishlistCount = useSelector((state) => state.wishlist.count)
  const commonImgs = useSelector((state) => state.settings)

  // console.log("German ", new Intl.NumberFormat("de-DE").format(1236.31));
  useEffect(() => {
    dispatch(fetchWishlist())
  }, [])
  const handleLogout = () => {
    setLoading(true)
    // session.clear();
    dispatch(logoutAction())
    dispatch(wishlistResetAction())
    setLoading(false)
    queryClient.invalidateQueries(['wishListing', 'smoothieListing', 'boxListing'])
    push('/login')
  }

  const {
    isLoading: commonImgLoading,
    error: commonImgError,
    data: commonImgData,
  } = useQuery({
    queryKey: ['commonImg', isAuthenticated],
    queryFn: () => fetcher('custom_image', { cache: true }),
  })

  const commonImg = commonImgData?.data
  useEffect(() => {
    if (commonImg) {
      dispatch(
        setCommonImgs({
          smoothieImg: commonImg?.custom_smoothie,
          boxImg: commonImg?.custom_smoothie_box,
        })
      )
    }
  }, [commonImg])

  const {
    isLoading: boxLoading,
    error: boxError,
    data: boxCategories,
  } = useQuery({
    queryKey: ['limitedboxCategories'],
    queryFn: () => fetcher('limit_box_category'),
  })
  const {
    isLoading: settingsLoading,
    error: settingsError,
    data: settingsData,
  } = useQuery({
    queryKey: ['webSettings'],
    queryFn: () => fetcher('setting', { cache: true }),
  })
  const settings = settingsData?.data && settingsData?.data[0]

  useEffect(() => {
    dispatch(setSiteSettings(settings))
  }, [settings])

  // const boxes = boxData?.data?.data;
  const {
    isEmpty,
    totalUniqueItems,
    items: cartItems,
    updateItemQuantity,
    removeItem,
    totalItems,
  } = useCart()
  const imageName = (data) => {
    return data?.smoothie_image[0]?.images
  }

  useEffect(() => {
    const menuItems = document.querySelectorAll('.dropdown-item')
    const logoItem = document.querySelectorAll('.navbar-brand')
    const btnItems = document.querySelectorAll('.btn')
    const boxBtnItems = document.querySelectorAll('.hsn-box-btn')

    menuItems.forEach((item) => {
      item.addEventListener('click', () => {
        closeRef.current.click()
      })
    })
    logoItem.forEach((item) => {
      item.addEventListener('click', () => {
        closeRef.current.click()
      })
    })
    btnItems.forEach((item) => {
      item.addEventListener('click', () => {
        closeRef.current.click()
      })
    })
    boxBtnItems.forEach((item) => {
      item.addEventListener('click', () => {
        closeRef.current.click()
      })
    })
  }, [])

  useEffect(() => {
    if (slug) {
      closeRef.current.click()
    }
  }, [slug])

  return (
    <div>
      {loading && <Loader />}
      {/* {settings && (
        <Helmet>
          {settings?.favicon && <link rel="icon" href={settings?.favicon} />}
          {settings?.meta_description && (
            <meta
              name="description"
              content={`${settings?.meta_description}`}
            />
          )}
          {settings?.meta_keyword && (
            <meta name="keywords" content={`${settings?.meta_keyword}`} />
          )}
          <script
            src={`https://www.paypal.com/sdk/js?client-id=${process.env.REACT_APP_PAYPAL_CLIENT_ID}&currency=EUR&components=buttons&vault=true`}
            crossorigin="anonymous"
          ></script>
        </Helmet>
      )} */}
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
            style={{ visibility: 'visible' }}
          >
            {/* {JSON.stringify(boxCategories)} */}
            <div className="offcanvas-header d-lg-none">
              <div className="flx-logo">
                <Link className="navbar-brand " href="/">
                  <img width="50px" src={'/assets/icon/logo1.png'} alt="Indivit" />
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
                    <ul
                      className="dropdown-menu w-100 flx-width-shop h-auto py-0 shadow border-0"
                      aria-labelledby="defaultDropdown"
                    >
                      <div className="containe">
                        <div className="row mx-0">
                          {/* {JSON.stringify(boxCategories)} */}
                          {boxCategories?.data?.slice(0, 4).map((cat, index) => {
                            return (
                              <div
                                key={index}
                                className={`col-6 col-lg-3 p-0  `}
                                style={{
                                  background: `transparent linear-gradient(180deg, ${cat?.color} 0%, ${cat?.color}33 100%) 0% 0%`,
                                  backgroundRepeat: 'no-repeat',
                                  backgroundSize: 'padding-box',
                                }}
                                //  style={{background: `linear-gradient(to right, red, yellow)`}}
                              >
                                <div className="pt-2">
                                  <div className="text-center">
                                    <Link href={`/category/${cat?.name + '_' + cat?.id}`}>
                                      <img
                                        src={
                                          cat?.image
                                            ? baseURL + `/box-category/` + cat?.image
                                            : commonImgs?.boxImg
                                        }
                                        className="tw-w-full tw-max-h-48"
                                        // height="190px"
                                      />
                                    </Link>
                                    <h4 className="pt-4 z-index-10 !tw-mb-0">{cat?.name}</h4>
                                  </div>
                                  <div className="text-center bg-wave position-relative py-md-5 py-3">
                                    <Link
                                      href={`/category/${cat?.name + '_' + cat?.id}`}
                                      className={`btn btn-secondary  z-index-10  !tw-px-5 !tw-py-2 !tw-border-none`}
                                      style={{ backgroundColor: cat?.color }}
                                    >
                                      {cat?.button_label}
                                    </Link>
                                    <WaveSvg />
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                          {/* <div className={`col-6 col-lg-3 p-0 box-bg-3 `}>
                            <div className="pt-4">
                              <div className="text-center">
                                <Link href={`/boxes`}>
                                  <img
                                    src={commonImgs?.boxImg || ourbox}
                                    className=""
                                    height="190px"
                                    // width="150px"
                                  />
                                </Link>
                                <h4 className="pt-4 z-index-10">Alle Boxen</h4>
                              </div>
                              <div className="text-center bg-wave position-relative py-md-5 py-3">
                                <Link
                                  href={`/boxes`}
                                  className={`btn btn-secondary hsn-box-btn z-index-10 box-btn-bg-3`}
                                >
                                  Alle Boxen ansehen
                                </Link>
                                <WaveSvg />
                              </div>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </ul>
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
                    <ul className="dropdown-menu border-0 shadow" aria-labelledby="defaultDropdown">
                      <li>
                        <Link
                          href="/gesunde-smoothies-rezepte-selber-machen"
                          className="dropdown-item "
                        >
                          Smoothie Rezepte
                        </Link>
                        <hr className="m-0" />
                      </li>
                      <li>
                        <Link href="/smoothie-mixen-ideen" className="dropdown-item ">
                          Online Smoothie Mixer
                        </Link>
                        <hr className="m-0" />
                      </li>

                      <li>
                        <Link href="/beste-smoothie-zutaten-plant-based" className="dropdown-item ">
                          Zutaten
                        </Link>
                        <hr className="m-0" />
                      </li>

                      <li>
                        <Link href="/meine-smoothie-box" className="dropdown-item ">
                          Eigene Box erstellen
                        </Link>
                        <hr className="m-0" />
                      </li>

                      {/* <li>
                      <Link href="/rezepte" className="dropdown-item ">
                        Recipes Detailed
                      </Link>
                    </li> */}
                    </ul>
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
                    <ul className="dropdown-menu border-0 shadow" aria-labelledby="defaultDropdown">
                      <li>
                        <Link href="/wir-sind-die-smoothie-ninjas" className="dropdown-item ">
                          Über uns
                        </Link>
                        <hr className="m-0" />
                      </li>
                      <li>
                        <Link href="/haeufig-gestellte-fragen" className="dropdown-item ">
                          FAQs
                        </Link>
                        <hr className="m-0" />
                      </li>
                      <li>
                        <Link href="/warum-indivit" className="dropdown-item ">
                          Warum indivit?
                        </Link>
                        <hr className="m-0" />
                      </li>
                      <li>
                        <Link href="/nachhaltige-bio-lebensmittel-essen" className="dropdown-item ">
                          Nachhaltigkeit
                        </Link>
                        <hr className="m-0" />
                      </li>
                    </ul>
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
                src={'/assets/icon/logo1.png'}
                className="img-fluid  tw-left-1/2 -tw-translate-x-1/2 min-[991px]:!-tw-top-7 !-tw-top-3"
                alt=""
              />
            </Link>
          </div>
          <div className="flx-social-media col-12 d-none d-lg-flex col-sm-12 col-md-12 col-lg-3 text-lg-end text-center d-flex justify-content-lg-end order-1 order-lg-0 justify-content-center pb-2 pb-lg-0">
            <CountDown />
          </div>

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
                    src={'/assets/svg/account-svgrepo-com.svg'}
                    alt=""
                    width="24px"
                    height="24px"
                  />
                </a>
                <ul
                  className="dropdown-menu border-0 shadow position-absolute"
                  aria-labelledby="defaultDropdown"
                >
                  {isAuthenticated ? (
                    <>
                      <li>
                        <Link
                          href={isAuthenticated ? '/mein-profil' : '/login'}
                          className="dropdown-item "
                        >
                          Profil
                        </Link>
                        <hr className="m-0" />
                      </li>
                      <li>
                        <Link
                          href={isAuthenticated ? '/meine-bestellung' : '/login'}
                          className="dropdown-item "
                        >
                          Bestellungen
                        </Link>
                        <hr className="m-0" />
                      </li>
                      <li>
                        <Link
                          href={isAuthenticated ? '/mein-abonnement' : '/login'}
                          className="dropdown-item "
                        >
                          Abo
                        </Link>
                        <hr className="m-0" />
                      </li>
                      <li>
                        <Link
                          href={isAuthenticated ? '/meine-kreationen' : '/login'}
                          className="dropdown-item "
                        >
                          Meine Kreationen
                        </Link>
                        <hr className="m-0" />
                      </li>
                      <li>
                        <a
                          role="button"
                          onClick={handleLogout}
                          className="dropdown-item text-muted "
                        >
                          Logout
                        </a>
                        <hr className="m-0" />
                      </li>
                    </>
                  ) : (
                    <li>
                      <a role="button" onClick={handleLogout} className="dropdown-item text-muted ">
                        Login
                      </a>
                      <hr className="m-0" />
                    </li>
                  )}
                </ul>
                {/* </li> */}

                {/* <Link href={isAuthenticated ? "/mein-profil" : "/login"}>
            </Link> */}
                <Link href="/meine-wunschliste" className="position-relative hsn-border">
                  <img
                    className="mx-xl-3 mx-2"
                    src={'/assets/svg/heart-svgrepo-com.svg'}
                    alt=""
                    width="25px"
                    // height="24px"
                  />
                  <span className="position-absolute end-0 top-0 translate-middle badge rounded-pill hsn-badge">
                    {wishlistCount}
                  </span>
                </Link>
                <Link href="/warenkorb" className="position-relative hsn-border">
                  <img
                    className="mx-xl-3 mx-2"
                    src={'/assets/svg/cart-4-svgrepo-com.svg'}
                    alt=""
                    width="26px"
                    height="26px"
                  />
                  <span className="position-absolute end-0 top-0 translate-middle badge rounded-pill hsn-badge">
                    {totalItems}
                  </span>
                </Link>
                <div className="d-block d-lg-none">
                  <CountDown />
                </div>
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
            <i className="fa-solid fa-bars" style={{ color: 'var(--green)' }}></i>
          </div>
        </nav>
      </div>
      {/* <!-- mobile menu --> */}
      {/* <!-- navbar end --> */}
    </div>
  )
}
