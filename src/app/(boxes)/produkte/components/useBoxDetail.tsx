'use client'
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import {
  setSelectedBoxData as setSelectedBoxDataR,
  setDiscount as setDiscountR,
  setSelectedQty as setSelectedQtyR,
  setSelectedSize as setSelectedSizeR,
  setSubscriptionPlan as setSubscriptionPlanR,
  setSubscription as setSubscriptionR,
} from '@/redux/boxDetail'

export const useBoxDetail = () => {
  const dispatch = useAppDispatch()

  return {
    selectedBoxData: useAppSelector((state) => state.boxDetail.selectedBoxData),
    discount: useAppSelector((state) => state.boxDetail.discount),
    selectedQty: useAppSelector((state) => state.boxDetail.selectedQty),
    selectedSize: useAppSelector((state) => state.boxDetail.selectedSize),
    subscriptionPlan: useAppSelector((state) => state.boxDetail.subscriptionPlan),
    subscription: useAppSelector((state) => state.boxDetail.subscription),
    tempPrice: useAppSelector((state) => state.boxDetail.tempPrice),
    perLitterPrice: useAppSelector((state) => state.boxDetail.perLitterPrice),
    // Dispatch actions
    setSelectedBoxData: (data) => dispatch(setSelectedBoxDataR(data)),
    setDiscount: (value) => dispatch(setDiscountR(value)),
    setSelectedQty: (value) => dispatch(setSelectedQtyR(value)),
    setSelectedSize: (value) => dispatch(setSelectedSizeR(value)),
    setSubscriptionPlan: (value) => dispatch(setSubscriptionPlanR(value)),
    setSubscription: (value) => dispatch(setSubscriptionR(value)),
  }
}
