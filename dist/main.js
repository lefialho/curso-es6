!function(t){var e={};function n(o){if(e[o])return e[o].exports;var c=e[o]={i:o,l:!1,exports:{}};return t[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)n.d(o,c,function(e){return t[e]}.bind(null,c));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);const o="active",c=["touchstart","click"];function s(){const t=document.querySelector(".numbers"),e=new MutationObserver(function(t){t[0].target.classList.contains(o)&&(e.disconnect(),document.querySelectorAll("[data-number]").forEach(t=>{const e=+t.innerText,n=Math.round(e/100);let o=0;const c=setInterval(()=>{o+=n,t.innerText=o,o>e&&(t.innerText=e,clearInterval(c))},25*Math.random())}))});e.observe(t,{attributes:!0})}console.log("cúúúúú"),function(){function t(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})}document.querySelectorAll('[data-menu="smooth"] a[href^="#"]').forEach(e=>{e.addEventListener("click",t)})}(),function(){const t=document.querySelectorAll('[data-anime^="scroll"]'),e=.6*window.innerHeight;function n(){t.forEach(t=>{t.getBoundingClientRect().top-e<0?t.classList.add(o):t.classList.contains(o)&&t.classList.remove(o)})}t.length&&(n(),window.addEventListener("scroll",n))}(),function(){const t=document.querySelectorAll('[data-anime="collapse"] dt');if(t.length){function e(){this.classList.toggle(o),this.nextElementSibling.classList.toggle(o)}t[0].classList.add(o),t[0].nextElementSibling.classList.add(o),t.forEach(t=>{t.addEventListener("click",e)})}}(),function(){const t=document.querySelectorAll('[data-anime="accordion"] dt');function e(){console.log(this),t.forEach(t=>{this.classList.contains(o)||(t.classList.remove(o),t.nextElementSibling.classList.remove(o))}),this.classList.toggle(o),this.nextElementSibling.classList.toggle(o)}t.length&&(t[0].classList.add(o),t[0].nextElementSibling.classList.add(o),t.forEach(t=>{t.addEventListener("click",e)}))}(),function(){const t=document.querySelectorAll('[data-tab="menu"] li'),e=document.querySelectorAll('[data-tab="content"] section');t.length&&e.length&&(e[0].classList.add(o),t.forEach((t,n)=>{t.addEventListener("click",()=>{!function(t){e.forEach(t=>{t.classList.remove(o)});const n=e[t].dataset.anime;e[t].classList.add(o,n)}(n)})}))}(),function(){const t=document.querySelectorAll('[data-modal="open"]'),e=document.querySelectorAll('[data-modal="close"]'),n=document.querySelectorAll('[data-modal="container"]');function c(t){t.preventDefault();const e=t.currentTarget.getAttribute("aria-controls");document.querySelectorAll(e).forEach(t=>{t.classList.add(o)})}function s(t){t.preventDefault(),n.forEach(t=>{t.classList.remove(o)})}function a(t){t.preventDefault(),t.target===this&&s(t)}t&&e&&(t.forEach(t=>{t.addEventListener("click",c)}),n.forEach(t=>{t.addEventListener("click",a)}),e.forEach(t=>{t.addEventListener("click",s)}))}(),function(){const t=document.querySelectorAll("[data-tooltip]"),e={handleEvent(t){this.tooltipBox.style.top=`${t.pageY+-60}px`,this.tooltipBox.style.left=`${t.pageX+10}px`,this.tooltipBox.classList.add(o)}},n={handleEvent(){this.tooltipBox.remove(),this.element.removeEventListener("mouseleave",n),this.element.removeEventListener("mousemove",e)}};function c(){const t=function(t){const e=document.createElement("div"),n=t.getAttribute("aria-label");return e.classList.add("tooltip"),e.innerHTML=n,document.body.appendChild(e),e}(this);e.tooltipBox=t,this.addEventListener("mousemove",e),n.tooltipBox=t,n.element=this,this.addEventListener("mouseleave",n)}t&&t.forEach(t=>{t.addEventListener("mouseover",c)})}(),function(){const t=document.querySelectorAll("[data-dropdown]");function e(t){t.preventDefault(),this.classList.add(o),function(t,e,n){const o=document.documentElement,c="data-outside";function s(a){t.contains(a.target)||(t.removeAttribute(c),e.forEach(t=>{o.removeEventListener(t,s)}),n())}t.hasAttribute(c)||(e.forEach(t=>{setTimeout(()=>o.addEventListener(t,s))}),t.setAttribute(c,""))}(this,c,()=>{this.classList.remove(o)})}t&&t.forEach(t=>{c.forEach(n=>{t.addEventListener(n,e)})})}(),function(){const t=document.querySelector('[data-menu="button"]'),e=document.querySelector('[data-menu="list"]'),n=document.querySelector("[data-bgblack]");t&&(t.addEventListener("click",function(){this.classList.toggle(o),e.classList.toggle(o),n.classList.toggle(o)}),n.addEventListener("click",function(){this.classList.remove(o),t.classList.remove(o),e.classList.remove(o)}))}(),function(){const t=document.querySelector("[data-weekend]"),e=t.dataset.weekend.split(",").map(Number),n=t.dataset.hour.split(",").map(Number),o=new Date,c=o.getDay(),s=o.getUTCHours()-3,a=-1!==e.indexOf(c),r=s>=n[0]&&s<n[1];a&&r&&t.classList.add("open")}(),async function(t){try{const e=await fetch(t),n=await e.json(),o=document.querySelector(".numbers-grid");n.forEach(t=>{const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.specie}</h3><span data-number>${t.total}</span>`,e}(t);o.appendChild(e)}),s()}catch(t){const e="Problemas na configuração do fetch";console.log(e)}}("./animalsapi.json"),fetch("https://blockchain.info/ticker").then(t=>t.json()).then(t=>{document.querySelector(".btc-price").innerText=(1e3/t.BRL.sell).toFixed(4)}).catch(t=>{console.log(Error("Problemas na configuração do fetch"))})}]);