import React from 'react'
import HeroBanner from '../../components/common/HeroBanner'
import Map from './Map'
import Image from 'next/image'
import ContactForm from './contact'
import Link from 'next/link'
import { getSEOData } from '@/services/common'
import { SWRKeys } from '@/constant/SWRKeys'

export async function generateMetadata() {
  const { data } = await getSEOData(SWRKeys?.Contact)

  return {
    alternates: {
      canonical: data?.canonical || 'https://indivit.de',
    },
    title: data?.meta_title || `Indivit`,
    description: data?.meta_description || `Indivit`,
    authors: [{ name: data?.author_name || 'Indivit' }],
    keywords: data?.keywords,
    openGraph: {
      title: data?.og_title || `Indivit`,
      description: data?.og_description || `Indivit`,
      publishedTime: data?.created_at,
      modifiedTime: data?.updated_at,
    },
    article: {
      published_time: data?.created_at || new Date(),
      modified_time: data?.updated_at || new Date(),
      authors: [data?.author_name || 'Indivit'],
      tags: data?.keywords,
    },
    twitter: {
      site: '@indivitsmoothie',
      creator: '@indivitsmoothie',
      title: data?.meta_title || `Indivit`,
      description: data?.meta_description || `Indivit`,
    },
  }
}
export default function Contact() {
  return (
    <div>
      <HeroBanner
        data={{
          title: 'Kontaktiere uns',
          description:
            'Hast Du eine Frage, eine Anregung oder ein Feedback? Setze Dich mit uns in Verbindung - wir freuen uns immer, von Dir zu hören',
        }}
        bgImg=" !tw-bg-contact"
      />

      {/* <!-- contact us Form--> */}
      <section id="contact" className="!tw-pt-10 ">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-6">
              <div className="contact-wrap w-100">
                <h3>
                  Du brauchst Hilfe?
                  {/* Need Help? */}
                </h3>
                <p className="pb-4">
                  {/* Get in touch with us and let's start a conversation about how
                  we can help you. */}
                  Setze Dich mit uns in Verbindung und lass uns darüber sprechen, wie wir Dir helfen
                  können.
                </p>

                {/* Contact Form */}
                <ContactForm />

                {/* Containt Form End */}
              </div>
            </div>
            <div className="col-md-6 contant-info">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active  border-top-0 border-end-0 border-start-0 !tw-bg-transparent"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    <h3>Kontakt</h3>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link  border-top-0 border-end-0 border-start-0 !tw-bg-transparent"
                    id="map-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#map"
                    type="button"
                    role="tab"
                    aria-controls="map"
                    aria-selected="true"
                  >
                    <h3>Google Map</h3>
                  </button>
                </li>
              </ul>
              <div className="tab-content tw-pt-6" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="flx-iconbox ">
                    <ul>
                      <li>
                        <Image
                          src="/assets/icon/icon.png"
                          alt="address"
                          className="img-fluid flx-email"
                          width={50}
                          height={50}
                        />
                      </li>
                      <li className="ps-3">
                        <h4>Schreib uns einen Brief</h4>
                        <p>Kiefholzstr. 25, 12435 Berlin, Deutschland</p>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <Image
                          src="/assets/icon/icon1.png"
                          alt="email"
                          className="img-fluid flx-email"
                          width={50}
                          height={50}
                        />
                      </li>
                      <li className="ps-3">
                        <h4>Schreib uns eine E-Mail</h4>
                        <Link
                          href="mailto:smoothie@indivit.de"
                          className="tw-text-black tw-no-underline hover:tw-text-theme"
                        >
                          smoothie@indivit.de
                        </Link>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <Image
                          src="/assets/icon/icon2.png"
                          alt="phone"
                          className="img-fluid flx-email"
                          width={50}
                          height={50}
                        />
                      </li>
                      <li className="ps-3">
                        <h4>Ruf uns an</h4>
                        <Link
                          href="tel:03053010813"
                          className="tw-text-black tw-no-underline hover:tw-text-theme"
                        >
                          030 53010813
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tab-pane fade" id="map" role="tabpanel" aria-labelledby="map-tab">
                  <Map />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
