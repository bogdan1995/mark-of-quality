"use strict";

var app =(function () {
	return {
		init: function () {
			app.setUpListeners();
		},
		setUpListeners: function () {
			$('.slider__list').bxSlider(app.SLIDER_OPT);
			$('.pager-link').text('');

		},
		SLIDER_OPT: {
			mode: 'horizontal',
			infiniteLoop: true,
			useCSS: false,
			auto: false,
			responsive: true,
			touchEnabled: true,
			onSlideNext: function () {
				alert('114');
			},
			pager: true
		},
		animatePeople: function () {

		}
	}
})();

app.init()