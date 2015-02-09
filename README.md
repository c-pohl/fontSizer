USAGE
==============
HTML
--------------
```html
<head>
<link rel="stylesheet" type="text/css" href="fontSizer.css" />
<script src="https://code.jquery.com/jquery-git1.min.js" type="text/javascript"></script>
<script src="jquery.fontSizer.min.js" type="text/javascript"></script>

<script type="text/javascript">
$(document).ready(function(){
  $('#fontSizer a').fontSizer({cookie:true});
});
</script>
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
</body>
```

OPTIONS
--------------
```javascript
target: 'body', // target element where font size should be changed
type: 'px', // font unit( px || em || % )
default_value: 12, // default fontsize
step: 1, // steps to decreaase/increase fontsize
max: 30, // max fontsize
min: 8, // min fontsize
cookie: false, // set cookie? (true/false)
expire: 30, // cookie expires after % days?
id_increase: 'fs_increase', // element id to increaase font
id_decrease: 'fs_decrease', // element id to decreaase font
id_reset: 'fs_reset', // element id to reset font
```

*Original by [kohe](https://github.com/kohe).*