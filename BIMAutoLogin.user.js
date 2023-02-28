// ==UserScript==
// @name         BIM Auto-Login
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       Eric S.
// @match        https://bigideaslearning.magicsw.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=magicsw.com
// @include      https://bigideaslearning.magicsw.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    // finds the "Login with ClassLink button" and clicks it
    document.getElementById("class-login").click();
})();
