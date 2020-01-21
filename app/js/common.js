
$(document).ready(function(){

$('.customers-slider').slick({
  centerMode: true,
  infinite: true,
  centerPadding: '20px',
  slidesToShow: 3,
  speed: 500,
  variableWidth: false,
  arrows: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),


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
      breakpoint: 540,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
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

 //Toggle

  $('.plan-toogles__container').on('click', function() {
    $('.plan-toogles__container').removeClass('active-toggles');
    $('.plan-toogles').toggleClass('active-toggles');
    $(this).addClass('active-toggles');
    var currentIndex = $(this).attr('data-index');
    $('.plan-section').removeClass('active-section');
    $('#'+currentIndex).addClass('active-section');
  })

  //Footer-accordion
    
  $('.footer-content__header').on('click', function() {
    $(this).toggleClass('active-footer');
// открываем или скрываем блок под заголовком, по которому кликнули
    $(this).next().slideToggle();
    })
  
});


