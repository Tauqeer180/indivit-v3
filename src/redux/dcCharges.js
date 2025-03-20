import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  delivery_cost: 7.9,
  threshold_cost: 75,
  additional_cost: 1.95,
};

export const dcChargesReducer = createSlice({
  name: "dcCharges",
  initialState,
  reducers: {
    setDcCharges: (state, action) => {
      let tempState = state;
      tempState.delivery_cost = action?.payload?.delivery_cost;
      tempState.threshold_cost = action?.payload?.threshold_cost;
      tempState.additional_cost = action?.payload?.additional_cost;
      return tempState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDcCharges } = dcChargesReducer.actions;

export default dcChargesReducer.reducer;
