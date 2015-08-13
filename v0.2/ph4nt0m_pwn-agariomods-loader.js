// ==UserScript==
// @name         ph4nt0m_pwn Agariomods modscript
// @namespace	 ph4nt0m_pwn Agariomods modscript
// @version      1.9.9
// @description  ph4nt0m_pwn Agariomods modscript
// @author       ph4nt0m_pwn
// @match        http://agar.io/
// @match        http://agar.io/#*
// @match        http://agar.io/?*
// @grant        none
// ==/UserScript==

var script = document.createElement('script');
script.src = document.location.protocol+"//agariomods.com/mods.js";
(document.body || document.head || document.documentElement).appendChild(script);