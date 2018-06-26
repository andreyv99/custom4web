// swiper slider
var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      
      clickable: true
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }

  });
// show mobile menu on click

$('.hamburger').on('click', function() {
  $('.navigationHeader').toggleClass('showMenu')
  $('.hamburger').toggleClass('is-active')
});

//scroll to element
$(document).ready(function(){
  $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
      if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
      }
    return false; // выключаем стандартное действие
  });
});
// close menu on hrefs click
$('.navigationHeader_href').on('click', function() {
  if($('.navigationHeader').hasClass('showMenu')) {
    $('.navigationHeader').removeClass('showMenu');
    $('.hamburger').removeClass('is-active')
  }
})