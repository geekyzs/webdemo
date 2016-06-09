$(function() {
	$(window).scroll(function() { //网页头部固定
		if ($(window).scrollTop() >= 200) {
			$(".header").addClass("fixedHeader");
		} else {
			$(".header").removeClass("fixedHeader");
		}
	});
	$(window).on("load", function() { //图片摆放，滚动加载
		imgLocation();
		var dataImg = {
			"data": [{
				"src": "pp(18).jpg"
			}, {
				"src": "pp(19).jpg"
			}, {
				"src": "pp(20).jpg"
			}, {
				"src": "pp(21).jpg"
			}, {
				"src": "pp(22).jpg"
			}, {
				"src": "pp(23).jpg"
			}, {
				"src": "pp(24).jpg"
			}, {
				"src": "pp(25).jpg"
			}, {
				"src": "pp(26).jpg"
			}, {
				"src": "pp(27).jpg"
			}, {
				"src": "pp(28).jpg"
			}]
		};
		window.onscroll = function() {
			if (scrollside()) {
				$.each(dataImg.data, function(index, value) {
					var imgbox = $("<div>").addClass("img-box").appendTo($("#img-container"));
					var imgcontent = $("<div>").addClass("img-content").appendTo(imgbox);
					$("<img>").attr("src", "./img/" + $(value).attr("src")).appendTo(imgcontent);
				});
				imgLocation();
			}
		}

	});
	$(window).resize(function() { //屏幕大小变化更新摆放 
		imgLocation();
	})
});
//$(window).resize(function() { //屏幕大小变化更新摆放
//	location.reload();
//})

//图片摆放
function imgLocation() {
	var box = $(".img-box");
	var boxWidth = box.eq(0).width();
	var num = Math.floor($(window).width() / boxWidth);
	var boxArr = [];
	box.each(function(index, value) {
		var boxHeight = box.eq(index).height();
		if (index < num) {
			boxArr[index] = boxHeight;
			$(value).css({
				"position": "",
				"top": "",
				"left": ""
			});
		} else {
			var minboxHeight = Math.min.apply(null, boxArr);
			var minboxIndex = $.inArray(minboxHeight, boxArr);
			$(value).css({
				"position": "absolute",
				"top": minboxHeight + 96,
				"left": box.eq(minboxIndex).position().left,
			});
			boxArr[minboxIndex] += box.eq(index).height();
		}
	});
}

////滚动加载
function scrollside() {
	var box = $(".img-box");
	var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
	var documentHeight = $(document).height();
	var scrollHeight = $(window).scrollTop();
	return (lastboxHeight < scrollHeight + documentHeight);
}