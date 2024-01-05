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
	
	//randomises the page title from a small handful of uninteresting options
	var pagetitles = ["Migue", "Migue : @elnodos", "@elnodos", "Migue, hola!"];
	var pickpagetitle = Math.floor(Math.random()*pagetitles.length);
	$(document).attr('title', pagetitles[pickpagetitle]);

    var $img = $('.coverDomestika'),
        $videoDomestika = '<iframe width="560" height="315" src="https://www.youtube.com/embed/zigFVjPlSgM?si=5GcjCrUqVbDQt0l6&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

    $img.on('click', function(){
        
        $img.html("<iframe width='560' height='315' src='https://www.youtube.com/embed/zigFVjPlSgM?si=5GcjCrUqVbDQt0l6&autoplay=1&mute=1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>");
        
        $img.addClass('isPlaying');

	});

});