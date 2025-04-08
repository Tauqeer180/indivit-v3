'use client'
import HeroBanner from '@/components/common/HeroBanner'
import { fetcher } from '@/lib/fetcher'
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ConfirmDeletePopup from './ConfirmDeletePopup'
import EmptyWishlist from './EmptyWishlist'
import BoxListing from './BoxListing'
import IngredientListing from './IngredientListing'
import SmoothieListing from './SmoothieListing'

export default function Page() {
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated)

  const [selectedTab, setSelectedTab] = useState(0)

  const { isLoading: wishListingLoading, data: wishListingData } = useQuery({
    queryKey: ['wishListing', isAuthenticated],
    queryFn: () => fetcher('get_wishlist_detail'),
    enabled: isAuthenticated,
  })
  const wishlistSmoothie = wishListingData?.data?.data?.wishlist_smoothie || []
  const wishlistBox = wishListingData?.data?.data?.wishlist_smoothie_box || []
  const wishlistIngredient = wishListingData?.data?.data?.wishlist_ingredients || []

  return (
    <div>
      <ConfirmDeletePopup />
      <HeroBanner
        data={{
          title: 'Merkzettel',
        }}
      />{' '}
      <div className="text-center tw-pt-4">
        {(wishlistSmoothie.length > 0 ||
          wishlistBox.length > 0 ||
          wishlistIngredient.length > 0) && (
          <>
            <button
              className={`btn btn-primary  px-3 px-md-4   ${
                selectedTab === 0 ? 'btn-solid-success' : 'btn-outline-success'
              }`}
              onClick={() => setSelectedTab(0)}
            >
              Smoothie Rezepte ({wishlistSmoothie?.length})
            </button>

            <button
              className={`btn btn-primary mx-md-3 m-1  px-3 px-md-4   ${
                selectedTab === 1 ? 'btn-solid-success' : 'btn-outline-success'
              }`}
              onClick={() => setSelectedTab(1)}
            >
              Smoothie Boxen ({wishlistBox?.length})
            </button>

            <button
              className={`btn btn-primary px-3 px-md-4  ${
                selectedTab === 2 ? 'btn-solid-success' : 'btn-outline-success'
              }`}
              onClick={() => setSelectedTab(2)}
            >
              {/* Ingredients  */}
              Zutaten ({wishlistIngredient?.length})
            </button>
          </>
        )}
      </div>
      {/* <!-- hero banner end--> */}
      {/* <!-- about section --> */}
      <section className="">
        <div className="container ">
          <div className="row">
            {wishListingLoading ||
            (wishlistSmoothie.length == 0 &&
              wishlistBox.length == 0 &&
              wishlistIngredient.length == 0) ? (
              <EmptyWishlist
                title="Du hast bisher keinen Smoothie auf deinem Merkzettel"
                label1="Smoothie Rezepte entdecken"
                label2="Zum Online Smoothie Mixer"
                link1="/rightrecipes"
                link2="/smoothiemixer"
              />
            ) : (
              <>
                {selectedTab === 0 &&
                  (wishlistSmoothie.length > 0 ? (
                    <SmoothieListing data={wishlistSmoothie} />
                  ) : (
                    <EmptyWishlist
                      title="Du hast bisher keinen Smoothie auf deinem Merkzettel"
                      label1="Smoothie Rezepte entdecken"
                      label2="Zum Online Smoothie Mixer"
                      link1="/rightrecipes"
                      link2="/smoothiemixer"
                    />
                  ))}
                {selectedTab === 1 &&
                  (wishlistBox.length > 0 ? (
                    <BoxListing data={wishlistBox} />
                  ) : (
                    <EmptyWishlist
                      title="Du hast bisher keine Smoothie Box auf deinem Merkzettel"
                      label1="Smoothie Boxen entdecken"
                      label2="Eigene Smoothie Box zusammenstellen"
                      link1="/boxes"
                      link2="/custombox"
                    />
                  ))}
                {selectedTab === 2 &&
                  (wishlistIngredient.length > 0 ? (
                    <IngredientListing data={wishlistIngredient} />
                  ) : (
                    <EmptyWishlist
                      title="Du hast bisheer keinen Zutaten auf deinem Merkzettel"
                      label1="Zutaten entdecken"
                      link1="/ingredients"
                    />
                  ))}
              </>
            )}
          </div>
        </div>
      </section>
      {/* <!-- about section --> */}
    </div>
  )
}
