/**
 * debounce throttle
 *
 */

function debounce(fn) {
  let timer = null;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, 500);
  };
}

function throttle(fn) {
  let canRun = true;
  return function() {
    if (!canRun) return;
    canRun = false;
    setTimeout(() => {
      fn.apply(this, arguments);
    }, 500);
  };
}
