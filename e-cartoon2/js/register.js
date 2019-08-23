$(function(){
	$("#user").click(function(){
		$("#register_form1").css("display","block");
		$("#register_form2").css("display","none");
		$("#user_i").css("display","block");
		$("#manager_i").css("display","none");
	})
	
	$("#manager").click(function(){
		$("#register_form1").css("display","none");
		$("#register_form2").css("display","block");
		$("#user_i").css("display","none");
		$("#manager_i").css("display","block");
	})
})