// app/revalidate/page.tsx
'use client'

import { useFormState } from 'react-dom'
// import { revalidateRoute } from '../../actions/revalidate-action'
import Head from 'next/head'
import { revalidateRoute } from '@/app/actions/revalidate-action'
// import { revalidateRoute } from '../revalidate-action';

export default function RevalidatePage() {
  const [message, formAction] = useFormState(revalidateRoute, null)

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="tw-p-4 tw-py-40 tw-max-w-md tw-mx-auto">
        <h1 className="tw-text-2xl tw-font-bold tw-mb-4">Rebuild a Page</h1>
        <form action={formAction} className="tw-space-y-4">
          <input
            name="route"
            placeholder="/your-page"
            required
            className="tw-w-full tw-border tw-border-gray-300 tw-p-2 tw-rounded"
          />
          <button type="submit" className="tw-bg-blue-600 tw-text-white tw-px-4 tw-py-2 tw-rounded">
            Build Now
          </button>
          {message && <p className="tw-mt-4 tw-text-green-600">{message}</p>}
        </form>
      </div>
    </>
  )
}
