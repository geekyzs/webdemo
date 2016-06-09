// 所有模块都通过 define 来定义
define(function(require, exports, module) {
	// 通过 require 引入依赖
	var topNav = require.async('./nav', function(topNav_callback) {
		topNav_callback.topNav();
	});
	var topSearch = require.async("./search", function(topSearch_callback) {
		topSearch_callback.topSearch();
	})
	var goTop = require.async("./goTop", function(goTop_callback) {
		goTop_callback.goTop();
	})
	var mySlider = require.async("./slider", function(mySlider_callback) {
		mySlider_callback.mySlider();
	})
	var myBanner = require.async("./banner", function(myBanner_callback) {
		myBanner_callback.myBanner();
	})
	var myTab = require.async("./tab", function(myTab_callback) {
		myTab_callback.myTab();
	})
	var myCard = require.async("./card", function(myCard_callback) {
		myCard_callback.myCard();
	})
	var picSlider = require.async("./picSlider", function(picSlider_callback) {
		picSlider_callback.picSlider();
	})
});