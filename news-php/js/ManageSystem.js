//后台管理系统

var curPage = 1; //当前页码
var total, pageSize, totalPage;

function getData(page) { //获取数据
	$.ajax({
		type: 'POST',
		url: './php/ManageSystem.php',
		dataType: 'json',
		beforeSend: function() {
			$("#loading").html("<img id='loadin'g src='./img/loading.gif'>");
		},
		success: function(json) {
			$("#loading").html("");
			$("#tbody").empty();
			var tb = "";
			var tabe = json.tabe;
			$.each(tabe, function(index, array) { //遍历json数据列
				tb += "<tr><td>" + array['id'] + " </td ><td> " + array['category'] + "</td ><td> " + array['title'] + "</td ><td> " + array['pic'] + "</td ><td> " + array['time'] + "</td ></tr>";
			});
			$("#tbody").append(tb);
		},
		error: function() {
			$("#loading").html("<img id='loadin'g src='./img/loading.gif'>");
			$("#tbody").html("请求数据失败");
		}
	});
}
getData();

$(function() {
	//回到顶部
	$(window).scroll(function() {
		var sc = $(window).scrollTop();
		var rwidth = $(window).width()
		if (sc > 0) {
			$(".gotop-globalview").css("display", "block");
			$(".gotop-globalview").css("left", (rwidth - 60) + "px")
		} else {
			$(".gotop-globalview").css("display", "none");
		}
	})
	$(".gotop-globalview").click(function() {
		var sc = $(window).scrollTop();
		$('body,html').animate({
			scrollTop: 0
		}, 500);
	})
})