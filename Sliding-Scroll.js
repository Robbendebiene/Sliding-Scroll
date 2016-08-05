/*
 * scrollDuration: scroll duration in milliseconds
 * y: the y coordinate to scroll, 0 = top
 */
function scrollToY(scrollDuration, y) {
  var cosParameter = (window.scrollY - y) / 2,
  		scrollCount = 0,
			oldTimestamp = performance.now();
  function step (newTimestamp) {
    scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
    if (scrollCount >= Math.PI) window.scrollTo(0, y);
    if (window.scrollY === y) return;
    window.scrollTo(0, Math.round((cosParameter + y) + cosParameter * Math.cos(scrollCount)));
		oldTimestamp = newTimestamp;
		window.requestAnimationFrame(step);
  }
	window.requestAnimationFrame(step);
}

/*
 * scrollDuration: scroll duration in milliseconds
 * this function is using the scrollToY function
 */
function scrollToTop(scrollDuration) {
  scrollToY(scrollDuration, 0);
}

/*
 * scrollDuration: scroll duration in milliseconds
 * id: the id of the element as a string
 * this function is using the scrollToY function
 */
function scrollToId(scrollDuration, id) {
	var offset = document.getElementById(id).getBoundingClientRect().top;
	scrollToY(scrollDuration, window.scrollY + offset);
}

/*
 * scrollDuration: scroll duration in milliseconds
 * element: a node object
 * this function is using the scrollToY function
 */
function scrollToElement(scrollDuration, element) {
	var offset = element.getBoundingClientRect().top;
	scrollToY(scrollDuration, window.scrollY + offset);
}