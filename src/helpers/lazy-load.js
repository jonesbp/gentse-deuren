// Adapted from
// https://www.robinosborne.co.uk/2016/05/16/lazy-loading-images-dont-rely-on-javascript/

let tick;

function isInViewport(el) {
  const rect = el.getBoundingClientRect();

  return (
    rect.bottom >= 0 &&
    rect.right >= 0 &&

    rect.top <= (
      window.innerHeight ||
      document.documentElement.clientHeight) &&
    
    rect.left <= (
      window.innerWidth ||
      document.documentElement.clientWidth)
  );
}

function checkForLazyLoad() {
  const lazyImages = [].filter.call(
    document.getElementsByClassName('lazy'), 
    (img) => img.getAttribute('data-src'));

  lazyImages.forEach((img) => {
    if (isInViewport(img)) {
      img.src = img.getAttribute('data-src');
      img.removeAttribute('data-src');
    }
  });
}

export function lazyLoad(force = false) {
  if (force) {
    // If we want to force the check without requesting
    // an animation frame
    checkForLazyLoad();
    return;
  }

  if (!tick) {
    // Throttle execution under normal circumstances
    window.requestAnimationFrame(() => {
      checkForLazyLoad();
      setTimeout(() => { tick = false;}, 200);
    });

    tick = true;
  }
};
