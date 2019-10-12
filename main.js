/*!
	Theme Name: Migue
	Theme URI: http://migue.design
	Author: @elnodos
	Author URI: http://migue.design
	Author Contact: hello@migue.design
	Version: 2.5
*/

jQuery(document).ready(function($) {
	
	//randomises the page title from a small handful of uninteresting options
	var pagetitles = ["Migue", "Migue : @elnodos", "@elnodos", "Migue, hola!"];
	var pickpagetitle = Math.floor(Math.random()*pagetitles.length);
	$(document).attr('title', pagetitles[pickpagetitle]);

	//randomises messages
	var pagemessages = ["Have a great day. 🙃", "🤔", "harder, better, faster, stronger 🤖", "Send me a tweet (@elnodos) and let's chat. 🙂"];
	var pickmessage = Math.floor(Math.random()*pagemessages.length);
	$('#Message').html(pagemessages[pickmessage]);

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





