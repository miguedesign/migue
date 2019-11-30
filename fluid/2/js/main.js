jQuery(document).ready(function($) {
  
  $('.toggleAlt').on('click', function(e){  
    e.preventDefault();
    $(this).addClass('is-active').siblings().removeClass('is-active');

    alt = $(this).attr('href');
    console.log('click ' + alt);
    $('.owl-default').toggleClass('is-active').toggleClass('is-hide');
    $('.owl-alt').toggleClass('is-active').toggleClass('is-hide');
    if(alt == '#Default'){
      console.log('es defaulty');
      $('.features').removeClass('is-alt');
    }
    else{
      console.log('es alternativy ');
      $('.features').addClass('is-alt');
    }
  });
  


  var owl = $('.owl-carousel');  
  owl.owlCarousel({
      margin: 10,
      loop: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3500,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    })
      
});