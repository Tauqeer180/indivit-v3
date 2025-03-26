import { fetcher } from "@/lib/fetcher";
import { useAppSelector } from "@/redux/hooks";
   let token= useAppSelector((state) => state?.account?.token)

export const addWishlistSmoothie = (data) =>fetcher(`wishlist_smoothie`, {data, token});
  ;