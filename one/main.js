jQuery(document).ready(function($) {
	
	// Theme  day & dark
	function theme(){
		user = window.localStorage.getItem('user');
		render(user);
	}
	theme();


	$('.button-daynight').on('click', function(e){
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

	})

	function render(user){
		user = user;
		if(user){
			$('.button-daynight').toggleClass('is-night');
			$('body').toggleClass('Dark');
		}
	}



	// Load Dailys
	$('#OneDailyContent').html('');

	$.ajax({
	    url: 'uploads/onedaily.json',
	    dataType: 'JSON',
	    success: function(res) {
	    	printDaily(res);
	    }
	  });

	function printDaily(res){
		var templateDaily ="<article>"+
													"<a href='#day:link:'>"+
														"<figure class='img-day'>"+
															"<img src=':img:' alt=''>"+
														"</figure>"+
														"<h3>:name:</h3>"+
														"<p>:date:</p>"+
													"</a>"+
												"</article>",
				url = "./uploads/daily-",
				n = 0;

		$.each( res.onedaily, function(i, val){

        img = url + val.day +'.jpg';
        dia = 'Day ' + val.day;
        name = dia + ' - ' + val.name;
        
        // type = val.type == 1 ? "<span class='keyicon_download keyicon-new'>New</span>" : "";
        
        var itemsOne = templateDaily
  					.replace(':name:', name)
  					.replace(':link:', val.day)
  					.replace(':date:', val.date)
  					.replace(':img:', img)

  					addOneDaily(itemsOne);
  					
  					n++;
  		});
	}
	function addOneDaily(itemsOne){
		$('#OneDailyContent').append($(itemsOne));
	}

	// Agregar la clase .is-clicked a los keyicons que se clickean
	// $('body').on('click', '.keyicon', function(e){
	// 	// e.preventDefault();
	// 	// console.log('clicked');
	// 	$(this).addClass('is-clicked');
	// });

	




	



});