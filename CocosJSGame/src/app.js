var HelloWorldLayer = cc.Layer.extend({
	sprite: null,
	ctor: function() {
		this._super();
		var size = cc.winSize;
		//添加背景图
		this.bgSprite=new cc.Sprite(res.bg_jpg);
		this.bgSprite.attr({
			x:size.width/2,
			y:size.height/2
		});
		this.addChild(this.bgSprite,0);
		//添加开始菜单
		var startItem=new cc.MenuItemImage(
			res.start_N_png,
			res.start_S_png,
			function(){
				var transitior=new cc.TransitionProgressRadialCCW(1, new PlayScene());
				cc.director.runScene(transitior);
			},this);
		startItem.attr({
			x:size.width/2,
			y:size.height/2,
			anchorX:0.5,
			anchorY:0.5
		});
	    var menu=new cc.Menu(startItem);
	    menu.x=0;
	    menu.y=0;
	    this.addChild(menu,1);
		return true;
	}
});

var HelloWorldScene = cc.Scene.extend({
	onEnter: function() {
		this._super();
		var layer = new HelloWorldLayer();
		this.addChild(layer);
	}
});