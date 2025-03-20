import { createSlice } from "@reduxjs/toolkit";
import session from "../services/session";

const initialState = {
  isAuthenticated: session.get("token") ? true : false,
  user: session.get("user"),
};

export const accountReducer = createSlice({
  name: "account",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isAuthenticated = action?.payload?.token ? true : false;
      state.user = action?.payload;
    },
    logoutAction: (state) => {
      state.isAuthenticated = false;
      session.set("token", null);
      session.set("user", null);
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginAction, logoutAction } = accountReducer.actions;

export default accountReducer.reducer;
