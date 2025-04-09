import React, { useEffect, useLayoutEffect } from 'react'

import { useState } from 'react'
import { SelectListCard } from '../Cards'
import FormData from '../common/FormData.json'
// import infoIcon from '../../assets/icon/allingredientsinfo.png'
import useCategoryCount from '../../hooks/useCategoryCount'
import { ShowMoreBtn } from '../common/Common'
import useMediaQuery from '@/hooks/useMediaQuery'
export default function MixerSelectionModal({
  ingredients,
  categories,
  selectedData,
  setSelectedData,
  handleIngredientView,
}) {
  const { width } = useMediaQuery()
  const [tempList, setTempList] = useState()
  const [filtData, setFiltData] = useState(ingredients)
  const [closeRef, setCloseRef] = useState()
  const [intro, setIntro] = useState({})
  const [mainIngr, setMainIngr] = useState([])
  const [suplIngr, setSuplIngr] = useState([])
  const [liqIngr, setLiqIngr] = useState([])
  const [showMainIng, setShowMainIng] = useState(false)
  const [showSuplIng, setShowSuplIng] = useState(false)
  const [showLiqIng, setShowLiqIng] = useState(false)
  useEffect(() => {
    setFiltData(ingredients)
    setMainIngr(
      ingredients?.filter((d, i) => {
        return d.ingredient_filling_types_id == 1
      })
    )
    setSuplIngr(
      ingredients?.filter((d, i) => {
        return d.ingredient_filling_types_id == 2
      })
    )
    setLiqIngr(
      ingredients?.filter((d, i) => {
        return d.ingredient_filling_types_id == 3
      })
    )
  }, [ingredients])
  const handleSelectedData = (ingred) => {
    let index = tempList?.findIndex((d) => d.id == ingred?.id)
    if (index == -1) {
      setTempList([...tempList, { ...ingred, value_in_percentage: 0, filling_index: 2 }])
    } else {
      let tempArr = [...tempList]
      tempArr.splice(index, 1)
      setTempList(tempArr)
    }
  }
  const handleSubmit = () => {
    setSelectedData(tempList)
    setTempList([])

    closeRef.click()
  }
  useEffect(() => {
    setTempList(selectedData)
  }, [selectedData])

  const handleFilter = (e, name) => {
    let filt = ingredients.filter((character) => {
      if (name) {
        return character[name] && character[name].toLowerCase().includes(e && e.toLowerCase())
      } else {
        return e ? character?.category_id == e : character
      }
    })
    let tempIntro = FormData.ingrCategoryIntro.find((d) => d.id == e)
    setIntro(tempIntro)
    setFiltData(filt)
    setMainIngr(
      filt?.filter((d, i) => {
        return d.ingredient_filling_types_id == 1
      })
    )
    setSuplIngr(
      filt?.filter((d, i) => {
        return d.ingredient_filling_types_id == 2
      })
    )
    setLiqIngr(
      filt?.filter((d, i) => {
        return d.ingredient_filling_types_id == 3
      })
    )
  }

  return (
    <div>
      <div
        className="modal fade"
        id="ingredientSelectionModal"
        tabIndex="-1"
        aria-labelledby="ingredientSelectionModalLabel"
        aria-hidden="true"
        // data-bs-backdrop="static"
      >
        <div className="modal-dialog modal-lg md:!tw-max-w-none lg:!tw-max-w-4xl tw-max-w-fit ">
          <div className="modal-content ">
            <div className="modal-header pb-4">
              <h5 className="modal-title" id="ingredientSelectionModalLabel">
                Alle Zutaten
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ref={(r) => setCloseRef(r)}
              ></button>
            </div>

            <div className="modal-body pt-0">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                  <select
                    className="form-control form-select p-10 rounded-8 text-muted"
                    onChange={(e) => handleFilter(e.target.value)}
                  >
                    <option value="">Alle</option>
                    {categories?.map((size, index) => {
                      return (
                        <option key={index} value={size.id}>
                          {size.name}
                        </option>
                      )
                    })}
                  </select>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="input-group mb-3">
                    <span className="input-group-text bg-transparent" id="basic-addon1">
                      <i className="fa fa-light fa-magnifying-glass p-2 tw-text-theme "></i>
                    </span>

                    <input
                      type="search"
                      className="form-control  shadow-none p-2"
                      placeholder="Suche nach Zutaten…"
                      aria-label="Search"
                      aria-describedby="search-addon"
                      onChange={(e) => handleFilter(e.target.value, 'name')}
                    />
                  </div>
                </div>

                {/* <hr /> */}
                {intro && intro?.text && (
                  <div className="d-flex mb-2">
                    <img
                      src={'/assets/icon/allingredientsinfo.png'}
                      alt="Category Info"
                      title="Category Info"
                      className="img-fluid me-3"
                      width="20"
                      height="20"
                      loading="lazy"
                    />
                    <p className="mb-0">{intro?.text}</p>
                  </div>
                )}
                <section>
                  <div className="container-fluid px-1">
                    <div className="row">
                      <div className="col-md-4 col-12 border-end  ">
                        <h5 className="text-center">Hauptzutaten</h5>
                        <div className="row tw-max-h-[50vh]  overflow-auto  tw-transition-transform tw-duration-1000">
                          <div className=" tw-transition-transform tw-duration-1000">
                            {mainIngr?.length > 0 ? (
                              <>
                                {(showMainIng || width > 767
                                  ? mainIngr
                                  : mainIngr?.slice(0, 3)
                                )?.map((ingred, index) => {
                                  return (
                                    <div key={index}>
                                      <SelectListCard
                                        data={ingred}
                                        list={tempList}
                                        handleAdd={handleSelectedData}
                                        handleIngredientView={() => handleIngredientView(ingred)}
                                        modelView={true}
                                      />
                                    </div>
                                  )
                                })}
                                <ShowMoreBtn
                                  show={showMainIng}
                                  setShow={setShowMainIng}
                                  list={mainIngr}
                                />
                              </>
                            ) : (
                              <p className="text-center text-muted my-4">No Ingredients</p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-12 border-end">
                        <h5 className="text-center">Ergänzungen</h5>
                        <div className="row max-h-50vh overflow-auto">
                          <div>
                            {suplIngr?.length > 0 ? (
                              <>
                                {(showSuplIng || width > 767
                                  ? suplIngr
                                  : suplIngr?.slice(0, 3)
                                )?.map((ingred, index) => {
                                  return (
                                    <div key={index}>
                                      <SelectListCard
                                        data={ingred}
                                        list={tempList}
                                        handleAdd={handleSelectedData}
                                        handleIngredientView={() => handleIngredientView(ingred)}
                                        modelView={true}
                                      />
                                    </div>
                                  )
                                })}
                                <ShowMoreBtn
                                  show={showSuplIng}
                                  setShow={setShowSuplIng}
                                  list={suplIngr}
                                />
                              </>
                            ) : (
                              <p className="text-center text-muted my-4">No Ingredients</p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-12">
                        <h5 className="text-center">Liquids</h5>
                        <div className="row tw-max-h-[50vh] overflow-auto">
                          <div>
                            {liqIngr?.length > 0 ? (
                              <>
                                {(showLiqIng || width > 767 ? liqIngr : liqIngr?.slice(0, 3))?.map(
                                  (ingred, index) => {
                                    return (
                                      <div key={index}>
                                        <SelectListCard
                                          data={ingred}
                                          list={tempList}
                                          handleAdd={handleSelectedData}
                                          handleIngredientView={() => handleIngredientView(ingred)}
                                          modelView={true}
                                        />
                                      </div>
                                    )
                                  }
                                )}
                                <ShowMoreBtn
                                  show={showLiqIng}
                                  setShow={setShowLiqIng}
                                  list={liqIngr}
                                />
                              </>
                            ) : (
                              <p className="text-center text-muted my-4">No Ingredients</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="modal-footer justify-content-center tw-sticky tw-bottom-0 !tw-rounded-b-3xl tw-bg-white  tw-shadow-inner">
              <button
                type="button"
                className="btn btn-primary btn-outline-success text-capitalize"
                // data-bs-toggle="modal"
                // data-bs-target="#exampleModal"
                // data-bs-whatever="@getbootstrap"
                data-bs-dismiss="modal"
              >
                Jetzt nicht
              </button>
              <button
                type="button"
                className="btn btn-primary btn-solid-success"
                onClick={handleSubmit}
              >
                Speichern
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
