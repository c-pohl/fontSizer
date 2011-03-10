/*
 * fontSizer - font sizing plugin
 * Version 0.1 (10/03/2011) Copyright (c) 2011 @kohe
 * Licensed under the GPL License: http://www.gnu.org/licenses/gpl.txt
 * Requires: jQuery v1.3+
 */
(function($) {
  $.fn.fontSizer = function(options) {
    var defaults = {
      'target'  : 'body',// 対象
      'type'    : 'em',  // 単位 px || em || %
      'default' : 0.8,   // 初期値(cssでもtargetに同じ数値を指定した方がキレイ)
      'step'    : 0.1,   // 目盛り
      'max'     : 5.0,   // 最大値
      'min'     : 0.1,   // 最小値
      'cookie'  : false,  // cookieを有効にするか
      'expire'  : 30,    // cookieの期限(日)
      'id_increase': 'fs_increase',
      'id_decrease': 'fs_decrease',
      'id_reset'   : 'fs_reset',
    };
    var setting = $.extend(defaults, options);
    var tags = new Array('div','td','tr');
    var cookie_name = 'fontSizer';
    var Default = setting.default;

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
        fontSize = setting.default;
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
