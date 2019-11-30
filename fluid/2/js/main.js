jQuery(document).ready(function($) {

  

	var owl = $('.owl-carousel');
      owl.owlCarousel({
        margin: 10,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 2500,
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