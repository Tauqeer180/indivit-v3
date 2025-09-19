'use client'
import BoxUiBanner from '@/app/(boxes)/produkte/components/BoxUiBanner'
import AllNutrientsPopup from '@/app/(ingredients)/ernaehrung/[slug]/AllNutrientsPopup'
import TasteSection from '@/app/(ingredients)/ernaehrung/[slug]/TasteSection'
import { BgSmoothieMixer, Heart } from '@/assets/svgIcons'
import { BoxCard, IngrListforReci, RecipeCard } from '@/components/Cards'
import Loader from '@/components/common/Loader'
import { MarkdownDisplay } from '@/components/common/MarkdownDisplay'
import ShareButtons from '@/components/common/ShareButtons'
import ConfirmModal from '@/components/Modal/ConfirmModal'
import ConfirmWishModal from '@/components/Modal/ConfirmWishModal'
import ModalContainer from '@/components/Modal/ModalContainer'
import StarRating from '@/components/StarRating'
import useAddWishlist from '@/hooks/useAddWishlist'
import useCheckStock from '@/hooks/useCheckStock'
import { baseURL, fetcher } from '@/lib/fetcher'
import { useAppSelector } from '@/redux/hooks'
import { formatToGerman1 } from '@/utils/germanFormat'
import { IsWishlist } from '@/utils/IsWishlist'
import { useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
// Recipe Detail Page

export function Content({ smoothiesListing, data, relative_boxes, benefitsData }) {
  // const [loading, setLoading] = useState(false)
  // let token = useAppSelector((state) => state.account.token)

  // const addWishlistSmoothie = async (data) =>
  //   await fetcher(`wishlist_smoothie`, { data, token, method: 'POST' })

  // const { isLoading, isDone, addWishlist } = useAddWishlist(addWishlistSmoothie)
  // const { isOutofStock, checkStock } = useCheckStock()
  // const cookieStore = await cookies()
  // const token = cookieStore.get('token')?.value || ''

  // const [modalVisible, setModalVisible] = useState(false)
  // const queryClient = useQueryClient()
  // const closeRef = useRef<HTMLButtonElement | null>(null)
  // const router = useRouter()

  // const wishlist = useAppSelector((state) => state?.wishlist)

  // const handleDelete = (id) => {
  //   setLoading(true)
  //   fetcher(`del_smoothie/${id}`, { method: 'POST', token })
  //     .then((res) => {
  //       console.log(res)
  //       // if (res?.status == 200) {
  //       if (closeRef?.current) {
  //         closeRef.current.click()
  //       }
  //       toast.success('Dein Smoothie wurde gelöscht')
  //       queryClient.invalidateQueries([
  //         'customSmoothieListing',
  //         'smoothieListing',
  //         'limitedSmoothieListing',
  //         'smoothieById',
  //       ])

  //       router.push('/gesunde-smoothies-rezepte-selber-machen')
  //       // }
  //       setLoading(false)
  //     })
  //     .catch((err) => {
  //       setLoading(false)
  //       toast.error(err?.data)
  //     })
  // }
  // const handleWishlist = (id) => {
  //   IsWishlist(0, data?.id, wishlist) ? setModalVisible(true) : addWishlist({ smoothie_id: id })
  // }

  // const ingredients_suggestion = data?.smoothie_ingredient.map((e) => e.ingredient)
  // useEffect(() => {
  //   console.log("Is Out Of Stock -> ", isOutofStock);
  // }, [isOutofStock]);
  // useEffect(() => {
  //   // check
  //   checkStock(ingredients_suggestion)
  // }, [data])
  // console.log("Data --->>", data);

  // const commonImg = useAppSelector((state) => state.settings?.smoothieImg)

  return (
    <>
      <div>
        <AllNutrientsPopup data={data?.smoothie_nutrients} />

        {/* // || smoothieLoading || smoothieByIdLoading */}

        <BoxUiBanner
          // data={benefitsData?.data?.data}
          benefits={benefitsData?.data?.benefits && JSON.parse(benefitsData?.data?.benefits)}
          isHeading={false}
        />
        {/* <!-- progressbar section --> */}
        <section className="tw-bg-green">
          <div className="container">
            <div className="tw-grid md:tw-grid-cols-2 tw-py-24 tw-items-end tw-gap-10">
              <div className="tw-bg-white tw-rounded-2.5xl tw-p-7 shadow-theme-lg tw-shadow-[#ccc]">
                <h3 className="tw-text-2xl tw-font-extrabold tw-text-dark">Wie schmeckt der Smoothie?</h3>
                <TasteSection data={data?.smoothie_recipe_taste} suggest="no" basiColor={'#81CA00'} />
              </div>
              <div className="tw-bg-white tw-rounded-2.5xl tw-p-7 shadow-theme-lg tw-shadow-[#ccc]">
                <div className=" ">
                  <h2 className="tw-text-2xl tw-font-extrabold tw-text-dark">
                    Du willst es ganz &nbsp;
                    <span className="hsn-smoothies">genau</span>&nbsp; wissen?
                  </h2>
                  <p>Hier kannst du alles über die Inhaltstoffe dieses Smoothies herausfinden</p>
                  <button
                    type="button"
                    className="btn-theme tw-mt-8"
                    data-bs-toggle="modal"
                    data-bs-target="#nutrientsModal"
                    data-bs-whatever="@getbootstrap"
                  >
                    Mehr anzeigen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- progressbar section --> */}
        {/* <!------Our boxes start------> */}

        {/* <!------Our boxes end------> */}
      </div>
    </>
  )
}

