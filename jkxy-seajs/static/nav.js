//头部导航
define(function(require, exports, module) {
	var $ = require('jquery');
	exports.topNav = function() {
		$(function() {
			$(".topnav").mouseenter(function() { //鼠标滑过弹出头部导航二级菜单
				$(".navpanel ").show()
			})
			$(".topnav").mouseleave(function() { //鼠标离开隐藏头部导航二级菜单
					$(".navpanel ").hide();
				})
				//鼠标滑过和离开导航菜单改变它的子菜单的样式
			$(".nav-1").mouseenter(function() {
				$("#nav-1-l .angle").show();
				$("#nav-1-l").addClass("nav-l-hover");
			})
			$(".nav-1").mouseleave(function() {
				$("#nav-1-l .angle").hide();
				$("#nav-1-l").removeClass("nav-l-hover");
			})
			$("#nav-1-l").mouseenter(function() {
				$("#nav-1-l .angle").show();
			})
			$("#nav-1-l").mouseleave(function() {
				$("#nav-1-l .angle").hide();
			})
			$(".nav-2").mouseenter(function() {
				$("#nav-2-l .angle").show();
				$("#nav-2-l").addClass("nav-l-hover");
			})
			$(".nav-2").mouseleave(function() {
				$("#nav-2-l .angle").hide();
				$("#nav-2-l").removeClass("nav-l-hover");
			})
			$("#nav-2-l").mouseenter(function() {
				$("#nav-2-l .angle").show();
			})
			$("#nav-2-l").mouseleave(function() {
				$("#nav-2-l .angle").hide();
			})
			$(".nav-3").mouseenter(function() {
				$("#nav-3-l .angle").show();
				$("#nav-3-l").addClass("nav-l-hover");
			})
			$(".nav-3").mouseleave(function() {
				$("#nav-3-l .angle").hide();
				$("#nav-3-l").removeClass("nav-l-hover");
			})
			$("#nav-3-l").mouseenter(function() {
				$("#nav-3-l .angle").show();
			})
			$("#nav-3-l").mouseleave(function() {
				$("#nav-3-l .angle").hide();
			})
			$(".nav-4").mouseenter(function() {
				$("#nav-4-l .angle").show();
				$("#nav-4-l").addClass("nav-l-hover");
			})
			$(".nav-4").mouseleave(function() {
				$("#nav-4-l .angle").hide();
				$("#nav-4-l").removeClass("nav-l-hover");
			})
			$("#nav-4-l").mouseenter(function() {
				$("#nav-4-l .angle").show();
			})
			$("#nav-4-l").mouseleave(function() {
				$("#nav-4-l .angle").hide();
			})
		})
	}
})