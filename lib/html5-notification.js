"use strict;"

var Mt = window.Mt || {};

Mt.Notify = function(config){
	var me = this,
		config = config || {};
	
	for(var p in config){
		me[p] = config[p];
	}
	
	if( me.sound ){
		me.sound = new Mt.Sound({
			src: me.sound
		});
	}
};

Mt.Notify.support = false;

Mt.Notify.ask = function(){
	var notification;
	if( window.Notification === undefined ){
		return false;
	}
	notification = window.Notification;
	Mt.Notify.notification = notification;	
	
	Mt.Notify.support = true;
	Mt.Notify.prototype.support = true;
	
	switch(notification.permission){
		case 'default':
			Notification.requestPermission();
			break;
		case 'denied':
			return false;
			break;
		case 'granted':
			return true;
			break;
		default:
	}
};

Mt.Notify.prototype = {
	support: false,
	text: '',
	title: '',
	show: function(){
		var me = this;
		if( Mt.Notify.ask() === false ){
			return false;
		}
		
		if( me.sound ){
			me.sound.play();
		}
		
		var notifyConfig = {
			body: me.text
		}
		
		if( me.image ){
			notifyConfig.icon = me.image;
		}
		
		new Mt.Notify.notification(me.title, notifyConfig);
	}
};