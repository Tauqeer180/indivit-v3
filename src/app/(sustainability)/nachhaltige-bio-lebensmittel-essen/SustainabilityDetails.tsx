import { MarkdownDisplay } from '@/components/common/MarkdownDisplay'
import Image from 'next/image'
import React from 'react'
export default function SustainabilityDetails() {
  return (
    <div>
      {/* <!-- about section --> */}
      <section id="flx-about" className="!tw-pt-16 ">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 flx-about-col pe-5">
              <div className="text-left">
                <div className="col-6 float-end flx-forever-object">
                  <div className="disk-container d-flex align-items-center justify-content-center">
                    <div className="text-center">
                      <h2 className="hsn-smoothies fs-2 fw-bold mb-1 lh-1">Indivit</h2>
                      <p className="fs-6 mb-1 lh-1">
                        Bio-Zutaten <br /> Recycling <br /> Ressourcen <br /> Verschwendung
                      </p>
                    </div>
                  </div>
                  <div className="text-left flx-img-position">
                    <Image
                      src="/assets/img/Sustainable_smoothie.png"
                      alt="sustainable smoothie"
                      height={500}
                      width={500}
                      className="img-fluid z-3"
                    />
                  </div>
                </div>

                <div className="no-tailwind">
                  <h2>
                    Mit indivit Smoothies:{' '}
                    <span className="hsn-smoothies">
                      &nbsp;Schluck für Schluck zur Nachhaltigkeit
                    </span>
                  </h2>
                  <p>
                    Du willst dich klimafreundlich ernähren und gleichzeitig auf Bio-Lebensmittel
                    setzen? Indivit verbindet ökologisches Essen mit innovativen Lösungen: Von
                    zertifizierten Bio-Zutaten über umweltfreundliche Verpackungen bis zur
                    ressourcensparenden Produktion. Wir zeigen, wie nachhaltige Ernährung mit
                    recyclingfähigen Materialien, CO₂-optimiertem Versand und Zero-Waste-Philosophie
                    funktioniert. Erfahre hier, warum unsere Smoothies nicht nur deinem Körper,
                    sondern auch dem Planeten guttun.
                  </p>
                  <br />

                  {/* Secondary Text */}
                  <p>
                    🌍 <strong>Warum ökologische Ernährung mehr als ein Trend ist</strong>
                    <br />
                    Immer mehr Menschen fragen sich: Wie kann ich mich{' '}
                    <strong>umweltfreundlich ernähren</strong> und gleichzeitig etwas für meine
                    Gesundheit tun? Die Antwort liegt in der Kombination aus{' '}
                    <strong>Bio-Lebensmitteln</strong>, bewusstem Konsum und innovativen Lösungen.
                    Bei uns findest du nicht nur Smoothies, sondern ein ganzheitliches Konzept für{' '}
                    <strong>nachhaltige Lebensmittel</strong> – von der Zutat bis zur
                    Verpackung.{' '}
                  </p>

                  <hr />

                  <h2>Bio-Lebensmittel: Mehr als nur ein Label</h2>

                  <h3>Was „ökologisch erzeugt“ wirklich bedeutet</h3>

                  <p>
                    <strong>Bio-Lebensmittel</strong> stammen aus Anbaumethoden, die:
                    <br />
                    ✔️ Auf chemisch-synthetische Pestizide verzichten
                    <br />
                    ✔️ Natürliche Dünger wie Kompost nutzen
                    <br />
                    ✔️ Tierwohl und Artenvielfalt fördern
                    <br />
                    ✔️ Transparente Herkunftsangaben{' '}
                  </p>

                  <p>
                    <strong>Bio-Lebensmittel</strong> sind kein Luxus, sondern eine Investition in
                    unsere gemeinsame Zukunft. Bei Indivit setzen wir seit der ersten Flasche auf{' '}
                    <strong>ökologische Ernährung</strong> – weil echter Genuss nie auf Kosten der
                    Umwelt gehen darf.{' '}
                  </p>

                  <p>
                    📊 <strong>Der Preis-Vergleich, der nachdenklich macht</strong>{' '}
                  </p>

                  <table>
                    <thead>
                      <tr>
                        <th></th>
                        <th>Konventionell</th>
                        <th>Bio</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>CO₂-Fußabdruck*</td>
                        <td>2,5 kg/kg</td>
                        <td>1,8 kg/kg</td>
                      </tr>
                      <tr>
                        <td>Wasserverbrauch*</td>
                        <td>500 l/kg</td>
                        <td>300 l/kg</td>
                      </tr>
                      <tr>
                        <td>Biodiversitätsindex</td>
                        <td>60/100</td>
                        <td>85/100</td>
                      </tr>
                    </tbody>
                  </table>

                  <p>*Durchschnittswerte laut Umweltbundesamt </p>

                  <p>
                    💡 <strong>Unser Versprechen</strong>: Alle Zutaten stammen aus
                    EU-zertifiziertem Öko-Anbau – transparent nachverfolgbar in jedem Smoothie.{' '}
                  </p>

                  <hr />

                  <h2>Klimafreundlich ernähren: Vom Acker bis zur Lieferung</h2>

                  <h3>So reduzieren wir Emissionen</h3>

                  <p>
                    Unser Vorzeige-Smoothie{' '}
                    <strong>
                      <a href="https://indivit.de/rezepte/pfirsich-smoothie-fructoseintoleranz-ernaehrung">
                        Fructover 3.0
                      </a>
                    </strong>{' '}
                    zeigt, wie <strong>umweltfreundlich essen</strong> funktioniert:
                    <br />- <strong>CO₂-Bilanz</strong>: Unter 100 g pro Flasche (inkl. Anbau &amp;
                    Transport)
                    <br />- <strong>Transport</strong>: Keine Flugware – nur Schiff und Bahn
                    <br />- <strong>Zutatenmix</strong>: Regionales Obst kombiniert mit Superfoods
                    aus fairem Handel{' '}
                  </p>

                  <p>
                    ♻️ <strong>Die Verpackungsrevolution</strong>
                    <br />- <strong>Flasche</strong>: 100 % recyceltes PET (spart 90 % Energie vs.
                    Neuplastik)
                    <br />- <strong>Kühlbox</strong>: Aus 50 % Altpapier, komplett recyclingfähig
                    <br />- <strong>Etiketten</strong>: Pflanzenbasierte Druckfarben{' '}
                  </p>

                  <hr />

                  <h2>Ressourcen clever nutzen – ohne Qualitätsverlust</h2>

                  <h3>Warum wir auf Glas verzichten</h3>

                  <p>Viele glauben, Glas sei nachhaltiger. Doch unser Vergleich zeigt: </p>

                  <table>
                    <thead>
                      <tr>
                        <th>Kriterien</th>
                        <th>Recyceltes PET</th>
                        <th>Glas</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Energieverbrauch</td>
                        <td>10 % von Neu-Plastik</td>
                        <td>3x höher</td>
                      </tr>
                      <tr>
                        <td>CO₂ pro Flasche</td>
                        <td>0,05 kg</td>
                        <td>0,15 kg</td>
                      </tr>
                      <tr>
                        <td>Wiederverwendungen</td>
                        <td>Recycling-Kreislauf im Pfandsystem</td>
                        <td>15x nötig für positive Ökobilanz</td>
                      </tr>
                    </tbody>
                  </table>

                  <p>
                    <em>Warum also kein Glas?</em> Ab 200 km Transportstrecke schneiden PET-Flaschen
                    in der Ökobilanz besser ab – selbst bei theoretisch 15-maliger Wiederverwendung
                    einer Verpackung aus Glas.{' '}
                  </p>

                  <p>
                    💧 <strong>Wasser sparen durch Effizienz</strong>
                    <br />
                    Unsere Berliner Manufaktur verbraucht 70 % weniger Wasser als typische
                    Haushaltsprozesse – dank geschlossenem Kühlkreislauf.{' '}
                  </p>

                  <hr />

                  <h2>Zero Waste: Kein Smoothie für die Tonne</h2>

                  <h3>Wie wir Lebensmittelverschwendung stoppen</h3>

                  <ul>
                    <li>
                      <strong>On-demand-Produktion</strong>: Wir mixen erst nach deiner
                      Bestellung{' '}
                    </li>
                    <li>
                      <strong>HPP-Verfahren</strong>: Natürliche Haltbarkeit ohne
                      Konservierungsstoffe{' '}
                    </li>
                    <li>
                      <strong>Supply-Management</strong>: Chargen werden vollständig
                      verarbeitet{' '}
                    </li>
                  </ul>

                  <hr />

                  <h2>
                    FAQ: Häufige Fragen zu <strong>nachhaltiger Ernährung</strong>
                  </h2>

                  <h3>❓ „Sind Bio-Lebensmittel wirklich gesünder?“</h3>

                  <p>
                    Studien zeigen: Bio-Obst enthält bis zu 60 % mehr Antioxidantien. Entscheidender
                    ist aber der Verzicht auf Pestizidrückstände.{' '}
                  </p>

                  <h3>❓ „Wie kann ich im Alltag klimafreundlich essen?“</h3>

                  <ul>
                    <li>
                      Starte mit kleinen Schritten wie unserem{' '}
                      <a href="https://indivit.de/saftkur-erfahrung-mit-intervallfasten">
                        Intervallfasten-Programm
                      </a>{' '}
                    </li>
                    <li>
                      Ersetze Snacks durch <strong>umweltfreundliche Lebensmittel</strong> wie Nüsse
                      oder unsere{' '}
                      <a href="https://indivit.de/produkte/suesse-snacks-gesund-smoothie-optionen">
                        Genießer-Smoothies
                      </a>{' '}
                    </li>
                  </ul>

                  <h3>❓ „Welche Produkte sollte ich unbedingt Bio kaufen?“</h3>

                  <p>
                    Bei dünnschaligem Obst/Gemüse wie Äpfeln oder Spinat lohnt sich Bio besonders.
                    In unseren{' '}
                    <a href="https://indivit.de/die-besten-saftkur-fastenkur-programme">
                      Fastenkuren
                    </a>{' '}
                    setzen wir deshalb auf 100 % Bio-Zutaten.{' '}
                  </p>

                  <h3>❓ „Wie ernähre ich mich klimafreundlich?“</h3>

                  <ul>
                    <li>Kombiniere regional + saisonal </li>
                    <li>Reduziere tierische Produkte </li>
                    <li>Plane Einkäufe clever </li>
                    <li>Nutze ökologische Verpackungen </li>
                  </ul>

                  <hr />

                  <h2>
                    Dein Guide zum <strong>nachhaltigen Einkaufen</strong>
                  </h2>

                  <h3>3 Schritte für mehr Öko-Bewusstsein</h3>

                  <ol>
                    <li>
                      <strong>Planvoll bestellen</strong>: Ob{' '}
                      <a href="https://indivit.de/trinkmahlzeit-snack-fuer-unterwegs">
                        Trinkmahlzeit
                      </a>{' '}
                      oder{' '}
                      <a href="https://indivit.de/produkte/saftkur-7-tage-heilfasten-nach-buchinger">
                        7-Tage-Kur
                      </a>{' '}
                      – vermeide Spontankäufe{' '}
                    </li>
                    <li>
                      <strong>Kreislauf fördern</strong>: Gib leere Flaschen ins Pfand oder bastle
                      sie zu Seedbombs um{' '}
                    </li>
                    <li>
                      <strong>Experimentieren</strong>: Probier im{' '}
                      <a href="https://indivit.de/smoothie-mixen-ideen">Smoothie-Mixer</a> Rezepte
                      mit regionalen Zutaten wie Sellerie{' '}
                    </li>
                  </ol>

                  <p>
                    🌱 <strong>Let’s change the sip!</strong>
                    <br />
                    Jeder Schluck unserer Bio-Smoothies ist ein Beitrag für eine lebenswerte
                    Zukunft. Willst du wissen, wie einfach <strong>ökologisch essen</strong> sein
                    kann?{' '}
                    <a href="https://indivit.de/#uebersicht-smoothie-produkte">
                      Entdecke unsere Programme
                    </a>
                    .{' '}
                  </p>

                  <blockquote>
                    <p>
                      <strong>Pro-Tipp:</strong> Unser{' '}
                      <a href="https://indivit.de/smoothie-mixen-ideen">Smoothie-Konfigurator</a>{' '}
                      zeigt live, wie sich Zutaten auf deine CO₂-Bilanz auswirken. Experimentiere
                      mit verschiedenen Kombinationen!{' '}
                    </p>
                  </blockquote>

                  <hr />

                  <h3>Unser Nachhaltigkeitsversprechen</h3>

                  <ul>
                    <li>
                      🌿 <strong>100% Bio-Zutaten</strong> aus EU-zertifiziertem Anbau{' '}
                    </li>
                    <li>
                      🔍 <strong>Volle Transparenz</strong> über Herkunft und CO₂-Fußabdruck{' '}
                    </li>
                    <li>
                      ♻️ <strong>Kreislaufwirtschaft</strong> durch smartes Recycling{' '}
                    </li>
                    <li>
                      🤝 <strong>Fairer Handel</strong> mit langfristigen Partnerbetrieben{' '}
                    </li>
                  </ul>

                  <p>
                    <em>Jeder Schluck ist eine Entscheidung – für dich und unseren Planeten.</em>{' '}
                    🌍✨
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about section --> */}
    </div>
  )
}
