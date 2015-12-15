$(document).ready(function(){
	// $('.parallax-window').parallax({imageSrc: 'img/mac.jpg'});
	// console.log("test");

	tiles = $(".profile").fadeTo(0, 0);

	$(window).scroll(function(d,h) {
		tiles.each(function(i) {
			a = $(this).offset().top + $(this).height();
			b = $(window).scrollTop() + $(window).height();
			if (a < b) $(this).fadeTo(500,1);
		});
	});

	// $(window).scroll(function() {
	// 	// // console.log($(window).scrollTop());
	// 	// console.log("inside window");
	// 	if ($(document).scrollTop() > 50) {
	// 		$('nav').addClass('shrink');
	// 	} else {   
	// 		$('nav').removeClass('shrink');
	// 	}
	// });

	$('.carousel').carousel({
		interval: 2000
	})
	// console.log("right before wow");
	// new Wow().init();
	// console.log('wow initiated');

	// var waypoints = $('.about').waypoint({
	// 	handler: function(){
	// 	console.log("waypoint alert"); 
	// 	$('.right-side').attr('right-side wow slideInRight col-sm-4 col-sm-offset-1');

	// 	$('.left-side').attr('.left-side wow slideInLeft col-sm-6 col-sm-offset-1');
	// 	// $('.right-side').animate({left: '0px'}, 1000)
	// 	},
	// 	offset: '60%'
	// });
	// wow = new WOW();
	// wow.init();
});



