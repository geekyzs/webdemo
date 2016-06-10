//头部搜索
$(function() {
	//鼠标点击搜索输入框改变样式
	$("#search-text").on("click", function(e) {
		$(".hot-words").hide();
		$("#search-submit").addClass("search-submit-focus");
		$(document).on("click", function() {
			$(".hot-words").show();
			$("#search-submit").removeClass("search-submit-focus");
		});
		e.stopPropagation(); //阻止冒泡
	});
	$("#search-submit").on("click", function(e) {
		e.stopPropagation();
	})
	$(".hot-words").on("click", function(e) {
		e.stopPropagation();
	})
})