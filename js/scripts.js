$(document).ready(function(){
	$('.parallax-window').parallax({imageSrc: 'img/mac.jpg'});
	console.log("test");

	$(window).scroll(function() {
		// console.log($(window).scrollTop());
		console.log("inside window");
		if ($(document).scrollTop() > 50) {
			console.log("inside if");
			$('nav').addClass('shrink');
		} else {
			console.log("inside else");
			$('nav').removeClass('shrink');
		}
	});

	$('.carousel').carousel({
		interval: 2300
	})
	console.log("right before wow");
	new Wow().init();
	console.log('wow initiated');
});




