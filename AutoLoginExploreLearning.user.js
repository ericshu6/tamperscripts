// ==UserScript==
// @name         Auto-login ExploreLearning
// @namespace    http://github.com/gameboyyeet/tamperscripts
// @version      0.1
// @description  Redirects to ClassLink SSO
// @author       Eric S.
// @match        https://apps.explorelearning.com/account/gizmos/login/student*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=explorelearning.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.location.href = "https://launchpad.classlink.com/ltisso/1870659";
})();
