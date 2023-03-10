// ==UserScript==
// @name         Auto-login TCI
// @namespace    http://github.com/gameboyyeet/tamperscripts
// @version      0.1
// @description  Clicks "Sign in with Google" button
// @author       You
// @match        https://student.teachtci.com/student/sign_in
// @icon         https://www.google.com/s2/favicons?sz=64&domain=teachtci.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelector('img[alt="sign in with google"]').click();
})();
