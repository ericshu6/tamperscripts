// ==UserScript==
// @name         DelugeRPG Captcha
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Must be used with captcha solver (e.g. NopeCHA)
// @author       Eric S.
// @match        https://www.delugerpg.com/unlock*
// @icon         https://i.dstatic.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // THIS MUST BE USED WITH A CAPTCHA SOLVER!
    // e.g. NopeCHA
    // THIS SCRIPT ONLY CLICKS THE RETURN TO GAME BUTTON
    setTimeout(() => {  document.getElementsByClassName("btn btn-primary")[0].click(); }, 60000);
})();
