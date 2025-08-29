'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Plus } from 'lucide-react'

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
export default function FAQSection({ data }: { data?: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  let faq = data?.faqs ? JSON.parse(data?.faqs) : faqList
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  return (
    <section id="faq-accordion" className="tw-mx-auto ">
      {/* Heading */}
      <h2 className="tw-text-3xl tw-font-bold tw-text-center tw-text-gray-800 tw-mb-12 ">
        {data?.heading || 'Häufig gestellte Fragen'}
      </h2>

      {/* FAQ Items */}
      <div className="tw-grid tw-border tw-grid-cols-1 tw-rounded-tl-2xl tw-rounded-tr-2xl tw-rounded-bl-2xl tw-rounded-br-2xl tw-bg-[#DCE9C8] tw-max-w-4xl tw-mx-auto ">
        {faq?.slice(0, 5)?.map(({ questions, answers }, index) => {
          const isFirst = index === 0
          const isLast = index === faq.slice(0, 5).length - 1

          return (
            <div
              key={index}
              className={` tw-bg-[#DCE9C8]${
                isFirst ? 'tw-rounded-t-2xl' : ''
              } ${isLast ? 'tw-rounded-b-2xl' : ''}`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`tw-w-full tw-flex tw-justify-between  tw-bg-[#DCE9C8] tw-items-center tw-border-0 tw-text-left tw-p-4 tw-text-lg tw-font-extrabold tw-text-black  ${
                  isFirst ? 'tw-rounded-tl-2xl tw-rounded-tr-2xl' : ''
                } ${isLast ? 'tw-rounded-bl-2xl tw-rounded-br-2xl' : ''}`}
              >
                <span>{questions}</span>

                <span
                  className={`tw-transition-transform tw-duration-300 ${
                    openIndex === index ? 'tw-rotate-45 tw-text-[#81CA00]' : ''
                  }`}
                >
                  <div className="tw-bg-[#81CA00] tw-rounded-[45%]">
                    <Plus className="tw-w-4 tw-h-4 m-2 tw-text-white" />
                  </div>
                </span>
              </button>

              {openIndex === index && (
                <div className="tw-px-4 tw-pb-4 tw-text-gray-700 tw-text-base tw-animate-fadeIn">
                  {answers}
                </div>
              )}
              <div className="mx-4">
                <div className="tw-h-[2px] tw-bg-gradient-to-r tw-from-[#DCE9C8] tw-via-[#FBEEF8] tw-to-[#DCE9C8]" />
              </div>
            </div>
          )
        })}
      </div>
      {/* "mehr sehen" button */}
      <div className="tw-text-center tw-mt-12 tw-max-w-4xl tw-mx-auto">
        <Link
          href="/haeufig-gestellte-fragen"
          className="tw-bg-[#81CA00] tw-text-white btn-theme tw-shadow-dark tw-px-8 tw-py-3 tw-rounded-lg tw-font-semibold hover:tw-bg-[#6fb200] tw-transition-colors tw-no-underline"
        >
          mehr sehen
        </Link>
      </div>
    </section>
  )
}
