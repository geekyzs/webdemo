var PlayLayer = cc.Layer.extend({
	MushroomSprites: null,
	scoreLabel: null,
	score: 0,
	timeoutLabel: null,
	timeout: 60,
	bgSprite: null,
	ctor: function() {
		this._super();
		var size = cc.winSize;
		// add bg
		this.bgSprite = new cc.Sprite(res.bg_png);
		this.bgSprite.attr({
			x: size.width / 2,
			y: size.height / 2,
			rotation: 180
		});
		cc.spriteFrameCache.addSpriteFrames(res.mg_plist);
		//成绩显示
		this.scoreLabel = new cc.LabelTTF("成绩:0", "Arial", 28);
		this.scoreLabel.attr({
			x: size.width - 100,
			y: size.height - 20
		});
		this.addChild(this.scoreLabel, 5);
		//时间
		this.timeoutLabel = new cc.LabelTTF("时间：" + this.timeout, "Arial", 30);
		this.timeoutLabel.x = 100;
		this.timeoutLabel.y = size.height - 20;
		this.addChild(this.timeoutLabel, 5);
		this.MushroomSprites = [];
		this.addChild(this.bgSprite, 0);
		this.addMushroom();
		this.schedule(this.update, 1, 16 * 1024, 1);
		this.schedule(this.timer, 1, this.timeout, 1);
		return true;
	},
	//添加蘑菇
	addMushroom: function() {
		var mushroom = new MushroomSprite(res.mogu_png);
		var size = cc.winSize;
		var x = size.width * cc.random0To1();
		mushroom.attr({
			x: x,
			y: size.height - 30,
			scale: 0.5
		});
		var dorpAction = cc.MoveTo.create(4, cc.p(mushroom.x, -30));
		mushroom.runAction(dorpAction);
		this.MushroomSprites.push(mushroom);
		this.addChild(mushroom, 5);
	},
	removeMushroomByindex : function(dx) {

		if(isNaN(dx)||dx>this.MushroomSprites.length){return false;}  
		for(var i=0,n=0;i<this.length;i++)  
		{  
			if(this.MushroomSprites[i]!=this[dx])  
			{  
				this.MushroomSprites[n++]=this.MushroomSprites[i]  
			}  
		}  
		this.MushroomSprites.length-=1 
	},
	//移除到屏幕底部的蘑菇
	removeMushroom: function() {
		for (var i = 0; i < this.MushroomSprites.length; i++) {
			if (0 == this.MushroomSprites[i].y) {
				this.MushroomSprites[i].removeFromParent();
				this.MushroomSprites[i] = undefined;
				this.MushroomSprites.splice(i, 1);
				i = i - 1;
			}
		}
	},
	update: function() {
		this.addMushroom();
		this.removeMushroom();
	},
	timer: function() {
		if (this.timeout == 0) {
			var gameOver = new cc.LayerColor(cc.color(225, 225, 225, 100));
			var size = cc.winSize;
			var titleLabel = new cc.LabelTTF("游戏结束", "Arial", 38);
			titleLabel.attr({
				x: size.width / 2,
				y: size.height / 2
			});
			gameOver.addChild(titleLabel, 5);
			var TryAgainItem = new cc.MenuItemFont(
				"再玩一次",
				function() {
					var transition =new cc.TransitionProgressRadialCCW(1, new PlayScene());
					cc.director.runScene(transition);
				}, this);
			TryAgainItem.attr({
				x: size.width / 2,
				y: size.height / 2 - 60,
				anchorX: 0.5,
				anchorY: 0.5
			});

			var menu = new cc.Menu(TryAgainItem);
			menu.x = 0;
			menu.y = 0;
			gameOver.addChild(menu, 1);
			this.getParent().addChild(gameOver);
			this.unschedule(this.update);
			this.unschedule(this.timer);
			return;
		}
		this.timeout -= 1;
		this.timeoutLabel.setString("时间：" + this.timeout);

	},
	addScore: function() {
		this.score += 1;
		this.scoreLabel.setString("成绩:" + this.score);
	}
});

var PlayScene = cc.Scene.extend({
	onEnter: function() {
		this._super();
		var layer = new PlayLayer();
		this.addChild(layer);
	}
});