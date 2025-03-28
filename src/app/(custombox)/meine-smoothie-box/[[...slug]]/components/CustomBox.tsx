'use client'
import { BoxListCard } from '@/components/Cards'
import CustomSmoothieDetailPopup from '@/components/CustomSmoothieDetailPopup'
import useAnimate from '@/hooks/useAnimate'
import { fetcher } from '@/lib/fetcher'
import { useAppSelector } from '@/redux/hooks'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import CustomBoxCard from './CustomBoxCard'
import ModalContainer from '@/components/Modal/ModalContainer'
import LoginCard from '@/app/(auth)/components/LoginCard'

export default function CustomBox({ boxSize, filtSmoothies, wishlistSmoothies, mineSmoothies }) {
  const isAuthenticated = useAppSelector((state) => state.account.isAuthenticated)
  const { animate } = useAnimate()

  const token = useAppSelector((state) => state.account.user?.token)
  const [loading, setLoading] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedSmoothie, setSelectedSmoothie] = useState([])
  const [selectedBoxSize, setSelectedBoxSize] = useState(24)
  const [quantity, setQuantity] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [modalData, setModalData] = useState({})

  const { push } = useRouter()
  const queryClient = useQueryClient()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  let addBox = (d) =>
    fetcher('`smoothie_box_description`', {
      token,
      method: 'POST',
      data: d,
    })
  const mutation = useMutation({
    mutationFn: addBox,
    onSuccess: (res) => {
      // Invalidate and refetch
      console.log('Res from Box ', res)
      if (res?.response?.status == 401) {
        setModalVisible(true)
        toast.error('Please Login to Proceed')
      } else if (res?.status == 200) {
        queryClient.invalidateQueries(['boxListing', 'limitedboxListing'])
        toast.success(res.data.message)
        push(`/b/${res?.data?.data}`)
      } else {
        toast?.error(
          'Upps, da ist wohl etwas schief gelaufen. Bitte versuch es noch einmal. Vielleicht musst du es auch mit einem anderen Browser probieren.'
        )
      }
      setLoading(false)
    },
    onError: (err) => {
      toast.error(
        err.response.status == 401 ? 'Please Login to Proceed' : err.response.data.message
      )
      setLoading(false)
    },
  })
  const handleAddBox = (data) => {
    if (isAuthenticated) {
      setLoading(true)
      mutation.mutate({
        smoothies: selectedSmoothie,
        smoothie_box_size_id: boxSize.filter((b) => b.size == selectedBoxSize)[0]?.id,
        ...data,
        short_detail: data?.short_detail ? data?.short_detail : 'k.A.',
        detail: data?.short_detail ? data?.short_detail : 'k.A.',
      })
    } else {
      setModalVisible(true)
    }
  }
  const handleQuantity = (id, value) => {
    let tempArr = [...selectedSmoothie]
    let index = tempArr?.findIndex((d) => d.id == id)
    tempArr[index].quantity += value
    setSelectedSmoothie(tempArr)
  }
  const handleRemove = (ind) => {
    let tempArr = [...selectedSmoothie]
    tempArr.splice(ind, 1)
    setSelectedSmoothie(tempArr)
  }
  useEffect(() => {
    let quant = selectedSmoothie?.reduce((x, y) => x + y.quantity, 0)
    if (quant !== quantity) {
      setQuantity(quant)
    }
  }, [selectedSmoothie])
  const handleAdd = (data) => {
    if (!selectedBoxSize) {
      toast.error('Wähle zuerst die Boxgröße')
    } else {
      animate(data?.id)
      let ifExist = selectedSmoothie?.some((d) => d.id == data?.id)
      ifExist
        ? handleQuantity(data?.id, 1)
        : setSelectedSmoothie([...selectedSmoothie, { ...data, quantity: 1 }])
    }
  }

  return (
    <div>
      {modalData && (
        <CustomSmoothieDetailPopup data={modalData} ingredients={modalData?.smoothie_ingredient} />
      )}
       <ModalContainer
        isOpen={modalVisible && !isAuthenticated}
        closeModal={() => setModalVisible(false)}
      >
        <div className="mt-5">
          <LoginCard
            title="Einloggen und Smoothie Box speichern"
            isCloseBtn={true}
            onClose={() => setModalVisible(false)}
            newTab={true}
            fromMixer={true}
          />
        </div>
      </ModalContainer>
      <section id="flx-customsmoothies" className="!tw-pt-10 ">
        <div className="container-lg container-fluid md:tw-pt-5">
          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <h3>
                Stell dir deine Smoothie Trinkmahlzeiten zusammen
                {/* Select Smoothies to make
                <span className="flx-smoothies"> Custom Box</span> */}
              </h3>
            </div>
            <div className="col-md-6 text-end">
              <form onSubmit={handleSubmit(handleAddBox)}>
                <button
                  // onClick={handleAddBox}

                  type="submit"
                  className={`btn progress-btn position-relative ${
                    quantity != selectedBoxSize ? 'pe-none' : ''
                  } 
                   `}
                  style={{
                    color: quantity >= selectedBoxSize ? 'white' : 'black',
                  }}
                >
                  <div
                    className={`progress-btn-bar  ${
                      quantity > selectedBoxSize ? 'bg-danger text-white' : ''
                    }`}
                    style={{
                      width: `${(quantity / parseInt(selectedBoxSize)) * 100}%`,
                      maxWidth: '100%',
                    }}
                  ></div>
                  {quantity == 0 && selectedBoxSize && 'Füge deinen ersten Smoothie hinzu'}
                  {/* add smoothie to get started */}
                  {!selectedBoxSize && (
                    <span>Wähle zuerst die Größe deiner Box aus</span>
                    // First choose the size of your box
                  )}
                  {quantity > 0 && quantity < parseInt(selectedBoxSize) && (
                    <span>
                      {`Füge ${parseInt(selectedBoxSize) - quantity} weitere 
                      Smoothies hinzu
                      `}
                    </span>
                  )}
                  {selectedBoxSize && quantity == selectedBoxSize && <span>Box speichern</span>}
                  {quantity > selectedBoxSize && selectedBoxSize && (
                    <span>Wähle eine größere Box</span>
                  )}
                </button>
              </form>
            </div>
          </div>
          <div className="row">
            {/* Left Side Pane Starts */}
            <div className="col-12 col-md-5 col-lg-4 h-100 max-h-842 overflow-hidden  remove-overflow">
              <div className="flx-customcol-bg h-100">
                <form className="">
                  <div className="form-group pt-3">
                    <div className="px-3">
                      <input
                        type="text"
                        className="form-control mb-3 flx-name-style"
                        aria-describedby="boxName"
                        placeholder="Wie heißt deine Smoothiebox?*"
                        {...register('name', {
                          required: true,
                        })}
                      />
                      {errors?.name?.type === 'required' && (
                        <p className="text-danger my-1">* Angabe notwendig</p>
                      )}
                      <textarea
                        type="text"
                        className="form-control mb-3 flx-name-style py-3"
                        aria-describedby="short_detail"
                        placeholder="Notiz/Beschreibung"
                        {...register('short_detail')}
                        // Optional
                      />
                      {errors?.short_detail?.type === 'required' && (
                        <p className="text-danger my-1">* Angabe notwendig</p>
                      )}
                      {/* <textarea
                        type="text"
                        className="form-control mb-3 flx-name-style py-3"
                        aria-describedby="detail"
                        placeholder="detail"
                        {...register("detail", {
                          required: true,
                        })}
                      />
                      {errors?.detail?.type === "required" && (
                        <p className="text-danger my-1">* Angabe notwendig</p>
                      )} */}
                      <select
                        className="form-select flx-csmoothies-style"
                        aria-label=" select Box Size"
                        value={selectedBoxSize || 24}
                        // Default Size will be 24
                        onChange={(e) => setSelectedBoxSize(e.target.value)}
                      >
                        <option disabled selected>
                          Wähle eine Variante aus
                        </option>
                        {boxSize
                          ?.sort((a, b) => parseInt(a?.size) - parseInt(b?.size))
                          ?.filter((b) => Number(b.for_custom_box) == 0)
                          ?.map((d, index) => {
                            return (
                              <option key={index} value={d.size}>
                                {d.label} ({d.variant})
                              </option>
                            )
                          })}
                      </select>
                      <hr />

                      <h6>
                        {/* In your box (Select Smoothie) */}
                        Wähle aus allen verfügbaren Smoothies
                      </h6>
                      <div className="flx-input-icons">
                        <i
                          className="fa fa-light fa-magnifying-glass icon"
                          // style="color: #329200;"
                        ></i>
                        <input
                          type="search"
                          className="form-control rounded"
                          placeholder="Durchsuche Smoothie Rezepte"
                          // Search Smoothie
                          aria-label="Search"
                          aria-describedby="search-addon"
                          onChange={(e) => handleInput(e.target.value, 'name')}
                        />
                      </div>
                      <hr />
                    </div>
                    <div className=" nav nav-pills flx-pils-btn justify-content-center mb-1">
                      <span
                        className={`nav-link me-1 cursor-pointer mb-2 ${
                          selectedCategory == 0 ? 'active' : 'border border-dark'
                        }`}
                        onClick={() => setSelectedCategory(0)}
                      >
                        Indivit
                      </span>
                      <span
                        className={`nav-link cursor-pointer me-1 mb-2 ${
                          selectedCategory == 1 ? 'active' : 'border border-dark'
                        }`}
                        onClick={() => setSelectedCategory(1)}
                      >
                        Favoriten
                      </span>
                      <span
                        className={`nav-link cursor-pointer mb-2 ${
                          selectedCategory == 2 ? 'active' : 'border border-dark'
                        }`}
                        onClick={() => setSelectedCategory(2)}
                      >
                        Kreationen
                      </span>
                    </div>
                    <div className="h-396 overflow-auto ps-3 pe-2 pb-5 pt-3 remove-overflow">
                      {selectedCategory == 0 &&
                        filtSmoothies?.map((smo, index) => {
                          return (
                            <div key={index}>
                              <BoxListCard
                                data={smo}
                                handleModal={() => setModalData(smo)}
                                handleAdd={() => handleAdd(smo)}
                                isDisable={selectedBoxSize == quantity}
                              />
                            </div>
                          )
                        })}
                      {selectedCategory == 1 &&
                        (wishlistSmoothies?.length > 0 ? (
                          wishlistSmoothies?.map((smo, index) => {
                            return (
                              <div key={index}>
                                <BoxListCard
                                  data={smo}
                                  handleModal={() => setModalData(smo)}
                                  handleAdd={() => handleAdd(smo)}
                                  isDisable={selectedBoxSize == quantity}
                                />
                              </div>
                            )
                          })
                        ) : (
                          <p className="text-center text-muted">
                            Du hast bisher noch keine Smoothies auf deinem Merkzettel.
                          </p>
                        ))}
                      {selectedCategory == 2 &&
                        (mineSmoothies?.length > 0 ? (
                          mineSmoothies?.map((smo, index) => {
                            return (
                              <div key={index}>
                                <BoxListCard
                                  data={smo}
                                  handleModal={() => setModalData(smo)}
                                  handleAdd={() => handleAdd(smo)}
                                  isDisable={selectedBoxSize == quantity}
                                />
                              </div>
                            )
                          })
                        ) : (
                          <p className="text-center text-muted">
                            Du hast dir bisher noch keine eigenen Smoothies erstellt.
                          </p>
                        ))}
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* Left Side Pane Ends */}

            {/* Right Side Pane Starts */}
            <div className="col-12 col-md-7 col-lg-8 flx-customsmo-bg  remove-overflow">
              {selectedSmoothie?.length > 0 ? (
                <div className="row">
                  <div className="col-12 text-center h2 fw-bold text-muted mt-2 mb-0">
                    {' '}
                    So sieht deine Auswahl aktuell aus{' '}
                  </div>
                  {selectedSmoothie?.map((smoData, index) => {
                    return (
                      <div key={index} className="col-6 col-md-6 col-lg-4">
                        {/* {JSON.stringify(smoData)} */}
                        <CustomBoxCard
                          data={smoData}
                          handleRemove={() => handleRemove(index)}
                          setModalData={() => setModalData(smoData)}
                          handleQuantity={handleQuantity}
                          selectedBoxSize={selectedBoxSize}
                          quantity={quantity}
                        />
                      </div>
                    )
                  })}
                </div>
              ) : (
                <div className="d-flex align-items-center h-100">
                  <div className="w-100 text-center">
                    <h1>Du kannst deine Auswahl anpassen</h1>
                    {/* <p>Select smoothies to start customize your box</p> */}
                  </div>
                </div>
              )}
            </div>
            {/* Right Side Pane Ends */}
          </div>
        </div>
      </section>
    </div>
  )
}
