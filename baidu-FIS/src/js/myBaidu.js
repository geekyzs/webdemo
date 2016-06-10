$(function() {
	$("#change-skin").click(function(e) { //显示换皮肤界面
		var showSkin = $("#skowskin");
		showSkin.slideDown(1188);
		$(document).click(function(){
			showSkin.slideUp(1188);
		});
		e.stopPropagation();//阻止冒泡
	});
	$("#skin-up").click(function(e) { //收起换皮肤界面
		var showSkin = $("#skowskin");
		showSkin.slideUp(1188);
		e.stopPropagation();//阻止冒泡
	});
	$("#skowskin").on("click",function(e){
		e.stopPropagation();
	})
	//换皮肤
	$("#skin1").on("click", skin1);
	$("#skin2").on("click", skin2);
	$("#skin3").on("click", skin3);

	//鼠标滑过用户名弹出用户菜单
	$(".user-name-top").mouseenter(function() {
		$(".user_name_menu").show();
	});
	$(".user-name-top").mouseleave(function() {
		$(".user_name_menu").hide();
	});
	$(".user_name_menu").mouseenter(function() {
		$(".user_name_menu").show();
	});
	$(".user_name_menu").mouseleave(function() {
		$(".user_name_menu").hide();
	});
	//鼠标滑过设置弹出设置菜单
	$(".user-setting").mouseenter(function() {
		$(".bdpfmenu").show();
	});
	$(".user-setting").mouseleave(function() {
		$(".bdpfmenu").hide();
	});
	$(".bdpfmenu").mouseenter(function(){
		$(this).show();
	});
	$(".bdpfmenu").mouseleave(function(){
		$(this).hide();
	});
	//鼠标画过更多产品按钮弹出更多产品菜单
	$("#s_bri").mouseenter(function() {
		var bdMore = $(".s_bdbriimg");
		bdMore.show().mouseleave(function() {
			bdMore.hide();
		});
	});
	//中间内容标签切换
	$("#nav").click(function() { //导航
		$(".xmancard_nav").addClass("display-block");
		$(this).addClass("current");
		$(".xmancard_news").removeClass("display-block");
		$(".xmancard_mine").removeClass("display-block");
		$("#mine").removeClass("current");
		$("#news").removeClass("current");
	});
	$("#mine").click(function() { //我的关注
		$(".xmancard_mine").addClass("display-block");
		$(this).addClass("current");
		$(".xmancard_news").removeClass("display-block");
		$(".xmancard_nav").removeClass("display-block");
		$("#nav").removeClass("current");
		$("#news").removeClass("current");
	});
	$("#news").click(function() { //推荐
		$(".xmancard_news").addClass("display-block");
		$(this).addClass("current");
		$(".xmancard_mine").removeClass("display-block");
		$(".xmancard_nav").removeClass("display-block");
		$("#nav").removeClass("current");
		$("#mine").removeClass("current");
	});
	$(window).scroll(function() { //网页下拉时百度搜索固定在头部
		if ($(window).scrollTop() >= 300) {
			$(".header-search").css("display", "block");
		} else {
			$(".header-search").css("display", "none");
		}
	});
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

////皮肤保存到localStorage
function saveStorage(str) {
	localStorage.setItem("skinkey", str);
}

//从localStorage中读取皮肤
function loadStorage() {
	return localStorage.getItem("skinkey");
}

//页面加载皮肤
window.onload = function() {
		var skin = loadStorage();
		if (skin == 1) {
			skin1();
		} else if (skin == 2) {
			skin2();
		} else {
			skin3();
		}
	}
	//第1个皮肤
var skin1 = function() {
		//更换背景
		$(".wrapper").removeClass("wrapperskin2");
		$(".wrapper").removeClass("wrapperskin3");
		$(".wrapper").addClass("wrapperskin1");
		//更换网页顶部字体颜色
		$(".show-city").css("color", "#FFFFFF");
		$(".show-icon-temp").css("color", "#FFFFFF");
		$(".show-polution-num").css("color", "#FFFFFF");
		$(".s-icons a").css("color", "#FFFFFF");
		$(".isindex-wrap a").css("color", "#FFFFFF");
		$(".s_lg_img").attr("src", "img/logo_white.png"); //更换logo
		$(".s_main").css("background-color", "#F7F7F7"); //更换中间内容背景颜色
		//更换底部字体颜色
		$(".s-bottom-ctner").css("color", "#FFF");
		$(".s-bottom-ctner a").css("color", "#FFF");
		saveStorage(1); //保存到loadStorage
	}
	//第2个皮肤
var skin2 = function() {
		//更换背景
		$(".wrapper").removeClass("wrapperskin1");
		$(".wrapper").removeClass("wrapperskin3");
		$(".wrapper").addClass("wrapperskin2");
		//更换网页顶部字体颜色
		$(".show-city").css("color", "#FFFFFF");
		$(".show-icon-temp").css("color", "#FFFFFF");
		$(".show-polution-num").css("color", "#FFFFFF");
		$(".s-icons a").css("color", "#FFFFFF");
		$(".isindex-wrap a").css("color", "#FFFFFF");
		$(".s_lg_img").attr("src", "img/logo_white.png"); //更换logo
		$(".s_main").css({ //更换中间内容背景颜色
			"background-color": "#F7F7F7",
			"opacity": "0.9"
		});
		//更换底部字体颜色
		$(".s-bottom-ctner").css("color", "#FFF");
		$(".s-bottom-ctner a").css("color", "#FFF");
		saveStorage(2); //保存到loadStorage
	}
	//第3个皮肤
var skin3 = function() {
	//更换背景
	$(".wrapper").removeClass("wrapperskin1");
	$(".wrapper").removeClass("wrapperskin2");
	$(".wrapper").addClass("wrapperskin3");
	//更换网页顶部字体颜色
	$(".show-city").css("color", "#FFFFFF");
	$(".show-icon-temp").css("color", "#FFFFFF");
	$(".show-polution-num").css("color", "#FFFFFF");
	$(".s-icons a").css("color", "#FFFFFF");
	$(".isindex-wrap a").css("color", "#FFFFFF");
	$(".s_lg_img").attr("src", "img/logo_white.png"); //更换logo
	$(".s_main").css({ //更换中间内容背景颜色
		"background-color": "#F7F7F7",
		"opacity": "0.9"
	});
	//更换底部字体颜色
	$(".s-bottom-ctner").css("color", "#FFF");
	$(".s-bottom-ctner a").css("color", "#FFF");
	saveStorage(3); //保存到loadStorage
}