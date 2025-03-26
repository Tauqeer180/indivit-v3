import { useCart } from "react-use-cart";

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

export const IsInCart = (id) => {
  const { items: cartItems } = useCart();
  let index;
  if (id) {
    index = cartItems?.findIndex((d) => d?.unique_id == id);
  }

  if (index > -1) return true;
  else return false;
};

export const shareOnTwitter = (path) => {
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    path
  )}&text=${encodeURIComponent("Indivit \n")}`;
  window.open(twitterUrl, "_blank");
};
export const shareOnLinkedIn = (path) => {
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${path}`;
  window.open(linkedinUrl, "_blank");
};
export const shareOnFacebook = (path) => {
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    path
  )}&title=${encodeURIComponent("Indivit")}`;
  window.open(facebookUrl, "_blank");
};
export const shareOnWhatsApp = (path) => {
  const whatsappUrl = `https://web.whatsapp.com/send?text=${encodeURIComponent(
    "Indivit | Smoothie Creator"
  )}%0A%0A%20${encodeURIComponent(path)}`;
  window.open(whatsappUrl, "_blank");
};
