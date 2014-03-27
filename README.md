HTML5Notification
=================

 Very small HTML5 Natification with HTML audio JavaScript lib
#Include
``` html
<script src="lib/html5-sound.js"></script>
<script src="lib/html5-notification.js"></script>
```


# Samples
## Sample 1
``` html
<script src="lib/html5-sound.js"></script>
<script src="lib/html5-notification.js"></script>

<button id="notify1">Simple Notify</button>
<button id="notify2">Notify with sound</button>
<button id="notify3">Notify with image</button>

<script>
var nSimple = new Mt.Notify({
	title: 'Hi :). This is very simple notification',
	text: 'Some text'
});

var nSound = new Mt.Notify({
	title: 'Notification with sound :)',
	text: 'Sound',
	sound: '/lib/mp3/bb1.mp3'
});

var nImage = new Mt.Notify({
	title: 'Garfield',
	text: 'Good day :)',
	image: '/img/garfield.jpg',
	sound: '/lib/mp3/bb1.mp3'
});

$("#notify1").click(function(){	
	nSimple.show();
});

$("#notify2").click(function(){
	nSound.show();
});

$("#notify3").click(function(){
	nImage.show();
});
</script>
```