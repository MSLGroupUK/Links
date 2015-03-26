# Links
Extending the functionality of the `target` attribute.

##Usage

```html
<button data-target="page-top">Back to top</button>

<a href="#section-1" data-target="on-page">Scroll to Section 1</a>

<a href="#footer" data-target="skip">Jump to footer</a>

<a href="http://facebook.com/sharer.php" data-target="new-window">Share on Facebook</a>
```

```javascript
Links.init();
```

Add a `data-target` attibute to the anchor and pass through a target as defined below:

* `page-top`: Smoothscroll to the top of the page
* `on-page`: Smoothscroll to an element on the page
* `skip`: Jump to element and focus
* `new-window`: Opens a new window, mostly used for social sharing so default size is 500 by 420

##Release History

v1.0.1 - Updated docs, added code linting
v1.0.0 - Initial release