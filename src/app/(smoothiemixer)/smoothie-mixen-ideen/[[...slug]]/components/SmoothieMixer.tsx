'use client'
import LoginCard from '@/app/(auth)/components/LoginCard'
import IngredientDetailPopup from '@/app/(ingredients)/ernaehrung/[slug]/IngredientDetailPopup'
import TasteSection from '@/app/(ingredients)/ernaehrung/[slug]/TasteSection'
import { getFilteredIngredients } from './Hooks'
import { BgSmoothieMixer } from '@/assets/svgIcons'
import { MixerSelectedListCard, SelectListCard, SmoothieSelectListCard } from '@/components/Cards'
import MixerSelectionModal from '@/components/Modal/MixerSelectionModal'
import ModalContainer from '@/components/Modal/ModalContainer'
import FeedbackSection from '@/components/SmoothieMixer/FeedbackSection'
import TempBlender from '@/components/TempBlender'
import useCategoryShare from '@/hooks/useCategoryShare'
import useCheckStock from '@/hooks/useCheckStock'
import useColorBlender from '@/hooks/useColorBlender'
import useHighlight from '@/hooks/useHighlight'
import useTasteCalculator from '@/hooks/useTasteCalculator'
import { fetcher } from '@/lib/fetcher'
import { useAppSelector } from '@/redux/hooks'
import { formatToGerman1 } from '@/utils/germanFormat'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { ScrollIntoview } from '@/components/common/Common'
import { useRouter } from 'next/navigation'
import Loader from '@/components/common/Loader'
import { revalidateByTag } from '@/app/actions/revalidate-action'
let boxShadowClass =
  'tw-bg-white tw-p-2 tw-rounded-xl tw-border tw-border-solid tw-border-gray-100 hover:tw-shadow-around hover:tw-border-transparent'

