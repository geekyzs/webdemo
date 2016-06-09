//保存到localStorage
function saveStorage(str) {
	localStorage.setItem("skinkey", str);
}

//从localStorage中读取
function loadStorage() {
	return localStorage.getItem("skinkey");
}

//页面加载
window.onload = function() {
	var skin = loadStorage();
	if (skin == 1) {
		orangeSkin();
	} else if (skin == 2) {
		watchetSkin();
	} else {
		pinkSkin();
	}
}

//橙色皮肤
var orangeSkin = function() {
	document.body.style.backgroundImage = "url(img/bg1.jpg)"; //更换背景图片
	document.body.style.backgroundColor = '#ff904e'; //更换背景颜色
	document.getElementById("first").style.backgroundColor = "#8470FF"; //更换导航栏首页链接的背景颜色
	document.getElementById("nav-list").style.borderTopColor = "#8470FF"; //更换导航栏上边框的颜色
	var dom = document.getElementsByClassName("g_green"); //更换突出内容字的颜色
	for (var i = 0, len = dom.length; i < len; i++) {
		dom[i].style.color = '#ff904e';
	}
	saveStorage(1);
}

//浅蓝色皮肤
function watchetSkin() {
	document.body.style.backgroundImage = "url(img/bg2.jpg)"; //更换背景图片
	document.body.style.backgroundColor = '#7EC0EE'; //更换背景颜色
	document.getElementById("first").style.backgroundColor = "#CDCD00"; //更换导航栏首页链接的背景颜色
	document.getElementById("nav-list").style.borderTopColor = "#CDCD00"; //更换导航栏上边框的颜色
	var dom = document.getElementsByClassName("g_green"); //更换突出内容字的颜色
	for (var i = 0, len = dom.length; i < len; i++) {
		dom[i].style.color = '#7EC0EE';
	}
	saveStorage(2);
}

//粉色皮肤
function pinkSkin() {
	document.body.style.backgroundImage = "url(img/bg3.jpg)"; //更换背景图片
	document.body.style.backgroundColor = '#ffefef;'; //更换背景颜色
	document.getElementById("first").style.backgroundColor = "#708090"; //更换导航栏首页链接的背景颜色
	document.getElementById("nav-list").style.borderTopColor = "#708090"; //更换导航栏上边框的颜色
	var dom = document.getElementsByClassName("g_green"); //更换突出内容字的颜色
	for (var i = 0, len = dom.length; i < len; i++) {
		dom[i].style.color = "#CD00CD";
	}
	saveStorage(3);
}