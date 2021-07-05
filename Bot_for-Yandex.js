// ==UserScript==
// @name         Yandex bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Kormilitsyn Ivan
// @match        https://www.google.com/*
// @grant        none
// ==/UserScript==
let keywords = ["валторна","гобой","Аэрофоны","Граммофонная пластинка"];
let keyword = keywords[getRandom(0,keywords.length)];

document.getElementsByName('q')[0].value = keyword;

let btnK = document.getElementsByName('btnK')[0];
let links = document.links;

if(btnK !== undefined) {
document.getElementsByName('q')[0].value = keyword;
document.getElementsByName('btnK')[0].click();
} else {
    for(let i = 0; i < links.length; i++) {
        if (links[i].href.includes('belcanto.ru')) {
            let link = links[i];
            link.click();
            break;

    }
}
}
function getRandom(min,max) {
return Math.floor(Math.random()* (max-min)+min)
}



