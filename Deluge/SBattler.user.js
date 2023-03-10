// ==UserScript==
// @name         DelugeRPG S-Battler
// @match        https://www.delugerpg.com/battle*
// @version      1.4
// @description  Automatically uses the first poke and the first attack.
// @author       Eric S.
// @icon         https://www.google.com/s2/favicons?domain=delugerpg.com
// @grant        none
// @namespace    https://greasyfork.org/users/767360
// @require      https://code.jquery.com/jquery-3.6.3.min.js
// @updateURL    https://github.com/GameBoyYeet/tamperscripts/raw/main/Deluge/SBattler.user.js
// ==/UserScript==

setInterval(()=>{null==document.querySelector(".modal-open")&&document.querySelector('input[value=" Skip Pokemon Selection "]').click()},300);
setInterval(()=>{null==document.querySelector(".modal-open")&&document.querySelector(".btn-battle-action")?.click()},300);
setInterval(()=>{null==document.querySelector(".modal-open")&&document.getElementsByClassName("btn btn-primary")[0].click()},1500);
setInterval(()=>{null==document.querySelector(".modal-open")&&document.querySelector('a[href="/map"]').click()},1500);
if (!!document.getElementsByClassName("notify_error")[0])
{
    location.reload();
}

/* Changelog:
1.4: Check for "One battle every 10 seconds" error, this script is practically mine at this point
1.3: Delay battle button clicks so your computer won't freeze
1.2: Try to click "Skip Pokemon Selection" whenever possible
1.1: Delay "btn btn-primary" click so your computer won't freeze
1.0: Main code + tweaks
*/
