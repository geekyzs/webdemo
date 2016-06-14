//后台管理系统
$(function() {
		$(".table-responsive").load("../php/maintainnews.php");
	$(window).scroll(function() {	//回到顶部
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