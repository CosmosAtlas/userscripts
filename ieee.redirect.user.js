// ==UserScript==
// @name         IEEE UWaterloo redirect
// @namespace    https://cosmos547.moe
// @version      0.1
// @description  Add a button to open the page via UWaterloo proxy link
// @author       Wenhan Zhu (Cosmos)
// @match        https://ieeexplore.ieee.org/*
// @icon         https://www.google.com/s2/favicons?domain=ieee.org
// @require      file://C:\Dev\userscripts\ieee.redirect.user.js
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  let proxy_domain = "https://ieeexplore-ieee-org.proxy.lib.uwaterloo.ca/";

  // Create the button
  let button = document.createElement("Button");
  button.innerHTML = "Open with UWaterloo Lib";
  button.classList.add("layout-btn-white");
  button.onclick = function () {
    let curURL = document.URL;
    let newURL = curURL.replace("https://ieeexplore.ieee.org/", proxy_domain);
    window.open(newURL, "_blank");
  }

  // Add it next to the pdf/cite location
  let storeLoc = document.getElementsByClassName("document-title")[0].nextElementSibling;
  storeLoc.appendChild(button);

})();
