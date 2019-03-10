$(document).ready(function() {
	smoothScroll();
});

function smoothScroll(){		
	$('header .header-menu ul li a').on('click', function(element){

		element.preventDefault();

		var href = $(this).attr('href');

		$('html, body').animate({
			scrollTop: $(href).offset().top
		}, 800);

	});
}