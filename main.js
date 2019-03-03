/*!
	Theme Name: Migue
	Theme URI: http://migue.design
	Author: @elnodos
	Author URI: http://migue.design
	Author Contact: hello@migue.design
	Version: 2.0

	Licensed under the MIT license.
	Copyright 2017
*/

jQuery(document).ready(function($) {
	
	//randomises the page title from a small handful of uninteresting options
	var pagetitles = ["Migue", "Migue : @elnodos", "@elnodos", "Migue, hola!"];
	var pickpagetitle = Math.floor(Math.random()*pagetitles.length);
	$(document).attr('title', pagetitles[pickpagetitle]);

	$('.trigger').on('click', function(e){
		e.preventDefault();
		
		$this = $(this);
		trigger = $this.attr('href');
		
		if($this.hasClass('is-clicked')){
			$this.removeClass('is-clicked');
			$("#"+trigger).removeClass('is-show');
		}
		else{
			$('.trigger').removeClass('is-clicked');
			$('.content').removeClass('is-show');

			$this.addClass('is-clicked');
			$("#"+trigger).addClass('is-show');
		}

	});

});





