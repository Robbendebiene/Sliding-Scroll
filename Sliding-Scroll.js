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
 * duration: scroll duration in milliseconds
 * this function is using the scrollToY function
 */
function scrollToTop(duration) {
  scrollToY(duration, 0);
}

/*
 * duration: scroll duration in milliseconds
 * id: the id of the element as a string
 * this function is using the scrollToY function
 */
function scrollToId(duration, id) {
	var offset = document.getElementById(id).getBoundingClientRect().top;
	scrollToY(duration, window.scrollY + offset);
}

/*
 * duration: scroll duration in milliseconds
 * element: a node object
 * this function is using the scrollToY function
 */
function scrollToElement(duration, element) {
	var offset = element.getBoundingClientRect().top;
	scrollToY(duration, window.scrollY + offset);
}
