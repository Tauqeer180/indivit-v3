import { Suspense } from 'react'
import Loader from '@/components/common/Loader'

export default function WithSuspense({ fetchFunction, ContentComponent }) {
  const resPromise = fetchFunction()

  return (
    <Suspense fallback={<Loader />}>
      <ContentComponent resPromise={resPromise} />
    </Suspense>
  )
}
