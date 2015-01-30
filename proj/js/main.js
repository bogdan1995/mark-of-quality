"use strict";

var app =(function () {
	return {
		init: function () {
			app.setUpListeners();
		},
		setUpListeners: function () {
			$('.slider__list').bxSlider(app.SLIDER_OPT);
			$('.pager-link').text('');
			//$('.bx-next, .bx-prev, .pager-link').ready(app.animatePeople).on('click', app.animatePeople);
			$('.slider__list-item').on("mouseover", app.seachSlide);

		},
		SLIDER_OPT: {
			mode: 'horizontal',
			infiniteLoop: true,
			useCSS: false,
			auto: false,
			responsive: true,
			touchEnabled: true,
			"onSlideNext": function (a) {
				console.log("I'm work");
			},
			pager: true
		},
		seachSlide: function () {
			//var $this = $(this),
			//	animatePeople = function () {
			//		$this.next().find('.slider__list-img_anim').addClass('animate fadeInRight');
			//	}
			//$('.bx-next, .bx-prev, .pager-link').on("click", function () {
			//	animatePeople();
			//	console.log($this);
			//});

		}
	}
})();

app.init()