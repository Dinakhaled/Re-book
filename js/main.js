/* global , top */

$(function(){

	//smooth scroll

	$(".navbar-nav li a").click(function(){

		$('html,body').animate({

			scrollTop: $('#' + $(this).data('value')).offset().top

		},1000);

	});

	// links Add Active Class	

	$('.navbar-nav li').click(function() {

    $('.navbar-nav li.active').removeClass('active'); 

    $(this).addClass('active'); 

    });

    //Hide navbar on mobile screen

	$(document).on('click','.navbar-collapse.in',function(e) {
	    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
	        $(this).collapse('hide');
	    }
	});

	//Show theme div 

	$('.brush-click').click(function(){

		$('.color-option').fadeToggle();

	});

	//change theme color on click 


	var colorLi = $('.color-option ul li');

	colorLi
	.eq(0).css('backgroundColor','#E6CA90').end()
	.eq(1).css('backgroundColor','#a03d3d').end()
	.eq(2).css('backgroundColor','#70b454').end()
	.eq(3).css('backgroundColor','#337ab7').end()

	colorLi.click(function(){

		$('link[href*="theme"]').attr('href',$(this).attr('date-value'));

	});




	// Trigger nice scroll

		$('html').niceScroll({
			cursorcolor: "#222222",
			cursorwidth: "8px",
			cursorborder: "1px solid #222222",
			cursorborderradius :0
		});

});