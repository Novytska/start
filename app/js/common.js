
$(document).ready(function(){

	//Slider

    $('.section-slick').slick({
  		infinite: true,
 		slidesToShow: 3, 
  		slidesToScroll: 1,
  		dots: true,
      dotsClass: 'my-dots-class',
      
  
		responsive: [
    	{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 543,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  		]
	});

// Navigation

  $('.header-btn').on('click', function() {
    $('.header-navigation').addClass('active');
    $('body').addClass('overflow-hidden');  
  })

  $('.header-navigation__close').on('click', function() {
    $('.header-navigation').removeClass('active');
    $('body').removeClass('overflow-hidden');
  })

})



