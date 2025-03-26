import { createSlice} from "@reduxjs/toolkit";

import type {  PayloadAction } from "@reduxjs/toolkit";

interface BoxDataType {
  price?: number;
  smoothie_box_size?: {
    price?: number;
  };
  box_status?: any;
}

interface BoxState {
  selectedBoxData: BoxDataType;
  discount: number;
  selectedQty: number;
  selectedSize?: any;
  subscriptionPlan: boolean;
  subscription: any;
  tempPrice: number;
  perLitterPrice: number;
}

const initialState: BoxState = {
  selectedBoxData: {},
  discount: 0,
  selectedQty: 0,
  selectedSize: undefined,
  subscriptionPlan: false,
  subscription: null,
  tempPrice: 0,
  perLitterPrice: 0,
};

export const boxDetailReducer = createSlice({
  name: "boxDetail",
  initialState,
  reducers: {
    setSelectedBoxData: (state, action: PayloadAction<BoxDataType>) => {
        let selectedBoxData = action.payload;
        state.selectedBoxData = selectedBoxData;
        state.tempPrice = !selectedBoxData?.price || selectedBoxData?.price == 0
        ? selectedBoxData?.smoothie_box_size?.price
        : selectedBoxData?.price;
    //       state.perLitterPrice = ((!selectedBoxData?.price || selectedBoxData?.price == 0
    //     ? selectedBoxData?.smoothie_box_size?.price
    //     : selectedBoxData?.price) /
    //     state.selectedQty) *
    //   4
    },
    setDiscount: (state, action: PayloadAction<number>) => {
      state.discount = action.payload;

    },
    setSelectedQty: (state, action: PayloadAction<number>) => {
        let selectedQty = action.payload;
        state.selectedQty = selectedQty;
      state.perLitterPrice = ((!state.selectedBoxData?.price || state.selectedBoxData?.price == 0
        ? state.selectedBoxData?.smoothie_box_size?.price
        : state.selectedBoxData?.price) /
        selectedQty) *
      4
    },
    setSelectedSize: (state, action: PayloadAction<any>) => {
      state.selectedSize = action.payload;
    },
    setSubscriptionPlan: (state, action: PayloadAction<boolean>) => {
      state.subscriptionPlan = action.payload;
    },
    setSubscription: (state, action: PayloadAction<any>) => {
      state.subscription = action.payload;
    },
    handleSubscriptionDiscount: (
      state,
      action: PayloadAction<{ val: number; plan: boolean; subscriptionData: any[] }>
    ) => {
      const { val, plan, subscriptionData } = action.payload;

      if (!plan) {
        state.subscriptionPlan = false;
      }

      let objSubscription = subscriptionData?.find((d) => d.duration === val);

      if (objSubscription && state.subscriptionPlan) {
        state.discount =
          (state.selectedBoxData?.price || state.selectedBoxData?.smoothie_box_size?.price || 0) -
          (state.selectedBoxData?.price || state.selectedBoxData?.smoothie_box_size?.price || 0) *
            (objSubscription.discount / 100);
      } else {
        state.discount = 0;
      }
    },
  },
});

export const {
  setSelectedBoxData,
  setDiscount,
  setSelectedQty,
  setSelectedSize,
  setSubscriptionPlan,
  setSubscription,
  handleSubscriptionDiscount,
  
} = boxDetailReducer.actions;

export default boxDetailReducer.reducer;
