import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
// import { Link } from "react-router-dom";
// import ToolTip from '../../components/common/ToolTip'
// import infoIcon from '../../assets/icon/allingredientsinfo.png'
// import useCheckSubscription from '../../hooks/useCheckSubscription'
import { useCart } from 'react-use-cart'
import { useIsFetching } from '@tanstack/react-query'
// import refreshIcon from '../../assets/icon/refresh.png'
import Link from 'next/link'
import ToolTip from '@/components/common/ToolTip'
import useCheckSubscription from '@/hooks/useCheckSubscription'
import { useAppSelector } from '@/redux/hooks'

export default function AddressForm({ onSubmit, register, errors }) {
  const [billingAddress, setBillingAddress] = useState(false)
  const [isVisibile, setIsVisibile] = useState(false)
  const isAuthenticated = useAppSelector((state) => state.account.isAuthenticated)
  const { isSubAvailable } = useCheckSubscription()
  const { items: cartItems } = useCart()

  const isFetching = useIsFetching({ queryKey: ['shippingCost'] })

  return (
    <div>
      <div className="py-5">
        <h6>Kontaktinformationen</h6>
        {/* Contact Information */}
        {/* <p>
          Already have an account?
          <Link to="/login" className="text-theme-success">
            &nbsp;&nbsp;&nbsp;Login Now
          </Link>
        </p> */}
      </div>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <input
            type="email"
            className="form-control shadow-none border-1 border-secondary rounded-3 py-2"
            id="email"
            placeholder="E-Mail*"
            {...register('email', {
              required: 'notwendig',
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors.email && <p className="text-danger my-1">{errors.email.message}</p>}
          {errors.email && errors?.email?.type == 'pattern' && (
            <p className="text-danger my-1">Muss eine gültige E-Mail-Adresse sein</p>
          )}
        </div>

        {!isAuthenticated && (
          <div className="py-4">
            <div className="d-flex">
              <h6>Anmelden mit Kundenkonto </h6>
              {/* Account Information */}
              <ToolTip
                title={'Anmelden mit Kundenkonto'}
                label={
                  'Mit einem Kundenkonto kannst du ganz bequem deine Daten einsehen und z.B. den Status deiner Bestellung verfolgen. Die Anmeldung ist freiwillig und nur zwingend erforderlich, wenn du ein Abo für eine Smoothiebox abschließt'
                }
              >
                <img
                  src={'/assets/icon/allingredientsinfo.png'}
                  alt=""
                  className="img-fluid  ms-2"
                  width="18"
                  loading="lazy"
                />
              </ToolTip>
            </div>

            <div>
              <label className="form-label" for="typePasswordX">
                Passwort
              </label>
              <div className="flx-login-icons pb-3 position-relative ">
                <i className="fa fa-solid fa-key flx-icon"></i>
                <input
                  type={isVisibile ? 'text' : 'password'}
                  id="typePasswordX"
                  className="form-control rounded bg-white border border-secondary border-1"
                  placeholder="Gib hier dein Passwort ein"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  {...register('password', {
                    required: isSubAvailable(cartItems),
                    minLength: 6,
                  })}
                />
                <i
                  className={`fa fa-solid  ${
                    isVisibile ? 'fa-eye' : 'fa-eye-slash'
                  }  flx-icon top-0 end-0 cursor-pointer text-black-50  `}
                  onClick={() => setIsVisibile(!isVisibile)}
                ></i>

                {errors?.password?.type === 'required' && (
                  <p className="text-danger my-1">* Angabe notwendig</p>
                )}
                {errors?.password?.type === 'minLength' && (
                  <p className="text-danger my-1">Min Length should be 6</p>
                )}
              </div>
            </div>
          </div>
        )}
        <div>
          <h4 className="py-4">Lieferadresse</h4>
          {/* Shipping Address */}
          <div className="mb-3">
            <select
              className="form-select shadow-none border-1 border-secondary rounded-3 py-2"
              id="country"
              {...register('country', {
                required: 'Notwendig',
              })}
            >
              <option value="" disabled>
                Country/Region
              </option>
              <option selected value="deutschland">
                Deutschland
              </option>
              <option disabled value="usa">
                United States
              </option>
              <option disabled value="canada">
                Canada
              </option>
              <option disabled value="mexico">
                Mexico
              </option>
            </select>
            {errors.country && <p className="text-danger my-1">{errors.country.message}</p>}
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control shadow-none border-1 border-secondary rounded-3 py-2"
              id="company"
              placeholder="Firma"
              // Company
              {...register('company')}
            />
            {errors.company && <p className="text-danger my-1">{errors.company.message}</p>}
          </div>

          <div className="row py-4">
            <div className="col mb-3">
              <input
                type="name"
                className="form-control shadow-none border-1 border-secondary rounded-3 py-2"
                id="first-name"
                placeholder="Vorname*"
                {...register('fName', {
                  required: 'Notwendig',
                })}
              />
              {errors.fName && <p className="text-danger my-1">{errors.fName.message}</p>}
            </div>
            <div className="col mb-3">
              <input
                type="name"
                className="form-control shadow-none border-1 border-secondary rounded-3 py-2"
                id="last-name"
                placeholder="Nachname*                "
                {...register('lName', {
                  required: 'Notwendig',
                })}
              />
              {errors.lName && <p className="text-danger my-1">{errors.lName.message}</p>}
            </div>
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control shadow-none border-1 border-secondary rounded-3 py-2"
              id="address"
              placeholder="Straße + Hausnummer*"
              {...register('address', {
                required: 'Notwendig',
              })}
            />
            {errors.address && <p className="text-danger my-1">{errors.address.message}</p>}
          </div>
          <div className="mb-3 py-4">
            <input
              type="text"
              className="form-control shadow-none border-1 border-secondary rounded-3 py-2"
              id="apartment"
              placeholder="Adresszusatz"
              {...register('apartment')}
            />
            {errors.apartment && <p className="text-danger my-1">{errors.apartment.message}</p>}
          </div>
          <div className="row">
            <div className="col-12 col-md-4 pb-4">
              <input
                type="text"
                className="form-control shadow-none border-1 border-secondary rounded-3 py-2"
                id="postal-code"
                placeholder="PLZ*"
                {...register('postal_code', {
                  required: 'Notwendig',
                  pattern: /^[0-9]+$/,
                })}
              />
              {/* {JSON.stringify(errors?.postal_code)} */}
              {errors.postal_code && (
                <p className="text-danger my-1">{errors.postal_code.message}</p>
              )}
              {errors.postal_code && errors?.postal_code?.type == 'pattern' && (
                <p className="text-danger my-1">Ungültige Postleitzahl</p>
              )}
            </div>
            <div className="col-12 col-md-4 pb-4">
              <input
                type="text"
                className="form-control shadow-none border-1 border-secondary rounded-3 py-2"
                id="city"
                placeholder="Ort*"
                {...register('city', {
                  required: 'Notwendig',
                })}
              />
              {errors.city && <p className="text-danger my-1">{errors.city.message}</p>}
            </div>
          </div>
        </div>
        <div id="invoicingCheckbox">
          <input
            type="checkbox"
            name="invoicing"
            id="invoicing"
            onClick={() => setBillingAddress(!billingAddress)}
          />

          <label className="ms-2" for="invoicing">
            Abweichende Rechnungsadresse
          </label>
          {/* Invoicing Address */}
        </div>
        {billingAddress && (
          <div>
            <div className="d-flex">
              <h4 className="py-4">Rechnungsadresse</h4>{' '}
            </div>
            <div className="row py-4">
              <div className="col mb-3">
                <input
                  type="text"
                  className="form-control shadow-none border-1 border-secondary rounded-3 py-2"
                  id="first-name"
                  placeholder="Vorname*"
                  {...register('invoice_fName', {
                    required: 'Notwendig',
                  })}
                />
                {errors.invoice_fName && (
                  <p className="text-danger my-1">{errors.invoice_fName.message}</p>
                )}
              </div>
              <div className="col mb-3">
                <input
                  type="text"
                  className="form-control shadow-none border-1 border-secondary rounded-3 py-2"
                  id="last-name"
                  placeholder="Nachname*"
                  {...register('invoice_lName', {
                    required: 'Notwendig',
                  })}
                />
                {errors.invoice_lName && (
                  <p className="text-danger my-1">{errors.invoice_lName.message}</p>
                )}
              </div>
            </div>
            <div className="row pb-4">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control shadow-none border-1 border-secondary rounded-3 py-2"
                  id="invoice_company"
                  placeholder="Firma"
                  {...register('invoice_company')}
                />
                {errors.invoice_company && (
                  <p className="text-danger my-1">{errors.invoice_company.message}</p>
                )}
              </div>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control shadow-none border-1 border-secondary rounded-3 py-2"
                id="address"
                placeholder="Straße + Hausnummer*"
                {...register('invoice_address', {
                  required: 'Notwendig',
                })}
              />
              {errors.invoice_address && (
                <p className="text-danger my-1">{errors.invoice_address.message}</p>
              )}
            </div>
            <div className="mb-3 py-4">
              <input
                type="text"
                className="form-control shadow-none border-1 border-secondary rounded-3 py-2"
                id="apartment"
                placeholder="Adresszusatz"
                {...register('invoice_apartment')}
              />
              {errors.invoice_apartment && (
                <p className="text-danger my-1">{errors.invoice_apartment.message}</p>
              )}
            </div>
            <div className="row">
              <div className="col-12 col-md-4 pb-4">
                <input
                  type="text"
                  className="form-control shadow-none border-1 border-secondary rounded-3 py-2"
                  id="city"
                  placeholder="Ort*"
                  {...register('invoice_city', {
                    required: 'Notwendig',
                  })}
                />
                {errors.invoice_city && (
                  <p className="text-danger my-1">{errors.invoice_city.message}</p>
                )}
              </div>

              <div className="col-12 col-md-4 pb-4">
                <input
                  type="text"
                  className="form-control shadow-none border-1 border-secondary rounded-3 py-2"
                  id="postal-code"
                  placeholder="PLZ*"
                  {...register('invoice_postalcode', {
                    required: 'Notwendig',
                  })}
                />
                {errors.invoice_postal_code && (
                  <p className="text-danger my-1">{errors.invoice_postal_code.message}</p>
                )}
              </div>
            </div>
          </div>
        )}
        <div>
          <p className="mt-3 text-muted fs-14">
            *** Leider können wir nicht an Packstationen liefern.
          </p>
          <div className="d-flex align-items-start text-muted fs-14">
            <input
              type="checkbox"
              name="acceptance"
              className="mt-2"
              id="acceptance"
              {...register('acceptance', {
                required: 'Notwendig',
              })}
            />
            <span>
              <label className="ms-2" for="acceptance">
                Mit deiner Bestellung bestätigst du, dass du unsere &nbsp;
                <Link
                  className="text-theme-success text-decoration-underline"
                  href="/terms-conditions"
                >
                  AGB
                </Link>
                &nbsp; gelesen hast und mit ihnen einverstanden bist.
              </label>
              {errors.acceptance && <p className="text-danger mb-1">{errors.acceptance.message}</p>}
            </span>
          </div>

          <div className="d-flex align-items-start text-muted fs-14 pt-2">
            <input
              type="checkbox"
              name="newsletter"
              className="mt-2"
              id="newsletter"
              {...register('newsletter', {
                required: false,
              })}
            />
            <span>
              <label className="ms-2" for="newsletter">
                Anmeldung zum Newsletter: Verpasse keine Infos u.a. zu unseren neuen Zutaten,
                leckeren Rezepten und Rabattaktionen.
              </label>
            </span>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button disabled={isFetching > 0} type="submit" className="btn btn-solid-success mt-4">
            Weiter zur Lieferung
            {isFetching > 0 ? (
              <img
                height="20"
                width="20"
                className="ms-2 rotate"
                alt="refresh"
                src={'/assets/icon/refresh.png'}
              />
            ) : (
              <span className="ps-4">&#10095;</span>
            )}
            {/* Next: Select Shipping */}
          </button>
        </div>
      </form>
    </div>
  )
}
