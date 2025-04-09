const useHighlight = (duration, frequency) => {
  function highlight(elem) {
    let element = document.getElementById(elem);
    // let element = document.querySelector(elem);
    let originalStyle = element.style.cssText;
    let start = performance.now();
    let interval = setInterval(() => {
      if (performance.now() - start >= 2000) {
        clearInterval(interval);
        element.style.cssText = originalStyle;
        return;
      }
      element.style = `border-top: 2px dashed var(--green); border-bottom: 2px dashed var(--green);`;
    }, 20);
  }

  return {
    highlight,
  };
};

export default useHighlight;
