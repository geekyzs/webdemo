var MushroomSprite = cc.Sprite.extend({
	disappearAction: null, //消失动画
	touchListener:null,
	index:null,//在数组中的索引
	onEnter: function() {
		this._super();
		this.disappearAction = this.createDisappearAction();
		this.disappearAction.retain();
		this.addTouchEventListenser();
	},
	onExit: function() {
		this.disappearAction.release();
		this._super();
	},
	addTouchEventListenser: function() {
		this.touchListener = cc.EventListener.create({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
			swallowTouches: true,
			onTouchBegan: function(touch, event) {
				var pos = touch.getLocation();
				var target = event.getCurrentTarget();
				if (cc.rectContainsPoint(target.getBoundingBox(), pos)) {
					target.removeTouchEventListenser();
					target.stopAllActions();
					var ac = target.disappearAction;
					var seqAc = cc.Sequence.create(ac, cc.CallFunc.create(function() {
						target.getParent().addScore();
						target.getParent().removeMushroomByindex(target.index - 1);
						target.removeFromParent();

					}, target));
					target.runAction(seqAc);
					return true;
				}
				return false;
			}
		});
		cc.eventManager.addListener(this.touchListener, this);
	},
	createDisappearAction: function() {
		var frames = [];
		for (var i = 0; i < 11; i++) {
			var str = "mg" + i + ".png"
			var frame = cc.spriteFrameCache.getSpriteFrame(str);
			frames.push(frame);
		}
		var animation = new cc.Animation(frames, 0.02);
		var action = new cc.Animate(animation);
		return action;
	},
	removeTouchEventListenser: function() {
		cc.eventManager.removeListener(this.touchListener);
	}
});