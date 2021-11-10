// $('.carousel').carousel({
//   interval: 2000
// }); 

$('.back-top').click( function () {
  $('html').animate({scrollTop: 0}, 3000);
});

$('.menu-item-6').mouseover( function () {
  $('.sub-menu-6').slideDown('slow');
});
$('.menu-item-6').mouseout( function () {
  $('.sub-menu-6').slideUp(500);
});


$('.post_more_1').click( function () {
  $('post_more_1 span').addClass('.active-menu')
  $('.post_more').css({
    'display': 'block'
  });

  event.preventDefault();
});

$('.post_more_2').click( function () {
  $('post_more_2 span').removeClass('.active-menu')
  $('.post_more').css({
    'display': 'none'
  });

  event.preventDefault();
});

$("body").niceScroll({
  //cursorcolor:"aquamarine",
  // cursorwidth:"16px"
});


var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {
  keyboard: false
})

// setTimeout( function() {
//   myModal.show();
// },5000);



