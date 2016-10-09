
jQuery.fn.formChange=function(){
  $(this).siblings("form").hide();
  $(this).show();
  $(this).find(".form-focus").focus();
}

$(".btn_extra").click(function(){
  $('#signUp_1').formChange();
});
$("#signUp_1 .btn").click(function(){
  $('#signUp_2').formChange();
});
$("#signUp_2 .btn").click(function(){
  $('#signUp_3').formChange();
});
