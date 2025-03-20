import { createSlice } from "@reduxjs/toolkit";
import session from "../services/session";
import { baseURL } from "@/lib/fetcher";

const initialState = {
  settings: session.get("settings"),
  smoothieImg: baseURL + "/custom/smoothie/" + session.get("smoothieImg"),
  boxImg: baseURL + "/custom/smoothie/" + session.get("boxImg"),
};

export const settingsReducer = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSiteSettings: (state, action) => {
      const tempState = { ...state?.settings, ...action?.payload };
      state.settings = tempState;
      session.set("settings", tempState);
    },
    setCommonImgs: (state, action) => {
      const tempState = {
        ...state,
        smoothieImg:
          baseURL + "/custom/smoothie/" + action?.payload?.smoothieImg,
        boxImg: baseURL + "/custom/smoothie_box/" + action?.payload.boxImg,
      };
      session.set("smoothieImg", action?.payload?.smoothieImg);
      session.set("boxImg", action?.payload?.boxImg);

      return tempState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSiteSettings, setCommonImgs } = settingsReducer.actions;

export default settingsReducer.reducer;
