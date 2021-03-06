/*
 * fontSizer
 *
 * @version    0.2
 * @author     kohe ( twelveleven@gmail.com )
 * @copyright  think3 ( http://colamune.com/blog )
 * @license    The MIT License
 *
 * Requires: jQuery v1.3+
 */
(function($) {
  $.fn.fontSizer = function(options) {
    var defaults = {
      'target': 'body',// target element where font size should be changed
      'type': 'px', // font unit( px || em || % )
      'default_value': 12, // default fontsize
      'step': 1, // steps to decrease/increase fontsize
      'max': 30, // max fontsize
      'min': 8, // min fontsize
      'cookie': false, // set cookie? (true/false)
      'expire': 30, // cookie expires after % days?
      'id_increase': 'fs_increase', // element id to increaase font
      'id_decrease': 'fs_decrease', // element id to decreaase font
      'id_reset'   : 'fs_reset', // element id to reset font
    };
    var setting = $.extend(defaults, options);
    var tags = new Array('div','td','tr');
    var cookie_name = 'fontSizer';
    var Default = setting.default_value;

    var fontChange = function(value) {
      if ( ! document.getElementById ) return;
      var fontSize = parseFloat(Default), value;
      if ( value != 0 ) {
        fontSize += value * setting.step;
        if (fontSize < setting.min) {
          fontSize = setting.min;
        } else if (fontSize > setting.max) {
          fontSize = setting.max;
        }
        if ( setting.cookie == true ) {
          createCookie(cookie_name, fontSize, setting.expire);
        }
      } else {
        fontSize = setting.default_value;
        if ( setting.cookie == true ) {
          eraseCookie(cookie_name);
        }
      }
      setFontSize(fontSize);
      Default = fontSize;
    }

    var setFontSize = function(size) {
      if ( ! document.getElementById ) return;
      var target = null, i, cTags;
      if ( ! (target = document.getElementById(setting.target)) ) {
        target = document.getElementsByTagName(setting.target)[0];
      }
      target.style.fontSize = size + setting.type;
      for (value = 0 ; i < tags.length ; value++){
        cTags= target.getElementsByTagName(tags[value]);
        for (i = 0 ; i < cTags.length ; i++) cTags[i].style.fontSize = size + setting.type;
      }
    }

    this.each(function() {
      $(this).click(function() {
        var mode = $(this).attr('id');
        switch ( mode ) {
        case setting.id_increase:
          fontChange(1);
          break;
        case setting.id_decrease:
          fontChange(-1);
          break;
        case setting.id_reset:
          fontChange(0);
          break;
        }
      });
    });

    /* cookie */
    var cookievalue = readCookie(cookie_name);
    if (cookievalue != null && cookievalue != '' && setting.cookie == true) {
      Default = cookievalue;
      setFontSize(Default);
    }
    function createCookie(name, value, days) {
      if ( days != null ) {
        var expires = "; max-age=" + (days*60*60*24);
      } else {
        var expires = "";
      }
      document.cookie = name + "=" + value + expires + "; path=/";
    }
    function readCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }
    function eraseCookie(name) {
      createCookie(name, "", null);
    }
    return this;
  };
})(jQuery);
