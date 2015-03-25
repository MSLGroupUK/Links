var Links = {

	selector: '[data-target]',
	viewport: 'html, body',

	targetNewWindow: 'new-window',
	targetPageTop: 'page-top',
	targetOnPage: 'on-page',
	targetSkip: 'skip',

	event: 'click',
	eventNamespace: 'links',

	offsetValue: 0,
	scrollDuration: 600,

	init: function () {
		// detect if selector exists
		if (!$(this.selector).length) return;

		// run through selectors
		this.loopSelectors();
	},

	loopSelectors: function () {

		// for each selector
		$(this.selector).each(function () {

			// check bound events
			var $this = $(this),
				eventBound = Links.matchBoundEvent($this);

			// if no event has been bound
			if (eventBound) return;

			// bind click event
			Links.bindClick($this);
		});
	},

	// event
	bindClick: function ($this) {

		// bind namespaced event
		$this.on(this.event + '.' + this.eventNamespace, function (e) {

			// get target event from data-target
			var href = $this.attr('href'),
				target = $this.data('target'),
				targetEvent = Links.getTargetEvent(target);

			// run target event
			targetEvent(href);
			e.preventDefault();
		});
	},

	// targets
	newWindow: function (href) {
		// window parameters
		var height = 420,
			width = 500,
			scrollBars = 'no',
			resizable = 'yes';
		// open new window with params
		window.open(href, 'popup', 'width=' + width + ', height=' + height + ', scrollbars=' + scrollBars + ', resizable=' + resizable + '');
	},
	onPage: function (href) {
		// scroll to offset of target
		$(Links.viewport).stop().animate({
			scrollTop: Math.ceil($(href).offset().top) - Links.offsetValue
		}, Links.scrollDuration).promise().then(function () { });
	},
	pageTop: function () {
		// scroll to top
		$(Links.viewport).stop().animate({
			scrollTop: 0
		}, Links.scrollDuration);
	},
	skip: function (href) {
		// focus accessibility links
		$(href).attr('tabindex', '-1').focus();
	},

	// utils
	matchBoundEvent: function ($this) {

		// get click events
		var linksBound = false;

		// detect if any events are bound, !(!!) detects if item is not false, null or undefined, not neccessarily a check for a valid event object
		var eventAll = this.getBoundEvents($this);
		if (!(!!eventAll)) return false;

		// get click event
		var eventClick = eventAll[this.event];
		if (!(!!eventClick)) return false;

		// loop through bound click events
		for (var i = 0; i < eventClick.length; i++) {
			// check if event namespace exists
			if (eventClick[i].namespace === this.eventNamespace) {
				linksBound = true;
			}
		}

		// return if click event has been bound
		return linksBound;
	},
	getTargetEvent: function (target) {

		// match target and return relevant function
		switch (target) {
			case this.targetNewWindow:
				return this.newWindow;
				break;
			case this.targetOnPage:
				return this.onPage;
				break;
			case this.targetSkip:
				return this.skip;
				break;
			case this.targetPageTop:
				return this.pageTop;
		}
	},
	getBoundEvents: function ($this) {
		// return events bound to $this
		return $._data($this[0], 'events');
	}
};