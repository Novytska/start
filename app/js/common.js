
$(document).ready(function(){

	//Slider

$('.customers-slider-wrapper').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  speed:1500,
  index: 2,
  arrows: true,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

 $('.customers-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    });
        
  // $('.customers-slider__item').addClass('slick-active');
  //   $('.customers-slider__item-content').addClass('block');


// Navigation

  $('.header-btn').on('click', function() {
    $('.header-navigation').addClass('active');
    $('body').addClass('overflow-hidden');  
  })

  $('.header-navigation__close').on('click', function() {
    $('.header-navigation').removeClass('active');
    $('body').removeClass('overflow-hidden');
  })

});


