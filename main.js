!function(e){var t={};function o(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var s=(e,t)=>({Name:t,Lengths:e,ships:{},fill_ship:e=>{const t=[];for(let o=0;o<e;o+=1)t.push("O");return t},hit:(e,t,o)=>{const s=e[o];return s[t]="X",s},isSunk:e=>{let t=!1;for(let o=0;o<e.length;o+=1){if("X"!==e[o]){t=!1;break}t=!0}return t}});var n=()=>({drawBoard:()=>{const e=[];for(let t=0;t<10;t+=1){const t=[];for(let e=0;e<10;e+=1)t[e]="-";e.push(t)}return e},placeShip:(e,t,o,s,n=!0)=>{const i=e,r=t;if(i.Name){console.log("Size!: "+i.Lengths);const e=e=>{let t=!1;for(let n=0;n<i.Lengths;n+=1){if("-"!==e[s][o+n]){t=!1;break}t=!0}return t};if(s+i.Lengths<10&&e(r))for(let e=0;e<i.Lengths;e+=1)r[s][o+e]=`${i.Name}`;else console.log("place your ship in a valid position")}return`X: ${o} - Y: ${s}, ${JSON.stringify(r)} `}});(()=>{const e=s(5,"Carrier"),t=s(4,"Battleship"),o=s(3,"Cruiser"),i=s(3,"Submarine"),r=s(2,"Destroyer");e.ships;const l=e.fill_ship(e.Lengths),a=t.fill_ship(t.Lengths),p=o.fill_ship(o.Lengths),h=i.fill_ship(i.Lengths),c=r.fill_ship(r.Lengths);e.ships[e.Name]=l,e.ships[t.Name]=a,e.ships[o.Name]=p,e.ships[i.Name]=h,e.ships[r.Name]=c,console.log("Soy Arr: "+JSON.stringify(e.ships)),console.log(e.hit(e.ships,0,e.Name)),console.log(e.hit(e.ships,2,e.Name)),console.log(e.hit(e.ships,0,t.Name)),console.log(e.hit(e.ships,0,i.Name)),console.log(e.hit(e.ships,0,r.Name)),console.log(e.hit(e.ships,1,r.Name)),console.log(e.hit(e.ships,2,r.Name)),console.log(e.Name+"  hitted  "+JSON.stringify(e.ships)),console.log(r.Name+" is Sunked? "+e.isSunk(e.ships[r.Name]));const u=n();let f=u.drawBoard();console.log("im the  board:  "+f),console.log("placedship Submarine: "+u.placeShip(i,f,0,2,!0)+" - "),console.log("placedship Battleship: "+u.placeShip(t,f,1,2,!0)+" - ")})()}]);