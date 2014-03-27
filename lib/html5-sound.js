"use strict;"

var Mt = window.Mt || {};

Mt.Sound = function(config){
	var me = this,
		config = config || {};
	
	for(var p in config){
		me[p] = config[p];
	}
	
	me.dom = document.createElement("audio");
	if(config.src){
		me.setSrc(config.src);
	}
};

Mt.Sound.prototype = {
	play: function(){
		var me = this;
		
		if(me.src){
			me.dom.play();
		}
	},
	setSrc: function(src){
		var me = this;
		
		me.dom.src = src;
		me.src = src;
	}
};