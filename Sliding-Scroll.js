/*
 * duration: scroll duration in milliseconds
 * y: the y coordinate to scroll, 0 = top
 */
function scrollToY(duration, y) {
  var cosParameter = (window.scrollY - y) / 2,
  		scrollCount = 0,
			oldTimestamp = performance.now();
  function step (newTimestamp) {
    scrollCount += Math.PI / (duration / (newTimestamp - oldTimestamp));
    if (scrollCount >= Math.PI) window.scrollTo(0, y);
    if (window.scrollY === y) return;
    window.scrollTo(0, Math.round((cosParameter + y) + cosParameter * Math.cos(scrollCount)));
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
