import React from 'react'
import { AddWishBtn, Content, DeleteButton } from './Content'
import { baseURL, fetcher } from '@/lib/fetcher'
import { cookies } from 'next/headers'
import { SEOSchema } from '@/constant/SEOSchema'
import { modifyRecipeSchema } from '@/utils/ModifyRecipeSchema'
import ConfirmModal from '@/components/Modal/ConfirmModal'
import Link from 'next/link'
import { BoxCard, IngrListforReci, RecipeCard } from '@/components/Cards'
import ShareButtons from '@/components/common/ShareButtons'
import { BgSmoothieMixer } from '@/assets/svgIcons'
import Image from 'next/image'
import StarRating from '@/components/StarRating'
import { formatToGerman1 } from '@/utils/germanFormat'
import { MarkdownDisplay } from '@/components/common/MarkdownDisplay'
import { BreadCrumb } from '@/components/common/Common'
import { H1 } from '@/components/common/Typography'
import { Button } from '@/components/ui/button'
import { Pencil, PencilLine } from 'lucide-react'
import { cn } from '@/lib/utils'
import Fructover1 from '@/app/temp/components/fructover1'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params
  let cookieStore = cookies()
  let token = cookieStore.get('token')?.value || ''
  let smoothieByIdData
  smoothieByIdData = await fetcher(`r/slug/${slug}`, {
    token,
    cache: true,
    tags: ['smoothieById'],
  })
  if (!smoothieByIdData?.smoothie) {
    smoothieByIdData = await fetcher(`r/${slug}`, {
      token,
      cache: true,
      tags: ['smoothieById'],
    })
  }
  const data = smoothieByIdData?.smoothie

  return {
    alternates: { canonical: data?.canonical || `https://indivit.de/rezepte/${slug}` },
    title: data?.meta_title || `Indivit`,
    description: data?.meta_description,
    authors: [{ name: data?.author_name || 'Indivit' }],
    // keywords: data?.keywords,
    openGraph: {
      title: data?.og_title || `Indivit`,
      description: data?.og_description,
    },
    twitter: {
      site: '@indivitsmoothie',
      creator: '@indivitsmoothie',
      title: data?.meta_title || `Indivit | Uber uns `,
      description: data?.meta_description,
    },
  }
}

export const revalidate = 72000
export const dynamicParams = true // or false, to 404 on unknown paths
async function getRecipeList() {
  const data = await fetcher('allSmoothies', { cache: true, revalidate: 3600 })
  return data
}
export async function generateStaticParams() {
  const posts = await getRecipeList()
  console.log('Smoothies in generateStaticParams: ', JSON.stringify(posts))
  return posts?.smoothies?.map((post: any) => ({
    slug: post?.slug || post?.unique_id,
  }))
}

