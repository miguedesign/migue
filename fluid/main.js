jQuery(document).ready(function($) {


  // Theme  day & dark
	// function theme(){
	// 	user = window.localStorage.getItem('user');
		
	// 	render(user);
	// }
	// theme();


	// $('.toggle-dark').on('click', function(e){
	// 	e.preventDefault();
	// 	$(this).toggleClass('is-night');
  //   $('body').toggleClass('Dark');
    
  //   if($(this).hasClass('is-night')){
	// 		const person = {
	// 			theme: "Dark"
	// 		}
  //     window.localStorage.setItem('user', JSON.stringify(person));
  //     changeSrc();
	// 	}
	// 	else{
  //     window.localStorage.removeItem('user');
  //     $('.toggle-theme-img').attr('src', './img/sun.svg');
  //     $('.hero-image-desk').attr('src', './img/fluid-img-dark.png');
  //     $('.hero-image-mobile').attr('src', './img/fluid-img-mobile-dark.png');
	// 	}

	// })
  // function changeSrc(){
    
  //   console.log('cambio de thema');

  //   $('.toggle-theme-img').attr('src', './img/moon.svg');
  //   $('.hero-image-desk').attr('src', './img/fluid-img-light.png');
  //   $('.hero-image-mobile').attr('src', './img/fluid-img-mobile-light.png');
  // }
	// function render(user){
	// 	user = user;
	// 	if(user){
	// 		$('.toggle-dark').toggleClass('is-night');
  //     $('body').toggleClass('Dark');
  //     changeSrc();
	// 	}
	// }



  // Change Default - Alt
  // $('.toggleAlt').on('click', function(e){  
  //   e.preventDefault();  
  //   $(this).addClass('is-active').siblings().removeClass('is-active');
  
  //   alt = $(this).attr('href');
    
  //   if(alt == '#Default'){
  //     $('.features').removeClass('is-alt');
  //     $('.owl-default').addClass('is-active');
  //     $('.owl-alt').removeClass('is-active').addClass('is-hide');
  //   }
  //   else{
  //     $('.features').addClass('is-alt');
  //     $('.owl-alt').addClass('is-active');
  //     $('.owl-default').removeClass('is-active').addClass('is-hide');
  //   }
  // });


  // Open Modal
  $('.openModal').on('click', function(e){  
    e.preventDefault();  
    // $(this).addClass('is-active').siblings().removeClass('is-active');
    alt = $(this).attr('href');
    
    $('#modal').addClass('is-open');

    if(alt == '#example'){
      $('#example').addClass('is-active');
    }
    else if(alt == '#connectors'){
      $('#connectors').addClass('is-active');
    }
    else{
      $('#architecture').addClass('is-active');
    }
  });
  
  $('.closeModal').on('click', function(e){  
    e.preventDefault();  
    $('#modal').removeClass('is-open');
    $('#example').removeClass('is-active');
    $('#connectors').removeClass('is-active');
    $('#architecture').removeClass('is-active');
  });
  


      
});