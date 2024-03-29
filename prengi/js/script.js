$(document).ready(function(){ 
  $('.slider-promo').slick({
    prevArrow: '.slick-prev',
    nextArrow: '.slick-next',
    dots:true,
    appendDots:'.slide-dots',
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 4000,
    customPaging:function(){return ''}
  });

  $('.slider-solution').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left_2.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right_2.png"></button>',
    
  });

  $('[data-feedback="feedback-modal"]').on('click', function() {
   $('.overlay, #feedback').fadeIn('slow');
      });
      $('.modal__close').on('click', function() {
        $('.overlay, #feedback').fadeOut('slow');
      });

      window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.menu'),    
        menuItem = document.querySelectorAll('.menu_item'),    
        hamburger = document.querySelector('.hamburger');        
        hamburger.addEventListener('click', () => {    
            hamburger.classList.toggle('hamburger_active');    
            menu.classList.toggle('menu_active');    
        });
    
    
        menuItem.forEach(item => {    
            item.addEventListener('click', () => {    
                hamburger.classList.toggle('hamburger_active');    
                menu.classList.toggle('menu_active');    
            }) ;   
        });
    });

    $(window).scroll(function() {
      if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }
    });

    $("a[href^='#']").click(function() {
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });

  });
