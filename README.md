# Sliding-Scroll

## A minimal pure JavaScript smooth scrolling function.

Scroll smoothly over time to a given absolute scroll position defined by the top and left properties.
If the top or left scroll position is omitted it will fallback to the current scroll position.
*duration:* scroll duration in milliseconds; defaults to 0 (no transition)
*element:* the html element that should be scrolled; defaults to the main scrolling element
*easingFunction:* defines the scrolling rate over time; defaults to ease in and out sin.
You can either use one of the predefined functions from EASING_FUNCTIONS or a custom one.


### Smooth scroll to function

```javascript
function smoothScrollTo({
  top,
  left,
  duration = 0,
  element = document.scrollingElement,
  easingFunction = EASING_FUNCTIONS.slowInSlowOut
})
```

### Additional convenience functions

#### Scroll to the top of the main page
```javascript
smoothScrollToTop({
    duration = 0,
    easingFunction = EASING_FUNCTIONS.slowInSlowOut
})
```

#### Scroll to the bottom of the main page
```javascript
smoothScrollToBottom({
    duration = 0,
    easingFunction = EASING_FUNCTIONS.slowInSlowOut
})
```

#### Scroll to a specific element in the main page.
```javascript
smoothScrollToElement(element, {
  duration, easingFunction,
  offsetTop = 0,
  offsetLeft = 0
})
```

#### Scroll to an element with a specific id in the main page.
```javascript
smoothScrollToId(id, {
  duration, easingFunction,
  offsetTop = 0,
  offsetLeft = 0,
})
```