export default async function page({ params }: { params: { slug: string } }) {
  const smoothieId = params?.slug // `slug` should match the dynamic folder name

  let cookieStore = cookies()
  let token = cookieStore.get('token')?.value || ''
  //   Smoothies For Relative Section
  let smoothieData = await fetcher('get_smoothie', {
    token,
    cache: true,
    tags: ['smoothieListing'],
  })
  const smoothiesListing = smoothieData?.smoothies
  // Smoothie By ID
  let smoothieByIdData
  smoothieByIdData = await fetcher(`r/slug/${smoothieId}`, {
    token,
    cache: true,
    tags: [smoothieId],
  })
  //   if data not available on ID then search Slug
  if (!smoothieByIdData?.smoothie) {
    smoothieByIdData = await fetcher(`r/${smoothieId}`, {
      token,
      cache: true,
      tags: [smoothieId],
    })
  }
  const data = smoothieByIdData?.smoothie
  const relative_boxes = smoothieByIdData?.smoothie_box

  //   Benefits Section
  let benefitsData = await fetcher(`benefits`, {
    token,
    tags: ['smoothieBenefits'],
    cache: true,
    revalidate: 3600 * 24,
  })
  const stockData = data?.smoothie_ingredient.map((e) => e.ingredient)

  const isOutofStock = stockData?.some(function (element) {
    return parseInt(element?.ingredient_status) != 0
  })
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(SEOSchema?.Common?.schema, null, 2),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [
              {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://indivit.de/',
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'gesunde smoothies rezepte selber machen',
                    item: 'https://indivit.de/gesunde-smoothies-rezepte-selber-machen',
                  },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: data?.name,
                  },
                ],
              },
            ],
            null,
            2
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            modifyRecipeSchema(data, [baseURL + 'smoothie/' + data?.smoothie_picture?.picture]),
            null,
            2
          ),
        }}
      />
      <section className="tw-pt-36 tw-bg-green tw-pb-14">
        <div className="container">
          <section className="">
            <div className="">
              <BreadCrumb
                name={data?.name}
                list={[
                  { name: 'smoothie rezepte', link: '/gesunde-smoothies-rezepte-selber-machen' },
                ]}
              />
            </div>
            <div className="tw-pt-5  lg:tw-max-w-[1107px]">
              {data?.heading && <H1 className=" ">{data?.heading}</H1>}{' '}
            </div>
          </section>

          <div className="tw-grid md:tw-grid-cols-2 tw-gap-10 tw-bg-white tw-rounded-2.5xl shadow-theme-lg tw-shadow-[#ccc] tw-mt-10 tw-py-14 tw-px-5 md:tw-px-10">
            {/* <BgSmoothieMixer /> */}
            <div className="tw-bg-theme tw-rounded-2xl">
              <Image
                src={
                  data?.smoothie_picture?.picture
                    ? baseURL + 'smoothie/' + data?.smoothie_picture?.picture
                    : 'commonImg'
                }
                width={500}
                height={500}
                className="img-fluid flx-rdetailed-animation max-h- w-100 !tw-duration-500"
                alt={data?.name}
              />
            </div>
            <div className="">
              <div className="">
                {data?.counts > 0 && (
                  <h6 className="tw-flex tw-items-center tw-gap-2 tw-text-lg">
                    <StarRating value={data?.ratings} />

                    <span className="tw-mt-1">
                      {formatToGerman1(data?.ratings)} / 5,0&nbsp;(
                      {data?.counts}&nbsp;Bewertungen)
                    </span>
                  </h6>
                )}
                <div className="d-flex align-items-center ">
                  <h2 className="tw-font-extrabold tw-text-2xl">{data?.name}</h2>
                  {data?.created_by == 1 && (
                    <span className={`badge rounded-pill   text-uppercase bg-info ms-2`}>
                      {/* Customized */}
                      Maßgeschneidert
                    </span>
                  )}
                </div>
                {/* Rating Here END */}
                {isOutofStock && (
                  <span className={`badge rounded-pill text-uppercase bg-danger mb-2`}>
                    derzeit nicht verfügbar
                  </span>
                )}
                <div className="">{data?.headline}</div>
                {/* Type  0 => Recipe, 1 => Box , 2=> Ingredient */}
                <div className="tw-pt-9 tw-flex tw-items-center tw-gap-2">
                  <h5 className=" tw-font-extrabold tw-text-xl tw-mb-0">Zutaten</h5>

                  <Button
                    variant="link"
                    type="button"
                    className="!tw-py-1"
                    data-bs-toggle="modal"
                    data-bs-target="#nutrientsModal"
                    data-bs-whatever="@getbootstrap"
                  >
                    Durchschnittliche Nährwerte
                  </Button>
                </div>
                <div className="custom-scroll max-h-410 overflow-auto tw-mt-9">
                  {data?.smoothie_ingredient
                    ?.sort(
                      (a, b) =>
                        parseFloat(b.value_in_percentage) - parseFloat(a.value_in_percentage)
                    )
                    ?.map((ing, index) => {
                      return (
                        <div key={index}>
                          <IngrListforReci data={ing} />
                        </div>
                      )
                    })}
                </div>
                <div className="tw-mt-7 tw-flex tw-items-center tw-gap-4">
                  <Link
                    href={`/smoothie-mixen-ideen/${data?.unique_id}`}
                    className={cn(
                      'btn-outline shadow-theme-md !tw-text-theme tw-border-theme tw-bg-transparent tw-shadow-theme'
                    )}
                  >
                    <PencilLine size={18} className="tw-me-2" />
                    Customize
                  </Link>
                  {data?.created_by == '1' && <DeleteButton data={data} />}
                </div>
                <div className="tw-mt-9 tw-flex tw-items-center tw-gap-4 tw-flex-wrap">
                  {!isOutofStock && (
                    <Link
                      href={{
                        pathname: `/meine-smoothie-box`,
                        query: { add_me: data?.unique_id },
                      }}
                      className="btn-theme !tw-text-white xl:tw-px-7 2xl:tw-px-10 tw-py-3 tw-rounded-full tw-text-sm md:tw-text-base tw-font-bold"
                    >
                      <span>Pack mich in eine Box!</span>
                    </Link>
                  )}

                  <AddWishBtn data={data} />
                </div>
                {data?.created_by == '0' && <ShareButtons />}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container tw-my-10">
        {data?.created_by != 1 &&
          (smoothieId === 'fructover-10' ? (
            <Fructover1 />
          ) : (
            <MarkdownDisplay enableTailwind>
              {data?.smoothie_recipe_text?.recipe_text}
            </MarkdownDisplay>
          ))}
      </div>

      <Content
        smoothiesListing={smoothiesListing}
        data={data}
        relative_boxes={relative_boxes}
        benefitsData={benefitsData}
      />

      <section className="tw-bg-light-orange tw-pt-20 tw-pb-14">
        <div className="container">
          <h3
            className="tw-pb-12 tw-text-2xl lg:tw-text-3xl xl:tw-text-4xl 2xl:tw-text-5xl tw-font-extrabold"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Boxen, die diesen Smoothie enthalten...
          </h3>
          <div className="tw-grid sm:tw-grid-cols-2 md:tw-grid-cols-3 gap-5">
            {relative_boxes?.map((box, index) => {
              return (
                <div key={index} className="">
                  <div className="  hsn-box-bg" data-aos="fade-up" data-aos-duration="1000">
                    <BoxCard data={box} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className=" tw-py-20">
        <div className="container">
          <h3
            className="tw-pb-12 tw-text-2xl lg:tw-text-3xl xl:tw-text-4xl 2xl:tw-text-5xl tw-font-extrabold"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Weitere Smoothies, die dir gefallen könnten...
          </h3>
          <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-5">
            {smoothiesListing?.slice(0, 3)?.map((smooth, index) => {
              return (
                <div
                  className=""
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  key={smooth?.unique_id}
                >
                  <RecipeCard
                    isButton={true}
                    data={smooth}
                    actionTitle="Mehr anzeigen"
                    action={`/rezepte/${smooth?.slug || smooth?.unique_id}`}
                    className="!tw-bg-tea-green"
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
