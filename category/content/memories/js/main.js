// $('.carousel').carousel({
//   interval: 2000
// });
$('.back-top').click( function () {
  $('html').animate({scrollTop: 0}, 3000);
});

$('body').niceScroll();



function create() {
  var name = document.getElementById('name_writer').value;
  var mail = document.getElementById('mail_writer').value;
  var phone = document.getElementById('phone_writer').value;
  var text = document.getElementById('text_writer').value;

  document.getElementById('name_review').innerHTML = name;
  document.getElementById('mail_review').innerHTML = mail;
  document.getElementById('text_review').innerHTML = text;
  document.getElementById('phone_review').innerHTML = phone;
}
  

