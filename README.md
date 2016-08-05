# Sliding-Scroll
### Simple pure JavaScript scroll-to functions with ease in and out effect.

> These are vertical scrolling functions only, even though the code can be easily changed to match the horizontal direction as well.

####Scroll in a specific duration given in milliseconds to a specific position y, where y represents a number between 0 and the length of your page.
```
function scrollToY(duration, y);
```

> Note: The following functions are depending on the first one.

####Scroll to the top of the page.
```
function scrollToTop(duration);
```

####Scroll to the element with the specific id given as a string.
```
function scrollToId(duration, id);
```

####Scroll to the specific element given as a node object.
```
function scrollToElement(duration, element);
```
