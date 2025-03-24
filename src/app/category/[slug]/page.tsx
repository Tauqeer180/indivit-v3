import { BoxCard } from '@/components/Cards'
import { baseURL, fetcher } from '@/lib/fetcher'
import { cookies } from 'next/headers'
import Link from 'next/link'
import React from 'react'
// Category Sub Pages
export default async function page({ params }: any) {
  const id = params?.slug?.split('_').pop()
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value || ''

  let res = await fetcher(`smoothieBoxByCategory/${id}`, { token })
  const data = res?.data || {}
  let keySection =
    data?.box_category_key_sections?.length > 0 &&
    JSON.parse(data?.box_category_key_sections[0]?.key_sections)

  return (
    <div>
      {/* <!-- hero banner start--> */}
      <section id="flx-hero-section" className="max-xl:after:!tw-bg-none max-lg:before:!tw-bg-none">
        {/* {JSON.stringify(data)} */}
        <div className="container ">
          <div className="flx-hero-about md:!tw-pt-7 lg:!tw-pt-20 sm:!tw-pt-5 !tw-pt-3 !tw-h-auto">
            <h1 className="text-center pb-2">{data?.heading}</h1>
          </div>
        </div>
      </section>
      <div className="flx-hero-about !tw-h-auto max-md:tw-px-4">
        <p className="text-center pb-2">{data?.detail}</p>
      </div>
      {/* <!-- hero banner end--> */}

      <section id="flx-nav-pils" className="!tw-py-10">
        <div className="container">
          <div className="tab-content" id="pills-tabContent">
            {/* <!-- All tabs setting --> */}
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" tabIndex="0">
              {/* <!------Our boxes start------> */}
              <div className="row">
                {data?.boxes?.filter((withData) => withData?.smoothie_box_descriptions?.length > 0)
                  ?.length > 0
                  ? data?.boxes
                      ?.filter((withData) => withData?.smoothie_box_descriptions?.length > 0)
                      ?.map((box, index) => {
                        return (
                          <div key={index} className="col-12 col-md-4  p-3">
                            <div
                              className="  hsn-box-bg"
                              data-aos="fade-up"
                              data-aos-duration="1000"
                            >
                              <BoxCard data={box} />
                            </div>
                          </div>
                        )
                      })
                  : !data?.custom_product_image && (
                      <div className="tw-text-center tw-text-3xl">
                        Geen gegevens gevonden in deze categorie
                      </div>
                    )}

                {data?.custom_product_image && (
                  <div className="col-12 col-md-4  p-3">
                    <div className="  hsn-box-bg" data-aos="fade-up" data-aos-duration="1000">
                      <div className="box-card">
                        <div className="text-center">
                          <Link href={`${data?.custom_product_path}`}>
                            <img
                              src={baseURL + '/box-category/' + data?.custom_product_image}
                              className="img-fluid w-100 max-h-350"
                              loading="lazy"
                            />
                          </Link>
                        </div>
                      </div>
                      {/* <img src={baseURL+"/box-category/"+data?.custom_product_image} /> */}
                    </div>
                  </div>
                )}
              </div>
              {/* <!------Our boxes end------> */}
            </div>
            {/* <!-- All tabs setting end --> */}
            {/* <!-- fruit tabs setting --> */}
            {/* {categories?.map((categ, index) => {
              return (
                <div
                  className="tab-pane fade"
                  id={`pills-smoothies-${categ.id}`}
                  role="tabpanel"
                  //   aria-labelledby="pills-fruit-tab"
                  tabIndex={categ.id}
                >
                  <div className="row g-4">
                    {smoothies
                      ?.filter((obj) =>
                        obj.smoothie_categories.some(
                          (categSub) => categSub.category_id == categ.id
                        )
                      )
                      .map((smooth, index) => {
                        return (
                          <div
                            className="col-12 col-md-4"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                          >
                            <RecipeCard
                              data={smooth}
                              isButton={true}
                              actionTitle="Mehr anzeigen"
                              action={`/recipedetail/${smooth?.id}`}
                            />
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            })} */}

            {/* <!--Caffeine tabs setting end --> */}
          </div>
        </div>
        {/* <div className="d-flex justify-content-center mt-5">
          <ReactPaginate
            breakLabel="..."
            nextLabel={<i className="fa-solid fa-greater-than"></i>}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={smoothies?.last_page}
            previousLabel={<i className="fa-solid fa-less-than"></i>}
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            activeClassName="active"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
          />
        </div> */}
      </section>

      {/* {params.slug}
      {JSON.stringify(data)} */}
    </div>
  )
}
