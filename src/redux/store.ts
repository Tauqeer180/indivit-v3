import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./account";
import wishlistReducer from "./wishlist";
import dcChargesReducer from "./dcCharges";
import  settingsReducer  from "./settings";
import boxDetailReducer from "./boxDetail";


const store = configureStore({
  reducer: {
    account: accountReducer,
    wishlist: wishlistReducer,
    dcCharges: dcChargesReducer,
    settings: settingsReducer,
    boxDetail: boxDetailReducer,
  },
});

export default store;

// ✅ Correctly define RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
