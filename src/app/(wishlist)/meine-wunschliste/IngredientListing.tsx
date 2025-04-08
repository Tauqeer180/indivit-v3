import { IngredientCard } from '@/components/Cards'
import React from 'react'

export default function IngredientListing({ data }) {
  return (
    <div>
      <section id="flx-discover-recipes">
        <div className="container">
          <div className="row pt-4">
            {data
              ?.filter((d) => d?.created_by != 1)
              .map((ingred, index) => {
                return (
                  <div
                    key={index}
                    className="col-12 col-md-4 pb-4"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <IngredientCard data={ingred?.ingredient} />
                  </div>
                )
              })}
          </div>
        </div>
      </section>
    </div>
  )
}
