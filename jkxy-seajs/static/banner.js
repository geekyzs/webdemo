//广告横幅
define(function(require, exports, module) {
	var $ = require('jquery');
	exports.myBanner = function() {
		$(function() {
			//中间横幅广告图片轮播
			var bannerSlider = new Slider($(".banner"), {
				time: 2888,
				delay: 400,
				event: 'hover',
				auto: true,
				mode: 'fade',
				controller: $(".pagination"),
				activeControllerCls: "active",
			})
			$(".banner-left").click(function() {
				bannerSlider.prev()
			});
			$(".banner-right").click(function() {
				bannerSlider.next()
			});
		})
	}
})