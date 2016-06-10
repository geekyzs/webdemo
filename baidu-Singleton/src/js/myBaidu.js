//JS 单例模式 ，'对象字面量'的定义方式
//减少全局变量泛滥，保证命名空间对象和函数井然有序，防止它们与全局命名空间混淆。
$(function() {
	var changeSkin = { //换皮肤
		init: function(argument) {
			var me = this;
			me.render();
			me.bind();
		},
		render: function() {
			var me = this;
			me.skinBtn = $("#change-skin");
			me.showSkin = $("#skowskin");
			me.dom = $(document);
			me.upSkin = $("#skin-up");
			me.skin1 = $("#skin1");
			me.skin2 = $("#skin2");
			me.skin3 = $("#skin3");
		},
		bind: function() {
			var me = this;
			me.skinBtn.click(function(e) { //显示皮肤界面
				me.showSkin.slideDown(1188);
				e.stopPropagation(); //阻止冒泡
			});
			me.dom.click(function(e) { //隐藏皮肤界面
				me.showSkin.slideUp(1188);
				e.stopPropagation(); //阻止冒泡
			});
			me.upSkin.click(function() { //隐藏皮肤界面
				me.showSkin.slideUp(1088);
			});
			me.showSkin.click(function(e) {
				e.stopPropagation(); //阻止冒泡
			});
			me.skin1.on('click', skin1); //换皮肤1
			me.skin2.on('click', skin2); //换皮肤2
			me.skin3.on('click', skin3); //换皮肤3
		}
	};
	var skin1 = function() { //第1个皮肤
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
	var skin2 = function() { //第2个皮肤
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
	var skin3 = function() { //第3个皮肤
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
	function saveStorage(str) { //皮肤保存到localStorage
		localStorage.setItem("skinkey", str);
	};
	function loadStorage() { //从localStorage中读取皮肤
		return localStorage.getItem("skinkey");
	};
	window.onload = function() { //页面加载皮肤
		var skin = loadStorage();
		if (skin == 1) {
			skin1();
		} else if (skin == 2) {
			skin2();
		} else {
			skin3();
		}
	};
	var topNav = { //顶部导航
		init: function(argument) {
			var me = this;
			me.render();
			me.bind();
		},
		render: function() {
			var me = this;
			me.userInfo = $(".user-name-top");
			me.userMenu = $(".user_name_menu");
			me.userSet = $(".user-setting");
			me.setMenu = $(".bdpfmenu");
			me.more = $("#s_bri");
			me.moreMenu = $(".s_bdbriimg");
		},
		bind: function() {
			var me = this;
			me.userInfo.mouseenter(function() { //鼠标滑过用户名弹出用户菜单
				me.userMenu.show();
			});
			me.userInfo.mouseleave(function() {
				me.userMenu.hide();
			});
			me.userMenu.mouseenter(function() {
				$(this).show();
			});
			me.userMenu.mouseleave(function() {
				$(this).hide();
			});
			me.userSet.mouseenter(function() { //鼠标滑过设置弹出设置菜单
				me.setMenu.show();
			});
			me.userSet.mouseleave(function() {
				me.setMenu.hide();
			});
			me.setMenu.mouseenter(function() {
				$(this).show();
			});
			me.setMenu.mouseleave(function() {
				$(this).hide();
			});
			me.more.mouseenter(function() {
				me.moreMenu.show().mouseleave(function() {
					me.moreMenu.hide();
				});
			});
		}
	}
	var content = { //中间内容
		init: function(argument) {
			var me = this;
			me.render();
			me.bind();
		},
		render: function() {
			var me = this;
			me.contentNav = $("#nav");
			me.contentNews = $("#news");
			me.contentMine = $("#mine");
			me.xcNav = $(".xmancard_nav");
			me.xcNews = $(".xmancard_news");
			me.xcMine = $(".xmancard_mine");
		},
		bind: function() {
			var me = this;
			me.contentNav.click(function() {
				me.xcNav.addClass('display-block');
				me.xcNews.removeClass('display-block');
				me.xcMine.removeClass('display-block');
				$(this).addClass("current");
				me.contentMine.removeClass('current');
				me.contentNews.removeClass('current');
			});
			me.contentNews.click(function() {
				me.xcNews.addClass('display-block');
				me.xcNav.removeClass('display-block');
				me.xcMine.removeClass('display-block');
				$(this).addClass("current");
				me.contentMine.removeClass('current');
				me.contentNav.removeClass('current');
			});
			me.contentMine.click(function() {
				me.xcMine.addClass('display-block');
				me.xcNav.removeClass('display-block');
				me.xcNews.removeClass('display-block');
				$(this).addClass("current");
				me.contentNews.removeClass('current');
				me.contentNav.removeClass('current');
			});
		}
	}
	var goTop = {
		init: function(argument) {
			var me = this;
			me.render();
			me.bind();
		},
		render: function() {
			var me = this;
			me._window = $(window);
			me.gotop = $(".top");
			me.search = $(".header-search");
		},
		bind: function() {
			var me = this;
			me._window.scroll(function() { //回到顶部
				if ((me._window.scrollTop()) > 0) {
					me.gotop.css('display', 'block');
					me.gotop.css('left', (me._window.width()) + 'px');
				} else {
					me.gotop.css('display', 'none');
				};
			});
			me.gotop.click(function() {
				$('body,html').animate({
					scrollTop: 0
				}, 500);
			});
			me._window.scroll(function() { //搜索固定在顶部
				if ((me._window.scrollTop()) >= 300) {
					me.search.css('display', 'block');
				} else {
					me.search.css('display', 'none');
				};
			})
		}
	}
	changeSkin.init();
	topNav.init();
	content.init();
	goTop.init();
})