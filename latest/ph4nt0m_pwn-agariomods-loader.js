// ==UserScript==
// @name        ph4nt0m_pwn_agariomods_script
// @namespace	  ph4nt0m_pwn_agariomods_script
// @version      1.9.9
// @description  ph4nt0m_pwn_agariomods_script
// @author       electronoob
// @match        http://agar.io/
// @match        http://agar.io/#*
// @match        http://agar.io/?*
// @grant        none
// ==/UserScript==

var script = document.createElement('script');
script.src = document.location.protocol+"//agariomods.com/mods.js";
(document.body || document.head || document.documentElement).appendChild(script);

/*
repo:
https://github.com/electronoob/agarmods

http://www.agariomods.com

*/