export function AddWishBtn({ data }) {
  let token = useAppSelector((state) => state.account.token)
  const wishlist = useAppSelector((state) => state?.wishlist)

  const addWishlistSmoothie = async (data) =>
    await fetcher(`wishlist_smoothie`, { data, token, method: 'POST' })

  const [modalVisible, setModalVisible] = useState(false)
  const { isLoading, isDone, addWishlist } = useAddWishlist(addWishlistSmoothie)

  const handleWishlist = (id) => {
    IsWishlist(0, data?.id, wishlist) ? setModalVisible(true) : addWishlist({ smoothie_id: id })
  }

  useEffect(() => {
    if (isDone) {
      setModalVisible(false)
    }
  }, [isDone])
  return (
    <>
      <button
        className="btn-outline !tw-text-theme tw-border-theme tw-bg-transparent tw-shadow-theme"
        onClick={() => handleWishlist(data?.unique_id)}
      >
        {isLoading ? (
          <span
            className="spinner-border spinner-border-sm me-2"
            role="status"
            aria-hidden="true"
          ></span>
        ) : (
          <span className="tw-me-2">
            <Heart filled={IsWishlist(0, data?.id, wishlist)} />
          </span>
        )}
        {IsWishlist(0, data?.id, wishlist) ? 'Zur Wunschliste hinzugefügt' : 'Auf den Merkzettel'}
      </button>
      <ModalContainer isOpen={modalVisible} closeModal={() => setModalVisible(false)}>
        <ConfirmWishModal
          setModalVisible={setModalVisible}
          fun={() => addWishlist({ smoothie_id: data?.unique_id })}
          innerHtml="Du entfernst das Element gerade von deinem Merkzettel"
          okLabel="Klingt gut"
        />
      </ModalContainer>
    </>
  )
}

export function DeleteButton({ data }) {
  const [loading, setLoading] = useState(false)
  const token = useAppSelector((state) => state.account.token)
  const queryClient = useQueryClient()
  const router = useRouter()
  const closeRef = useRef(null)

  const handleDelete = (id) => {
    setLoading(true)
    fetcher(`del_smoothie/${id}`, { method: 'POST', token })
      .then((res) => {
        console.log(res)
        // if (res?.status == 200) {
        if (closeRef?.current) {
          closeRef.current.click()
        }
        toast.success('Dein Smoothie wurde gelöscht')
        queryClient.invalidateQueries([
          'customSmoothieListing',
          'smoothieListing',
          'limitedSmoothieListing',
          'smoothieById',
        ])

        router.push('/gesunde-smoothies-rezepte-selber-machen')
        // }
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        toast.error(err?.data)
      })
  }
  return (
    <>
      {loading && <Loader />}

      <ConfirmModal
        action={() => handleDelete(data?.id)}
        closeRef={closeRef}
        isLoading={loading}
        innerHtml="Bist du dir sicher, dass du dein Rezept löschen möchtest?"
      />
    </>
  )
}
