Localized and updated version of the great [FontResize](https://github.com/kohe/fontSizer) (by [kohe](https://github.com/kohe)) Plugin for jQuery.

USAGE
==============
HTML
--------------
```html
<head>
<link rel="stylesheet" type="text/css" href="fontSizer.css" />
</head>

<body>

<div id="fontSizer">
	<p>FONTSIZE</p>
	<div class="fontScaler">
    	<a href="javascript:void(0)" id="fs_increase" title="increase fontsize">+</a>
		<a href="javascript:void(0)" id="fs_decrease" title="decrease fontsize">-</a>
		<a href="javascript:void(0)" id="fs_reset" title="reet fontsize">o</a>
	</div>
</div>

<!-- Include jQuery library -->
<script src="//code.jquery.com/jquery-git1.min.js" type="text/javascript"></script> 
<!-- Include fontSizer -->
<script src="jquery.fontSizer.min.js" type="text/javascript"></script>
<!-- Fire fontSizer function (check OPTIONS for adjustments)-->
<script type="text/javascript"> 
$(document).ready(function(){
  $('#fontSizer a').fontSizer({'type' : 'px', 'default_value' : 35, 'step' : 1, 'max' : 60, 'min' : 10, 'cookie' : true});
});
</script>

</body>
```

OPTIONS
--------------
```javascript
target: 'body', // target element where font size should be changed
type: 'px', // font unit( px || em || % )
default_value: 12, // default fontsize
step: 1, // steps to decrease/increase fontsize
max: 30, // max fontsize
min: 8, // min fontsize
cookie: false, // set cookie? (true/false)
expire: 30, // cookie expires after % days?
id_increase: 'fs_increase', // element id to increaase font
id_decrease: 'fs_decrease', // element id to decreaase font
id_reset: 'fs_reset', // element id to reset font
```

*Original by [kohe](https://github.com/kohe).*