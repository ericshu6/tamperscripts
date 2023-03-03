// ==UserScript==
// @name         DelugeRPG S-Battler
// @match        https://www.delugerpg.com/battle*
// @version      1.1
// @description  Automatically uses the first poke and the first attack.
// @author       redbrain
// @icon         https://www.google.com/s2/favicons?domain=delugerpg.com
// @grant        none
// @namespace    https://greasyfork.org/users/767360
// @require      https://code.jquery.com/jquery-3.6.3.min.js
// @updateURL    https://github.com/GameBoyYeet/tamperscripts/raw/main/Deluge/SBattler.user.js
// ==/UserScript==

// Tweaked by Eric S.

setInterval(()=>{null==document.querySelector(".modal-open")&&document.querySelector(".btn-battle-action")?.click()},0);
setInterval(()=>{null==document.querySelector(".modal-open")&&document.getElementsByClassName("btn btn-primary")[0].click()},1500);
setInterval(()=>{null==document.querySelector(".modal-open")&&document.querySelector('a[href="/map"]').click()},500);

/* Changelog:
1.1: Delay "btn btn-primary" click so your computer won't freeze
1.0: Main code + tweaks
*/
