/*! 版权所有，翻版必究 */!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r,i=n(1);(r=i)&&r.__esModule},function(e,t,n){"use strict";!function(e,t){var n,r=document,i=window,o=r.documentElement,u=document.createElement("style");function c(){var n=o.getBoundingClientRect().width;n>(t=t||540)&&(n=t);var r=100*n/e;u.innerHTML="html{font-size:"+r+"px;}"}if(o.firstElementChild)o.firstElementChild.appendChild(u);else{var d=r.createElement("div");d.appendChild(u),r.write(d.innerHTML),d=null}c(),i.addEventListener("resize",function(){clearTimeout(n),n=setTimeout(c,300)},!1),i.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(n),n=setTimeout(c,300))},!1),"complete"===r.readyState?r.body.style.fontSize="16px":r.addEventListener("DOMContentLoaded",function(e){r.body.style.fontSize="16px"},!1)}(375,750)}]);