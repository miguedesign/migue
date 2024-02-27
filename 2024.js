/*!
	Theme Name: Migue
	Theme URI: http://migue.design
	Author: @elnodos
	Author URI: http://migue.design
	Author Contact: hello@migue.design
	Version: 3
  Copyright ©2024 Migue Martínez
*/

jQuery(document).ready(function($) {
	
	//Remplace Youtube Video 
    var $img = $('.coverDomestika');

    $img.on('click', function(){
        $img.html("<iframe width='560' height='315' src='https://www.youtube.com/embed/zigFVjPlSgM?si=5GcjCrUqVbDQt0l6&autoplay=1&mute=1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>");
        $img.addClass('isPlaying');
	});


	//Accordion for about
	$('#accordion').find('.btnToggle').click(function(e){
		e.preventDefault();
		
		//Expand or collapse this panel
		var isActive = $(this).hasClass("isActive");
		$('.btnToggle').removeClass('isActive')
		
		if (!isActive) {
			$(this).toggleClass('isActive');
		}

		$(this).next().slideToggle(300);     
		//Hide the other panels
		$(".toggleExpand").not($(this).next()).slideUp(300);

	});

	//Theme Light & Dark
	function theme(){
		user = window.localStorage.getItem('user');
		render(user);
		renderImg();
	}
	theme();

	$('.btn-lightDark').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('is-night');
		$('body').toggleClass('Dark');

		if($(this).hasClass('is-night')){
			const person = {
				theme: "Dark"
			}
			window.localStorage.setItem('user', JSON.stringify(person));
		}
		else{
			window.localStorage.removeItem('user');
		}
		renderImg();

	})
	
	function render(user){
		user = user;
		if(user){
			$('.btn-lightDark').toggleClass('is-night');
			$('body').toggleClass('Dark');
		}
	}

	function renderImg(){
		body = $('body');
	
		if(body.hasClass('Dark')){
			$(".toolkit-invert").attr("src", "../../../Static/images/work/energy/energy-007-light.png");
		}
		else{
			$(".toolkit-invert").attr("src", "../../../Static/images/work/energy/energy-007.png");
		}
	}
	


	
	
});