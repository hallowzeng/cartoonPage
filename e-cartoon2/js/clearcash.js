//结算管理导航栏点击事件
$(document).ready(function() {
	$("#deposit").click(function() {
		$(".e_rightcon").children().css("display", "none");
		$(".right_con_deposit").css("display", "block");
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
	
	$(function(){
			$('#dg').datagrid({loadFilter:pagerFilter}).datagrid('loadData', getData());
		});
		
}