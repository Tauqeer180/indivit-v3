import Loader from '@/components/common/Loader'

export default function Loading() {
  return (
    <div className="container tw-mx-auto tw-mt-16">
      <Loader />
      {/* Hero Section Skeleton */}
      <div className="tw-grid md:tw-grid-cols-2 tw-gap-8 tw-py-12">
        <div className="tw-space-y-6">
          <div className="tw-h-10 tw-w-3/4 tw-bg-gray-200 tw-rounded"></div>
          <div className="tw-h-10 tw-w-1/2 tw-bg-gray-200 tw-rounded"></div>
          <div className="tw-space-y-3 tw-mt-6">
            <div className="tw-h-4 tw-w-full tw-bg-gray-200 tw-rounded"></div>
            <div className="tw-h-4 tw-w-full tw-bg-gray-200 tw-rounded"></div>
            <div className="tw-h-4 tw-w-3/4 tw-bg-gray-200 tw-rounded"></div>
          </div>
          <div className="tw-flex tw-space-x-4 tw-pt-4">
            <div className="tw-h-10 tw-w-32 tw-bg-lime-200 tw-rounded-full"></div>
            <div className="tw-h-10 tw-w-32 tw-bg-gray-200 tw-rounded-full tw-border tw-border-lime-300"></div>
          </div>
        </div>
        <div className="tw-h-64 tw-w-full tw-bg-gray-200 tw-rounded-lg"></div>
      </div>

      {/* Features Section Skeleton */}
      <div className="tw-py-12">
        <div className="tw-text-center tw-mb-8">
          <div className="tw-h-8 tw-w-3/4 tw-mx-auto tw-bg-gray-200 tw-rounded"></div>
          <div className="tw-h-8 tw-w-1/2 tw-mx-auto tw-bg-gray-200 tw-rounded tw-mt-2"></div>
        </div>

        <div className="tw-space-y-3 tw-max-w-2xl tw-mx-auto tw-mb-12">
          <div className="tw-h-4 tw-w-full tw-bg-gray-200 tw-rounded"></div>
          <div className="tw-h-4 tw-w-full tw-bg-gray-200 tw-rounded"></div>
          <div className="tw-h-4 tw-w-3/4 tw-bg-gray-200 tw-rounded"></div>
        </div>

        {/* Feature Cards */}
        <div className="tw-grid md:tw-grid-cols-3 tw-gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="tw-flex tw-flex-col tw-items-center">
              <div className="tw-h-40 tw-w-40 tw-bg-gray-200 tw-rounded-full tw-mb-4"></div>
              <div className="tw-h-6 tw-w-48 tw-bg-gray-200 tw-rounded tw-mb-2"></div>
              <div className="tw-h-4 tw-w-full tw-bg-gray-200 tw-rounded"></div>
              <div className="tw-h-4 tw-w-3/4 tw-bg-gray-200 tw-rounded tw-mt-1"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
