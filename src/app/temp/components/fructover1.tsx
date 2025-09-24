import React from 'react'

export default function Fructover1() {
  return (
    <>
      <div className="tw-space-y-8 tw-bg-[#F3F8EE] tw-px-4 sm:tw-px-6 lg:tw-px-8 tw-py-8 tw-text-gray-800">
        {/* Intro block */}
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-6 tw-items-center">
          <p className="md:tw-col-span-2 tw-bg-white tw-rounded-2xl tw-shadow-sm tw-p-6 tw-leading-7 tw-border tw-border-emerald-50">
            Du suchst nach einem k&ouml;stlichen Himbeer-Smoothie, der trotz Fructoseintoleranz oder
            Low-Carb-Ern&auml;hrung funktioniert? Unser Fructover 1.0 kombiniert Himbeeren, Brokkoli
            und Avocado zu einem kalorienarmen Power-Drink mit nur 2,8g Fructose pro Portion.
            Perfekt als Snack bei Fructoseintoleranz oder f&uuml;r alle, die bewusst Kohlenhydrate
            reduzieren m&ouml;chten. Erfahre, wie du ihn einfach selbst mixen kannst &ndash; oder
            spare Zeit &amp; Geld mit Indivits HPP-Smoothies!
          </p>
          <p className="tw-rounded-2xl tw-overflow-hidden tw-shadow-sm tw-border tw-border-emerald-50 tw-bg-white">
            <img
              title="Fructover 1.0 Smoothie &ndash; Genuss bei Fructoseintoleranz"
              src="https://i.ibb.co/XxJmbZ4v/fructover-1-01.png"
              alt="Cremiger pinker Smoothie im Glas mit frischen Himbeeren und Avocado-Scheiben garniert"
              className="tw-w-full tw-h-auto"
              loading="lazy"
            />
          </p>
        </div>

        <p className="tw-italic tw-text-emerald-700">
          Perfekte Kombination aus Geschmack und Vertr&auml;glichkeit &ndash; ideal bei
          fructosearmer Ern&auml;hrung
        </p>

        <div className="tw-h-2 tw-bg-[#FFF3C6] tw-rounded-full"></div>

        {/* Why section card */}
        <div className="tw-bg-white tw-rounded-2xl tw-shadow-sm tw-p-6 tw-border tw-border-yellow-100">
          <h2 className="tw-text-2xl tw-font-extrabold tw-text-emerald-800 tw-mb-3">
            Warum dieser Low Carb Smoothie &uuml;berzeugt
          </h2>
          <p className="tw-leading-7">
            Dieser <strong>Himbeer Smoothie</strong> vereint aromatische{' '}
            <a
              className="tw-text-emerald-700 tw-underline tw-underline-offset-4 hover:tw-text-emerald-800"
              href="https://indivit.de/ernaehrung/kalorienarme-himbeeren-gesundheitsvorteile"
            >
              Himbeeren
            </a>{' '}
            mit n&auml;hrstoffreichem{' '}
            <a
              className="tw-text-emerald-700 tw-underline tw-underline-offset-4 hover:tw-text-emerald-800"
              href="https://indivit.de/ernaehrung/abnehmen-mit-gemuese-brokkoli-kalorienarm"
            >
              Brokkoli
            </a>{' '}
            zu einem bek&ouml;mmlichen Power-Drink. Mit nur 2,8g Fructose pro Portion und 8,35g
            Netto-Kohlenhydraten ist er ideal f&uuml;r{' '}
            <strong>Ern&auml;hrung bei Fructoseintoleranz</strong> oder kohlenhydratreduzierte
            Ern&auml;hrungspl&auml;ne. Auch bei bewusster Zuckerreduktion ist dieser Smoothie
            bestens als schneller Mahlzeitenersatz zu genie&szlig;en.
          </p>
        </div>

        {/* Zutaten */}
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-6 tw-items-stretch">
          {/* Image Card */}
          <div className=" tw-rounded-2xl shadow-theme-lg tw-shadow-theme tw-border tw-border-light-green tw-flex tw-items-center tw-justify-center tw-h-[460px]">
            <div className="tw-bg-light-orange/60 tw-rounded-xl tw-p-2 tw-flex tw-items-center tw-justify-center tw-w-full tw-h-full">
              <img
                title="Alle Fructover-Zutaten auf einen Blick"
                src="https://i.ibb.co/xbTxWHF/fructover-1-02.png"
                alt="Zutaten f&uuml;r Smoothie auf rustikalem Holzbrett mit Mixer im Hintergrund"
                className="tw-max-w-[85%] tw-max-h-[100%] tw-object-contain tw-rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* Table Card */}
          <div className="md:tw-col-span-2 tw-bg-white tw-rounded-2xl tw-shadow-around tw-border tw-border-light-green tw-flex tw-flex-col">
            <div className="tw-h-2 tw-bg-theme tw-rounded-t-2xl"></div>

            <div className="tw-px-6 tw-pt-5">
              <h2 className="tw-text-2xl tw-font-extrabold tw-text-dark">
                🧺 Zutaten f&uuml;r 250ml
              </h2>
              <p className="tw-text-sm tw-text-muted tw-mt-1">
                Frisch, einfach &amp; gut vertr&auml;glich
              </p>
            </div>

            <div className="tw-p-6 tw-overflow-x-auto">
              <table className="tw-w-full tw-text-left tw-border-separate tw-border-spacing-y-2">
                <thead>
                  <tr className="tw-bg-theme tw-text-white">
                    <th className="tw-font-semibold tw-px-4 tw-py-3 tw-rounded-l-lg">Zutat</th>
                    <th className="tw-font-semibold tw-px-4 tw-py-3">Menge</th>
                    <th className="tw-font-semibold tw-px-4 tw-py-3 tw-rounded-r-lg">Tipp</th>
                  </tr>
                </thead>

                <tbody className="[&>tr>td]:tw-px-4 [&>tr>td]:tw-py-3">
                  <tr className="tw-bg-tea-green tw-border tw-border-green tw-rounded-lg">
                    <td>
                      Bio-
                      <a
                        className="tw-text-theme tw-underline hover:tw-text-dark"
                        href="https://indivit.de/ernaehrung/kalorienarme-himbeeren-gesundheitsvorteile"
                      >
                        Himbeeren
                      </a>
                    </td>
                    <td>3 Handvoll</td>
                    <td>
                      TK-Ware f&uuml;r optimale N&auml;hrstoffdichte und ganzj&auml;hrige
                      Verf&uuml;gbarkeit
                    </td>
                  </tr>

                  <tr className="tw-bg-light-green tw-border tw-border-green tw-rounded-lg">
                    <td>
                      Bio-
                      <a
                        className="tw-text-theme tw-underline hover:tw-text-dark"
                        href="https://indivit.de/ernaehrung/abnehmen-mit-gemuese-brokkoli-kalorienarm"
                      >
                        Brokkoli-R&ouml;schen
                      </a>
                    </td>
                    <td>2 gro&szlig;e St&uuml;cke</td>
                    <td>Tiefk&uuml;hlvariante bevorzugen</td>
                  </tr>

                  <tr className="tw-bg-tea-green tw-border tw-border-green tw-rounded-lg">
                    <td>
                      Bio-
                      <a
                        className="tw-text-theme tw-underline hover:tw-text-dark"
                        href="https://indivit.de/ernaehrung/kokoswasser-und-elektrolyte-getraenk-wirkung"
                      >
                        Kokoswasser
                      </a>
                    </td>
                    <td>40ml</td>
                    <td>Ungezuckert &amp; naturbelassen</td>
                  </tr>

                  <tr className="tw-bg-light-green tw-border tw-border-green tw-rounded-lg">
                    <td>
                      <a
                        className="tw-text-theme tw-underline hover:tw-text-dark"
                        href="https://indivit.de/ernaehrung/avocado-gesund-kaloriengehalt-analyse"
                      >
                        Avocado
                      </a>{' '}
                      (Fuerte)
                    </td>
                    <td>&frac14; St&uuml;ck</td>
                    <td>Auf weichen Stielansatz achten</td>
                  </tr>

                  <tr className="tw-bg-tea-green tw-border tw-border-green tw-rounded-lg">
                    <td>
                      <a
                        className="tw-text-theme tw-underline hover:tw-text-dark"
                        href="https://indivit.de/ernaehrung/wahl-gesundes-bestes-wasser"
                      >
                        Quellwasser
                      </a>
                    </td>
                    <td>Nach Bedarf</td>
                    <td>Mineralarm f&uuml;r bessere Vertr&auml;glichkeit</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* STEP 1 */}
        <section className="tw-bg-tea-green tw-rounded-3xl tw-border tw-border-light-green tw-shadow-around tw-p-5 md:tw-p-7">
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-5 tw-items-center">
            <div className="tw-col-span-1 md:tw-col-span-3 tw-mb-6 md:tw-mb-0">
              <h3 className="tw-text-xl md:tw-text-2xl tw-font-extrabold tw-text-theme tw-mb-4">
                1. Vorbereitung <span className="tw-text-muted tw-font-medium">(5 Minuten)</span>
              </h3>
              {/* Text */}
              <ul className="md:tw-col-span-3 tw-list-disc tw-space-y-3 tw-text-dark">
                <li>
                  <a
                    className="tw-text-dark tw-font-bold tw-underline"
                    href="https://indivit.de/ernaehrung/kalorienarme-himbeeren-gesundheitsvorteile"
                  >
                    Himbeeren
                  </a>{' '}
                  in Sieb unter kaltem Wasser abspülen
                </li>
                <li>
                  <a
                    className="tw-text-dark tw-font-bold tw-underline"
                    href="https://indivit.de/ernaehrung/abnehmen-mit-gemuese-brokkoli-kalorienarm"
                  >
                    Brokkoli
                  </a>{' '}
                  in blenderfähige Stücke zerteilen
                </li>
                <li>
                  <a
                    className="tw-text-dark tw-font-bold tw-underline"
                    href="https://indivit.de/ernaehrung/avocado-gesund-kaloriengehalt-analyse"
                  >
                    Avocado
                  </a>{' '}
                  schälen und würfeln
                </li>
              </ul>
            </div>
            {/* Image (separate styled box + smaller image) */}
            <div className="md:tw-col-span-2 tw-rounded-2xl tw-border shadow-theme-lg tw-shadow-theme">
              {/* inner box keeps fixed but responsive height; image stays smaller */}
              <img
                src="https://i.ibb.co/nN002mpG/fructover1-3.png"
                alt="Himbeeren im Sieb unter Wasser"
                className="tw-object-contain tw-rounded-xl "
                loading="lazy"
                // width="100%"
                // height="auto"
              />
            </div>
          </div>
        </section>

        {/* STEP 2 */}
        <section className="tw-rounded-3xl tw-border-2 tw-border-dashed tw-border-light-green tw-bg-light-green tw-shadow-around tw-p-5 md:tw-p-7">
          <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-items-center">
            {/* Image box (separate + responsive) */}
            <div className="tw-rounded-2xl tw-flex tw-items-center tw-justify-center shadow-theme-lg tw-shadow-theme">
              {/* inner plate gives fixed-but-responsive height so image stays small */}
              <img
                src="https://i.ibb.co/ZzzBVjmQ/fructover-1-04.png"
                alt="Schichten im Glas"
                className="tw-object-contain tw-rounded-xl tw-w-full"
                loading="lazy"
              />
            </div>

            {/* Text */}
            <div className="tw-flex tw-flex-col tw-justify-end tw-items-center">
              <h3 className="tw-text-xl md:tw-text-2xl tw-font-extrabold tw-text-dark tw-mb-3">
                2. Schichtweise einfüllen
              </h3>
              <ul className="tw-list-disc tw-pl-5 tw-space-y-3 tw-text-dark">
                <li>
                  <a
                    className="tw-text-theme tw-underline"
                    href="https://indivit.de/ernaehrung/kokoswasser-und-elektrolyte-getraenk-wirkung"
                  >
                    Kokoswasser
                  </a>
                  &nbsp;und&nbsp;
                  <a
                    className="tw-text-theme tw-underline"
                    href="https://indivit.de/ernaehrung/wahl-gesundes-bestes-wasser"
                  >
                    Quellwasser
                  </a>
                  &nbsp;zuerst
                </li>
                <li>
                  <a
                    className="tw-text-theme tw-underline"
                    href="https://indivit.de/ernaehrung/avocado-gesund-kaloriengehalt-analyse"
                  >
                    Avocado
                  </a>
                  &nbsp;und&nbsp;
                  <a
                    className="tw-text-theme tw-underline"
                    href="https://indivit.de/ernaehrung/kalorienarme-himbeeren-gesundheitsvorteile"
                  >
                    Himbeeren
                  </a>
                  &nbsp;folgen
                </li>
                <li>
                  <a
                    className="tw-text-theme tw-underline"
                    href="https://indivit.de/ernaehrung/abnehmen-mit-gemuese-brokkoli-kalorienarm"
                  >
                    Brokkoli
                  </a>
                  &nbsp;zuoberst platzieren
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* STEPS 3 & 4 */}
        <section className="tw-rounded-3xl tw-bg-tea-green tw-border tw-border-light-green tw-shadow-around tw-p-5 md:tw-p-7">
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6">
            {/* Step 3 */}
            <div className="tw-bg-white tw-rounded-2xl tw-border tw-border-light-green tw-shadow-around tw-p-5 tw-flex tw-flex-col">
              <div className="tw-flex tw-items-center tw-gap-2 tw-mb-2">
                <span className="tw-inline-flex tw-h-7 tw-w-7 tw-rounded-full tw-bg-theme tw-text-white tw-items-center tw-justify-center tw-text-sm tw-font-bold">
                  3
                </span>
                <h3 className="tw-text-lg tw-font-bold tw-text-dark">
                  Mixprozess <span className="tw-text-muted">(2&nbsp;Minuten)</span>
                </h3>
              </div>
              <ol className="tw-list-decimal tw-pl-5 tw-space-y-2 tw-text-dark tw-flex-1">
                <li>
                  <strong>Hochleistungsmixer</strong> ab 1.000 Watt verwenden
                </li>
                <li>60 Sekunden bei 30.000 U/min mixen</li>
                <li>
                  Bei Bedarf mit{' '}
                  <a
                    className="tw-text-theme tw-underline"
                    href="https://indivit.de/ernaehrung/wahl-gesundes-bestes-wasser"
                  >
                    Quellwasser
                  </a>{' '}
                  auf 250ml auffüllen
                </li>
              </ol>
              <div className="tw-pt-3">
                <div className="tw-h-1 tw-bg-theme tw-rounded-full tw-w-1/2"></div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="tw-bg-white tw-rounded-2xl tw-border tw-border-light-green tw-shadow-around tw-p-5 tw-flex tw-flex-col">
              <div className="tw-flex tw-items-center tw-gap-2 tw-mb-2">
                <span className="tw-inline-flex tw-h-7 tw-w-7 tw-rounded-full tw-bg-theme tw-text-white tw-items-center tw-justify-center tw-text-sm tw-font-bold">
                  4
                </span>
                <h3 className="tw-text-lg tw-font-bold tw-text-dark">Serviervorschlag</h3>
              </div>
              <ul className="tw-list-disc tw-pl-5 tw-space-y-2 tw-text-dark tw-flex-1">
                <li>Sofort in gekühltem Glas genießen</li>
                <li>
                  Optional mit frischer{' '}
                  <a
                    className="tw-text-theme tw-underline"
                    href="https://indivit.de/ernaehrung/pfefferminze-wirkung-gesundheit"
                  >
                    Minze
                  </a>{' '}
                  garnieren
                </li>
              </ul>
              <div className="tw-pt-3">
                <div className="tw-h-1 tw-bg-theme tw-rounded-full tw-w-1/2"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Nutrition (text left, table right) */}
        <section className="tw-p-5 md:tw-p-8">
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6 tw-items-start">
            {/* LEFT: heading + description + footnote */}
            <div className=" tw-rounded-3xl tw-border !tw-border-theme tw-shadow-around tw-bg-white tw-p-6 tw-mb-6 md:tw-mb-0">
              <div className="tw-flex tw-items-center tw-gap-3 tw-mb-3">
                <span className="tw-inline-flex tw-h-9 tw-w-9 tw-rounded-xl tw-bg-theme tw-text-white tw-items-center tw-justify-center tw-text-lg">
                  📊
                </span>
                <h2 className="tw-text-2xl tw-font-extrabold tw-text-dark">
                  N&auml;hrwerte im &Uuml;berblick
                </h2>
              </div>
              <p className="tw-text-muted tw-mb-4">
                Kompakt dargestellt f&uuml;r eine schnelle Einsch&auml;tzung pro 250&nbsp;ml.
              </p>

              {/* small highlight card (optional) */}
              <div className="tw-hidden md:tw-block tw-bg-light-orange tw-rounded-2xl tw-border tw-border-light-green tw-p-4 tw-text-dark tw-mb-3 ">
                <p className="tw-p-0 tw-m-0">
                  Reich an <strong>Ballaststoffen</strong> und <strong>Vitamin&nbsp;C</strong> –
                  ideal f&uuml;r eine leichte, vertr&auml;gliche Trinkmahlzeit.
                </p>
              </div>

              <p className="tw-text-sm tw-text-muted tw-mt-2">
                *Basierend auf durchschnittlichem Erwachsenenbedarf von 2000&nbsp;kcal
              </p>
            </div>

            {/* RIGHT: table */}
            <div>
              <div className="tw-rounded-2xl tw-border tw-border-light-green tw-shadow-around tw-overflow-hidden">
                {/* top accent */}
                <div className="tw-h-2 tw-bg-theme"></div>

                <div className="tw-overflow-x-auto">
                  <table>
                    <thead>
                      <tr className="tw-bg-theme tw-text-white">
                        <th className="tw-font-semibold tw-px-4 tw-py-3 tw-w-full">Pro 250ml</th>
                        <th className="tw-font-semibold tw-px-4 tw-py-3 tw-w-full">Menge</th>
                        <th className="tw-font-semibold tw-px-4 tw-py-3 tw-w-full">Tagesbedarf*</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="tw-bg-white">
                        <td className="tw-px-4 tw-py-3 tw-border-b tw-border-light-green">
                          Kalorien
                        </td>
                        <td className="tw-px-4 tw-py-3 tw-border-b tw-border-light-green">
                          94 kcal
                        </td>
                        <td className="tw-px-4 tw-py-3 tw-border-b tw-border-light-green">5%</td>
                      </tr>
                      <tr className="tw-bg-tea-green/60">
                        <td className="tw-px-4 tw-py-3 tw-border-b tw-border-light-green">
                          Ballaststoffe
                        </td>
                        <td className="tw-px-4 tw-py-3 tw-border-b tw-border-light-green">10,4g</td>
                        <td className="tw-px-4 tw-py-3 tw-border-b tw-border-light-green">35%</td>
                      </tr>
                      <tr className="tw-bg-white">
                        <td className="tw-px-4 tw-py-3 tw-border-b tw-border-light-green">
                          Vitamin C
                        </td>
                        <td className="tw-px-4 tw-py-3 tw-border-b tw-border-light-green">86mg</td>
                        <td className="tw-px-4 tw-py-3 tw-border-b tw-border-light-green">84%</td>
                      </tr>
                      <tr className="tw-bg-tea-green/60">
                        <td className="tw-px-4 tw-py-3 tw-border-b tw-border-light-green">
                          Vitamin K
                        </td>
                        <td className="tw-px-4 tw-py-3 tw-border-b tw-border-light-green">
                          75&micro;g
                        </td>
                        <td className="tw-px-4 tw-py-3 tw-border-b tw-border-light-green">115%</td>
                      </tr>
                      <tr className="tw-bg-white">
                        <td className="tw-px-4 tw-py-3">Kupfer</td>
                        <td className="tw-px-4 tw-py-3">491&micro;g</td>
                        <td className="tw-px-4 tw-py-3">39%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expert tip */}
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-6 tw-items-center">
          <div className="md:tw-col-span-2 tw-bg-white tw-rounded-2xl tw-shadow-sm tw-border tw-border-emerald-50 tw-p-6">
            <h2 className="tw-text-2xl tw-font-extrabold tw-text-emerald-800">
              💡 Mixer-Expertentipp
            </h2>
            <p className="tw-mt-2">
              &raquo;Nutze immer Mixer mit <strong>Titan-Messern</strong> und mindestens 1000 Watt
              Leistung. Nur so werden Himbeerkerne vollst&auml;ndig zerkleinert und die
              fettl&ouml;slichen Vitamine aus der{' '}
              <a
                className="tw-text-emerald-700 tw-underline"
                href="https://indivit.de/ernaehrung/avocado-gesund-kaloriengehalt-analyse"
              >
                Avocado
              </a>{' '}
              optimal freigesetzt.&laquo;
            </p>
          </div>
          <p className="tw-rounded-2xl tw-overflow-hidden tw-shadow-sm tw-border tw-border-emerald-50 tw-bg-white">
            <img
              title="Titanmesser-Mixer f&uuml;r cremige Konsistenz"
              src="https://i.ibb.co/45gN6WL/fructover-1-05.png"
              alt="Hochleistungsmixer mit fertigem Smoothie im Glas daneben"
              className="tw-w-full tw-h-auto"
              loading="lazy"
            />
          </p>
        </div>

        {/* Diet needs */}
        <div className="tw-bg-white tw-rounded-2xl tw-shadow-sm tw-border tw-border-emerald-50 tw-p-6 tw-space-y-4">
          <h2 className="tw-text-2xl tw-font-extrabold tw-text-emerald-800">
            🌿 Ideal bei besonderen Ern&auml;hrungsbed&uuml;rfnissen
          </h2>

          <h3 className="tw-text-lg tw-font-bold tw-text-emerald-800">
            F&uuml;r <strong>Fructoseintoleranz Ern&auml;hrung</strong>
          </h3>
          <p className="tw-leading-7">
            Diese Zutatenkombination ber&uuml;cksichtigt besondere Ern&auml;hrungsbed&uuml;rfnisse:
            <br />-{' '}
            <strong>
              <a
                className="tw-text-emerald-700 tw-underline"
                href="https://indivit.de/ernaehrung/kalorienarme-himbeeren-gesundheitsvorteile"
              >
                Himbeeren
              </a>
            </strong>
            : Nat&uuml;rlich fructosearm (2,4g/100g)
            <br />-{' '}
            <strong>
              <a
                className="tw-text-emerald-700 tw-underline"
                href="https://indivit.de/ernaehrung/avocado-gesund-kaloriengehalt-analyse"
              >
                Avocado
              </a>
            </strong>
            : Fructosefreie Fettquelle
            <br />-{' '}
            <strong>
              <a
                className="tw-text-emerald-700 tw-underline"
                href="https://indivit.de/ernaehrung/abnehmen-mit-gemuese-brokkoli-kalorienarm"
              >
                Brokkoli
              </a>
            </strong>
            : Ballaststoffe unterst&uuml;tzen Verdauung
            <br />-{' '}
            <strong>
              <a
                className="tw-text-emerald-700 tw-underline"
                href="https://indivit.de/ernaehrung/kokoswasser-und-elektrolyte-getraenk-wirkung"
              >
                Kokoswasser
              </a>
            </strong>
            : Nat&uuml;rlich elektrolytreich
          </p>

          <h3 className="tw-text-lg tw-font-bold tw-text-emerald-800">
            Als <strong>Low Calorie Smoothie</strong>
          </h3>
          <ul className="tw-list-disc tw-pl-5 tw-space-y-1">
            <li>Unter 100kcal pro Portion</li>
            <li>10,4g Ballaststoffe f&uuml;r langanhaltende S&auml;ttigung</li>
            <li>Perfekt als Mahlzeitenersatz</li>
          </ul>

          <h3 className="tw-text-lg tw-font-bold tw-text-emerald-800">
            Wie integriere ich den Smoothie in meine Ern&auml;hrung?
          </h3>
          <p>
            Ideale Einsatzbereiche:
            <br />- Fr&uuml;hst&uuml;cksersatz mit Haferflocken
            <br />- Post-Workout-Erfrischung
            <br />- Dessert-Alternative
          </p>

          <p className="tw-rounded-2xl tw-overflow-hidden tw-shadow-sm">
            <img
              title="Smoothie als Fr&uuml;hst&uuml;cks-Alternative &ndash; n&auml;hrstoffreich und s&auml;ttigend"
              src="https://i.ibb.co/KcGrvdj3/fructover-1-06.png"
              alt="Himbeer-Smoothie mit Haferflocken als Fr&uuml;hst&uuml;ck serviert"
              className="tw-w-full tw-h-auto"
              loading="lazy"
            />
          </p>

          <h3 className="tw-text-lg tw-font-bold tw-text-emerald-800">
            Allgemein: Was essen bei Fructoseintoleranz?
          </h3>
          <p>
            Wichtige Aspekte f&uuml;r deinen Speiseplan:
            <br />
            1. Fructosegehalt pro Portion beachten
            <br />
            2. Gleichzeitige Aufnahme von Glukose optimieren
            <br />
            3. Ballaststoffanteil erh&ouml;hen
          </p>
        </div>

        {/* Time vs self-making */}
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6 tw-items-start">
          <div className="tw-bg-white tw-rounded-2xl tw-shadow-sm tw-border tw-border-emerald-50 tw-p-6">
            <h2 className="tw-text-2xl tw-font-extrabold tw-text-emerald-800">
              🕒 Zeitersparnis vs. Selbstherstellung
            </h2>
            <p className="tw-mt-2">
              W&auml;hrend die t&auml;gliche Zubereitung mit Einkauf und Reinigung{' '}
              <strong>25-30 Minuten</strong> beansprucht, liefern wir dir diesen Smoothie:
              <br />- <strong>Sofort verzehrfertig</strong> in 4-Wochen-Haltbarkeit durch
              HPP-Verfahren
              <br />- <strong>Individualisierbar</strong> im{' '}
              <a
                className="tw-text-emerald-700 tw-underline"
                href="https://indivit.de/smoothie-mixen-ideen"
              >
                Online Smoothie Mixer
              </a>
              <br />- <strong>Ohne Ger&auml;teinvest</strong> von &uuml;ber 1000&euro; f&uuml;r
              Profi-Mixer
            </p>
          </div>
          <p className="tw-rounded-2xl tw-overflow-hidden tw-shadow-sm tw-border tw-border-emerald-50 tw-bg-white">
            <img
              title="Versandfertige Indivit Smoothies &ndash; HPP-verarbeitet"
              src="https://i.ibb.co/gY8VnMx/fructover-1-07.png"
              alt="Smoothieflaschen in Versandkarton auf Tisch"
              className="tw-w-full tw-h-auto"
              loading="lazy"
            />
          </p>
        </div>

        {/* Variations */}
        <div className="tw-bg-white tw-rounded-2xl tw-shadow-sm tw-border tw-border-emerald-50 tw-p-6">
          <h2 className="tw-text-2xl tw-font-extrabold tw-text-emerald-800">
            🔄 Variationsm&ouml;glichkeiten
          </h2>
          <ul className="tw-list-disc tw-pl-5 tw-space-y-1 tw-mt-2">
            <li>
              <strong>F&uuml;r Sportler</strong>: +5g Hanfprotein
            </li>
            <li>
              <strong>Extra-Cremig</strong>: 1 TL{' '}
              <a
                className="tw-text-emerald-700 tw-underline"
                href="https://indivit.de/ernaehrung/gesundes-mandelmus-pflanzliche-proteinquelle"
              >
                Mandelmus
              </a>{' '}
              hinzuf&uuml;gen
            </li>
            <li>
              <strong>Fructosearm</strong>:{' '}
              <a
                className="tw-text-emerald-700 tw-underline"
                href="https://indivit.de/ernaehrung/kalorienarme-himbeeren-gesundheitsvorteile"
              >
                Himbeeren
              </a>{' '}
              durch Heidelbeeren ersetzen
            </li>
          </ul>
          <p className="tw-mt-3">
            Probier auch unsere Schwesterrezepte{' '}
            <a
              className="tw-text-emerald-700 tw-underline"
              href="https://indivit.de/rezepte/gurken-smoothie-zum-abnehmen"
            >
              Fructover 2.0
            </a>{' '}
            und{' '}
            <a
              className="tw-text-emerald-700 tw-underline"
              href="https://indivit.de/rezepte/pfirsich-smoothie-fructoseintoleranz-ernaehrung"
            >
              Fructover 3.0
            </a>{' '}
            aus!
          </p>
        </div>

        {/* Shopping guide */}
        <div className="tw-bg-white tw-rounded-2xl tw-shadow-sm tw-border tw-border-emerald-50 tw-p-6">
          <h2 className="tw-text-2xl tw-font-extrabold tw-text-emerald-800">
            🛍️ Einkaufsguide f&uuml;r beste Qualit&auml;t
          </h2>
          <table className="tw-w-full tw-text-left tw-border-separate tw-border-spacing-y-2 tw-mt-3">
            <thead>
              <tr className="tw-bg-emerald-600 tw-text-white">
                <th className="tw-font-semibold tw-px-4 tw-py-3 tw-rounded-l-lg">Zutat</th>
                <th className="tw-font-semibold tw-px-4 tw-py-3 tw-rounded-r-lg">Tipp</th>
              </tr>
            </thead>
            <tbody className="[&>tr]:tw-bg-emerald-50 [&>tr]:tw-rounded-lg [&>tr>td]:tw-px-4 [&>tr>td]:tw-py-3 [&>tr]:tw-border [&>tr]:tw-border-emerald-100">
              <tr>
                <td>
                  <strong>
                    Bio-
                    <a
                      className="tw-text-emerald-700 tw-underline"
                      href="https://indivit.de/ernaehrung/kalorienarme-himbeeren-gesundheitsvorteile"
                    >
                      Himbeeren
                    </a>
                  </strong>
                </td>
                <td>TK-Beutel auf Eiskristalle pr&uuml;fen - Indiz f&uuml;r Schockfrostung</td>
              </tr>
              <tr>
                <td>
                  <strong>
                    Bio-
                    <a
                      className="tw-text-emerald-700 tw-underline"
                      href="https://indivit.de/ernaehrung/abnehmen-mit-gemuese-brokkoli-kalorienarm"
                    >
                      Brokkoli
                    </a>
                  </strong>
                </td>
                <td>Nur feste, dunkelgr&uuml;ne R&ouml;schen verwenden</td>
              </tr>
              <tr>
                <td>
                  <strong>
                    Bio-
                    <a
                      className="tw-text-emerald-700 tw-underline"
                      href="https://indivit.de/ernaehrung/kokoswasser-und-elektrolyte-getraenk-wirkung"
                    >
                      Kokoswasser
                    </a>
                  </strong>
                </td>
                <td>pH-Wert 5-5,4 zeigt frische Verarbeitung</td>
              </tr>
              <tr>
                <td>
                  <strong>
                    Bio-
                    <a
                      className="!tw-text-theme tw-underline"
                      href="https://indivit.de/ernaehrung/avocado-gesund-kaloriengehalt-analyse"
                    >
                      Avocado
                    </a>
                  </strong>
                </td>
                <td>Schale sollte unter Druck leicht nachgeben</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA / footer visuals */}
        <div className="tw-bg-white tw-rounded-2xl tw-shadow-sm tw-border tw-border-emerald-50 tw-p-6 tw-space-y-4">
          <p>
            💡 <strong>Wusstest du?</strong> Dieser Smoothie ist Teil unserer{' '}
            <a
              className="tw-text-emerald-700 tw-underline"
              href="https://indivit.de/trinkmahlzeit-snack-fuer-unterwegs"
            >
              Trinkmahlzeiten
            </a>
            -Kollektion und liefert alle essentiellen N&auml;hrstoffe einer Hauptmahlzeit. F&uuml;r
            mehr Infos zu <strong>welche Lebensmittel bei Fructoseintoleranz</strong> geeignet sind,
            schau in unserer{' '}
            <a
              className="tw-text-emerald-700 tw-underline"
              href="https://indivit.de/ernaehrung/kalorienarme-himbeeren-gesundheitsvorteile"
            >
              Himbeer-Warenkunde
            </a>{' '}
            vorbei!
          </p>

          <p className="tw-rounded-2xl tw-overflow-hidden tw-shadow-sm">
            <img
              title="Smoothie-Genuss bei der Arbeit &ndash; funktional &amp; lecker"
              src="https://i.ibb.co/q3jM0JtD/fructover-1-08.png"
              alt="Zufriedener Nutzer trinkt Smoothie am Laptop im Homeoffice"
              className="tw-w-full tw-h-auto"
              loading="lazy"
            />
          </p>

          <div className="tw-bg-[#FFF3C6] tw-rounded-2xl tw-p-6">
            <p className="tw-font-semibold tw-text-emerald-900">Entdecke unsere Vielfalt</p>
            <p className="tw-mt-1">
              Im{' '}
              <a className="tw-text-emerald-800 tw-underline" href="https://indivit.de">
                Indivit Online Shop
              </a>{' '}
              findest du:
              <br />✅ Individuell{' '}
              <a
                className="tw-text-emerald-800 tw-underline"
                href="https://indivit.de/smoothie-mixen-ideen"
              >
                konfigurierbare Smoothies
              </a>
              <br />✅ Komplettpakete f&uuml;r{' '}
              <a
                className="tw-text-emerald-800 tw-underline"
                href="https://indivit.de/saftkur-erfahrung-mit-intervallfasten"
              >
                Intervallfasten
              </a>
              <br />✅ Praktische{' '}
              <a
                className="tw-text-emerald-800 tw-underline"
                href="https://indivit.de/trinkmahlzeit-snack-fuer-unterwegs"
              >
                Trinkmahlzeiten
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
