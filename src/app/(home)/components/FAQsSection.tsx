import Link from 'next/link'
// import { Link } from 'react-router-dom'

const faqList = [
  {
    questions: 'Was ist das Besondere an den Indivit Smoothie Fastenkuren?',
    answers:
      'Unsere Smoothie Fastenkuren sind 100% bio-zertifiziert und wissenschaftlich entwickelt. Sie versorgen dich mit wichtigen Nährstoffen, während du sanft fastest, ohne auf Geschmack oder Komfort zu verzichten.',
  },
  {
    questions: 'Kann ich die Smoothies individuell anpassen?',
    answers:
      'Das Trinken von Smoothies kann Dir helfen, Deinen täglichen Nährstoffbedarf zu decken, Dein Energieniveau zu steigern, die Verdauung zu verbessern und Deine allgemeine Gesundheit und Dein Wohlbefinden zu fördern.',
  },
  {
    questions: 'Wie lange sind die Smoothies haltbar?',
    answers:
      'Ja, Smoothies lassen sich zu Hause ganz einfach mit einem Hochleistungs-Mixer zubereiten. Wähle einfach Dein Lieblingsobst und -gemüse aus, füge z.B. die gewünschten Proteinquellen oder gesunde Fette hinzu und mixe Deinen Smoothie, bis er schön seidig glatt ist.',
  },
  {
    questions: 'Kann ich mit den Fastenkuren abnehmen?',
    answers:
      'Übliche Zutaten für Smoothies sind Bananen, Beeren, Blattgemüse, Zitrusfrüchte und meist eine Flüssigkeit der Wahl. Andere Zutaten wie Kokosraspeln, Leinsamen und Nussbutter können ebenfalls hinzugefügt werden, um einen zusätzlichen Nährwert zu erhalten.',
  },
  {
    questions: 'Wie lange dauert die Lieferung?',
    answers:
      'Smoothies können als Mahlzeitenersatz verwendet werden, wenn sie mit einem ausgewogenen Verhältnis von Eiweiß, gesunden Fetten und Kohlenhydraten zubereitet werden, um die notwendigen Nährstoffe und Energie zu liefern. Es ist jedoch wichtig, darauf zu achten, dass sie als Teil einer ausgewogenen Ernährung konsumiert werden.',
  },
]

export default function FAQSection({ data }) {
  let faq = data?.faqs ? JSON.parse(data?.faqs) : faqList
  return (
    <section id="faq-accordion">
      {/* <style jsx>{`
        .accordion-button::after {
          width: 0.75rem;
          height: 0.75rem;
          background-size: 0.75rem;
        }
      `}</style> */}
      <div className=" tw-mx-auto">
        <h2 className="tw-text-3xl tw-font-bold tw-text-center tw-text-gray-800 tw-mb-16">
          {data?.heading}
        </h2>
        <div
          id="faqAccordionPanels"
          className="accordion tw-grid tw-grid-cols-1 tw-max-w-6xl md:tw-px-20 tw-px-8 tw-mx-auto"
        >
          {faq?.slice(0, 5)?.map(({ questions, answers }, index) => (
            <div key={index} className="accordion-item !tw-border-none !tw-rounded-lg tw-shadow-sm">
              <button
                // onClick={() => toggleAccordion(index)}
                className={`accordion-button collapsed tw-w-full tw-text-left tw-p-4 tw-bg-white  !tw-rounded-lg !tw-shadow-none tw-flex tw-justify-between tw-items-center tw-text-lg  tw-focus:outline-none !tw-border-none  tw-font-medium  [aria-expanded="false"]:tw-text-black [aria-expanded="true"]:tw-text-theme [aria-expanded="true"]:!tw-font-bold`}
                data-bs-toggle="collapse"
                data-bs-target={`#faqs-${index}`}
                aria-expanded="false"
                type="button"
                aria-controls={`#faqs-${index}`}
                id={`FAQ-heading-${index}`}
                style={{ color: 'black' }}
              >
                <span>{questions}</span>
                {/* <span
                  className={`tw-transition-transform tw-duration-300 ${
                    openIndex === index ? 'tw-rotate-45' : 'tw-rotate-0'
                  }`}
                >
                  <svg
                    className="tw-w-5 tw-h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                </span> */}
              </button>

              <div
                id={`faqs-${index}`}
                className="accordion-collapse collapse  tw-p-4 tw-bg-white tw-rounded-b-lg tw-duration-300"
                aria-labelledby={`FAQ-heading-${index}`}
                data-bs-parent="#faqAccordionPanels"
              >
                <p className="tw-text-gray-600">{answers}</p>
              </div>
            </div>
          ))}
        </div>

        {/*  */}
        {/* <div className="tw-grid tw-grid-cols-1 tw-gap-6 tw-max-w-6xl md:tw-px-20 tw-px-8 tw-mx-auto">
          {faq?.slice(0, 5)?.map(({ questions, answers }, index) => (
            <div key={index} className="tw-border tw-rounded-lg tw-shadow-sm">
              <button
                onClick={() => toggleAccordion(index)}
                className={`tw-w-full tw-text-left tw-p-4 tw-bg-white tw-text-black tw-rounded-lg tw-flex tw-justify-between tw-items-center tw-text-lg  tw-focus:outline-none tw-border-none ${openIndex === index ? 'tw-text-theme tw-font-bold' : 'tw-text-black tw-font-medium'}`}
              >
                <span>{questions}</span>
                <span
                  className={`tw-transition-transform tw-duration-300 ${
                    openIndex === index ? 'tw-rotate-45' : 'tw-rotate-0'
                  }`}
                >
                  <svg
                    className="tw-w-5 tw-h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div className="tw-p-4 tw-bg-white tw-rounded-b-lg tw-duration-300">
                  <p className="tw-text-gray-600">{answers}</p>
                </div>
              )}
            </div>
          ))}
        </div> */}
      </div>
      <div className="tw-text-center tw-mt-16">
        <Link
          href="/faqs"
          // target="_blank"
          className="tw-bg-[#81CA00] tw-capitalize tw-border-none tw-text-white tw-px-8 tw-py-3 tw-rounded-lg hover:tw-bg-[#81CA00] tw-transition-colors tw-decoration-transparent hover:tw-text-white"
        >
          mehr sehen
        </Link>
      </div>
    </section>
  )
}
