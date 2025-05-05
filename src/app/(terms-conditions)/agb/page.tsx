import HeroBanner from '@/components/common/HeroBanner'
import Loader from '@/components/common/Loader'
import TermsConditionsDetails from './TermsConditionsDetails'
import { fetcher } from '@/lib/fetcher'

async function getTermsData() {
  const data = await fetcher('terms_condition', { cache: true, revalidate: 86400 })
  return data?.data?.length > 0 ? data.data[0] : {}
}

export default async function TermsConditions() {
  const res = await getTermsData()
  const resd = res?.title_text?.split('||')

  const resdes1 = resd ? resd[0] : ''
  const resdes2 = resd ? resd[1] : ''

  return (
    <div>
      {!res && <Loader />}
      <HeroBanner
        data={{
          title: res?.title,
          description: resdes1,
          description2: resdes2,
        }}
      />
      <TermsConditionsDetails
        data={{
          title: res?.heading,
          description: res?.content,
        }}
      />
    </div>
  )
}
