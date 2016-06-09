//回到顶部
define(function(require, exports, module) {
	var $ = require('jquery');
	exports.goTop = function() {
		$(function() {
			//鼠标点击搜索输入框改变样式
			//回到顶部
			$(window).scroll(function() {
				var sc = $(window).scrollTop();
				var rwidth = $(window).width()
				if (sc > 0) {
					$(".top").css("display", "block");
					$(".top").css("left", (rwidth - 36) + "px")
				} else {
					$(".top").css("display", "none");
				}
			})
			$(".top").click(function() {
				var sc = $(window).scrollTop();
				$('body,html').animate({
					scrollTop: 0
				}, 500);
			})
		})
	}
})