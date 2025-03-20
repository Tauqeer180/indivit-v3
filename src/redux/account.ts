import { createSlice } from "@reduxjs/toolkit";
import session from "../services/session";

const initialState = {
  isAuthenticated: !!session.get("token"),
  user: session.get("user") || null,
};

export const accountReducer = createSlice({
  name: "account",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.isAuthenticated = action.payload?.token ? true : false;
      state.user = action.payload;
    },
    logoutAction: (state) => {
      state.isAuthenticated = false;
      session.set("token", null);
      session.set("user", null);
    },
  },
});

export const { loginAction, logoutAction } = accountReducer.actions;
export default accountReducer.reducer;
