
$(document).ready(function() {
	
	$("a#example1").fancybox();

	
	$('a[href^="#"]').click(function(){  /*  берём все a href, кот.начинаются с # */
		var target = $(this).attr('href');   /* сохраняем href в переменную target */
		$('html, body').animate({
			scrollTop: $(target).offset().top-60  /* 50-размер поля меню с ссылками */
		}, 600)                                 /*  600- время анимации */
	});	
	
	
});