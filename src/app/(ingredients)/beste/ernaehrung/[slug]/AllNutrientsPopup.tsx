'use client'
import { formatToGerman, formatToGerman1, formatToGerman2 } from '@/utils/germanFormat'
import React, { useState } from 'react'

export default function AllNutrientsPopup({ data }) {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div>
      <div
        className="modal fade"
        id="nutrientsModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content ">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Nährstoffe
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="flx-subheader">
              {/* <p>1abc</p>
              <p>
                100% <br /> 100%
              </p> */}
            </div>
            <section>
              <div className="container-fluid px-4">
                <div className="row">
                  <nav
                    id="navbar-nutrients"
                    className="navbar navbar-light bg-light rounded-8 px-3"
                  >
                    <ul className="nav nav-tabs border-0" id="nav-tab">
                      <li className="nav-item">
                        <a
                          className={`nav-link border-start-0 border-end-0 ${
                            activeTab === 0 ? 'border-bottom-3' : ''
                          } `}
                          href="#all"
                          onClick={() => setActiveTab(0)}
                        >
                          Alle
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link border-start-0 border-end-0 ${
                            activeTab === 1 ? 'border-bottom-3' : ''
                          } `}
                          href="#nahrwerte"
                          onClick={() => setActiveTab(1)}
                        >
                          Nährwerte
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link border-start-0 border-end-0 ${
                            activeTab === 2 ? 'border-bottom-3' : ''
                          } `}
                          href="#vitamins"
                          onClick={() => setActiveTab(2)}
                        >
                          Vitamine
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link border-start-0 border-end-0 ${
                            activeTab === 3 ? 'border-bottom-3' : ''
                          } `}
                          href="#minerals"
                          onClick={() => setActiveTab(3)}
                        >
                          Mineralstoffe
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link border-start-0 border-end-0 ${
                            activeTab === 4 ? 'border-bottom-3' : ''
                          } `}
                          href="#amino"
                          onClick={() => setActiveTab(4)}
                        >
                          Aminosäuren
                        </a>
                      </li>
                    </ul>
                  </nav>

                  <p>
                    Hinweis: Alle Angaben unterliegen natürlichen Schwankungen, da dein Smoothie
                    ausschließlich aus natürlichen Zutaten besteht
                  </p>

                  <div
                    data-bs-spy="scroll"
                    data-bs-target="#navbar-nutrients"
                    data-bs-offset="0"
                    className="scrollspy-example flx-hsn "
                    tabIndex={0}
                    id="nav-tabContent"
                  >
                    <div id="all">
                      {/* Nahrwerte Start */}
                      <div id="nahrwerte">
                        <table className="table table-striped" style={{ borderTop: '1px solid' }}>
                          <thead className=" rounded-3">
                            <tr className="table-active bg-theme-success text-white rounded-8">
                              <td colSpan={3}>Durchschnittliche Nährwerte</td>
                              <td>pro 100 ml</td>
                              <td>pro Smoothie (250 ml)</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colSpan={3}> Energie </td>
                              <td>
                                {formatToGerman2(parseFloat(data?.energy_per_250ml_in_kJ) / 2.5)}
                                kJ
                              </td>
                              <td>
                                {formatToGerman2(data?.energy_per_250ml_in_kJ)}
                                kJ
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={3}> Energie </td>
                              <td>
                                {formatToGerman2(parseFloat(data?.energy_per_250ml_in_kcal) / 2.5)}
                                kcal
                              </td>
                              <td>
                                {formatToGerman2(data?.energy_per_250ml_in_kcal)}
                                kcal
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={3}> Fett </td>
                              <td>
                                {formatToGerman2(parseFloat(data?.fat_per_250ml_in_g) / 2.5)}g
                              </td>
                              <td>{formatToGerman2(data?.fat_per_250ml_in_g)}g</td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={3}> gesättigte Fettsäuren </td>
                              <td>
                                {formatToGerman2(
                                  parseFloat(data?.saturated_fat_per_250ml_in_g) / 2.5
                                )}
                                g
                              </td>
                              <td>{formatToGerman2(data?.saturated_fat_per_250ml_in_g)}g</td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={3}>Einfach Ungesättigte Fettsäuren</td>
                              <td>
                                {formatToGerman2(
                                  parseFloat(data?.monounsaturated_fatty_acids_per_250ml_in_g) / 2.5
                                )}
                                g
                              </td>
                              <td>
                                {formatToGerman2(data?.monounsaturated_fatty_acids_per_250ml_in_g)}g
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={3}> Mehrfach Ungesättigte Fettsäuren </td>
                              <td>
                                {formatToGerman2(
                                  parseFloat(data?.polyunsaturated_fatty_acids_per_250ml_in_g) / 2.5
                                )}
                                g
                              </td>
                              <td>
                                {formatToGerman2(data?.polyunsaturated_fatty_acids_per_250ml_in_g)}g
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={3}> Kohlenhydrate </td>
                              <td>
                                {formatToGerman2(
                                  parseFloat(data?.carbohydrates_per_250ml_in_g) / 2.5
                                )}
                                g
                              </td>
                              <td>{formatToGerman2(data?.carbohydrates_per_250ml_in_g)}g</td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={3}> Zucker </td>
                              <td>
                                {formatToGerman2(parseFloat(data?.sugar_per_250ml_in_g) / 2.5)}g
                              </td>
                              <td>{formatToGerman2(data?.sugar_per_250ml_in_g)}g</td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={3}> Fructose </td>
                              <td>
                                {formatToGerman2(parseFloat(data?.fructose_per_250ml_in_g) / 2.5)}g
                              </td>
                              <td>{formatToGerman2(data?.fructose_per_250ml_in_g)}g</td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={3}> Ballaststoffe </td>
                              <td>
                                {formatToGerman2(parseFloat(data?.fiber_per_250ml_in_g) / 2.5)}g
                              </td>
                              <td>{formatToGerman2(data?.fiber_per_250ml_in_g)}g</td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={3}> Eiweiß </td>
                              <td>
                                {formatToGerman2(parseFloat(data?.protein_per_250ml_in_g) / 2.5)}g
                              </td>
                              <td>{formatToGerman2(data?.protein_per_250ml_in_g)}g</td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={3}> Salz </td>
                              <td>
                                {formatToGerman2(parseFloat(data?.salt_per_250ml_in_mg) / 2.5)}
                                mg
                              </td>
                              <td>
                                {formatToGerman2(data?.salt_per_250ml_in_mg)}
                                mg
                              </td>
                            </tr>
                            {/* ------------------------ */}
                          </tbody>
                        </table>
                      </div>
                      {/* Nahrwerte End */}

                      {/* Vitamins Start */}
                      <div id="vitamins">
                        <table className="table table-striped" style={{ borderTop: '1px solid' }}>
                          <thead>
                            <tr className="table-active bg-theme-success text-white">
                              <td colSpan={3}>Vitamine</td>
                              <td>pro (250 ml)</td>
                              <td>empfohlene tägliche Zufuhr*</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colSpan={3}> Vitamin A (RE)</td>
                              <td>
                                {formatToGerman2(data?.vitamin_A_RE_per_250ml_in_micro_g)}
                                µg
                              </td>
                              <td>
                                {formatToGerman(
                                  parseFloat(data?.vitamin_A_RE_percent_intake) * 100
                                )}
                                %
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={3}> Vitamin D</td>
                              <td>
                                {formatToGerman2(data?.vitamin_D_per_250ml_in_micro_g)}
                                µg
                              </td>
                              <td>
                                {formatToGerman(parseFloat(data?.vitamin_D_percent_intake) * 100)}%
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={3}> Vitamin E (Alpha TE)</td>
                              <td>
                                {formatToGerman2(data?.vitamin_E_alpha_TE_per_250ml_in_mg)}
                                mg
                              </td>
                              <td>
                                {formatToGerman(
                                  parseFloat(data?.vitamin_E_alpha_TE_percent_intake) * 100
                                )}
                                %
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={3}> Vitamin K</td>
                              <td>
                                {formatToGerman2(data?.vitamin_K_per_250ml_in_micro_g)}
                                µg
                              </td>
                              <td>
                                {formatToGerman(parseFloat(data?.vitamin_K_percent_intake) * 100)}%
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={3}> Vitamin C</td>
                              <td>
                                {formatToGerman2(data?.vitamin_C_per_250ml_in_mg)}
                                mg
                              </td>
                              <td>
                                {formatToGerman(parseFloat(data?.vitamin_C_percent_intake) * 100)}%
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={3}> Vitamin B1</td>
                              <td>
                                {formatToGerman2(data?.vitamin_B1_per_250ml_in_micro_g)}
                                µg
                              </td>
                              <td>
                                {formatToGerman(parseFloat(data?.vitamin_B1_percent_intake) * 100)}%
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={3}> Vitamin B2</td>
                              <td>
                                {formatToGerman2(data?.vitamin_B2_per_250ml_in_micro_g)}
                                µg
                              </td>
                              <td>
                                {formatToGerman(parseFloat(data?.vitamin_B2_percent_intake) * 100)}%
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={3}>Niacin (NE) </td>
                              <td>
                                {formatToGerman2(data?.niacin_NE_per_250ml_in_mg)}
                                mg
                              </td>
                              <td>
                                {formatToGerman(parseFloat(data?.niacin_NE_percent_intake) * 100)}%
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={3}>Vitamin B6</td>
                              <td>
                                {formatToGerman2(data?.vitamin_B6_per_250ml_in_micro_g)}
                                µg
                              </td>
                              <td>
                                {formatToGerman(parseFloat(data?.vitamin_B6_percent_intake) * 100)}%
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={3}> Folsäure </td>
                              <td>
                                {formatToGerman2(data?.folic_acid_per_250ml_in_micro_g)}
                                µg
                              </td>
                              <td>
                                {formatToGerman(parseFloat(data?.folic_acid_percent_intake) * 100)}%
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={3}> Vitamin B12</td>
                              <td>
                                {formatToGerman2(data?.vitamin_B12_per_250ml_in_micro_g)}
                                µg
                              </td>
                              <td>
                                {formatToGerman(parseFloat(data?.vitamin_B12_percent_intake) * 100)}
                                %
                              </td>
                            </tr>

                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={3}> Biotin</td>
                              <td>
                                {formatToGerman2(data?.biotin_per_250ml_in_micro_g)}
                                µg
                              </td>
                              <td>
                                {formatToGerman(parseFloat(data?.biotin_percent_intake) * 100)}%
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={3}> Pantothensäure </td>
                              <td>
                                {formatToGerman2(data?.pantothenic_acid_per_250ml_in_micro_g)}
                                µg
                              </td>
                              <td>
                                {formatToGerman(
                                  parseFloat(data?.pantothenic_acid_percent_intake) * 100
                                )}
                                %
                              </td>
                            </tr>
                            {/* ------------------------ */}
                          </tbody>
                        </table>
                      </div>
                      {/* Vitamins End */}

                      {/* Minerals Start */}
                      <div id="minerals">
                        <table className="table table-striped" style={{ borderTop: '1px solid' }}>
                          <thead>
                            <tr className="table-active bg-theme-success text-white">
                              <td colSpan={3}>Mineralstoffe</td>
                              <td>pro (250ml)</td>
                              <td>empfohlene tägliche Zufuhr*</td>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td colSpan={3}> Calcium</td>
                              <td>
                                {formatToGerman2(data?.calcium_per_250ml_in_mg)}
                                mg
                              </td>
                              <td>
                                {formatToGerman(parseFloat(data?.calcium_percent_intake) * 100)}%
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={3}> Phosphor</td>
                              <td>
                                {formatToGerman2(data?.phosphorus_per_250ml_in_mg)}
                                mg
                              </td>
                              <td>
                                {formatToGerman(parseFloat(data?.phosphorus_percent_intake) * 100)}%
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={3}> Kalium</td>
                              <td>
                                {formatToGerman2(data?.potassium_per_250ml_in_mg)}
                                mg
                              </td>
                              <td>
                                {formatToGerman(parseFloat(data?.potassium_percent_intake) * 100)}%
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={3}> Eisen </td>
                              <td>
                                {formatToGerman2(data?.iron_per_250ml_in_mg)}
                                mg
                              </td>
                              <td>
                                {formatToGerman1(parseFloat(data?.iron_percent_intake) * 100)}%
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={3}> Zink </td>
                              <td>
                                {formatToGerman2(data?.zinc_per_250ml_in_micro_g)}
                                µg
                              </td>
                              <td>
                                {formatToGerman(parseFloat(data?.zinc_percent_intake) * 100)}%
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={3}> Kupfer</td>
                              <td>
                                {formatToGerman2(data?.copper_per_250ml_in_micro_g)}
                                µg
                              </td>
                              <td>
                                {formatToGerman(parseFloat(data?.copper_percent_intake) * 100)}%
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={3}> Jod </td>
                              <td>
                                {formatToGerman2(data?.iodine_per_250ml_in_micro_g)}
                                µg
                              </td>
                              <td>
                                {formatToGerman(parseFloat(data?.iodine_percent_intake) * 100)}%
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={3}> Selen</td>
                              <td>
                                {formatToGerman2(data?.selenium_per_250ml_in_micro_g)}
                                µg
                              </td>
                              <td>
                                {formatToGerman(parseFloat(data?.selenium_percent_intake) * 100)}%
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={3}> Magnesium</td>
                              <td>
                                {formatToGerman2(data?.magnesium_per_250ml_in_mg)}
                                mg
                              </td>
                              <td>
                                {formatToGerman(parseFloat(data?.magnesium_percent_intake) * 100)}%
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={3}> Mangan </td>
                              <td>
                                {formatToGerman2(data?.manganese_per_250ml_in_micro_g)}
                                µg
                              </td>
                              <td>
                                {formatToGerman(parseFloat(data?.manganese_percent_intake) * 100)}%
                              </td>
                            </tr>
                            {/* ------------------------ */}
                          </tbody>
                        </table>
                      </div>
                      {/* Minerals End */}

                      {/* Amino Start */}
                      <div id="amino">
                        <table className="table table-striped" style={{ borderTop: '1px solid' }}>
                          <thead>
                            <tr className="table-active bg-theme-success text-white">
                              <td colSpan={4}>Aminosäuren</td>
                              <td>pro (250ml)</td>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td colSpan={4}> Alanin </td>
                              <td>
                                {formatToGerman2(data?.alanine_per_250ml_in_mg)}
                                mg
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={4}> Arginin </td>
                              <td>
                                {formatToGerman2(data?.arginine_per_250ml_in_mg)}
                                mg
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={4}> Asparaginsäure </td>
                              <td>
                                {formatToGerman2(data?.aspartic_acid_per_250ml_in_mg)}
                                mg
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={4}> Cystein </td>
                              <td>
                                {formatToGerman2(data?.cysteine_per_250ml_in_mg)}
                                mg
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={4}> Glutaminsäure </td>
                              <td>
                                {formatToGerman2(data?.glutamic_acid_per_250ml_in_mg)}
                                mg
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={4}> Glycin </td>
                              <td>
                                {formatToGerman2(data?.glycine_per_250ml_in_mg)}
                                mg
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={4}> Histidin </td>
                              <td>
                                {formatToGerman2(data?.histidine_per_250ml_in_mg)}
                                mg
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={4}> Isoleucin </td>
                              <td>
                                {formatToGerman2(data?.isoleucine_per_250ml_in_mg)}
                                mg
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={4}> Leucin </td>
                              <td>
                                {formatToGerman2(data?.leucine_per_250ml_in_mg)}
                                mg
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={4}> Lysin </td>
                              <td>
                                {formatToGerman2(data?.lysine_per_250ml_in_mg)}
                                mg
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={4}> Methionin </td>
                              <td>
                                {formatToGerman2(data?.methionine_per_250ml_in_mg)}
                                mg
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={4}> Phenylalanin </td>
                              <td>
                                {formatToGerman2(data?.phenylalanine_per_250ml_in_mg)}
                                mg
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={4}> Prolin </td>
                              <td>
                                {formatToGerman2(data?.proline_per_250ml_in_mg)}
                                mg
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={4}> Serin </td>
                              <td>
                                {formatToGerman2(data?.serine_per_250ml_in_mg)}
                                mg
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={4}> Threoin </td>
                              <td>
                                {formatToGerman2(data?.threonine_per_250_ml_in_mg)}
                                mg
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={4}> Tryptophan </td>
                              <td>
                                {formatToGerman2(data?.tryptophan_per_250ml_in_mg)}
                                mg
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={4}> Tyrosin </td>
                              <td>
                                {formatToGerman2(data?.tyrosine_per_250ml_in_mg)}
                                mg
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            {/* ------------------------ */}
                            <tr>
                              <td colSpan={4}> Valin </td>
                              <td>
                                {formatToGerman2(data?.valine_per_250ml_in_mg)}
                                mg
                              </td>
                            </tr>
                            {/* ------------------------ */}
                            {/* ------------------------ */}

                            {/* ------------------------ */}
                          </tbody>
                          {/* Amino End */}
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="modal-footer justify-content-start">
              <small className="text-muted">
                * Angaben entsprechen dem mittleren Tagesbedarf für Frauen und Männer gemäß den
                D-A-CH Referenzwerten
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
