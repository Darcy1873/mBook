
jQuery.fn.formChange=function(){
  $(this).siblings("form").hide();
  $(this).show();
  $(this).find(".form-focus").focus();
}

var formCheck = function(selector, flag){
  if(flag == false){
    selector.on("submit", function(event){
      event.preventDefault();
      $(".form-error").show();
    });
  }
  if(flag == true){
    selector.off("submit");
  }
}

$(".btn_extra").click(function(){
  $('#signUp_1').formChange();
});
$("#signUp_1 .btn").click(function(e){
  $('#signUp_2').formChange();
});
$("#signUp_2 .btn").click(function(){
  $('#signUp_3').formChange();
});

$('.form-autofill').on('input',function(){
  $(this).removeClass("form-autofill");
});

$("#logIn .btn").click(function(e){
  if($(this).prevAll(".pwd").children("input").val().length < 6){
    $(".form-error").text("密码至少6位");
    formCheck($("#logIn"), false);
  }else{
    formCheck($("#logIn"), true);
  }
});
