$(function() {
	//导航
	$(".index-view-subpage").load("./app/rmnews.html");
	$(".nav-list li span").each(function(index) {
		$(this).click(function() {
			$(".nav-list li span.tabin").removeClass("tabin");
			$(this).addClass("tabin");
			if (index == 0) {
				$(".index-view-subpage").load("./app/rmnews.html");
			} else if (index == 1) {
				$(".index-view-subpage").load("./app/hdnews.html");
			} else if (index == 2) {
				$(".index-view-subpage").load("./app/lcnews.html");
			} else if (index == 3) {
				$(".index-view-subpage").load("./app/etnews.html");
			} else if (index == 4) {
				$(".index-view-subpage").load("./app/scnews.html");
			} else if (index == 5) {
				$(".index-view-subpage").load("./app/mtnews.html");
			}
		})
	})

	//回到顶部
	$(window).scroll(function() {
		var sc = $(window).scrollTop();
		var rwidth = $(window).width()
		if (sc > 0) {
			$(".gotop-globalview").css("display", "block");
			$(".gotop-globalview").css("left", (rwidth - 36) + "px")
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