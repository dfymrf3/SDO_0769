// ==UserScript==
// @name         Yandex bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Kormilitsyn Ivan
// @match        https://yandex.ru/*
// @match        https://www.napli.ru/*
// @match        https://www.psyholog.me/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @grant        none
// ==/UserScript==
//"валторна","Аэрофоны",

let sites = {
    "napli.ru":['вывод произвольных полей wordpress','Отключение редакций и ревизий в wordpress','10 самых популярных шрифтов от Google'],
    "psyholog.me":['центр здоровых отношений "Запятая"','Услуги центра здоровых отношений','Чекалина Елена психолог'],
    "https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai":['как звучит гобой','как звучит кларнет','Музыкальные диктанты']
}

let site = Object.keys(sites)[getRandom(0,Object.keys(sites).length)]



let keywords = sites[site];

let yandexInput = document.getElementsByName('text')[0];
let keyword = keywords[getRandom(0,keywords.length)];

let btn = document.getElementsByClassName('button mini-suggest__button')[0];
let links = document.links;
let i = 0;


if (btn !== undefined) {
    document.cookie = `site = ${site}`;
}else if(location.hostname == "yandex.ru"){
    site = getCookie("site");
}else{
    site = location.hostname;
}



if (btn !== undefined) {
    document.cookie = `site = ${site}`;
    let timerId = setInterval(() => {
        yandexInput.value += keyword[i];
        i++;
        if (i == keyword.length){
            clearInterval(timerId);
            btn.click();
            }
            },100);
            console.log(location.hostname);
}else if (location.hostname == site) {
            setInterval(()=>{
                let index = getRandom(0, links.length);
            if (getRandom(0, 101)>=85) {
               location.href = "https://yandex.ru";
            }else if (links[index].href.indexOf(site) !== -1) {
               links[index].click();
                   }
        }, getRandom(2500, 4500));

} else {
    let nextYandexPage = true;
    for (let i = 0; i<links.length; i++) {
        if (links[i].href.includes(site)){
            let link = links[i];
            nextYandexPage = false;
            setTimeout(() => {
                location.href = link;
            }, getRandom(2000,4000));
            break;
        }
    }
 if (document.querySelector("[aria-label='Текущая страница 5']") != null) {
            let nextYandexPage = false;
            location.href = "https://yandex.ru";
    }
    if (nextYandexPage) {
    setTimeout(()=>{document.getElementsByClassName("link link_theme_none link_target_serp pager__item pager__item_kind_next")[0].click();}, getRandom(2000,4500));

    }


}
function getRandom(min,max) {
return Math.floor(Math.random()* (max-min)+min)
}


function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

