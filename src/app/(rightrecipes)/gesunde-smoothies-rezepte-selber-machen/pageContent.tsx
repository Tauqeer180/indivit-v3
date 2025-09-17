import { OctagonShapeIcon } from '@/assets/svgIcons'
import Image from 'next/image'
import React from 'react'

export default function PageContent() {
  return (
    <div>
      <div className="tw-py-24 tw-bg-[#FAF4D1] tw-relative tw-z-0">
        <div className="container tw-relative">
          <OctagonShapeIcon
            className="tw-absolute -tw-top-14 tw-left-0   tw-opacity-80 tw-rounded-md -tw-z-10"
            fill="#DCE9C7"
          />
          <section className="tw-relative tw-bg-white tw-rounded-[30px]  tw-shadow-lg tw-pt-10 xl:tw-pt-14 shadow-theme-xl tw-shadow-dark tw-overflow-hidden ">
            <h1 className="tw-text-xl tw-max-w-3xl tw-mx-auto  tw-text-muted tw-text-center md:tw-text-left tw-mb-10">
              Ob als <strong className="tw-text-dark">Low Carb Frühstück</strong>, schneller Snack
              oder nährstoffreiche Hauptmahlzeit – mit diesen{' '}
              <strong className="tw-text-dark">gesunden Smoothie Rezepten</strong> verwandelst du
              deinen Mixer in eine Vitalstoffquelle. Wir zeigen dir, wie du weitere{' '}
              <strong className="tw-text-dark">Smoothies selber machst</strong>, die nicht nur
              lecker schmecken, sondern deinen Körper mit Vitaminen und Ballaststoffen versorgen.
            </h1>
            <div className="tw-flex tw-justify-center md:tw-justify-start ">
              <Image
                src="https://live.staticflickr.com/4186/34619402661_5265242c76_b.jpg"
                alt="Smoothie-Zutaten mit Obst und Gemüse"
                className="tw-rounded-lg  tw-w-full"
                width={1000}
                height={500}
              />
            </div>
          </section>
        </div>
      </div>
      <div className=" tw-p-4  tw-mb-6 tw-mx-auto tw-max-w-4xl ">
        <span className="tw-text-5xl tw-mr-2 tw-mb-6">🍃</span>
        <h2 className="tw-text-5xl tw-font-bold  tw-mb-4 tw-leading-tight">
          Grüne Smoothie Rezepte: <br className="tw-hidden lg:tw-block" /> Power aus dem Mixer
        </h2>

        <div className="tw-bg-tea-green tw-text-lg tw-bg-[#] tw-p-7 tw-rounded-2.5xl shadow-theme-lg tw-shadow-[#ccc] tw-mb-4">
          <h3 className="tw-text-2xl tw-font-extrabold tw-text-dark">
            Klassiker mit{' '}
            <a href="#" className="tw-text-theme hover:tw-underline">
              Spinat
            </a>{' '}
            &{' '}
            <a href="#" className="tw-text-theme hover:tw-underline">
              Avocado
            </a>
          </h3>
          <p className=" tw-italic">Für 2 Portionen</p>
          <ul className="tw-list-disc tw-list-inside  tw-mt-2">
            <li>
              - 100g{' '}
              <a href="#" className="tw-text-theme hover:tw-underline">
                Babyspinat
              </a>{' '}
              (frisch oder TK)
            </li>
            <li>
              - ½{' '}
              <a href="#" className="tw-text-theme hover:tw-underline">
                Avocado
              </a>
            </li>
            <li>
              - 1{' '}
              <a href="#" className="tw-text-theme hover:tw-underline">
                Banane
              </a>
            </li>
            <li>- 200ml ungesüßter Mandeldrink</li>
            <li>
              - 1 TL{' '}
              <a href="#" className="tw-text-theme hover:tw-underline">
                Matcha
              </a>
              -Pulver
            </li>
          </ul>
          <p className="tw-mt-3  ">
            <strong className="tw-text-dark">Zubereitung</strong>: Alle Zutaten mixen bis zur
            cremigen Konsistenz. Dieses{' '}
            <strong className="tw-text-dark">grüne Smoothie Rezept</strong> liefert Vitamin K für
            die normale Blutgerinnung und Magnesium gegen Müdigkeit.
          </p>
        </div>

        <div className="tw-bg-tea-green tw-text-lg tw-p-7 tw-rounded-2.5xl shadow-theme-lg tw-shadow-[#ccc]">
          <h3 className="tw-text-2xl tw-font-extrabold tw-text-dark">
            Detox-Variante mit{' '}
            <a href="#" className="tw-text-theme hover:tw-underline">
              Grünkohl
            </a>
          </h3>
          <p className="tw-mt-2  ">
            Perfekt für <strong className="tw-text-theme">Gemüse Smoothies</strong>: Kombiniere 80g{' '}
            <a href="#" className="tw-text-theme hover:tw-underline">
              Grünkohl
            </a>
            , ½{' '}
            <a href="#" className="tw-text-theme hover:tw-underline">
              Gurke
            </a>
            , 1{' '}
            <a href="#" className="tw-text-theme hover:tw-underline">
              Apfel
            </a>{' '}
            und 1cm{' '}
            <a href="#" className="tw-text-theme hover:tw-underline">
              Ingwer
            </a>
            . Mit 150ml{' '}
            <a href="#" className="tw-text-theme hover:tw-underline">
              Kokoswasser
            </a>{' '}
            mixen – der hohe Kaliumgehalt unterstützt den Elektrolythaushalt.
          </p>
        </div>
        <div className="tw-mt-14">
          <span className="tw-text-5xl tw-mr-2 tw-mb-6">🍓</span>
          <h2 className="tw-text-5xl tw-font-bold  tw-mb-4 tw-leading-tight">
            Fruchtige Smoothie Rezepte <br className="tw-hidden lg:tw-block" /> zum Abnehmen{' '}
          </h2>

          <div className="tw-bg-[#FAF4D1] tw-text-lg tw-bg-[#] tw-p-7 tw-rounded-2.5xl shadow-theme-lg tw-shadow-[#ccc] tw-mb-4">
            <div className=" tw-mb-4">
              <h3 className="tw-text-2xl tw-font-extrabold tw-text-dark">Beeren-Chia-Boost</h3>
              <ul className="tw-list-disc tw-list-inside tw-text-lg  tw-mt-2">
                <li>150g gemischte Beeren</li>
                <li>1 EL Chiasamen</li>
                <li>150g Naturjoghurt (vegan: Sojajoghurt)</li>
                <li>
                  100ml{' '}
                  <a href="#" className="tw-text-theme hover:tw-underline">
                    Quellwasser
                  </a>
                </li>
              </ul>
              <p className="tw-mt-3 tw-text-lg ">
                <strong className="tw-text-dark">Tipp</strong>: Über Nacht eingeweichte Chiasamen
                erhöhen den Ballaststoffgehalt – ideal für{' '}
                <strong className="tw-text-dark">Smoothie Rezepte zum Abnehmen</strong>.
              </p>
            </div>
          </div>
          <div className="tw-bg-[#FAF4D1] tw-text-lg tw-bg-[#] tw-p-7 tw-rounded-2.5xl shadow-theme-lg tw-shadow-[#ccc] tw-mb-4">
            <h3 className="tw-text-2xl tw-font-extrabold tw-text-dark">Tropischer Fatburner</h3>
            <p className="tw-mt-2 tw-text-lg ">
              Mische 100g{' '}
              <a href="#" className="tw-text-theme hover:tw-underline">
                Ananas
              </a>
              , ½{' '}
              <a href="#" className="tw-text-theme hover:tw-underline">
                Mango
              </a>{' '}
              und 100ml{' '}
              <a href="#" className="tw-text-theme hover:tw-underline">
                Orangensaft
              </a>{' '}
              mit 1 TL Kurkuma. Das enthaltene Bromelain unterstützt die Verdauung – perfekt als{' '}
              <strong className="tw-text-dark">Low Carb Frühstücksideen</strong>-Alternative.
            </p>
          </div>
        </div>

        <div className="tw-mt-14">
          <span className="tw-text-5xl tw-mr-2">🥥</span>{' '}
          <h2 className="tw-text-5xl tw-font-bold tw-text-dark tw-mb-4">
            Low Carb Rezepte:
            <br className="tw-hidden md:tw-block" /> Schlank genießen
          </h2>
          <div className="tw-bg-tea-green tw-text-lg tw-p-7 tw-rounded-2.5xl shadow-theme-lg tw-shadow-[#ccc] tw-mb-4">
            <div className="  ">
              <h3 className="tw-text-2xl tw-font-extrabold tw-text-dark">Mandel-Kokos-Energie</h3>
              <p className="tw-text-lg  tw-italic">Nur 6g KH/Portion</p>
              <ul className="tw-list-disc tw-list-inside tw-text-lg  tw-mt-2">
                <li>
                  - 30g{' '}
                  <a href="#" className="tw-text-theme hover:tw-underline">
                    Mandelmus
                  </a>
                </li>
                <li>- 200ml Kokosmilch light</li>
                <li>- 1 Handvoll Eiswürfel</li>
                <li>- 1 Prise Zimt</li>
              </ul>
              <p className="tw-mt-3 tw-text-lg ">
                <strong className="tw-text-dark">Warum gesund?</strong> Mittelkettige Fettsäuren
                (MCT) aus der Kokosmilch können zur schnellen Energiebereitstellung beitragen.
              </p>
            </div>
          </div>
          <div className="tw-bg-tea-green tw-text-lg tw-p-7 tw-rounded-2.5xl shadow-theme-lg tw-shadow-[#ccc] tw-mb-4">
            <div className="">
              <h3 className="tw-text-2xl tw-font-extrabold tw-text-dark">Schoko-Protein-Shake</h3>
              <p className="tw-mt-2 tw-text-lg ">
                Mix 1 EL ungesüßtes Kakaopulver mit 200ml Mandelmilch, 1 gefrorenen{' '}
                <a href="#" className="tw-text-theme hover:tw-underline">
                  Banane
                </a>{' '}
                und 1 Scoop Proteinpulver. Ideal nach dem Sport – gehört zu unseren beliebtesten{' '}
                <strong className="tw-text-dark">Low Carb Rezepte</strong>-Ideen.
              </p>
            </div>
          </div>
        </div>

        <div className="tw-mt-14">
          {' '}
          <span className="tw-text-5xl tw-mr-2">✨</span>
          <h2 className="tw-text-5xl tw-font-bold tw-text-dark tw-mb-4">
            5 Profi-Tipps für perfekte Smoothies
          </h2>
          <div className="tw-bg-[#FAF4D1] tw-text-lg tw-bg-[#] tw-p-7 tw-rounded-2.5xl shadow-theme-lg tw-shadow-[#ccc] tw-mb-4">
            <div className="">
              <ul className="tw-list-decimal-tw-list-inside tw-text-lg  tw-space-y-3">
                <li>
                  <strong className="tw-text-dark tw-text-2xl">
                    Flüssigkeiten clever dosieren
                  </strong>
                  :<br />
                  Beginne mit 10% Flüssigkeit (
                  <a href="#" className="tw-text-theme hover:tw-underline">
                    Wasser
                  </a>
                  , Tee, Pflanzendrink) und gib nach Bedarf mehr hinzu.
                </li>
                <li>
                  <strong className="tw-text-dark tw-text-2xl">Tiefkühl-Obst nutzen</strong>:<br />
                  Gefrorene Früchte machen Smoothies cremiger und sparen Eiswürfel.
                </li>
                <li>
                  <strong className="tw-text-dark tw-text-2xl">Superfoods toppen</strong>:<br />
                  ️1 TL Leinsamenöl (Omega-3) oder Acaipulver (Antioxidantien) verleiht Extra-Power.
                </li>
                <li>
                  <strong className="tw-text-dark tw-text-2xl">Richtig süßen</strong>:<br />
                  Statt Zucker: 1 Dattel oder 1 TL Erythrit für{' '}
                  <strong className="">gesunde Smoothie Rezepte</strong>.
                </li>
                <li>
                  <strong className="tw-text-dark tw-text-2xl">Meal Prep hack</strong>:<br />
                  Gefrorene Smoothie-Würfel in Gläsern schichten – einfach auftauen und trinken!
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="tw-mt-14">
          <span className="tw-text-5xl tw-mr-2">❓</span>
          <h2 className="tw-text-5xl tw-font-bold tw-text-dark tw-mb-4">
            Häufige Fragen zu Smoothie <br className="tw-hidden md:tw-block" /> Rezepten
          </h2>
          <div className="tw-bg-tea-green tw-text-lg tw-p-7 tw-rounded-2.5xl shadow-theme-lg tw-shadow-[#ccc]">
            <div className=" tw-mb-4">
              <h3 className="tw-text-2xl tw-font-extrabold tw-text-dark">
                „Kann ich mit Smoothies abnehmen?“
              </h3>
              <p className="tw-mt-2 tw-text-lg ">
                Ja, wenn du kalorienarme Varianten wählst und Mahlzeiten gezielt ersetzt. Unser{' '}
                <strong className="tw-text-theme">
                  <a href="#" className="hover:tw-underline tw-text-theme">
                    MojoFit 1.0 Rezept
                  </a>
                </strong>{' '}
                mit{' '}
                <a href="#" className="tw-text-theme hover:tw-underline">
                  Salatgurke
                </a>{' '}
                und{' '}
                <a href="#" className="tw-text-theme hover:tw-underline">
                  Avocado
                </a>{' '}
                enthält nur 150 kcal pro Portion.
              </p>
            </div>
            <div className=" tw-mb-4">
              <h3 className="tw-text-2xl tw-font-extrabold tw-text-dark">
                „Sind grüne Smoothies wirklich gesund?“
              </h3>
              <p className="tw-mt-2 tw-text-lg ">
                Absolut! Chlorophyll aus{' '}
                <a href="#" className="tw-text-theme hover:tw-underline">
                  Spinat
                </a>{' '}
                oder{' '}
                <a href="#" className="tw-text-theme hover:tw-underline">
                  Grünkohl
                </a>{' '}
                trägt zur Zellgesundheit bei. Kombiniere immer mit Vitamin C-reichen Zutaten wie{' '}
                <a href="#" className="tw-text-theme hover:tw-underline">
                  Zitrone
                </a>{' '}
                für optimale Nährstoffaufnahme.
              </p>
            </div>

            <div className="">
              <h3 className="tw-text-2xl tw-font-extrabold tw-text-dark">
                „Wie lange sind selbstgemachte Smoothies haltbar?“
              </h3>
              <p className="tw-mt-2 tw-text-lg ">
                Im Kühlschrank max. 24 Stunden – am besten in luftdichten Glasflaschen. Ein Schuss{' '}
                <a href="#" className="tw-text-theme hover:tw-underline">
                  Zitronensaft
                </a>{' '}
                verhindert Braunfärbung.
              </p>
            </div>
          </div>
        </div>

        <div className="tw-mt-14">
          <span className="tw-text-5xl tw-mr-2">🥤</span>
          <h2 className="tw-text-5xl tw-font-bold tw-text-dark tw-mb-4">
            Unsere Top-3 Smoothie-Basen zum Selbermixen
          </h2>
          <div className="tw-bg-[#FAF4D1] tw-text-lg tw-bg-[#] tw-p-7 tw-rounded-2.5xl shadow-theme-lg tw-shadow-[#ccc] tw-mb-4">
            <ul className="tw-list-none tw-text-lg  tw-space-y-3 tw-p-0">
              <li>
                <strong className="tw-text-dark tw-text-2xl">All-in Fruit Basis</strong>:<br />
                Püree aus{' '}
                <a href="#" className="tw-text-theme hover:tw-underline">
                  Mango
                </a>
                , Maracuja und{' '}
                <a href="#" className="tw-text-theme hover:tw-underline">
                  Pfirsich
                </a>{' '}
                – perfekt für <strong className="">Smoothie Rezepte</strong> mit tropischer Note.
              </li>
              <li>
                <strong className="tw-text-dark tw-text-2xl">Green Power Mix</strong>:<br />
                <a href="#" className="tw-text-theme hover:tw-underline">
                  Spinat
                </a>
                ,{' '}
                <a href="#" className="tw-text-theme hover:tw-underline">
                  Apfel
                </a>{' '}
                und{' '}
                <a href="#" className="tw-text-theme hover:tw-underline">
                  Minze
                </a>{' '}
                – ergibt mit{' '}
                <a href="#" className="tw-text-theme hover:tw-underline">
                  Wasser
                </a>{' '}
                oder{' '}
                <a href="#" className="tw-text-theme hover:tw-underline">
                  Kokoswasser
                </a>{' '}
                instant <strong className="">Green Smoothie Rezepte</strong>.
              </li>
              <li>
                <strong className="tw-text-dark tw-text-2xl">Protein-Booster</strong>:<br />
                <a href="#" className="tw-text-theme hover:tw-underline">
                  Mandelmus
                </a>
                , Haferflocken und Chiasamen – einfach mit Milch mixen für sättigende{' '}
                <strong className="">Low Carb Frühstück</strong>-Shakes.
              </li>
            </ul>
          </div>

          <div className="tw-bg-[#FAF4D1] tw-text-lg tw-bg-[#] tw-p-7 tw-rounded-2.5xl shadow-theme-lg tw-shadow-[#ccc] tw-mb-4">
            <div className=" tw-text-dark">
              <strong className="tw-text-2xl">Entdecke über 50 weitere Rezepte</strong>
              <p className="tw-text-lg">von basisch bis exotisch! Alle unsere Kreationen:</p>
              <ul className="tw-list-none tw-p-0 tw-text-lg tw-mt-2">
                <li>✅ Wissenschaftlich entwickelte Nährstoffkombinationen</li>
                <li>✅ Ohne Zusatzstoffe und künstliche Aromen</li>
                <li>✅ Flexibel anpassbar (vegan, fructosearm, keto)</li>
              </ul>
              <p className="tw-mt-4 tw-text-lg">
                Probier jetzt unseren{' '}
                <strong className="tw-text-gray-800">Dubai Style Chocolate Smoothie</strong> mit
                echten Kakaonibs oder den{' '}
                <strong className="tw-text-gray-800">ImmuBoosta 1.0</strong> mit Brokkoli für dein
                Immunsystem. Du willst's noch einfacher? Bestell unsere vorkonfektionierten
                Smoothie-Boxen – trinkfertig portioniert und direkt zu dir geliefert!
              </p>
              <p className="tw-mt-4 tw-text-lg ">
                <strong className="tw-text-gray-800 tw-italic">Tipp:</strong> <br />
                Folge{' '}
                <a
                  href="https://www.instagram.com/indivit_smoothie"
                  className="tw-text-theme hover:tw-underline"
                >
                  @indivit_smoothie
                </a>{' '}
                für wöchentliche Rezept-Inspirationen und exklusive Rabattcodes!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
