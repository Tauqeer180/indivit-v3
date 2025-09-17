import { baseURL, fetcher } from '@/lib/fetcher'
import React from 'react'
import BlogContent from '../../components/BlogContent'
// import TOC from '../../components/TOC'
const TOC = dynamic(() => import('../../components/TOC'), { ssr: false })

import moment from 'moment'
import 'moment/locale/de'
import Image from 'next/image'
import BlogsCarousel from '../../components/BlogsCarousel'
import { FABComponent } from '@/components/common/ShareButtons'
import SEOSchema from '../../components/SEOSchema'
import { SEOSchema as SEOSchemaJSON } from '@/constant/SEOSchema'

// import { CollapseIcon } from '@/assets/svgIcons'
import dynamic from 'next/dynamic'
// moment.locale('de');

export const revalidate = 3600 * 4 // Revalidate every 4 hours
export const dynamicParams = true // or false, to 404 on unknown paths

export async function generateStaticParams() {
  let res = await fetcher('blogs?page=1&limit=5')
  console.log('posts data => ', res)
  return res?.data?.data?.map((post) => ({
    slug: String(post?.slug),
  }))
}

// export async function generateStaticParams() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_URL}api/client/blogs?page=1&limit=100`, {
//     // Use `next` options to enable static generation caching
//     next: { revalidate: 3600, tags: ['blogs'] },
//     cache: 'force-cache', // or 'no-store' if you don't want caching
//   })

//   const posts = await res.json()
//   console.log('posts data => ', posts)

