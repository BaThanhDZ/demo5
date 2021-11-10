// $('.carousel').carousel({
//   interval: 2000
// });

$('.content_one').click( function () {
  $('.content_two span').removeClass('.active-menu')
  $('#content_2').css({
    'display': 'none'
  });

  $('content_one span').addClass('.active-menu')
  $('#content_1').css({
    'display': 'block'
  });

  event.preventDefault();
});

$('.content_two').click( function () {
  $('.content_one span').removeClass('.active-menu')
  $('#content_1').css({
    'display': 'none'
  });

  $('content_two span').addClass('.active-menu')
  $('#content_2').css({
    'display': 'block'
  });

  event.preventDefault();
});

$('.back-top').click( function () {
  $('html').animate({scrollTop: 0}, 3000);
});

$('body').niceScroll();