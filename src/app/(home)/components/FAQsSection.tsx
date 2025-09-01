import { cn } from '@/lib/utils'
import Image from 'next/image'
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
    <section id="faq-accordion" className="container">
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
          className="accordion tw-grid tw-grid-cols-1 tw-w-full  tw-bg-[#DCE9C7] tw-rounded-2xl tw-overflow-hidden"
        >
          {faq?.slice(0, 5)?.map(({ questions, answers }, index) => (
            <div
              key={index}
              className="accordion-item- !tw-border-none  tw-shadow-sm !tw-mb-0 !tw-bg-transparent tw-relative tw-w-full"
            >
              <button
                // onClick={() => toggleAccordion(index)}
                className={`accordion-button tw-rounded-none collapsed tw-w-full tw-text-left 2xl:!tw-p-9 xl:!tw-p-8 lg:!tw-p-7 md:!tw-p-6 !tw-p-4 !tw-bg-[#DCE9C7]  !tw-shadow-none tw-flex tw-justify-between tw-items-center xl:!tw-text-2xl lg:!tw-text-xl !tw-text-lg   tw-focus:outline-none !tw-border-none  tw-font-semibold  [aria-expanded="false"]:tw-text-black [aria-expanded="true"]:tw-text-theme [aria-expanded="true"]:!tw-font-bold`}
                data-bs-toggle="collapse"
                data-bs-target={`#faqs-${index}`}
                aria-expanded="false"
                type="button"
                aria-controls={`#faqs-${index}`}
                id={`FAQ-heading-${index}`}
                style={{ color: 'black' }}
              >
                <span>{questions}</span>
              </button>

              <div
                id={`faqs-${index}`}
                className="accordion-collapse collapse  2xl:!tw-px-9 xl:!tw-px-8 lg:!tw-px-7 md:!tw-px-6 !tw-px-4   tw-duration-300"
                aria-labelledby={`FAQ-heading-${index}`}
                data-bs-parent="#faqAccordionPanels"
              >
                <p className="tw-text-gray-600">{answers}</p>
              </div>

              <Image
                src="/assets/svg/border.svg"
                alt="border"
                width={100}
                height={3}
                className={cn(
                  'tw-w-full tw-absolute tw-bottom-0 tw-z-10',
                  index == 4 && 'tw-hidden'
                )}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="tw-text-center tw-mt-16">
        <Link
          href="/haeufig-gestellte-fragen"
          // target="_blank"
          className="btn-theme"
        >
          mehr sehen
        </Link>
      </div>
    </section>
  )
}
