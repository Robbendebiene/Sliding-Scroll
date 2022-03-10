# Sliding-Scroll
### Simple pure JavaScript scroll-to functions with ease in and out effect.

> These are vertical scrolling functions only, even though the code can be easily changed to match the horizontal direction as well.

#### Scroll smoothly to a specific y position, where y represents a number between 0 and the max scroll height.
```
function scrollToY(y, duration, element);
```

> Note: The following functions depend on the first one.

#### Scroll to the top of the page.
```
function scrollToTop(duration);
```

#### Scroll to the element with the specific id given as a string.
```
function scrollToId(id, duration, customOffset);
```

#### Scroll to the specific element given as a node object.
```
function scrollToElement(element, duration, customOffset);
```
