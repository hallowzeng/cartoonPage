$(function() {
	$("#user").click(function() {
		$("#form_ms_one").css("display", "block");
		$("#form_ms_two").css("display", "none");
		$("#user_i").css("display", "block");
		$("#manager_i").css("display", "none");
	})

	$("#manager").click(function() {
		$("#form_ms_one").css("display", "none");
		$("#form_ms_two").css("display", "block");
		$("#user_i").css("display", "none");
		$("#manager_i").css("display", "block");
	})
})

/*表单验证*/
//function CheckForm(){ 
//var username = document.getElementById('usrname'); 
//var userPsw = document.getElementById('usrpsw'); 
//var pattern = /^\w{3,}$/;  //密码格式正则表达式：密码要至少三位 
//if(username.value.length == 0){ 
//  alert("用户名不能为空！！")
//  return false; 
//  } 
//if(!pattern.test(userPsw.value)){ 
//  alert("密码要至少三位 !!");
//  return false; 
//  } 
//if(userPsw.value.length == 0){ 
//  alert("密码不能为空！！")
//  return false; 
//  } 
// else{ 
//   alert("登录成功！！")
//   return true; 
//   } 
//} 
//
//function CheckForm2(){ 
//var Mname = document.getElementById('mname'); 
//var MPsw = document.getElementById('mpsw'); 
//var pattern = /^\w{3,}$/;  //密码格式正则表达式：密码要至少三位 
//if(Mname.value.length == 0){ 
//  alert("管理员名不能为空！！")
//  return false; 
//  } 
//if(!pattern.test(MPsw.value)){ 
//  alert("密码要至少三位 !!");
//  return false; 
//  } 
//if(MPsw.value.length == 0){ 
//  alert("密码不能为空！！")
//  return false; 
//  } 
// else{ 
//   alert("登录成功！！")
//   return true; 
//   } 
//} 
function CheckForm() {
	var username = document.getElementById('usrname');
	var userPsw = document.getElementById('usrpsw');
	//密码正则表达式：大于6位，至少包含一个大写或小写字母
//	var pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-z]).*$/;
//  var pPattern = /^([0-9]|[a-zA-Z]){6,12}$/
    var pPattern = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/
//	console.log("==" + pPattern.test("iFat3#"));

	if(username.value.length == 0) {
		alert("用户名不能为空！！")
		return false;
	}
	if(userPsw.value.length == 0) {
		alert("密码不能为空！！")
		return false;
	}
	if(!pPattern.test(userPsw.value)) {
		alert("密码要6-12位,且须包含数字和字符");
		return false;
	}
}

function CheckForm2() {
	var Mname = document.getElementById('mname');
	var MPsw = document.getElementById('mpsw');
	var pPattern = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/
	if(Mname.value.length == 0) {
		alert("管理员名不能为空！！")
		return false;
	}
	if(MPsw.value.length == 0) {
		alert("密码不能为空！！")
		return false;
	}
	if(!pPattern.test(MPsw.value)) {
		alert("密码要6-12位,且须包含数字和字符");
		return false;
	}
}