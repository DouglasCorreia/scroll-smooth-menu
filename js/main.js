$(document).ready(function() {
	smoothScroll();
	setNavigation();
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

function setNavigation(){
	var sections = $('.section');
	var header = $('header');

	// Captura a altura do header
	var headerHeight = header.outerHeight();

	$(window).on('scroll', function(){
		var currentPos = $(this).scrollTop();

		sections.each(function(){
			var top = $(this).offset().top - headerHeight;
			var bottom = top + $(this).outerHeight();

			if( currentPos >= top && currentPos <= bottom ){
				header.find('a').removeClass('active');
				header.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
			}
		});
	})

	// Quando houver um recarregamento na página
	var currentPosReload = $(window).scrollTop();

	sections.each(function(){
		var top = $(this).offset().top - headerHeight;
		var bottom = top + $(this).outerHeight();

		if( currentPosReload >= top && currentPosReload <= bottom ){
			header.find('a').removeClass('active');
			header.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
		}
	});
}