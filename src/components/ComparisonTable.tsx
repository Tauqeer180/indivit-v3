export default function ComparisonTable() {
  const features = [
    'Certified Organic',
    'Keto-friendly',
    'Fresh for Up to 6 weeks',
    'Great price: $6.50 / juice',
    'Pulp Eaten By Cows',
    'Made with Ugly Produce',
    'No Heat Pasteurization',
    'Nothing Weird Added',
    'Freaking Delicious',
    'Tested on Continuous Glucose Monitor (CGM)',
  ]

  return (
    <div className="tw-bg-[#DCE9C7] xl:tw-py-20 lg:ty-py-16 md:tw-py-12 tw-py-5  tw-overflow-x-auto">
      <div className="container">
        <table className="tw-w-full tw-border-collapse tw-rounded-lg tw-overflow-hidden">
          {/* Header */}
          <thead>
            <tr>
              <th className="tw-w-2/4 md:tw-w-1/3 tw-text-left tw-font-semibold tw-text-gray-700  tw-py-3 md:tw-px-4 tw-px-0">
                {/* Empty for spacing */}
              </th>
              <th className="tw-w-1/4 md:tw-w-1/3 tw-bg-lime-500 tw-text-white tw-text-center tw-font-bold tw-rounded-t-xl tw-py-3 md:tw-px-4 px-2 tw-font-Epilogue-bold md:tw-text-2xl tw-text-sm">
                Indivit Smoothies
              </th>
              <th className="tw-w-1/4 md:tw-w-1/3 tw-text-[#4B5563] tw-font-bold tw-text-center  tw-py-3 md:tw-px-4 tw-px-2 tw-font-Epilogue-bold md:tw-text-2xl tw-text-sm">
                Others Smoothies
              </th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {features.map((feature, idx) => (
              <tr key={idx} className="tw-border-b tw-border-gray-200">
                <td className="tw-py-3 tw-px-4 tw-text-[#161616] md:tw-text-xl tw-text-xs tw-font-bold tw-font-Epilogue-bold">
                  {feature}
                </td>
                <td className="tw-text-center tw-bg-lime-500 tw-text-white tw-font-bold md:tw-text-4xl">
                  ✓
                </td>
                <td className="tw-text-center tw-text-[#4B5563] tw-font-bold md:tw-text-4xl">✗</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