export default function SmoothieMixer({
  ingredients,
  categories,
  smoothieData,
  id,
  smoothieByIdData,
  smoothieRecipes,
}) {
  let containerRef = React.useRef()
  const token = useAppSelector((state) => state?.account?.token)
  const { push } = useRouter()
  const [modalVisible, setModalVisible] = useState(false)
  const isAuthenticated = useAppSelector((state) => state.account.isAuthenticated)
  const [selectedData, setSelectedData] = useState([])
  const [calcLoading, setCalcLoading] = useState(false)
  const [tempSelected, setTempSelected] = useState([])
  const [selectedIngredientView, setSelectedIngredientView] = useState({})
  const [isLowQty, setIsLowQty] = useState(false)
  const [totalShare, setTotalShare] = useState(0)

  const [feedback, setFeedback] = useState({})
  const [isFeedBackVisible, setFeedBackVisible] = useState(false)
  const [feedbackLoading, setFeedbackLoading] = useState(false)
  const [selectedDataNames, setSelectedDataNames] = useState([])
  const [relativeShare, setRelativeShare] = useState(0)
  const [fixedShare, setFixedShare] = useState(0)

  const [bottleSize, setBottleSize] = useState(250)
  const [relativeData, setRelativeData] = useState([])
  const [fixedData, setFixedData] = useState([])
  const [optionalData, setOptionalData] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [suggestedTab, setSuggestedTab] = useState(0)

  const { color, lottieColor, darkenColor, setColorArray } = useColorBlender()
  const { isOutofStock, checkStock } = useCheckStock()
  const { highlight } = useHighlight()
  const { tasteData, setRawTaste } = useTasteCalculator()
  let queryClient = useQueryClient()

  const {
    isBlattgemüseOverloaded,
    isZitrusOverloaded,
    isLiquidsOverloaded,
    zitrusShare,
    blattgemüseShare,
    checkLiquidShareML,
    checkZitrusShareML,
    checkBlattgemüseShareML,
    setRawShareData,
    liquidsCount,
    zitrusCount,
    blattgemüseCount,
    limitDisable,
  } = useCategoryShare(selectedData)

  const handleIngredientView = (d) => {
    setSelectedIngredientView(d)
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm()

  const onSubmit = (data) => {
    let category_id = smoothieData?.smoothie_categories?.map((d) => {
      return d.category_id
    })
    let ingredients = selectedData?.map((d) => {
      // debugger;
      return {
        factor_value: d.ingredient_filling[d?.filling_index].factor,
        fixed_value: d.ingredient_filling[d?.filling_index].fixed,
        ingredient_id: d.id,
        filling_type_id: d?.ingredient_filling_types_id,
        value_in_percentage: d?.value_in_percentage,
      }
    })

    // let { headline, recipe_text } = smoothieData;
    let postData = {
      smoothie_category_id: category_id,
      smoothie_id: smoothieData?.id,
      ...data,
      headline: data?.headline ? data?.headline : 'k.A.',
      recipe_text: data?.headline ? data?.headline : 'k.A.',
      ingredients,
    }

    if (isAuthenticated) {
      setLoading(true)
      // addSmoothieMutation.mutate(postData)
      fetcher('smoothies', { method: 'POST', data: postData, token }).then((res) => {
        console.log('resss ', res)
        if (res?.status === 'success') {
          queryClient.invalidateQueries([
            'customSmoothieListing',
            'smoothieListing',
            'limitedSmoothieListing',
          ])

          // addWishlist({ smoothie_id: res?.data?.data });
          toast.success(res?.message)
          setLoading(false)
          // debugger;
          revalidateByTag(res?.data)
          push(`/rezepte/${res?.data}`)
        } else {
          console.log('Err ', res)

          toast.error(
            res?.response?.status == 401 ? 'Please Login to Proceed' : err?.response?.data?.message
          )
          setLoading(false)
        }
      })
    } else {
      setModalVisible(true)
    }
  }
  const calculateRelativeValues = (data, size, optional) => {
    // data = relative data || optional Data
    // size = bottle Remaining Size
    // optioanl = if true category 3 will be treated as Fix else treated as Relative
    let tempRelative

    let sum_of_factor = relativeData.reduce(
      (x, y) =>
        x +
        (y?.filling_index >= 0 ? parseFloat(y?.ingredient_filling[y?.filling_index]?.factor) : 0),
      0
    )
    if (!optional) {
      sum_of_factor += optionalData.reduce(
        (x, y) =>
          x +
          (y?.filling_index >= 0 ? parseFloat(y?.ingredient_filling[y?.filling_index]?.factor) : 0),
        0
      )
    }
    let tempRelativeShare = 0
    tempRelative = data.map((d, i) => {
      if (optional && d?.ingredient_filling_types_id == 1) {
        // debugger;
        //only Relative
        let value_in_ml =
          (d?.filling_index >= 0 ? d?.ingredient_filling[d?.filling_index]?.factor : 0) *
          (size / sum_of_factor)
        tempRelativeShare += (value_in_ml / 250) * 100
        return {
          ...d,
          value_in_ml: value_in_ml,
          value_in_percentage: ((value_in_ml / 250) * 100).toFixed(2),
        }
      } else if (
        !optional &&
        (d?.ingredient_filling_types_id == 1 || d?.ingredient_filling_types_id == 3)
      ) {
        // Both relative and optional
        let value_in_ml =
          sum_of_factor > 0
            ? (d?.filling_index >= 0 ? d?.ingredient_filling[d?.filling_index]?.factor : 0) *
              (size / sum_of_factor)
            : 0
        tempRelativeShare += (value_in_ml / 250) * 100

        return {
          ...d,
          value_in_ml: value_in_ml,
          value_in_percentage: ((value_in_ml / 250) * 100).toFixed(2),
        }
      } else return d
    })

    setRelativeShare(tempRelativeShare)
    setSelectedData(tempRelative)
    // }
  }

  const getSpecialNewCal = (ingData, selectedData, value_in_ml) => {
    if (
      // isLiquidsOverloaded &&
      ingData?.ingredient_category?.name?.toLowerCase() == 'liquids'
    ) {
      let newMl = (value_in_ml / checkLiquidShareML(selectedData)) * 250 * 0.3

      return {
        ...ingData,
        value_in_ml: newMl,
        value_in_percentage: ((newMl / 250) * 100).toFixed(2),
      }
    } else if (
      // isLiquidsOverloaded &&
      ingData?.ingredient_category?.name?.toLowerCase() == 'zitrus'
    ) {
      let newMl = (value_in_ml / checkZitrusShareML(selectedData)) * 250 * 0.15

      return {
        ...ingData,
        value_in_ml: newMl,
        value_in_percentage: ((newMl / 250) * 100).toFixed(2),
      }
    } else if (
      // isLiquidsOverloaded &&
      ingData?.ingredient_category?.name?.toLowerCase() == 'blattgemüse'
    ) {
      let newMl = (value_in_ml / checkBlattgemüseShareML(selectedData)) * 250 * 0.2

      return {
        ...ingData,
        value_in_ml: newMl,
        value_in_percentage: ((newMl / 250) * 100).toFixed(2),
      }
    }
  }

  const calculateFixedValues = (data, optional, id) => {
    // debugger;
    let tempFixed
    let sum_of_ml = 0
    if (data?.length > 0) {
      if (optional) {
        tempFixed = selectedData?.map((d, i) => {
          if (d?.ingredient_filling_types_id == 2 || d?.ingredient_filling_types_id == 3) {
            let value_in_ml =
              d?.filling_index >= 0 ? d?.ingredient_filling[d?.filling_index]?.fixed : 0

            // temp_fixed_share += (value_in_ml / 250) * 100;
            if (
              // isLiquidsOverloaded &&
              // liquidsCount > 1 &&
              (checkLiquidShareML(selectedData) / 2.5 > 30 &&
                d?.ingredient_category?.name?.toLowerCase() == 'liquids') ||
              // zitrusCount > 1 &&
              (checkZitrusShareML(selectedData) / 2.5 > 15 &&
                d?.ingredient_category?.name?.toLowerCase() == 'zitrus') ||
              // blattgemüseCount > 1 &&
              // isBlattgemüseOverloaded &&
              (checkBlattgemüseShareML(selectedData) / 2.5 > 20 &&
                d?.ingredient_category?.name?.toLowerCase() == 'blattgemüse')
            ) {
              return getSpecialNewCal(d, selectedData, value_in_ml)
            } else {
              // setBottleSize(250 - value_in_ml);
              return {
                ...d,
                value_in_ml: value_in_ml,
                value_in_percentage: ((value_in_ml / 250) * 100).toFixed(2),
              }
            }
          } else {
            return { ...d, value_in_ml: 0, value_in_percentage: 0 }
          }
        })
      } else {
        tempFixed = selectedData?.map((d, i) => {
          if (d?.ingredient_filling_types_id == 2) {
            let value_in_ml =
              d?.filling_index >= 0 ? d?.ingredient_filling[d?.filling_index]?.fixed : 0
            // temp_fixed_share += (value_in_ml / 250) * 100;

            // setBottleSize(250 - value_in_ml);
            if (
              // isLiquidsOverloaded &&
              // d?.ingredient_category?.name?.toLowerCase() == "liquids" ||
              // zitrusCount > 1 &&
              (checkZitrusShareML(selectedData) / 2.5 > 15 &&
                d?.ingredient_category?.name?.toLowerCase() == 'zitrus') ||
              (blattgemüseCount > 1 &&
                checkBlattgemüseShareML(selectedData) / 2.5 > 20 &&
                d?.ingredient_category?.name?.toLowerCase() == 'blattgemüse')
            ) {
              return getSpecialNewCal(d, selectedData, value_in_ml)
            } else {
              return {
                ...d,
                value_in_ml: value_in_ml,
                value_in_percentage: ((value_in_ml / 250) * 100).toFixed(2),
              }
            }
          } else {
            return { ...d, value_in_ml: 0, value_in_percentage: 0 }
          }
        })
      }

      setSelectedData(tempFixed)
      sum_of_ml = tempFixed.reduce((x, y) => x + parseFloat(y?.value_in_ml), 0)
      setBottleSize(250 - sum_of_ml)
      calculateRelativeValues(tempFixed, 250 - sum_of_ml, optional)
    } else {
      calculateRelativeValues(selectedData, 250, optional)
    }
  }
  const handleRangeChange = (index, value) => {
    // Ingredient with both categories, Fixed + Relative will be Called Here *****vOptional *****
    // if Relative Ingredient Exist, Optional category Ingredient will Behave Like Fixed
    // if No Relative Ingredient, Optioanl Ingredient Will Treeted as Relative
    if (index > -1) {
      let tempArr = selectedData?.map((d, i) => {
        if (index == i) {
          d.filling_index = value
          return d
        }
        return d
      })
      setSelectedData(tempArr)
    }
    if (relativeData.length > 0) {
      // Calculated as Fixed
      // True => means Optional Data also included in Fixed calculation
      calculateFixedValues([...optionalData, ...fixedData], true, 3)
    } else if (relativeData.length == 0 && fixedData.length > 0) {
      // OPtional Data will calculated as Relative Data
      calculateFixedValues(fixedData, false, 2)
    } else calculateFixedValues([])
    // calculateOptionalValues();
  }
  const handleAddIngr = (d) => {
    setSelectedData(d)
    setCalcLoading(true)
    setTimeout(() => {
      setTempSelected(d)
      setCalcLoading(false)
    }, 500)
  }
  useEffect(() => {
    if (tempSelected.length > 0) {
      selectedData?.map((d, i) => {
        handleRangeChange()
      })
    }
  }, [tempSelected])

  const handleSelectedData = (ingred) => {
    // Function Checks, ingredient Already selected or not, if exist, remove else add
    let index = selectedData?.findIndex((d) => d.id == ingred?.id)
    if (index == -1) {
      handleAddIngr([...selectedData, { ...ingred, value_in_percentage: 0, filling_index: 2 }])
    } else {
      let tempArr = [...selectedData]
      tempArr.splice(index, 1)
      handleAddIngr(tempArr)
      // setSelectedData(tempArr);
      // setTempSelected(tempArr);
    }
  }
  let smoothieFeedback = async (data) => fetcher('feedbackComment', { data, method: 'POST' })

  const feedbackMutation = useMutation({
    mutationFn: smoothieFeedback,
    onSuccess: (res) => {
      setFeedback(res?.data)
      setFeedBackVisible(true)
      setFeedbackLoading(false)
    },
    onError: (err) => {},
  })

  const handleFeedBack = () => {
    setFeedbackLoading(true)
    feedbackMutation.mutate({
      order_number: selectedDataNames,
      ingredient_share: 100 - fixedShare,
      ingredient_sweetness: tasteData?.sweet,
      ingredient_sourness: tasteData?.sauer,
      ingredient_bitterness: tasteData?.bitter,
      ingredient_creamyness: tasteData?.creaming,
    })
  }
  let getWishlistListing = async () => fetcher('get_wishlist_detail', { token })
  const {
    isLoading: wishListingLoading,
    error: wishListingError,
    data: wishListingData,
  } = useQuery({
    queryKey: ['wishListing', isAuthenticated],
    queryFn: getWishlistListing,
    enabled: isAuthenticated,
  })

  const wishlistIngredient = wishListingData?.data?.wishlist_ingredients || []

  useEffect(() => {
    if (selectedData) {
      // debugger;
      let tempNameList = selectedData?.map((d) => {
        return d?.order_number
      })
      setSelectedDataNames(tempNameList)
      setFeedBackVisible(false)
      setFeedback(null)

      setRawTaste(selectedData)
      checkStock(selectedData)
      setColorArray(selectedData)
      setRawShareData(selectedData)
      // let isObstMin = selectedData?.find((d) => {
      //   return (
      //     (d?.ingredient_category?.name?.toLowerCase() == "obst" ||
      //       d?.ingredient_category?.name?.toLowerCase() == "gemüse") &&
      //     parseFloat(d?.value_in_percentage) < 2
      //   );
      // });
      // setIsLowQty(!!isObstMin);
      // console.log(selectedData);
      let tempQty = selectedData?.reduce((x, y) => x + parseFloat(y?.value_in_percentage), 0)
      setTotalShare(tempQty)
    }

    let relative_values = selectedData?.filter(
      (d, i) => parseInt(d?.ingredient_filling_types_id) == 1
    )
    let fixed_values = selectedData?.filter((d, i) => parseInt(d?.ingredient_filling_types_id) == 2)
    let optional_values = selectedData?.filter(
      (d, i) => parseInt(d?.ingredient_filling_types_id) == 3
    )

    setRelativeData(relative_values)
    setFixedData(fixed_values)
    setOptionalData(optional_values)
    let temp_fixed_share = 0

    if (relative_values?.length > 0) {
      temp_fixed_share = selectedData?.reduce(
        (x, y) =>
          x +
          (y?.ingredient_filling_types_id == 2 || y?.ingredient_filling_types_id == 3
            ? parseFloat(y?.value_in_percentage)
            : 0),
        0
      )
    } else {
      temp_fixed_share = selectedData?.reduce(
        (x, y) =>
          x + (y?.ingredient_filling_types_id == 2 ? parseFloat(y?.value_in_percentage) : 0),
        0
      )
    }

    setFixedShare(temp_fixed_share)

    // console.log("Liquids Count -> ", liquidsCount);
  }, [selectedData])

  useEffect(() => {
    if (id && smoothieByIdData) {
      setValue('name', smoothieData?.name)
      setValue('headline', smoothieData?.headline)
      setValue('recipe_text', smoothieData?.recipe_text)
      setValue(
        'smoothie_category_id',
        smoothieData?.smoothie_categories && smoothieData?.smoothie_categories[0]?.category_id
      )
      let tempIngredients = smoothieData?.smoothie_ingredient?.map((d) => {
        let {
          sweet,
          sauer,
          bitter,
          creaming,
          intensity,
          name,
          id,
          ingredient_filling,
          ingredient_filling_types_id,
          ingredient_color,
          picture,
          ingredient_category,
          ingredient_status,
          order_number,
        } = d?.ingredient
        return {
          ...d,
          sweet,
          sauer,
          bitter,
          creaming,
          intensity,
          name,
          id,
          picture,
          ingredient_category,
          ingredient_status,
          order_number,
          filling_index: ingredient_filling.findIndex((m) =>
            parseFloat(d?.factor_value) > 0
              ? parseFloat(m?.factor) == parseFloat(d?.factor_value)
              : parseFloat(m?.fixed) == parseFloat(d?.fixed_value)
          ),
          ingredient_filling,
          ingredient_filling_types_id,
          ingredient_color,
        }
      })

      setSelectedData(tempIngredients)
    }
  }, [smoothieByIdData])

  const handleNavigate = (id) => {
    // debugger;
    ScrollIntoview('scroll_div')
    setSuggestedTab(0)
    setTimeout(() => {
      var myElement = document.getElementById(`sugg_ing_${id}`)
      var topPos = myElement.offsetTop
      document.getElementById('scroll_div').scrollTop = topPos - 400
      highlight(`sugg_ing_${id}`)
    }, 1000)
    // ScrollIntoview();
  }
  let maxOcc = { element: null, occured: 0 }

  // to find occurances
  const res = selectedData?.reduce((acc, el) => {
    let elId = el?.category_id === undefined ? el?.ingredient.category_id : el?.category_id
    acc[elId] = acc[elId] ? acc[elId] + 1 : 1
    if (acc[elId] > maxOcc.occured) {
      maxOcc = { element: elId, occured: acc[elId] }
    }
    return acc
  }, {})
  let mostFrequent =
    maxOcc.element === undefined ? selectedData[0]?.ingredient?.category_id : maxOcc.element
  return (
    <div>
      {isLoading && <Loader />}
      {/* Login card if not authenticated */}
      <ModalContainer
        isOpen={modalVisible && !isAuthenticated}
        closeModal={() => setModalVisible(false)}
      >
        <div className="mt-5">
          <LoginCard
            title="Einloggen und Smoothie speichern"
            isCloseBtn={true}
            onClose={() => setModalVisible(false)}
            newTab={true}
            fromMixer={true}
          />
        </div>
      </ModalContainer>
      {/* Mixer ingredient selection  */}

      <MixerSelectionModal
        ingredients={ingredients}
        categories={categories}
        selectedData={selectedData}
        setSelectedData={handleAddIngr}
        handleIngredientView={handleIngredientView}
      />
      <IngredientDetailPopup
        setNull={() => setSelectedIngredientView(null)}
        data={selectedIngredientView}
      />

      {/* Modals Ends here */}

      {/* Now Content Here */}
      {/* Mixer Section */}
      <section id="flx-about-smoothies" className="!tw-pt-6 ">
        <div className="container">
          <div className="">
            <form
              style={{
                left: '50%',
                transform: 'translateX(-50%)',
                // width: "max-content",
              }}
              // onSubmit={handleSubmit(onSubmit)}
              className="row container max-w-md mx-auto g-2 w-max-content justify-content-md-end justify-content-center position-fixed bottom-10px p-2 bg-white shadow-lg border z-60 rounded-8"
            >
              <div className="col-sm-5 col-8 float-right mt-0">
                <input
                  type="text"
                  className="form-control rounded-8 p-10"
                  id="name"
                  placeholder="Wie heißt dein Smoothie? *"
                  {...register('name', {
                    required: '* Angabe notwendig',
                  })}
                />
                {errors.name && <p className="text-danger my-1">{errors?.name?.message}</p>}
              </div>
              <div className="col-sm-4 col-auto d-sm-block d-none float-right mt-0">
                <input
                  type="text"
                  className="form-control rounded-8 p-10"
                  id="headline"
                  placeholder="Notiz/Beschreibung "
                  {...register('headline')}
                />
              </div>

              {/* <div className="col-auto">
                <button
                  onClick={handleCancel}
                  className="btn btn-outline-success "
                >
                  Discard Changes
                </button>
              </div> */}
              <div className="col-sm-3 col-4 mt-0">
                <button
                  disabled={
                    !selectedData?.length ||
                    isLowQty ||
                    Math.ceil(totalShare) < 100 ||
                    isOutofStock ||
                    limitDisable
                  }
                  onClick={handleSubmit(onSubmit)}
                  className={`btn btn-solid-success w-100 ${
                    !selectedData?.length ||
                    isLowQty ||
                    Math.ceil(totalShare) < 100 ||
                    isOutofStock ||
                    limitDisable
                      ? 'bg-secondary pe-disable'
                      : ''
                  }  `}
                >
                  Speichern
                  {/* Save */}
                </button>
              </div>
            </form>

            <div className="row  pt-5 pt-md-5">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 ">
                <div className="text-center position-relative min-h-blender ">
                  <div className="w-100 position-absolute">
                    <BgSmoothieMixer filled={color} />
                    <div
                      className="z-index-10 position-absolute top-0 start-0 end-0 "
                      ref={containerRef}
                    >
                      {/* <CustomBlender filled={color} darkenColor={darkenColor} /> */}
                      {/* <SmoothieBottleMine filled={color} /> */}
                      <TempBlender selectedData={selectedData} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={`col-xs-12 col-sm-12 col-md-6 col-lg-6 ${boxShadowClass}`}>
                <div className="d-flex flex-wrap justify-content-between tw-items-center">
                  <h3 className="tw-m-0">Zutatenauswahl</h3>
                  {/* Add ingredients */}
                  <button
                    type="button"
                    disabled={isLowQty || limitDisable}
                    className={`btn btn-primary btn-outline-success ${
                      isLowQty ? 'pe-disable' : ''
                    } `}
                    data-bs-toggle="modal"
                    data-bs-target="#ingredientSelectionModal"
                    data-bs-whatever="@getbootstrap"
                    alt={limitDisable ? '* Aktuelle Auswahl nicht möglich.' : ' '}
                  >
                    Zutat hinzufügen
                    {/* Add ingredient */}
                  </button>
                </div>
                <hr />
                <div className="d-flex">
                  <h5>
                    <b> {selectedData?.length || 0} </b>
                    {selectedData?.length == 1 ? 'Zutat ausgewählt' : 'Zutaten ausgewählt'}
                    {/* ingredients Added */}
                    {totalShare > 0 && (
                      <span className="fs-14 fw-bold text-muted lh-lg">
                        &nbsp; (Dein Smoothie ist zu {formatToGerman1(totalShare)}% gefüllt)
                      </span>
                    )}
                  </h5>

                  {calcLoading && (
                    <img
                      height="20"
                      width="20"
                      className="ms-2 rotate"
                      alt="refresh"
                      src={'/assets/icon/refresh.png'}
                    />
                  )}
                </div>

                <div className="row text-center py-2  max-h-410 overflow-auto">
                  {selectedData?.length > 0 ? (
                    selectedData?.map((d, index) => {
                      return (
                        <div key={index}>
                          <MixerSelectedListCard
                            index={index}
                            data={d}
                            handleIngredientView={() => handleIngredientView(d)}
                            handleRangeChange={(value) => handleRangeChange(index, value)}
                            handleSelectedData={() => handleSelectedData(d)}
                            selectedData={selectedData}
                          />
                        </div>
                      )
                    })
                  ) : (
                    <div className="col-12">
                      <p>Du hast keine Zutat ausgewählt</p>
                      {/* You didn't add any ingredients */}
                      <button
                        type="button"
                        className="btn btn-primary btn-solid-success"
                        data-bs-toggle="modal"
                        data-bs-target="#ingredientSelectionModal"
                        data-bs-whatever="@getbootstrap"
                      >
                        Zutat hinzufügen
                        {/* Add ingredient */}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* After Mixer Section */}

      <section id="flx-taste-smoothies">
        <div className="container mb-5 mb-md-0">
          <div className="row d-flex pt-5 pt-md-5">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 pt-5">
              {/* Taste Section  */}
              <div className={boxShadowClass}>
                <div className="d-flex flex-wrap justify-content-between">
                  <div className="d-flex justify-content-start">
                    <h3>Wie schmeckt mein Smoothie?</h3>
                    <button
                      className="btn pt-2 mt-0 me-0 shadow-none d-flex align-items-start"
                      data-bs-toggle="modal"
                      data-bs-target="#TasteInfoModal"
                      data-bs-whatever="@getbootstrap"
                    >
                      <img
                        src={'/assets/icon/allingredientsinfo.png'}
                        alt=""
                        className="img-fluid"
                        width="18"
                        loading="lazy"
                      />
                    </button>
                    {calcLoading && (
                      <img
                        height="20"
                        width="20"
                        className="mt-2 rotate"
                        alt="refresh"
                        src={'/assets/icon/refresh.png'}
                      />
                    )}
                  </div>
                  <button
                    type="button"
                    className="btn btn-link btn-solid-success-color ps-0 ms-auto"
                    onClick={
                      () =>
                        toast.error('Speicher zuerst deinen Smoothie, um die Nährwerte zu sehen')
                      // save smoothie to view
                    }
                  >
                    {/* View Nutrients */}
                    Durchschnittliche Nährwerte
                  </button>
                </div>
                {selectedData?.length > 0 ? (
                  <TasteSection data={tasteData} />
                ) : (
                  <div>
                    <p>
                      Wir wissen noch nicht, wie dein Smoothie schmeckt, da er noch leer ist. Füge
                      Zutaten hinzu, um herauszufinden, wie deine Kreation schmecken wird.
                    </p>
                    <button
                      type="button"
                      className="btn btn-primary btn-solid-success"
                      data-bs-toggle="modal"
                      data-bs-target="#ingredientSelectionModal"
                      data-bs-whatever="@getbootstrap"
                    >
                      Zutat hinzufügen
                    </button>
                  </div>
                )}
              </div>
              <div className={boxShadowClass + ` tw-mt-4`}>
                <FeedbackSection
                  feedback={feedback}
                  ingredients={ingredients}
                  selectedData={selectedData}
                  handleFeedBack={handleFeedBack}
                  handleNavigate={handleNavigate}
                  isFeedBackVisible={isFeedBackVisible}
                  feedbackLoading={feedbackLoading}
                />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 pt-5">
              <div id="suggestedIngredients" className={boxShadowClass}>
                <h3>Mischvorschläge</h3>
                <ul
                  className="nav nav-pills mb-5 justify-content-center flx-pils-btn"
                  id="pills-tab"
                  role="tablist"
                >
                  {['Passende Vorschläge', 'Meine Favoriten', 'Alle Zutaten'].map((tab, i) => {
                    return (
                      <li key={i} className="nav-item" role="presentation">
                        <button
                          className={`nav-link btn-sm ${suggestedTab == i ? 'active' : ''}  `}
                          onClick={() => setSuggestedTab(i)}
                        >
                          {tab}
                        </button>
                      </li>
                    )
                  })}
                </ul>
                <div id="scroll_div" className="pb-5 row  max-h-300 overflow-auto">
                  <div className="tab-content" id="pills-tabContent">
                    <div className={`tab-pane fade ${suggestedTab == 0 && 'show active'}`}>
                      <div className="row">
                        {selectedData?.length > 0 ? (
                          getFilteredIngredients(ingredients, selectedData)
                            //   ?.slice(0, 4)
                            // ingredients
                            ?.filter((ing) =>
                              feedback?.suggested_ingredients?.flat()?.includes(ing?.id)
                            )
                            ?.map((d, i) => {
                              return (
                                <div key={i} id={`sugg_ing_${d?.id}`} className="tw-border-y-2 ">
                                  <SelectListCard
                                    data={d}
                                    modelView={true} // info Icon
                                    list={selectedData}
                                    handleAdd={handleSelectedData}
                                    handleIngredientView={() => handleIngredientView(d)}
                                  />
                                </div>
                              )
                            })
                        ) : (
                          <div>
                            <p>
                              Wir können noch keine sinnvollen Vorschläge generieren, da dein
                              Smoothie leer ist.
                            </p>
                            <button
                              type="button"
                              className="btn btn-primary btn-solid-success"
                              data-bs-toggle="modal"
                              data-bs-target="#ingredientSelectionModal"
                              data-bs-whatever="@getbootstrap"
                            >
                              Zutat hinzufügen
                            </button>
                          </div>
                        )}
                        {!feedback && selectedData?.length > 0 && (
                          <div className="text-center">
                            <button
                              type="button"
                              disabled={feedbackLoading}
                              className="btn btn-primary btn-solid-success"
                              onClick={handleFeedBack}
                            >
                              {feedbackLoading ? (
                                <div>
                                  <span
                                    className="spinner-grow spinner-grow-sm me-2"
                                    role="status"
                                    aria-hidden="true"
                                  ></span>
                                  Loading...
                                </div>
                              ) : (
                                'Gib mir Feedback'
                              )}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                    <div
                      className={`tab-pane fade ${suggestedTab == 1 && 'show active'}`}
                      id={`pills-suggested-1`}
                      role="tabpanel"
                    >
                      {wishlistIngredient.length > 0 ? (
                        wishlistIngredient?.map((d, i) => {
                          return (
                            <div key={i}>
                              <SelectListCard
                                data={d?.ingredient}
                                list={selectedData}
                                handleAdd={handleSelectedData}
                                modelView={true}
                                handleIngredientView={() => handleIngredientView(d?.ingredient)}
                              />
                            </div>
                          )
                        })
                      ) : (
                        <div>
                          <p>Du hast bisher keine Zutaten auf deinem Merkzettel.</p>
                        </div>
                      )}
                    </div>
                    <div className={`tab-pane fade ${suggestedTab == 2 && 'show active'}`}>
                      <div className="row">
                        {ingredients?.map((d, i) => {
                          return (
                            <div key={i}>
                              <SelectListCard
                                data={d}
                                modelView={true} // Info Icon
                                list={selectedData}
                                handleAdd={handleSelectedData}
                                handleIngredientView={() => handleIngredientView(d)}
                              />
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={boxShadowClass + ` tw-mt-4`}>
                <h3>Fertige Rezepte</h3>
                <ul
                  className="nav nav-pills mb-5 justify-content-center flx-pils-btn"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link btn-sm"
                      data-bs-toggle="pill"
                      data-bs-target="#recommended-recipes"
                      type="button"
                      role="tab"
                      aria-controls="recommended-recipes"
                      aria-selected="false"
                    >
                      Vorschläge
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link btn-sm active"
                      data-bs-toggle="pill"
                      data-bs-target="#all-recipes"
                      type="button"
                      role="tab"
                      aria-controls="all-recipes"
                      aria-selected="false"
                    >
                      Alle
                    </button>
                  </li>
                </ul>
                <div className="pb-5 row  max-h-300 overflow-auto">
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show" id="recommended-recipes" role="tabpanel">
                      <div className="row">
                        {selectedData?.length > 0 ? (
                          smoothieRecipes
                            ?.filter((obj) =>
                              obj.smoothie_categories.some((d) => d.category_id == mostFrequent)
                            )
                            ?.map((d, i) => {
                              return (
                                <div key={i}>
                                  <SmoothieSelectListCard data={d} />
                                </div>
                              )
                            })
                        ) : (
                          <div>
                            <p>
                              Wir können noch keine sinnvollen Vorschläge generieren, da dein
                              Smoothie leer ist.
                            </p>
                            <button
                              type="button"
                              className="btn btn-primary btn-solid-success"
                              data-bs-toggle="modal"
                              data-bs-target="#ingredientSelectionModal"
                              data-bs-whatever="@getbootstrap"
                            >
                              Zutat hinzufügen
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="tab-pane fade show active" id="all-recipes" role="tabpanel">
                      <div className="row">
                        {smoothieRecipes?.map((d, i) => {
                          return (
                            <div key={i}>
                              <SmoothieSelectListCard data={d} />
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
