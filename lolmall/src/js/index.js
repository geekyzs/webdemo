$(function() {
	//中间横幅广告图片轮播
	var bannerSlider = new Slider($(".banner"), {
		time: 3888,
		delay: 400,
		event: 'hover',
		auto: true,
		mode: 'fade',
		controller: $(".pagination"),
		activeControllerCls: "active",
	});
	var sInfo = {
		category: '英雄'
	};
	getData(sInfo);
	//导航
	$(".lol-nav ul li a").each(function(index) {
		$(this).on("tap", function() {
			$(".lol-nav ul li a.ui-btn-active").removeClass("ui-btn-active");
			$(this).addClass("ui-btn-active");
			var sInfo = {
				category: $(".ui-btn-active").text()
			}
			getData(sInfo);
		});
	});
	
	//ajax获取数据
	function getData(sInfo) {
		$.ajax({
			type: 'post',
			url: "./php/mall.php",
			dataType: 'json',
			data: sInfo,
			success: function(json) {
				$(".lol-list-main ul").empty();
				var li = "";
				var list = json.list;
				$.each(list, function(index, array) { //遍历json数据列
					li += "<li><dl><dt><img src='" + array['pic'] + "'></dt><dd><div class='tit_area'><span>" + array['title'].substring(0) + "</span></div><div class='attr'><span>￥" + array['price'] + "</span></div><div class='attr'><a href='#cartDialog' title='" + array['id'] + "' data-rel='popup' data-position-to='window' data-transition='pop' class='ui-shadow ui-btn ui-corner-all addcart'>加入购物车</a></div></dd></dl></li>";
				});
				$(".lol-list").append(li);
				$(".addcart").on("tap", function() {
					var goodsId = {
						id: $(this).attr("title")
					}
					$.ajax({
						type: "post",
						url: "./php/goods.php",
						dataType: 'json',
						data: goodsId,
						success: function(data) {
							var gUsername = $("#user").text();
							var goods = data.goods;
							$.each(goods, function(index, array) {
								var gTitle = array['title'];
								var gPic = array['pic'];
								var gcategory = array['category'];
								var gPrice = array['price'];
								var params = {
									username: gUsername,
									title: gTitle,
									pic: gPic,
									category: gcategory,
									price: gPrice
								}
								if(params.username == "未登录") {
									$(".login-in").css("display", "none");
									$(".login-out").css("display", "block");
								} else {
									$.ajax({
										type: "post",
										url: "./php/addcart.php",
										data: params,
										success: function(msg) {
											if(msg == 1) {
												$(".login-in").css("display", "block");
												$(".login-out").css("display", "none");
											}
										}
									})
								}
							});
						}
					});
				})
			},
			error: function() {
				$(".lol-list").html("请求数据失败");
			}
		});
	}

	//登录
	$("#login").on("tap", function() {
		var user = {
			username: $("#l-un").val(),
			password: $("#l-pw").val()
		}
		if(user.username == "" || user.password == "") {
			$("#loginmsg").text("用户名和密码不能为空！");
		} else {
			$.ajax({
				async: false,
				type: 'post',
				url: "./php/login.php",
				dataType: 'text',
				data: user,
				success: function(msg) {
					if(msg == 1) {
						$("#loginmsg").text("登录成功！");
						window.location.href = "index.html";
					} else {
						$("#loginmsg").text("账号或密码错误！");
					}
				}
			})
		}
	})

	//注册
	$("#register").on("tap", function() {
		var user = {
			username: $("#r-un").val(),
			password: $("#r-pw").val()
		}
		if(user.username == "" || user.password == "") {
			$("#registermsg").text("用户名和密码不能为空！");
		} else {
			$.ajax({
				cache: false,
				type: 'post',
				url: "./php/register.php",
				data: user,
				success: function(msg) {
					if(msg == 1) {
						$(".regsuc").css("display", "block");
						$("#registermsg").text("");
					} else {
						$("#registermsg").text("账号已存在，注册失败！");
						$(".regsuc").css("display", "none");
					}
				}
			})
		}
	})
	$(".user-input").on("tap", function() {
		$("#loginmsg").text("");
		$("#registermsg").text("");
		$(".regsuc").css("display", "none");
	})

	//判断用户是否登录
	$.ajax({
			type: 'get',
			url: "./php/status.php",
			dataType: 'text',
			success: function(msg) {
				if(msg == 0) {
					$(".status").text("未登录");
					$(".mallcart").css("display", "none");
					$(".log-reg").css("display", "block");
					$(".exit").css("display", "none");
					$("#user").text("未登录");
					$("#user").css("display", "block");
					$(".statement-footer").css("display", "none");
				} else {
					$(".status").text("Hi," + msg);
					$(".mallcart").css("display", "block");
					$(".log-reg").css("display", "none");
					$(".exit").css("display", "block");
					$("#user").text(msg);
					$("#user").css("display", "none");
					$(".statement-footer").css("display", "block");
					var un = {
						username: msg
					}
					showCart(un);
				}
			}
		})
		
	function showCart(un) { //购物车
		$.ajax({
			type: "post",
			url: "./php/cart.php",
			dataType: 'json',
			data: un,
			success: function(json) {
				$(".u-cart").empty();
				$(".count").empty();
				var li = "";
				var price = [];
				var count = 0;
				var cart = json.cart;
				$.each(cart, function(index, array) { //遍历json数据列
					li += "<li id='" + array['id'] + "'><div class='u-cart-pic'><img src='" + array['pic'] + "'></div><div class='u-carted-detail'><p class='u-name'>" + array['title'].substring(0) + "</p><p class='u-cate'>类型：" + array['category'] + "</p></div><div class='u-carted-price'><p class='u-price'>￥" + array['price'] + "</p></div><div class='u-cart-del'><a href='#' class='cart-delete' title='" + array['id'] + "' >删除</a></div></li>";
					var a = array['price'];
					price.push(a);
					count += parseFloat(price[index]);
				});
				$(".u-cart").append(li);
				$("#count").text("￥" + count.toFixed(2));
				$(".pay").text("￥" + count.toFixed(2));
				$(".cart-delete").on("tap", function() {
					var cartId = {
						id: $(".cart-delete").attr("title")
					}
					$.ajax({
						type: "get",
						url: "./php/deletecart.php",
						data: cartId,
						success: function(data) {
							if(data != 0) {
								$('#' + data + '').remove();
								showCart(un);
								var l = $(".u-cart li").length;
								if(l == 0) {
									$("#count").text("￥0");
									$(".pay").text("￥0");
								}
							}
						}
					});
				})
			}
		});
	}
	$(".my-cart-trigger").on("tap", function() {
		var un = {
			username: $("#user").text()
		}
		showCart(un);
	})
	$("#in-cart").on("tap", function() {
			var un = {
				username: $("#user").text()
			}
			showCart(un);
		})
	
		
	$(".buy").on('tap', function() { //结算
			var un = {
				username: $("#user").text()
			}
			$.ajax({
				type: "get",
				url: "./php/statement.php",
				data: un,
				success: function(name) {
					if(name != 0) {
						$(".u-cart").find("li").remove();
						var l = $(".u-cart li").length;
						if(l == 0) {
							$("#count").text("￥0");
							$(".pay").text("￥0");
						}
					}
				}
			});
		})
		
	function noBuy() { //判断是否买了东西
		var p = $("#count").text();
		if(p == "￥0") {
			$(".buy").css("display", "none");
			$(".nobuy").css("display", "block");
		} else {
			$(".buy").css("display", "block");
			$(".nobuy").css("display", "none");
		}
	}
	noBuy();
	$("#statement").on("tap", function() {
		noBuy();
	})

	//退出登录
	$(".exit").on("tap", function() {
		$.ajax({
			type: 'get',
			url: "./php/exit.php",
			dataType: 'text',
			success: function(msg) {
				if(msg == 1) {
					window.location.href = "index.html";
				}
			}
		})
	});
	
	//回到顶部
	$(".gotop").on("tap", function() {
		var sc = $(window).scrollTop();
		$('body,html').animate({
			scrollTop: 0
		}, 500);
	})
});