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


});




