// ==UserScript==
// @name         BIM Auto-Login
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       Eric S.
// @match        https://bigideaslearning.magicsw.com/login.htm?*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=magicsw.com
// @include      https://bigideaslearning.magicsw.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Old approach
    // finds the "Login with ClassLink button" and clicks it
    // document.getElementById("class-login").click();

    // Redirects to ClassLink OAuth2
    window.location.href = "https://launchpad.classlink.com/oauth2/v2/auth?scope=full&redirect_uri=https%3A%2F%2Fbigideaslearning.magicsw.com%2FclassLink%2FwebLogin.htm&client_id=c15332975905994e4ffa932e04eb7d965f7f395d2a1055&response_type=code";
})();
