!function(e){var o={};function s(t){if(o[t])return o[t].exports;var i=o[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=o,s.d=function(e,o,t){s.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,o){if(1&o&&(e=s(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var i in e)s.d(t,i,function(o){return e[o]}.bind(null,i));return t},s.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(o,"a",o),o},s.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},s.p="",s(s.s=0)}([function(e,o,s){"use strict";s.r(o);var t=(e,o)=>({Name:o,Lengths:e,ships:{},fill_ship:e=>{const o=[];for(let s=0;s<e;s+=1)o.push("O");return o},hit:(e,o,s)=>{const t=e[s];return t[o]="X",t},isSunk:e=>{let o=!1;for(let s=0;s<e.length;s+=1){if("X"!==e[s]){o=!1;break}o=!0}return o}});var i=()=>({drawBoard:()=>{const e=[];for(let o=0;o<10;o+=1){const o=[];for(let e=0;e<10;e+=1)o[e]="-";e.push(o)}return e},placeShip:(e,o,s,t,i=!0)=>{const n=e,r=o;if(n.Name){const e=e=>{let o=!1;for(let i=0;i<n.Lengths;i+=1){if("-"!==e[t][s+i]){o=!1;break}o=!0}return o};if(t+n.Lengths<10&&e(r))for(let e=0;e<n.Lengths;e+=1)r[t][s+e]=`${n.Name}`;else console.log("place your ship in a valid position")}return`X: ${s} - Y: ${t}, ${JSON.stringify(r)} `}});(()=>{const e=t(5,"Carrier"),o=t(4,"Battleship"),s=t(3,"Cruiser"),n=t(3,"Submarine"),r=t(2,"Destroyer");e.ships;const l=e.fill_ship(e.Lengths),p=o.fill_ship(o.Lengths),a=s.fill_ship(s.Lengths),c=n.fill_ship(n.Lengths),h=r.fill_ship(r.Lengths);e.ships[e.Name]=l,e.ships[o.Name]=p,e.ships[s.Name]=a,e.ships[n.Name]=c,e.ships[r.Name]=h,console.log("Soy Arr: "+JSON.stringify(e.ships)),console.log(e.hit(e.ships,0,e.Name)),console.log(e.hit(e.ships,2,e.Name)),console.log(e.hit(e.ships,0,o.Name)),console.log(e.hit(e.ships,0,n.Name)),console.log(e.hit(e.ships,0,r.Name)),console.log(e.hit(e.ships,1,r.Name)),console.log(e.hit(e.ships,2,r.Name)),console.log(e.Name+"  hitted  "+JSON.stringify(e.ships)),console.log(r.Name+" is Sunked? "+e.isSunk(e.ships[r.Name]));const u=i();let f=u.drawBoard();console.log("im the  board:  "+f),console.log("placedship Submarine: "+u.placeShip(n,f,0,2,!0)+" - "),console.log("placedship Battleship: "+u.placeShip(o,f,3,2,!0)+" - "),console.log("placedship Cruiser: "+u.placeShip(s,f,3,0,!0)+" - "),console.log("placedship Destroyer: "+u.placeShip(r,f,8,7,!0)+" - "),console.log("placedship Carrier: "+u.placeShip(e,f,5,4,!0)+" - ")})()}]);