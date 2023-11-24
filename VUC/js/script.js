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

  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  for (let elm of elements) {
    observer.observe(elm);
  }

  function onnEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show-fast');
      }
    });
  }
  let optionss = { threshold: [0.5] };
  let observerr = new IntersectionObserver(onnEntry, optionss);
  let elementss = document.querySelectorAll('.element-animation-fast');
  for (let elm of elementss) {
    observerr.observe(elm);
  }



  

  });
