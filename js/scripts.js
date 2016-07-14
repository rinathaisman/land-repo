/*----------------------------------------------------*/
/*	SCCROLL NAVBAR
/*----------------------------------------------------*/
$(window).scroll(function() {
	"use strict";
	var b = $(window).scrollTop();
	if (b > 100) {
		$(".scroll-nav").addClass("scroll-fixed-nav");
	} else {
		$(".scroll-nav").removeClass("scroll-fixed-nav");
	}
});



/*----------------------------------------------------*/
/*	WOW ANIMATION
/*----------------------------------------------------*/
$(window).load(function() {
	var wow = new WOW({
		mobile: false
	});
	wow.init();
});



/*----------------------------------------------------*/
/*	PRETTYPHOTO LIGHTBOX
/*----------------------------------------------------*/
$(document).ready(function() {
	"use strict";
	$("a[class^='prettyPhoto']").prettyPhoto();
});



/*----------------------------------------------------*/
/*	TESTIMONIAL SLIDER
/*----------------------------------------------------*/
$('#testimonial-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	draggable: false,
	fade: true,
	asNavFor: '#testimonial-carousel'
});



/*----------------------------------------------------*/
/*	TESTIMONIAL CAROUSEL
/*----------------------------------------------------*/
$('#testimonial-carousel').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	asNavFor: '#testimonial-slider',
	dots: false,
	arrows: false,
	centerMode: true,
	autoplay: true,
	focusOnSelect: true,
	centerPadding: '10px',
	responsive: [{
		breakpoint: 640,
		settings: {
			dots: false,
			autoplay: true,
			slidesToShow: 3,
			centerPadding: '0px',
		}
	}, {
		breakpoint: 575,
		settings: {
			autoplay: true,
			dots: false,
			slidesToShow: 1,
			centerMode: true,
		}
	}]
});



/*----------------------------------------------------*/
/*	SCROLL TO TOP
/*----------------------------------------------------*/
$(document).ready(function() {
	$(function() {
		$.scrollUp({
			scrollName: 'scrollUp', // Element ID
			scrollDistance: 300, // Distance from top/bottom before showing element (px)
			scrollFrom: 'top', // 'top' or 'bottom'
			scrollSpeed: 750, // Speed back to top (ms)
			easingType: 'linear', // Scroll to top easing (see http://easings.net/)
			animation: 'fade', // Fade, slide, none
			animationSpeed: 200, // Animation speed (ms)
			scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
			scrollTarget: false, // Set a custom target element for scrolling to. Can be element or number
			scrollText: '<i class="fa fa-chevron-up"></i>', // Text for element, can contain HTML
			scrollTitle: false, // Set a custom <a> title if required.
			scrollImg: false, // Set true to use image
			activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
			zIndex: 2147483647 // Z-Index for the overlay
		});
	});
});



/*----------------------------------------------------*/
/*	ONE PAGE NAV
/*----------------------------------------------------*/
$(document).ready(function() {
	$('#nav').onePageNav({
		currentClass: 'current-nav',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing',
		begin: function() {
			//I get fired when the animation is starting
		},
		end: function() {
			//I get fired when the animation is ending
		},
		scrollChange: function($currentListItem) {
			//I get fired when you enter a section and I pass the list item of the section
		}
	});
});