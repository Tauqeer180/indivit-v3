const useVibrate = (duration = 700, frequency = 8) => {
  function vibrate(elem) {
    let element = document.querySelector(elem);
    let originalStyle = element.style.cssText;
    let start = performance.now();
    let interval = setInterval(() => {
      if (performance.now() - start >= duration) {
        clearInterval(interval);
        element.style.cssText = originalStyle;
        return;
      }
      element.style.transform = `translate(${
        Math.random() * frequency - 1
      }px, 0px)`;
      element.style.height = `100%`;
    }, 20);
  }

  return {
    vibrate,
  };
};

export default useVibrate;