//   return posts?.data?.data?.map((post: any) => ({
//     slug: String(post?.slug),
//   }))
// }
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params
  const decodedSlug = decodeURIComponent(slug)

  let res = await fetcher(`blogById?slug=${decodedSlug}`, { cache: true, revalidate: 43200 })
  let blogData = res?.data?.current
  const title = blogData?.title || 'Blogartikel'
  const description = blogData?.short_text || 'Lies unseren neuesten Blogartikel.'
  const author = blogData?.author_name || 'Indivit'
  const image = blogData?.image ? baseURL + 'blogs/' + blogData.image : undefined
  return {
    alternates: { canonical: `https://indivit.de/blog/${slug}` },
    title: blogData?.meta_title || `Indivit | ${title}`,
    description: blogData?.meta_description || description,
    authors: [{ name: author }],
    robots: 'index, follow',
    keywords: blogData?.keywords,

    openGraph: {
      title: blogData?.og_title || `Indivit | ${title}`,
      description: blogData?.og_description || description,
      images: image ? [{ url: image, width: 1200, height: 630, alt: title }] : [],
      url: `https://indivit.de/blog/${slug}`,
      // type: 'article',
      site_name: 'Indivit',
      locale: 'de_DE',
      publishedTime: blogData?.created_at,
      modifiedTime: blogData?.updated_at,
    },
    article: {
      published_time: blogData?.created_at,
      modified_time: blogData?.updated_at,
      authors: [author],
      tags: blogData?.keywords,
    },
    twitter: {
      site: '@indivitsmoothie',
      creator: '@indivitsmoothie',
      title: `Indivit | ${title}`,
      description,
      card: 'summary_large_image',
      images: image ? [{ url: image, width: 1200, height: 630, alt: title }] : [],
    },
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  const decodedSlug = decodeURIComponent(slug)
  let res = await fetcher(`blogById?slug=${decodedSlug}`, { cache: true, revalidate: 43200 })
  let blogData = res?.data?.current

  return (
    <>
      {/* {JSON.stringify(blogData, null, 2)} */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(SEOSchemaJSON?.Common?.schema, null, 2),
        }}
      />
      <SEOSchema data={blogData} />
      <div>
        <div className="tw-mx-auto tw-max-w-[1440px] ">
          <div className="tw-flex tw-flex-col  tw-mx-auto tw-overflow-hidden tw-rounded">
            <Image
              src={
                baseURL + 'blogs/' + blogData?.image || 'https://source.unsplash.com/random/480x360'
              }
              width={1920}
              height={1080}
              alt={blogData?.image_alt_text || blogData?.title}
              title={blogData?.title}
              className="tw-w-full tw-h-auto tw-max-w-6xl tw-mx-auto lg:tw-rounded-xl lg:tw-mt-36 md:tw-mt-32 tw-mt-28"
            />
            <div className=" tw-mx-auto tw-space-y-6 sm:tw-px-10 sm:tw-mx-12 md:tw-px-16 tw-px-5 ">
              <div className="tw-max-w-6xl tw-mx-auto lg:tw-px-6">
                <h1 className="tw-inline-block lg:tw-text-3xl md:tw-text-2xl sm:tw-text-xl lg:-tw-mt-10 -tw-mt-10 tw-font-bold tw-bg-white tw-w-full tw-shadow-lg tw-p-4 tw-rounded-lg tw-text-center ">
                  {blogData?.title}
                </h1>
              </div>
              {/* <div dangerouslySetInnerHTML={{ __html: TOC }}></div> */}
              {/* <div className=" tw-text-end">
              <ShareButtons />
            </div> */}
              {/* Share Component */}
              <FABComponent />
              {/* <div className="tw-space-y-2"> </div> */}
              {blogData?.author_name && (
                <div className="tw-bg-white tw-rounded-lg tw-border tw-border-solid tw-border-gray-200 tw-flex tw-items-center tw-justify-between 2xl:tw-p-4 xs:tw-p-3 tw-px-3 tw-py-2">
                  <div className="tw-flex tw-items-center tw-gap-1">
                    <Image
                      src={
                        blogData?.icon
                          ? baseURL + 'blogs/' + blogData?.icon
                          : `https://ui-avatars.com/api/?background=random&size=150&name=${blogData?.author_name}`
                      }
                      alt={blogData?.author_name}
                      title={blogData?.author_name}
                      className="tw-rounded-full tw-w-12 tw-h-12"
                      width={48}
                      height={48}
                    />
                    <p className="text-xs dark:text-gray-600 mb-0 tw-font-bold">
                      {blogData?.author_name}
                    </p>
                  </div>
                  <div className="xs:tw-space-y-1">
                    <p className="tw-text-xs d tw-mb-0 tw-font-normal tw-text-end">
                      Veröffentlicht: <br className="xs:tw-hidden" />{' '}
                      {moment(blogData?.created_at).format('DD. MMMM YYYY')}
                    </p>
                    <p className="tw-text-xs !tw-font-bold tw-mb-0 tw-font-Greycliff tw-text-end ">
                      Aktualisiert: <br className="xs:tw-hidden" />{' '}
                      {moment(blogData?.updated_at).format('DD. MMMM YYYY')}
                    </p>
                  </div>
                </div>
              )}
              {blogData?.description && (
                <div className="  lg:tw-rounded-md   tw-py-5 tw-max-w-3xl tw-mx-auto html-blog ">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blogData?.description,
                    }}
                  ></div>
                </div>
              )}
              {/* <div className="tw-max-w-3xl tw-mx-auto ">
                <h2 className="tw-text-3xl tw-flex tw-items-center tw-justify-between">
                  Inhaltsverzeichnis{' '}
                  <button
                    className=" tw-border-0  !tw-shadow-none tw-rounded"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#TocCollapse"
                    aria-expanded="false"
                    aria-controls="TocCollapse"
                  >
                    <CollapseIcon className="tw-w-8 tw-h-8" />
                  </button>
                </h2>
                <div className="collapse" id="TocCollapse">
                  <TOC data={blogData?.body} />
                </div>
              </div> */}
              <TOC data={blogData?.body} />
              <div className="  lg:tw-rounded-md  sm:tw-pb-10 md:tw-pb-16 tw-pb-5 tw-max-w-3xl tw-mx-auto html-blog ">
                {/* <p dangerouslySetInnerHTML={{ __html: body }}></p> */}
                <BlogContent data={blogData?.body} />
              </div>
            </div>
          </div>

          <div className=" md:tw-px-16 sm:tw-px-10 tw-px-5 ">
            {blogData?.related_blogs?.length > 0 && (
              <BlogsCarousel data={blogData?.related_blogs} />
            )}
          </div>
        </div>{' '}
        {/* {JSON.stringify(res)} */}
      </div>
    </>
  )
}
