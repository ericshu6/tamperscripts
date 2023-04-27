// ==UserScript==
// @name         DeltaMath Next Section
// @namespace    http://github.com/gameboyyeet/tamperscripts
// @version      0.1
// @description  Next section automatically.
// @author       Eric S.
// @match        https://www.deltamath.com/app/student/*
// @icon         http://deltamath.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(function () {document.getElementsByClassName("btn btn-default btn-sm")[1].click();}, 200);
})();
