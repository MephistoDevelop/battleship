!function(e){var t={};function s(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";s.r(t);var n=(e,t)=>({Name:t,Lengths:e,ships:{},fill_ship:e=>{const t=[];for(let s=0;s<e;s+=1)t.push("O");return t},hit:(e,t,s)=>{const n=e[s];return n[t]="X",n},isSunk:e=>{let t=!1;for(let s=0;s<e.length;s+=1){if("X"!==e[s]){t=!1;break}t=!0}return t}});(()=>{const e=n(5,"Carrier"),t=n(4,"Battleship"),s=n(3,"Cruiser"),o=n(3,"Submarine"),i=n(2,"Destroyer"),r=e.fill_ship(e.Lengths),l=t.fill_ship(t.Lengths),u=s.fill_ship(s.Lengths),h=o.fill_ship(o.Lengths),p=i.fill_ship(i.Lengths);e.ships[e.Name]=r,e.ships[t.Name]=l,e.ships[s.Name]=u,e.ships[o.Name]=h,e.ships[i.Name]=p,console.log("Soy Arr: "+JSON.stringify(e.ships)),console.log(e.hit(e.ships,0,e.Name)),console.log(e.hit(e.ships,2,e.Name)),console.log(e.hit(e.ships,0,t.Name)),console.log(e.hit(e.ships,0,o.Name)),console.log(e.hit(e.ships,0,i.Name)),console.log(e.hit(e.ships,1,i.Name)),console.log(e.hit(e.ships,2,i.Name)),console.log(e.Name+"hitted"+JSON.stringify(e.ships)),console.log(e.isSunk(e.ships[i.Name]))})()}]);