if (Number.EPSILON === undefined) {
  Number.EPSILON = Math.pow(2, -52);
}

export function round(n) {
  return Math.round(n * 100 + Number.EPSILON) / 100
}

export function ratio(width, height) {
  return round(width / height);
}

export function scaleHeight(width, ratio) {
  return round(width / ratio);
}

export function scaleWidth(height, ratio) {
  return round(height * ratio);
}

export function debounce(fn, delay) {
  let timeoutID = null;
  return function() {
    clearTimeout(timeoutID);
    const args = arguments;
    const that = this;
    timeoutID = setTimeout(function() {
      fn.apply(that, args);
    }, delay);
  };
}

// https://gist.github.com/JoeSz/eadf20f8517d499e4c836b0f3302d5d3
export function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
  const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
  const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;

  return vertInView && horInView;
}
