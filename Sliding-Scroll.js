/*
 * y: the y coordinate to scroll, 0 = top
 * duration: scroll duration in milliseconds; default is 0 (no transition)
 * element: the html element that should be scrolled ; default is the main scrolling element
 */
function scrollToY (y, duration = 0, element = document.scrollingElement) {
  // cancel if already on target position
  if (element.scrollTop === y) return;

  const cosParameter = (element.scrollTop - y) / 2;
  let scrollCount = 0, oldTimestamp = null;

  function step (newTimestamp) {
    if (oldTimestamp !== null) {
      // if duration is 0 scrollCount will be Infinity
      scrollCount += Math.PI * (newTimestamp - oldTimestamp) / duration;
      if (scrollCount >= Math.PI) return element.scrollTop = y;
      element.scrollTop = cosParameter + y + cosParameter * Math.cos(scrollCount);
    }
    oldTimestamp = newTimestamp;
    window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
}

/*
 * duration: scroll duration in milliseconds; default is 0 (no transition)
 * this function is using the scrollToY function
 */
function scrollToTop(duration = 0) {
  scrollToY(0, duration, document.scrollingElement);
}

/*
 * id: the id of the element as a string that should be scrolled to
 * duration: scroll duration in milliseconds; default is 0 (no transition)
 * this function is using the scrollToY function on the main scrolling element
 */
function scrollToId(id, duration = 0) {
  const offset = Math.round(document.getElementById(id).getBoundingClientRect().top);
	scrollToY(document.scrollingElement.scrollTop + offset, duration);
}

/*
 * element: the node object that should be scrolled to
 * duration: scroll duration in milliseconds; default is 0 (no transition)
 * this function is using the scrollToY function on the main scrolling element
 */
function scrollToElement(element, duration = 0) {
	const offset = Math.round(element.getBoundingClientRect().top);
	scrollToY(document.scrollingElement.scrollTop + offset, duration);
}