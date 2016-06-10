//图片横向滚动
$(document).ready(function(e) { //媒体报道图片滚动
	linumA = $('.worklist li').length; //图片数量
	wA = linumA * 187; //ul宽度
	$('.worklist').css('width', wA + 'px'); //ul宽度
	$('.swaplist1').html($('.mainlist1').html()); //复制内容

	$('.arrow-right').click(function() {

		if ($('.swaplist1,.mainlist1').is(':animated')) {
			$('.swaplist1,.mainlist1').stop(true, true);
		}

		if ($('.mainlist1 li').length > 3) { //多于3张图片
			mlA = parseInt($('.mainlist1').css('left')); //默认图片ul位置
			slA = parseInt($('.swaplist1').css('left')); //交换图片ul位置
			if (mlA <= 0 && mlA > wA * -1) { //默认图片显示时
				$('.swaplist1').css({
					left: '561px'
				}); //交换图片放在显示区域右侧
				$('.mainlist1').animate({
					left: mlA - 561 + 'px'
				}, 'slow'); //默认图片滚动				
				if (mlA == (wA - 561) * -1) { //默认图片最后一屏时
					$('.swaplist1').animate({
						left: '0'
					}, 'slow'); //交换图片滚动
				}
			} else { //交换图片显示时
				$('.mainlist1').css({
						left: '561px'
					}) //默认图片放在显示区域右
				$('.swaplist1').animate({
					left: slA - 561 + 'px'
				}, 'slow'); //交换图片滚动
				if (slA == (wA - 561) * -1) { //交换图片最后一屏时
					$('.mainlist1').animate({
						left: '0'
					}, 'slow'); //默认图片滚动
				}
			}
		}
	})
	$('.arrow-left').click(function() {
		if ($('.swaplist1,.mainlist1').is(':animated')) {
			$('.swaplist1,.mainlist1').stop(true, true);
		}
		if ($('.mainlist1 li').length > 3) {
			mlA = parseInt($('.mainlist1').css('left'));
			slA = parseInt($('.swaplist1').css('left'));
			if (mlA <= 0 && mlA > wA * -1) {
				$('.swaplist1').css({
					left: wA * -1 + 'px'
				});
				$('.mainlist1').animate({
					left: mlA + 561 + 'px'
				}, 'slow');
				if (mlA == 0) {
					$('.swaplist1').animate({
						left: (wA - 561) * -1 + 'px'
					}, 'slow');
				}
			} else {
				$('.mainlist1').css({
					left: (wA - 561) * -1 + 'px'
				});
				$('.swaplist1').animate({
					left: slA + 561 + 'px'
				}, 'slow');
				if (slA == 0) {
					$('.mainlist1').animate({
						left: '0'
					}, 'slow');
				}
			}
		}
	})
})
$(document).ready(function(e) { //媒体报道图片滚动
	/***自动滚动***/
	time = window.setInterval(function() {
		$('.banner-right2').click();
	}, 5000);
	/***自动滚动***/
	linum = $('.mainlist li').length; //图片数量
	w = linum * 160; //ul宽度
	$('.piclist').css('width', w + 'px'); //ul宽度
	$('.swaplist').html($('.mainlist').html()); //复制内容

	$('.banner-right2').click(function() {

		if ($('.swaplist,.mainlist').is(':animated')) {
			$('.swaplist,.mainlist').stop(true, true);
		}

		if ($('.mainlist li').length > 6) { //多于6张图片
			ml = parseInt($('.mainlist').css('left')); //默认图片ul位置
			sl = parseInt($('.swaplist').css('left')); //交换图片ul位置
			if (ml <= 0 && ml > w * -1) { //默认图片显示时
				$('.swaplist').css({
					left: '960px'
				}); //交换图片放在显示区域右侧
				$('.mainlist').animate({
					left: ml - 960 + 'px'
				}, 'slow'); //默认图片滚动				
				if (ml == (w - 960) * -1) { //默认图片最后一屏时
					$('.swaplist').animate({
						left: '0'
					}, 'slow'); //交换图片滚动
				}
			} else { //交换图片显示时
				$('.mainlist').css({
						left: '960px'
					}) //默认图片放在显示区域右
				$('.swaplist').animate({
					left: sl - 960 + 'px'
				}, 'slow'); //交换图片滚动
				if (sl == (w - 960) * -1) { //交换图片最后一屏时
					$('.mainlist').animate({
						left: '0'
					}, 'slow'); //默认图片滚动
				}
			}
		}
	})
	$('.banner-left2').click(function() {
		if ($('.swaplist,.mainlist').is(':animated')) {
			$('.swaplist,.mainlist').stop(true, true);
		}
		if ($('.mainlist li').length > 6) {
			ml = parseInt($('.mainlist').css('left'));
			sl = parseInt($('.swaplist').css('left'));
			if (ml <= 0 && ml > w * -1) {
				$('.swaplist').css({
					left: w * -1 + 'px'
				});
				$('.mainlist').animate({
					left: ml + 960 + 'px'
				}, 'slow');
				if (ml == 0) {
					$('.swaplist').animate({
						left: (w - 960) * -1 + 'px'
					}, 'slow');
				}
			} else {
				$('.mainlist').css({
					left: (w - 960) * -1 + 'px'
				});
				$('.swaplist').animate({
					left: sl + 960 + 'px'
				}, 'slow');
				if (sl == 0) {
					$('.mainlist').animate({
						left: '0px'
					}, 'slow');
				}
			}
		}
	})
})