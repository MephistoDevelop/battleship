!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n=(e,t)=>({Name:t,Lengths:e,ships:{},fill_ship:e=>{const t=[];for(let r=0;r<e;r+=1)t.push("O");return t},hit:(e,t,r)=>{const n=e[r];return n[t]="X",n},isSunk:e=>{let t=!1;for(let r=0;r<e.length;r+=1){if("X"!==e[r]){t=!1;break}t=!0}return t}});var o=()=>({Board:[],BoardComputer:[],drawBoardPlayer:()=>{const e=[];for(let t=0;t<10;t+=1){const t=[];for(let e=0;e<10;e+=1)t[e]="-";e.push(t)}return e},placeShip:(e,t,r,n,o=!1)=>{const s=e,i=t;if(s.Name){const e=e=>{let t=!1;for(let o=0;o<s.Lengths;o+=1){if("-"!==e[n][r+o]){t=!1;break}t=!0}return t},t=e=>{let t=!1;for(let o=0;o<s.Lengths;o+=1){if("-"!==e[n+o][r]){t=!1;break}t=!0}return t};if(r+s.Lengths<=10&&e(i)&&!1===o)for(let e=0;e<s.Lengths;e+=1)i[n][r+e]=`${s.Name}${e}`;else if(n+s.Lengths<=10&&t(i)&&!0===o)for(let e=0;e<s.Lengths;e+=1)i[n+e][r]=`${s.Name}${e}`;else console.log("place your ship in a valid position")}return`X: ${n} - Y: ${r}, ${JSON.stringify(i)} `},receiveAtack:(e,t,r,n)=>{const o=n[0];let s="";const i=o.ships;if("-"===r[t][e])r[t][e]="X",s=!1;else{const n=r[t][e].split(""),l=n.splice(0,n.length-1).join("");if(""!==l){const a=parseInt(n);console.log(`im hit name: ${JSON.stringify(l)}`),o.hit(i,a,l),r[t][e]=`${l}X`,s=!0}}return s},checkShipsSunked:e=>{let t=!1;const r=e,n=r.ships.Cruiser,o=r.ships.Submarine,s=r.ships.Destroyer,i=r.ships.Carrier,l=r.ships.Battleship;return r.isSunk(n)&&r.isSunk(o)&&r.isSunk(i)&&r.isSunk(s)&&r.isSunk(l)&&(t=!0),t}});let s=[];const i=e=>({Name:e,Turn:0,computerMoves:[],Move:(e,t,r,n,o)=>{let i=!1;if(0===e)return i=n.receiveAtack(r,t,n.BoardComputer,o),console.log(`Player Turn, Atacked on: X:${r} - Y: ${t}\nTo  Computer Board \n ${JSON.stringify(n.BoardComputer)}`),[1,i];let l=parseInt(10*(0+Math.random()),10),a=parseInt(10*(0+Math.random()),10),u=parseInt(`${l}${a},10`);if(s.includes(u)){for(;s.includes(u);)if(l=parseInt(10*(0+Math.random()),10),a=parseInt(10*(0+Math.random()),10),u=parseInt(`${l}${a}`,10),!s.includes(u)){s.push(u),i=n.receiveAtack(a,l,n.Board,o);break}console.log(`New number Generated on PLayer: ${u}`)}else i=n.receiveAtack(l,a,n.Board,o),console.log(`Computer Turn,Moves: ${s}  Atacked on: X:${l} - Y: ${a}\n To Player Board \n${JSON.stringify(n.Board)}`);return[l,a,i]},playerInit:()=>{const e=n(5,"Carrier"),t=n(4,"Battleship"),r=n(3,"Cruiser"),o=n(3,"Submarine"),s=n(2,"Destroyer"),i=(e.ships,e.fill_ship(e.Lengths)),l=t.fill_ship(t.Lengths),a=r.fill_ship(r.Lengths),u=o.fill_ship(o.Lengths),c=s.fill_ship(s.Lengths);return e.ships[e.Name]=i,e.ships[t.Name]=l,e.ships[r.Name]=a,e.ships[o.Name]=u,e.ships[s.Name]=c,console.log(`Soy PLayer Init function: ${JSON.stringify(e.ships)}`),[e,t,r,o,s]},computerInit:()=>{const e=n(5,"Carrier"),t=n(4,"Battleship"),r=n(3,"Cruiser"),s=n(3,"Submarine"),i=n(2,"Destroyer"),l=(e.ships,e.fill_ship(e.Lengths)),a=t.fill_ship(t.Lengths),u=r.fill_ship(r.Lengths),c=s.fill_ship(s.Lengths),p=i.fill_ship(i.Lengths);e.ships[e.Name]=l,e.ships[t.Name]=a,e.ships[r.Name]=u,e.ships[s.Name]=c,e.ships[i.Name]=p;const d=o(),h=d.drawBoardPlayer();return d.placeShip(s,h,1,2,!0),d.placeShip(t,h,5,1,!1),d.placeShip(r,h,2,6,!0),d.placeShip(i,h,6,6,!1),d.placeShip(e,h,4,3,!1),console.log(`Soy Computer Init function: ${JSON.stringify(e)}`),[e,t,r,s,i,h]},fillPlayerMoves:e=>{for(let t=0;t<100;t+=1)e[t]=t+1;return e},fillComputerMoves:e=>{for(let t=0;t<100;t+=1)e[t]=t+1;return e}});s=i("").computerMoves;var l=i;(()=>{const e=(e,t)=>{for(let t=0;t<10;t+=1)for(let r=0;r<10;r+=1)if("-"!==e[t][r]){parseInt(`${t}${r}`,10)}},t=(e,t,r,n,o,s,i)=>{const l=parseInt(t.value,10)||t,a=parseInt(r.value,10)||r;console.log(`Choosen number: ${s}\n on: ${o[s].Name}`);o[s];const u=o[s].Lengths;for(let t=0;t<u;t+=1){let r=0;r=i?parseInt(`${a+t}${l}`,10):parseInt(`${a}${l+t}`,10),e[r].innerText=o[s].Name,e[r].style.backgroundColor=" rgba(26, 63, 40,0.7 )"}console.log(`im X: ${l} Y: ${a} : Choosen: ${JSON.stringify(o)}`)};return{render:()=>{const r=document.querySelector(".human"),n=document.querySelector(".computer"),s=document.getElementById("btn-place"),i=document.getElementById("btn-random"),a=document.getElementById("checkbox"),u=document.getElementById("text-action"),c=document.getElementById("text-x"),p=document.getElementById("text-y");let d="";const h=o();let m=!1,g=!1;for(let e=0;e<10;e+=1)for(let t=0;t<10;t+=1)d+=`<div data-position-x=${e} data-position-y=${t} class="box" id="box${e}${t}"></div>`;r.innerHTML=d,n.innerHTML=d;const f=document.getElementsByClassName("box"),y=document.getElementById("messages"),$=l("MephistoDevelop"),b=$.playerInit(),S=$.computerInit();let v=$.Turn;h.Board=h.drawBoardPlayer(),h.BoardComputer=S[5];let k=!1;for(let e=0;e<100;e+=1){let t=Math.floor(e/10),r=e%10;f[e].innerText=`${t}-${r}`}e(h.BoardComputer,f);for(let e=f.length/2;e<f.length;e+=1){const t=f[e].getAttribute("data-position-x"),r=f[e].getAttribute("data-position-y");f[e].addEventListener("click",()=>{console.log("im turn"+v),0===v&&($.Turn=0,k=$.Move($.Turn,t,r,h,b)[1],y.innerText=`${l.Name} Turn ${v}`,$.Turn=1,k?(f[e].style.backgroundImage="url('./img/hole.png')",f[e].style.backgroundColor="rgba(26, 63, 40,0.7)"):f[e].style.backgroundImage="url('./img/ex.png')",setTimeout(()=>{const e=$.Move($.Turn,0,0,h,S),t=parseInt(`${e[1]}${e[0]}`,10);k=e[2],$.Turn=0,f[t].style.opacity="1",k?(f[t].style.backgroundImage="url('./img/hole.png')",f[t].style.backgroundColor="rgba(26, 63, 40,0.7 )"):f[t].style.backgroundImage="url('./img/ex.png')",$.computerMoves.push(t)},300)),console.log($.computerMoves)})}s.addEventListener("click",()=>{const e=parseInt(u.value,10);t(f,c,p,u,b,e,g)}),a.addEventListener("click",()=>{m?(a.checked=!1,m=!1,g=!1):(a.checked=!0,m=!0,g=!0)}),i.addEventListener("click",()=>{t(f,1,1,u,b,0,!1),h.placeShip(b[0],h.Board,1,1),t(f,8,2,u,b,1,!0),h.placeShip(b[1],h.Board,8,2,!0),t(f,1,3,u,b,2,!0),h.placeShip(b[2],h.Board,1,3,!0),t(f,3,7,u,b,3,!1),h.placeShip(b[3],h.Board,3,7,!1),t(f,7,8,u,b,4,!1),h.placeShip(b[4],h.Board,7,8,!1),console.log(`PlayerBoard \n ${JSON.stringify(h)}`)})}}})().render()}]);