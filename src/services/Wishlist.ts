import { GET, POST } from "./Adapter/base";

export const addWishlistSmoothie = (data) => {
  return POST(`wishlist_smoothie`, data);
};

export const addWishlistBox = (data) => {
  return POST(`wishlist_smoothie_box`, data);
};
export const addWishlistIngredient = (data) => {
  return POST(`wishlist_ingredient`, data);
};

export const getWishlistIds = () => {
  return GET(`get_wishlist`);
};
export const getWishlistListing = () => {
  return GET(`get_wishlist_detail`);
};
