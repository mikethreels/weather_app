!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r={nightDay:e=>{let t="";return t="n"===e.split("")[2]?"url('../../src/images/moon.gif')":"url('../../src/images/sun.gif')",t}};var o={dataprocess:e=>{console.log(e);const t=document.getElementById("content"),n=document.createElement("h1"),o=document.createElement("img"),a=document.createElement("div"),i=document.createElement("p"),c=document.createElement("p"),u=document.createElement("p"),d=e.weather[0].icon;document.body.style.backgroundImage=r.nightDay(e.weather[0].icon),u.innerHTML=e.weather[0].description,n.innerHTML=e.name,i.innerHTML=`Minimum Temperature ${Math.round(e.main.temp_min)} °C`,c.innerHTML=`Maximum Temperature ${Math.round(e.main.temp_max)} °C`,a.append(i),a.append(c),o.setAttribute("src",`../src/icons/${d}.png`),t.append(n),t.append(u),t.append(o),t.append(a)}};var a={info:async function(e="http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=6f8406a0f73a73164c3328cffe2fc4db",t={}){return(await fetch(e,{method:"POST",mode:"cors",body:JSON.stringify(t)})).json()}};(()=>{const e=e=>{const t=e.coords.latitude,n=e.coords.longitude;a.info(`http://api.openweathermap.org/data/2.5/weather?lat=${t}&lon=${n}&units=metric&appid=6f8406a0f73a73164c3328cffe2fc4db`).then(e=>{o.dataprocess(e)})};return{getLocation:()=>{navigator.geolocation&&navigator.geolocation.getCurrentPosition(e)}}})().getLocation()}]);