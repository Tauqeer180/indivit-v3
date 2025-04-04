import { RecipeCard } from '@/components/Cards'
import React from 'react'

export default function SmoothieListing({ data }) {
  const yourMixes = data?.filter((d) => d?.smoothie?.created_by == 1)
  const fromCookBook = data?.filter((d) => d?.smoothie?.created_by != 1)
  return (
    <div>
      <section id="flx-discover-recipes" className="!tw-pt-10 ">
        <div className="container">
          {yourMixes?.length > 0 && (
            <>
              <h3 className="pb-5 pt-3" data-aos="fade-up" data-aos-duration="1000">
                {/* Your mixes */}
                Deine eigenen Kreationen
              </h3>
              <div className="row">
                {yourMixes?.map((smooth, index) => {
                  return (
                    <div
                      key={index}
                      className="col-12 col-md-4"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <RecipeCard
                        isButton={true}
                        data={smooth.smoothie}
                        actionTitle="mehr sehen"
                        action={`/recipedetail/${smooth?.smoothie?.unique_id}`}
                      />
                    </div>
                  )
                })}
              </div>
            </>
          )}

          {fromCookBook.length > 0 && (
            <>
              <h3 className="pt-5 pt-md-5 " data-aos="fade-up" data-aos-duration="1000">
                {/* From the Individual Cookbook */}
                Aus den indivit Rezeptvorschlägen
              </h3>
              <div className="row pt-4">
                {fromCookBook?.map((smooth, index) => {
                  return (
                    <div
                      key={index}
                      className="col-12 col-md-4"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <RecipeCard
                        isButton={true}
                        data={smooth.smoothie}
                        actionTitle="mehr sehen"
                        action={`/recipedetail/${smooth?.smoothie?.unique_id}`}
                      />
                    </div>
                  )
                })}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
