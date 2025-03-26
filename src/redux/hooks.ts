import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Use throughout your app instead of `useDispatch`
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Use throughout your app instead of `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
