import React, { useEffect, useState, useLayoutEffect } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
// import { getShippingDate } from '../../services/Orders'
import { useCart } from 'react-use-cart'
import { getBoxSize } from '../../services/SmoothieBox'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAction } from '../../redux/account'
import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { subDays } from 'date-fns'
import de from 'date-fns/locale/de'
import { fetcher } from '@/lib/fetcher'

export default function ShippingDate({
  onSubmit,
  formData,
  errors,
  register,
  selectedDate,
  setSelectedDate,
  cartItemsLength,
}) {
  // useLayoutEffect(() => {
  //   sentShipmentDate(cartItemsLength);
  // }, []);

  const dcCharges = useSelector((state) => state.dcCharges)
  let fastShipCharges = dcCharges?.additional_cost

  const [state, setState] = useState()
  const [avialableState, setAvialableState] = useState()
  const [disableDate, setdisableDate] = useState()
  const [parking, setParking] = useState('Keine Abstellgenehmigung')
  const [OrderLimit, setOrderLimit] = useState()
  const [availableDates, setAvailableDates] = useState([])
  const {
    isEmpty,
    totalUniqueItems,
    items: cartItems,
    setCartMetadata,
    updateItemQuantity,
    removeItem,
    updateCartMetadata,
    metadata,
  } = useCart()
  // const dispatch = useDispatch()
  // const navigate = useNavigate()
  // const {
  //   isLoading: boxSizeLoading,
  //   error: boxSizeError,
  //   data: boxSizeData,
  // } = useQuery({
  //   queryKey: ["getBoxSize"],
  //   queryFn: getBoxSize,
  // });
  // let boxSize = boxSizeData?.data?.data;

  // let qty = 0;
  // cartItems?.map((d) => {
  //   qty +=
  //     boxSize?.find((bs) => bs?.id == parseInt(d.box_size))?.size * d?.quantity;
  // });

  // const mutationDate = useMutation({
  //   mutationFn: setShippingDate,
  //   onSuccess: (res) => {
  //     setState(res?.data?.data?.gap_date);
  //     setdisableDate(res?.data?.data?.orders_details);
  //     setOrderLimit(res?.data?.data?.order_limit?.smoothie);
  //   },
  //   onError: (err) => {
  //     console.log("eeeeeeeerrrrrrrooooooorrrrrr");
  //   },
  // });

  // const sentShipmentDate = (cartItemsLength) => {
  //   mutationDate.mutate({
  //     current_date: new Date()?.toLocaleDateString("en-CA"),
  //     order_qty: cartItemsLength,
  //   });
  // };

  // let dateSet = disableDate?.map((el) => {
  //   return el?.total_qty < OrderLimit
  //     ? ""
  //     : subDays(new Date(el.order_date), 0);
  // });

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  // const filterWeekends = (date) => {
  //   return date.getDay() !== 0 && date.getDay() !== 6 && date.getDay() !== 1; // Disable Sundays (0) and Saturdays (6) and Monday
  // };
  let getShippingDate = async () => fetcher('shipping_date')
  const {
    isLoading: availDatesLoading,
    error: availDatesError,
    data: availDates,
  } = useQuery({
    queryKey: ['availShipDates'],
    queryFn: getShippingDate,
  })
  // let availableDates = availDates?.data?.data;

  useEffect(() => {
    if (availDates?.data) {
      let tempDates = availDates?.data?.map((d) => {
        if (new Date(d?.expire_date) > new Date()) {
          return new Date(d?.available_date)
        }
      })
      setAvailableDates(tempDates)
    }
  }, [availDates])

  registerLocale('de', de)

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="py-5">
          <div className="border p-4 border-secondary rounded-3">
            <div className="row align-items-center">
              <div className="col-auto col-md-3 col-lg-2">
                <span className=" fw-bold">Kontakt</span>
                {/* Contact */}
              </div>
              <div className="col-auto col-md-9 col-lg-10 border-start border-secondary">
                <span> {formData?.email} </span>
              </div>
            </div>
            <hr className="my-3" />
            <div className="row align-items-center">
              <div className="col-auto col-md-3 col-lg-2">
                <span className=" fw-bold">Lieferung</span>
                {/* Ship to */}
              </div>
              <div className="col-auto col-md-9 col-lg-10  border-start border-secondary">
                <span>
                  {formData?.address} {formData?.appartment} {formData?.city} {formData?.state}{' '}
                  {formData?.country}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row py-4">
          <div className="col-12 col-md-4">
            <div>
              <label htmlFor="" className="fw-bold mb-2">
                Lieferdatum:
                {/* Shipping Date */}
              </label>
            </div>
            <DatePicker
              locale="de"
              autoComplete="off"
              selected={selectedDate}
              // filterDate={filterWeekends}
              minDate={Date.now()}
              id="date"
              // excludeDates={dateSet}
              includeDates={availableDates}
              label="Date"
              className={'w-100 border rounded p-2 border-secondary'}
              placeholderText="Wähle ein Datum"
              dateFormat="dd-MM-yyyy"
              onChange={handleDateChange}
              required
            />
          </div>

          <div className="col-12 col-md-8 mb-3">
            <div>
              <div>
                <label htmlFor="" className="fw-bold mb-2">
                  Meine Box darf an folgendem Ort abgestellt werden:
                </label>
              </div>
              <select
                className="form-select shadow-none border-1 border-secondary rounded-3 py-2 text-secondary"
                id="parking_place"
                {...register('parking_place', {
                  required: 'Required',
                  onChange: (e) => setParking(e.target.value),
                })}
              >
                <option value="Keine Abstellgenehmigung" selected>
                  Keine Abstellgenehmigung
                </option>
                <option value="Vor der Haustür">Vor der Haustür</option>
                <option value="Vor der Wohnungstür">Vor der Wohnungstür</option>
                <option value="Im Treppenhaus">Im Treppenhaus</option>
                <option value="In der Garage/im Caport">In der Garage/im Caport</option>
                <option value="Hinter dem Tor/Gartenzaun">Hinter dem Tor/Gartenzaun</option>
                <option value="Auf der Terasse">Auf der Terasse</option>
                <option value={false}>Anderer Abstellort</option>
              </select>
              {errors.parking_place && (
                <p className="text-danger my-1">{errors.parking_place.message}</p>
              )}
            </div>

            {parking == 'false' && (
              <div className="mt-3">
                <input
                  type="text"
                  className="form-control shadow-none border-1 border-secondary rounded-3 py-2"
                  id="parking_place_2"
                  placeholder="Anderer Abstellort"
                  maxLength="32"
                  {...register('parking_place_2', {
                    required: 'Required',
                  })}
                />
                {errors.parking_place_2 && (
                  <p className="text-danger my-1">{errors.parking_place_2.message}</p>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <p className="mt-3 text-muted fs-14">
              Du kannst deine Smoothies auch garantiert am gewählten Datum geliefert bekommen.
            </p>
            <div className="d-flex align-items-start text-muted fs-14">
              <input
                type="checkbox"
                name="fast_shipping"
                className="mt-1"
                id="fast_shipping"
                defaultChecked={parseFloat(metadata?.fastShipping) > 0 ? 'checked' : ''}
                {...register('fast_shipping', {
                  onChange: (e) => {
                    updateCartMetadata({
                      fastShipping: e.target.checked ? fastShipCharges : 0,
                    })
                  },
                })}
              />
              <span>
                <label className="ms-2" for="fast_shipping">
                  Für zusätzlich {fastShipCharges} € erfolgt die Zustellung garantiert am Wunschtag
                  und sogar bis 12:00 Uhr mittags
                </label>
              </span>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-solid-success mt-4">
            {/* Next: Add Payment Method */}
            Weiter zur Zahlung
            <span className="ps-4">&#10095;</span>
          </button>
        </div>
      </form>
    </div>
  )
}
