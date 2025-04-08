import { fetcher } from '@/lib/fetcher'
import { formatToGerman2 } from '@/utils/germanFormat'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useCart } from 'react-use-cart'

export default function CartSidebar({ data }) {
  const { cartTotal } = useCart()
  const { data: boxSizeData } = useQuery({
    queryKey: ['getBoxSize'],
    queryFn: () => fetcher('get_smoothie_box_size'),
  })
  const boxSize = boxSizeData?.data?.data

  const { updateCartMetadata } = useCart()
  let deposit = 0
  let qty = 0
  data?.map((d) => {
    qty += boxSize?.find((bs) => bs?.id == parseInt(d.box_size))?.size * d?.quantity

    // debugger;
  })
  deposit = qty * 0.25
  useEffect(() => {
    if (deposit) {
      updateCartMetadata({
        deposit: deposit,
        qty: qty,
      })
    }
  }, [deposit])

  return (
    <div>
      <div className=" bg-white shadow rounded-3 p-4">
        <div className="d-flex justify-content-between pb-3">
          <h6>Zwischensumme</h6>
          <p>{formatToGerman2(cartTotal)}&nbsp;€</p>
        </div>

        {data?.map((item, index) => {
          return (
            <div key={index}>
              <div className="d-flex justify-content-between">
                <p className="mb-0">
                  {item?.name} x {item?.quantity}
                </p>
                <p className="mb-0">{formatToGerman2(item?.itemTotal)}&nbsp;€</p>
              </div>
              <p className="text-muted fs-12 text-italic">
                <i>Preis {formatToGerman2(item?.perLitterPrice)}&nbsp;€/Liter</i>
                {/* Price */}
              </p>
            </div>
          )
        })}

        <div className="d-flex justify-content-between">
          <p>
            <Image
              width={25}
              height={25}
              className="img-fluid me-2"
              src="/assets/icon/deliveryIcon.png"
              alt=""
            />
            <span>Versandkosten</span>
            {/* Delivery Charges */}
          </p>
          <p>Kal. im nächsten Schritt</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>
            <Image
              width={25}
              height={25}
              className="img-fluid me-2"
              src="/assets/icon/deposit.png"
              alt=""
            />
            Pfand
          </p>
          <p>{formatToGerman2(deposit)} €</p>
        </div>
        <hr />
        <div className="d-flex justify-content-between pt-3">
          <p>Summe inkl. MwSt.</p>
          <p>
            {formatToGerman2(parseFloat(cartTotal) + parseFloat(deposit))}
            &nbsp;€
          </p>
        </div>
        <hr />

        <div className=" d-flex justify-content-center">
          <Link href="/kasse" className="btn btn-primary btn-solid-success w-75 mt-3">
            Weiter zur Kasse
          </Link>
          {/* Proceed to Checkout */}
        </div>
      </div>
    </div>
  )
}
