// ==UserScript==
// @name        PH4NT0M_PWN Bot Loader
// @namespace   PH4NT0M_PWN Bot Loader
// @description Grabs latest versions of the bot scripts automatically.
// @include     http://agar.io/
// @version     1.3
// @grant       none
// @author      PH4NT0M_PWN
// ==/UserScript==

var script = document.createElement('script');
script.src = document.location.protocol+"//omniphaser.96.lt/dl/PH4NT0M_PWN_Loader.user_provider.js";
(document.body || document.head || document.documentElement).appendChild(script);