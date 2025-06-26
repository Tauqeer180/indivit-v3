import { fetcher } from '@/lib/fetcher'
import Link from 'next/link'
import HomeCarousel from './components/HomeCarousel'
import WhyIndivitSection from '@/components/WhyIndivitSection'
import ProductCategory from './components/ProductCategory'
import Testimonials from '@/components/Testimonials'
import HowItWorks from './components/HowItWorks'
import FAQSection from './components/FAQsSection'
import Head from 'next/head'
import { getSEOData } from '@/services/common'
import { SWRKeys } from '@/constant/SWRKeys'
import { SEOSchema } from '@/constant/SEOSchema'

export async function generateMetadata() {
  const { data } = await getSEOData(SWRKeys?.Home)

  return {
    alternates: {
      canonical: data?.canonical || 'https://indivit.de',
    },
    title: data?.meta_title || `Indivit`,
    description: data?.meta_description || `Indivit`,
    authors: [{ name: data?.author_name || 'Indivit' }],
    keywords: data?.keywords,
    openGraph: {
      title: data?.og_title || `Indivit`,
      description: data?.og_description || `Indivit`,
      publishedTime: data?.created_at,
      modifiedTime: data?.updated_at,
    },
    article: {
      published_time: data?.created_at || new Date(),
      modified_time: data?.updated_at || new Date(),
      authors: [data?.author_name || 'Indivit'],
      tags: data?.keywords,
    },
    twitter: {
      site: '@indivitsmoothie',
      creator: '@indivitsmoothie',
      title: data?.meta_title || `Indivit`,
      description: data?.meta_description || `Indivit`,
    },
  }
}
export default async function Home() {
  let res = await fetcher('homePage', { cache: true, revalidate: 86400 })
  let sliderData = res?.data?.sliders
  let whyIndivitData = res?.data?.whyIndivitSection || []
  let boxCategories = res?.data?.categories || []
  let testimonialsData = res?.data?.testimonials || []
  let howItData = res?.data?.howItsWorkSection || []
  let faqsData = res?.data?.faqs || {}
  // console.log('home response ', res)
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://indivit.de" />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(SEOSchema?.HomePage?.schema, null, 2),
        }}
      />
      {JSON.stringify(res)}
      <HomeCarousel data={sliderData} isLoading={false} />
      {whyIndivitData?.length !== 0 && <WhyIndivitSection data={whyIndivitData} />}
      <ProductCategory data={boxCategories} />
      <div>
        <Testimonials data={testimonialsData} />
      </div>
      <div className="tw-bg-[#DCE9C7]">
        <HowItWorks data={howItData} />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
          <path
            fill="#F8F9FA"
            fillOpacity="1"
            d="M0,128L60,106.7C120,85,240,43,360,58.7C480,75,600,149,720,154.7C840,160,960,96,1080,90.7C1200,85,1320,139,1380,165.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className=" tw-py-14">{faqsData?.faqs && <FAQSection data={faqsData} />}</div>
      {/* Footer Top */}
      <div className=" tw-bg-theme lg:tw-py-8 md:tw-py-7 sm:tw-py-6 tw-py-4">
        <Link
          href="/Smoothie%20Fastenkuren_1"
          className=" tw-flex tw-items-center tw-justify-center tw-no-underline tw-group"
        >
          <p className="tw-mr-4 tw-text-white 2xl:tw-text-[53px] group-hover:tw-text-slate-50 xl:tw-text-4xl lg:tw-text-3xl  tw-mb-0 tw-font-bold">
            Jetzt deine Smoothie-Kur starten
          </p>
          <img
            src={'/assets/icon/arrow-right-theme.png'}
            alt="Jetzt deine Smoothie-Kur starten"
            className="2xl:tw-w-11 2xl:tw-h-11 xl:tw-w-8 xl:tw-h-8 lg:tw-w-7 lg:tw-h-7 sm:tw-w-6 sm:tw-h-6 tw-w-4 tw-h-4"
          />
        </Link>
      </div>
    </div>
  )
}
