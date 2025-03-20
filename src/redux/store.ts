import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./account";
import wishlistReducer from "./wishlist";
import dcChargesReducer from "./dcCharges";
import  settingsReducer  from "./settings";

export default configureStore({
  reducer: {
    account: accountReducer,
    wishlist: wishlistReducer,
    dcCharges: dcChargesReducer,
    settings : settingsReducer
  },
});
