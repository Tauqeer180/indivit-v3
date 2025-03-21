import { fetcher } from '@/lib/fetcher'
import Link from 'next/link'
import HomeCarousel from './components/HomeCarousel'
import WhyIndivitSection from '@/components/WhyIndivitSection'
import ProductCategory from './components/ProductCategory'
import Testimonials from '@/components/Testimonials'

export default async function Home() {
  let res = await fetcher('homePage', { cache: true })
  let sliderData = res?.data?.sliders || []
  let whyIndivitData = res?.data?.whyIndivitSection || []
  let boxCategories = res?.data?.categories || []
  let testimonialsData = res?.data?.testimonials || []
  let howItData = res?.data?.howItsWorkSection || []
  let faqsData = res?.data?.faqs || {}
  return (
    <div>
      {/* {JSON.stringify(res?.data?.sliders)} */}
      <HomeCarousel data={res?.data?.sliders} isLoading={false} />
      {whyIndivitData?.length !== 0 && <WhyIndivitSection data={whyIndivitData} />}
      <ProductCategory data={boxCategories} />
      <div>
        <Testimonials data={testimonialsData} />
      </div>
    </div>
  )
}
