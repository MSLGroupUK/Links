# Links
Extending the functionaity of the `target` attribute.

##Usage

```html
<button data-target="pageTop">Back to top</button>
<a href="#section-1" data-target="onPage">Scroll to Section 1</a>
```

```javascript
Links.init();
```

Add a `data-target` attibute to the anchor and pass through a target as defined below:

###pageTop
Smoothscroll to the top of the page
###onPage
Smoothscroll to an element on the page
###skip
Jump to element and focus
###newWindow
Opens a new window, mostly used for social sharing so default size is 500 by 420

##Release History

v1.0.0 - Initial release