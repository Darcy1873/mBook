
$('.user').focusin(function(){
  $('.icon_user').css('color', '#e74c3c');
}).focusout(function(){
  $('.icon_user').css('color', 'white');
});

$('.pwd').focusin(function(){
  $('.icon_pwd').css('color', '#e74c3c');
}).focusout(function(){
  $('.icon_pwd').css('color', 'white');
});

$(document).ready(function(){
  var clientHeight = getHeight() - 75;
  $('footer').css('top', clientHeight);
});
