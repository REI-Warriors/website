$(document).ready(function(){
	"use strict";
    
	/*
	* Many thanks to the original template author: "ThemeSine"
	* Template Name : Khanas HTML Template
	*/

    // Scroll To Top 
	$(window).on('scroll',function () {
		if ($(this).scrollTop() > 600) {
			$('.return-to-top').fadeIn();
		} else {
			$('.return-to-top').fadeOut();
		}
	});
	$('.return-to-top').on('click',function(){
			$('html, body').animate({
			scrollTop: 0
		}, 1500);
		return false;
	});
	
	// welcome animation support
	$(window).load(function(){
		$(".header-text h2,.header-text p").removeClass("animated fadeInUp").css({'opacity':'0'});
		$(".header-text a").removeClass("animated fadeInDown").css({'opacity':'0'});
	});

	$(window).load(function(){
		$(".header-text h2,.header-text p").addClass("animated fadeInUp").css({'opacity':'0'});
		$(".header-text a").addClass("animated fadeInDown").css({'opacity':'0'});
	});
});	
	