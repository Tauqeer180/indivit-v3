'use client'
import { BoxCard, RecipeCard, SkeltonCard } from '@/components/Cards'
import { fetcher } from '@/lib/fetcher'
import { useAppSelector } from '@/redux/hooks'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
// My Creations
export default function Page() {
  const isAuthenticated = useAppSelector((state) => state.account.isAuthenticated)
  const token = useAppSelector((state) => state.account.token)

  const {
    isLoading: smoothieLoading,
    error: smoothieError,
    data: smoothieData,
  } = useQuery({
    queryKey: ['smoothieListing', isAuthenticated],
    queryFn: () => fetcher('get_smoothie', { token }),
  })
  const smoothies = smoothieData?.smoothies || []

  const {
    isLoading: boxLoading,
    error: boxError,
    data: boxData,
  } = useQuery({
    queryKey: ['boxListing', isAuthenticated],
    queryFn: () => fetcher('smoothie_box_description', { token }),
  })
  const boxes = boxData?.data || []

  return (
    <div>
      {/* <!-- hero banner start--> */}
      <section id="flx-hero-section" className="max-xl:after:!tw-bg-none max-lg:before:!tw-bg-none">
        <div className="container">
          <div className="flx-hero-about md:!tw-pt-7 lg:!tw-pt-20 sm:!tw-pt-5 !tw-pt-3 !tw-h-auto">
            <h1 className="text-center pb-2">Mein Kreationen</h1>
          </div>
        </div>
      </section>

      <div className="flx-hero-about !tw-h-auto">
        <p className="text-center pb-2">
          Hier findest du alle Smoothies und Smoothie Boxen, die du bisher erstellt hast. Du kannst
          jedes Rezept und jede Box natürlich ganz individuell weiter anpassen – öffne sie einfach
          mit dem Online Smoothie Mixer oder mit dem Box Customizer.
        </p>

        <ul
          className="nav nav-pills mb-5 justify-content-center flx-pils-btn"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link bg-white active shadow"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-smoothies"
              role="tab"
              aria-controls="pills-smoothies"
              aria-selected="true"
            >
              {/* My Smoothies */}
              Meine Smoothies
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link bg-white shadow"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-smoothie-boxes"
              role="tab"
              aria-controls="pills-smoothie-boxes"
              aria-selected="false"
            >
              {/* My Smoothie Boxes */}
              Meine Smoothie Boxen
            </button>
          </li>
        </ul>
      </div>
      {/* <!-- hero banner end--> */}

      {/* <!-- hero banner end--> */}
      <section id="flx-nav-pils">
        <div className="container">
          <div className="tab-content" id="pills-tabContent">
            {/* <!-- All tabs setting --> */}
            <div
              className="tab-pane fade show active"
              id="pills-smoothies"
              role="tabpanel"
              tabIndex={0}
            >
              {/* <!------Our boxes start------> */}
              <div className="row">
                {smoothieLoading || smoothies.length == 0
                  ? Array.from(Array(8))?.map((box, index) => {
                      return (
                        <div
                          key={index}
                          className="col-12 col-md-4 mb-4"
                          data-aos="fade-up"
                          data-aos-duration="1000"
                        >
                          <SkeltonCard />
                        </div>
                      )
                    })
                  : smoothies
                      ?.filter((d) => d.created_by == '1')
                      ?.map((smooth, index) => {
                        return (
                          <div
                            key={index}
                            className="col-12 col-md-3 my-3"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                          >
                            <RecipeCard
                              isButton={true}
                              data={smooth}
                              actionTitle="Mehr anzeigen"
                              action={`/rezepte/${smooth?.unique_id}`}
                            />
                          </div>
                        )
                      })}
              </div>
              {/* <!------Our boxes end------> */}
            </div>

            <div className="tab-pane fade" id="pills-smoothie-boxes" role="tabpanel" tabIndex={1}>
              {/* <!------Our boxes start------> */}
              <div className="row">
                {boxLoading || boxes?.length == 0
                  ? Array.from(Array(8))?.map((em, index) => {
                      return (
                        <div
                          key={index}
                          className="col-12 col-md-4  hsn-box-bg"
                          data-aos="fade-up"
                          data-aos-duration="1000"
                        >
                          <SkeltonCard />
                        </div>
                      )
                    })
                  : boxes
                      ?.filter((d) => d.smoothie_box_descriptions[0]?.created_by == '1')
                      ?.map((box, index) => {
                        return (
                          <div
                            key={index}
                            className="col-12 col-md-3  hsn-box-bg my-3"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                          >
                            <BoxCard data={box} />
                          </div>
                        )
                      })}
              </div>
              {/* <!------Our boxes end------> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
