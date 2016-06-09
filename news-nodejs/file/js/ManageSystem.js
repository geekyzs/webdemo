//后台管理系统
$(function() {
	var myord = {
		ord: "DESC"
	}
	$.ajax({
		type: 'get',
		url: '/shownews',
		dataType: 'json',
		data: myord,
		success: function(msg5) {
			$("#loading").html("");
			$("#tbody").empty();
			var tb = "";
			var tabe = msg5;
			$.each(tabe, function(index, array) { //遍历json数据列
				tb += "<tr><td>" + array['id'] + " </td ><td> " + array['category'] + "</td ><td> " + array['title'] + "</td ><td> " + array['pic'] + "</td ><td> " + array['time'] + "</td ><td><button name='" + array['id'] + "' ' class='edit'>编辑</button></td><td><button name='" + array['id'] + "' class='del'>删除</button></td></tr>";
			});
			$("#tbody").append(tb);
			$(".edit").click(function(e) {
				var id = $(this).attr("name");
				$("#id").val(id);
				var selID = {
					id: $(this).attr("name")
				}
				$.ajax({
					type: 'get',
					url: '/selnews',
					dataType: 'json',
					data: selID,
					success: function(msg4) {
						var sel = msg4;
						$.each(sel, function(index, array) {
							var category = array['category'];
							var title = array['title'];
							var pic = array['pic'];
							var time = array['time'];
							$("#category2").val(category);
							$("#title2").val(title);
							$("#pic2").val(pic);
							$("#time2").val(time);
						});
					}
				})
				var editNews = $(".edit-news");
				editNews.slideDown(888);
				$(document).on("click", function() {
					editNews.slideUp(888);
				});
				$("#exit").on("click", function() {
					editNews.slideUp(888);
				});
				e.stopPropagation();
			});
			$(".edit-news").on("click", function(e) {
					e.stopPropagation();
				})
				//删除新闻
			$(".del").click(function() {
				var delID = {
					id: $(this).attr("name")
				};
				$.ajax({
					type: 'get',
					url: '/delnews',
					dataType: 'json',
					data: delID,
					success: function(msg3) {
						alert("删除新闻成功");
						window.location = "./index.html";
					},
				})
			})

		},
		error: function() {
			$("#loading").html("<img id='loadin'g src='./img/loading.gif'>");
			$("#tbody").html("请求数据失败");
		}
	});
	//添加新闻
	$("#submit").click(function() {
			var params = {
				category: $("#category").val(),
				title: $("#title").val(),
				pic: $("#pic").val(),
				time: $("#time").val()
			}
			if (params.title == "" || undefined || null) {
				alert("请填写新闻标题");
			} else if (params.pic == "" || undefined || null) {
				alert("请填写新闻图片地址");
			} else if (params.time == "" || undefined || null) {
				alert("请填写新闻时间");
			} else {
				$.ajax({
					type: 'get',
					url: '/addnews',
					dataType: 'json',
					data: params,
					success: function(msg) {
						alert("添加新闻成功");
					}
				})
			}

		})
		//编辑新闻
	$("#submit2").click(function() {
		var params2 = {
			id: $("#id").val(),
			category: $("#category2").val(),
			title: $("#title2").val(),
			pic: $("#pic2").val(),
			time: $("#time2").val()
		}
		if (params2.title == "" || undefined || null) {
			alert("请填写新闻标题");
		} else if (params2.pic == "" || undefined || null) {
			alert("请填写新闻图片地址");
		} else if (params2.time == "" || undefined || null) {
			alert("请填写新闻时间");
		} else {
			$.ajax({
				type: 'get',
				url: '/editnews',
				dataType: 'json',
				data: params2,
				success: function(msg2) {
					alert("修改新闻成功");
				},
			})
		}

	});
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