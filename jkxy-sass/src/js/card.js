//知识体系图卡片翻转效果
$(function() {
	//知识体系图卡片翻转效果
	$(".front").mouseenter(function() {
		$(this).css("transform", "rotateY(-180deg)");
	});
	$(".back").mouseleave(function() {
		$(this).css("transform", "rotateY(180deg)");
		$(".front").css("transform", "rotateY(0deg)");
		$(this).css("transform", "rotateY(0deg)");
	});
});