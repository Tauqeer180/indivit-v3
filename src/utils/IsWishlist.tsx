export const IsWishlist = (type, id, wishlist) => {
  // const wishlist = useSelector((state) => state.wishlist);
  let index;
  if (type == 0) {
    index = wishlist?.wishlist_smoothie?.findIndex((d) => d.smoothie_id == id);
  } else if (type == 1) {
    index = wishlist?.wishlist_smoothie_box?.findIndex((d) => d.box_id == id);
  } else if (type == 2) {
    index = wishlist?.wishlist_ingredient?.findIndex(
      (d) => d.ingredient_id == id
    );
  }

  if (index > -1) return true;
  else return false;
};
