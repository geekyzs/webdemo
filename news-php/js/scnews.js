//社会新闻
//获取数据
function getData() {
	$.ajax({
		type: 'POST',
		url: './php/scnews.php',
		dataType: 'json',
		beforeSend: function() {
			$("#loading").html("<img id='loadin'g src='./img/loading.gif'>");
		},
		success: function(json) {
			$("#loading").html("");
			$("#list ul").empty();
			var li = "";
			var list = json.list;
			$.each(list, function(index, array) { //遍历json数据列
				li += "<li><a href='#'><img src='" + array['pic'] + "'><p>" + array['title'].substring(0) + "</p></a><b>" + array['time'] + "</b></li>";
			});
			$("#list ul").append(li);
		},
		error: function() {
		$("#loading").html("<img id='loadin'g src='./img/loading.gif'>");
		$("#list ul").html("请求数据失败");
		}
	});
}
getData();