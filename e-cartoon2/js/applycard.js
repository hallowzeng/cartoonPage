//左侧导航点击换背景颜色、
$(function() {
	$(".e_leftnav li a").click(function() {
		$(".e_leftnav li a").css({
			"background-color": "#eeeeee",
			"color": "black"
		})
		$(this).css({
			"background-color": "dodgerblue",
			"color": "white"
		})
	})
})

//批量添加
$(function() {

	//	添加input
	$(".depsit_i").click(function() {
			$(this).before("<div class='deposit_input_one'><i></i><input type='text' name='' id='' value='' placeholder='卡号/学号'/><i class='shangchu_div'></i></div>")

			//	  添加侦听器
			bindListener();
		})
		//	定义侦听器
	function bindListener() {
		$(".shangchu_div").unbind().click(function() {
			$(this).parent(".deposit_input_one").remove();
		})
	}

	//	删除input
	$(".shangchu_div").click(function() {
		$(this).parent(".deposit_input_one").remove();
	})
})

//卡务管理导航栏点击事件
$(document).ready(function() {

		$("#deposit").click(function() {
			$(".e_rightcon").children().css("display", "none");
			$(".right_con_deposit").css("display", "block");
		})

		$("#batch_deposit").click(function() {
			$(".e_rightcon").children().css("display", "none");
			$(".right_batch_deposit").css("display", "block");
		})

		$("#withdraw").click(function() {
			$(".e_rightcon").children().css("display", "none");
			$(".right_con_withdraw").css("display", "block");
		})

		$("#batch_withdraw").click(function() {
			$(".e_rightcon").children().css("display", "none");
			$(".right_batch_withdraw").css("display", "block");
		})

		$("#subsidy").click(function() {
			$(".e_rightcon").children().css("display", "none");
			$(".right_con_subsidy").css("display", "block");
		})
	})
	//分页实现
function pagerFilter(data) {
	if(typeof data.length == 'number' && typeof data.splice == 'function') { // is array
		data = {
			total: data.length,
			rows: data
		}
	}
	var dg = $(this);
	var opts = dg.datagrid('options');
	var pager = dg.datagrid('getPager');
	pager.pagination({
		onSelectPage: function(pageNum, pageSize) {
			opts.pageNumber = pageNum;
			opts.pageSize = pageSize;
			pager.pagination('refresh', {
				pageNumber: pageNum,
				pageSize: pageSize
			});
			dg.datagrid('loadData', data);
		}
	});
	if(!data.originalRows) {
		data.originalRows = (data.rows);
	}
	var start = (opts.pageNumber - 1) * parseInt(opts.pageSize);
	var end = start + parseInt(opts.pageSize);
	data.rows = (data.originalRows.slice(start, end));
	return data;
}

//销毁对话框
function submitForm() {
	$('#ff').form('submit', {
		onSubmit: function() {
			return $(this).form('enableValidation').form('validate');
		}
	});
}

function clearForm() {
	$('#ff').form('clear');
}

//实现功能跳转
$(function(){
	$("#btn_1").click(function(){
//		alert($("#tiaozhuan_02"));
//		console.info($("#tiaozhuan_02"));
		$("#tiaozhuan_01").css("display","none");
		$("#tiaozhuan_02").css("display","block");
		$("#em_1").addClass("bg");
	})
	$("#btn_2").click(function(){
		$("#tiaozhuan_02").css("display","none");
		$("#tiaozhuan_03").css("display","block");
		$("#em_2").addClass("bg");
	})
	$("#btn_3").click(function(){
		$("#tiaozhuan_03").css("display","none");
		$("#tiaozhuan_04").css("display","block");
		$("#em_3").addClass("bg");
	})
	$("#btn_return_2").click(function(){
		$("#tiaozhuan_02").css("display","none");
		$("#tiaozhuan_01").css("display","block");
		$("#em_1").removeClass("bg");
	})
	$("#btn_return_3").click(function(){
		$("#tiaozhuan_03").css("display","none");
		$("#tiaozhuan_02").css("display","block");
		$("#em_2").removeClass("bg");
	})
})
//清空开卡信息
function clearInfo() {
	$('#clearinfo').form('clear');
}
//添加卡号
function findMaxId() {
	var date  = new Date();
	//年
	var year = date.getFullYear();
	//月
	var month = date.getMonth()+1;
	//日
	var day = date.getDate();
	
	var hours = date.getHours();
	if(hours<10){
		hours = "0"+hours;
	}
	
	var minutes = date.getMinutes();
	if(minutes<10){
		minutes = "0" + minutes;
	}
	
	var seconds = date.getSeconds();
	if(seconds<10){
		seconds = "0" +seconds;
	}
	//两位随机数
	var suiji = Math.floor(Math.random()*100);
	
	//卡号
	var createCard = hours+""+minutes+""+seconds+""+suiji;
	//当前时间
	var mytime = year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
	$("#info_text_number").val(createCard);
	$("#info_text_date").val(mytime);
}