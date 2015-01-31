"use strict";

var app =(function () {
	return {
		init: function () {
			app.setUpListeners();
		},
		setUpListeners: function () {
			$('.slider__list').bxSlider(app.SLIDER_OPT);
			$('.scene').parallax();
			$('.services-name').waypoint(function () {
				$(".services__right").removeClass("hidden").addClass('fadeInRightBig');
				$(".services__left").removeClass("hidden").addClass('fadeInLeftBig');
				$(".services-data").removeClass("hidden").addClass('fadeInDown');
			}, {offset: "100px"});
			$('.advantages').waypoint(function () {
				$(".advantages__list").removeClass("hidden").addClass('fadeInDown');
			}, {offset: "100px"});
		},
		SLIDER_OPT: {
			mode: 'horizontal',
			infiniteLoop: true,
			useCSS: false,
			auto: false,
			responsive: true,
			touchEnabled: true,
			onSlideNext: function (elem) {
				app.animatePeople(elem);
			},
			onSlidePrev: function (elem) {
				app.animatePeople(elem);
			},
			onSliderLoad: function () {
				var animLabel = $('.slider__list-label'),
					animImg = $('.slider__list-img_anim');
				animImg.removeClass("hidden").addClass('fadeInRightBig');
				animLabel.removeClass("hidden").addClass('rotateInDownLeft');
			},
			pager: true
		},
		animatePeople: function (elem) {
			var animLabel = $('.slider__list-label'),
				animImg = $('.slider__list-img_anim');
			animImg.removeClass('fadeInRightBig').addClass("hidden");
			elem.find(animImg).removeClass("hidden").addClass('fadeInRightBig');
			animLabel.removeClass('rotateInDownLeft').addClass("hidden");
			elem.find(animLabel).removeClass("hidden").addClass('rotateInDownLeft');
		}
	}
})();

app.init()