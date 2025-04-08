const useAnimate = () => {
  function animate(id) {
    let icon = document.querySelector(`#box-mixer-list-${id}`);
    const clone = document.createElement("span");
    // Add class to the div
    clone.className = "cart-item-anim sendtocart-2";
    document.body.appendChild(clone);
    var sourceRect = icon.getBoundingClientRect();
    clone.style.top = sourceRect.top + 20 + window.scrollY + "px";
    clone.style.left = sourceRect.left + 20 + window.scrollX + "px";
    clone.style.zIndex = "11";
    clone.style.position = "absolute";
    // Find destination position
    setTimeout(function () {
      var destinationCard = document.getElementById(`box-mixer-card-${id}`);
      var destinationDiv = destinationCard.querySelector(".flx-quantity-btn");
      var destRect = destinationDiv.getBoundingClientRect();
      // Assuming destination is the bottom of the destination div
      requestAnimationFrame(function () {
        clone.style.transform = `translate(${
          destRect.left - sourceRect.left - 20
        }px, ${destRect.top + 20 - sourceRect.top + 20}px)`;
      });
      setTimeout(function () {
        var cart = document.getElementById(`box-mixer-card-${id}`);
        cart.classList.add("shake");
        setTimeout(function () {
          document.body.removeChild(clone);
          cart.classList.remove("shake");
        }, 500);
      }, 1000);
    }, 200);
  }

  return {
    animate,
  };
};

export default useAnimate;
