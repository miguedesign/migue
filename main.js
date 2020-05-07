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

	//randomises bg-color
	var pagebackground = ["acent", "black", "light"];
	var pickbackground = Math.floor(Math.random()*pagebackground.length);
	$('body').attr('class', pagebackground[pickbackground]);

});





