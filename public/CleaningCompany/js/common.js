$(document).ready(function(){
	//slider
	$('.header__baner').slick({
		dots: true,
		dotsClass: 'baner__dots',
		fade: true,
		cssEase: 'ease',
		arrows: false
	});
	$('.services__slider').slick({
		slidesToShow: 3,
		arrows: true,
		prevArrow: '<button type="button" class="services__prev"> <i class="fas fa-chevron-left"></i> </button>',
		nextArrow: '<button type="button" class="services__next"> <i class="fas fa-chevron-right"></i> </button>'

	});
	$('.review__text-slider').slick({
		infinite: true,
		swipe: false,
		swipeToSlide: false,
		fade: true,
		asNavFor: '.review__author-slider',
		cssEase: 'linear',
		prevArrow: '<button type="button" class="clients__prev"><i class="fas fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="clients__next"><i class="fas fa-chevron-right"></i></button>'
	})
	$('.review__author-slider').slick({
		useCSS: true,
		arrows: false,
		infinite: true,
		variableWidth: true,
		focusOnSelect: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.review__text-slider',
		centerMode: true,
		focusOnSelect: true
	});

	//преоброзование svg
	$('img.img-svg').each(function(){
		var $img = $(this);
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
		$.get(imgURL, function(data) {
		  var $svg = $(data).find('svg');
		  if(typeof imgClass !== 'undefined') {
			$svg = $svg.attr('class', imgClass+' replaced-svg');
		  }
		  $svg = $svg.removeAttr('xmlns:a');
		  if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
			$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
		  }
		  $img.replaceWith($svg);
		}, 'xml');
	  });
})
