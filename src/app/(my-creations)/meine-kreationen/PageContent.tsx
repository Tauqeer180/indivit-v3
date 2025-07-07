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
                              action={`/rezepte/${smooth?.slug || smooth?.unique_id}`}
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
