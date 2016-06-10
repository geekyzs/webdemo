//Tab标签切换
$(function() {
	//公开课Tab标签切换
	$("#teb li").each(function(index) {
		var liNode = $(this);
		$(this).mouseover(function() {
			timeoutid = setTimeout(function() {
				$("div.block").removeClass("block");
				$("#teb li.week-day-hover").removeClass("week-day-hover");
				$(".week-list").eq(index).addClass("block");
				$(liNode).addClass("week-day-hover");
			}, 88);
		}).mouseout(function() {
			clearTimeout(timeoutid);
		})
	})

	//课程内容Tab标签切换
	$("#teb1 li").each(function(index) {
		var liNode = $(this);
		$(this).mouseover(function() {
			timeoutid = setTimeout(function() {
				$("div.block1").removeClass("block1");
				$("#teb1 li.hot-lesson-hover").removeClass("hot-lesson-hover");
				$(".hot-lessonbox").eq(index).addClass("block1");
				$(liNode).addClass("hot-lesson-hover");
			}, 88);
		}).mouseout(function() {
			clearTimeout(timeoutid);
		})
	})
})