!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n=(e,t)=>({Name:t,Lengths:e,ships:{},fill_ship:e=>{const t=[];for(let r=0;r<e;r+=1)t.push("O");return t},hit:(e,t,r)=>{const n=e[r];return n[t]="X",n},isSunk:e=>{let t=!1;for(let r=0;r<e.length;r+=1){if("X"!==e[r]){t=!1;break}t=!0}return t}});var o=()=>({Board:[],BoardComputer:[],drawBoardPlayer:()=>{const e=[];for(let t=0;t<10;t+=1){const t=[];for(let e=0;e<10;e+=1)t[e]="-";e.push(t)}return e},placeShip:(e,t,r,n,o=!1)=>{const s=e,a=t;if(s.Name){const e=e=>{let t=!1;for(let o=0;o<s.Lengths;o+=1){if("-"!==e[n][r+o]){t=!1;break}t=!0}return t},t=e=>{let t=!1;for(let o=0;o<s.Lengths;o+=1){if("-"!==e[n+o][r]){t=!1;break}t=!0}return t};if(r+s.Lengths<=10&&e(a)&&!1===o)for(let e=0;e<s.Lengths;e+=1)a[n][r+e]=`${s.Name}${e}`;else if(n+s.Lengths<=10&&t(a)&&!0===o)for(let e=0;e<s.Lengths;e+=1)a[n+e][r]=`${s.Name}${e}`;else console.log("place your ship in a valid position")}return`X: ${n} - Y: ${r}, ${JSON.stringify(a)} `},receiveAtack:(e,t,r,n)=>{const o=n[0];let s="";const a=o.ships;if("-"===r[t][e])r[t][e]="X",s=!1;else{const n=r[t][e].split(""),l=n.splice(0,n.length-1).join("");if(""!==l){const i=parseInt(n);console.log(`im hit name: ${JSON.stringify(l)}`),o.hit(a,i,l),r[t][e]=`${l}X`,s=!0}}return s},checkShipsSunked:e=>{let t=!1;const r=e,n=r.ships.Cruiser,o=r.ships.Submarine,s=r.ships.Destroyer,a=r.ships.Carrier,l=r.ships.Battleship;return r.isSunk(n)&&r.isSunk(o)&&r.isSunk(a)&&r.isSunk(s)&&r.isSunk(l)&&(t=!0),t}});let s=[];const a=e=>({Name:e,Turn:0,computerMoves:[],Move:(e,t,r,n,o)=>{let a=!1;if(0===e)return console.log(`CEll: X:${t} Y: ${r}   ${n.BoardComputer[r][t]}`),a=n.receiveAtack(r,t,n.BoardComputer,o),console.log(`Player Turn, Atacked on: X:${r} - Y: ${t}\nTo  Computer Board \n ${JSON.stringify(n.BoardComputer)}`),[1,a];let l=parseInt(10*(0+Math.random()),10),i=parseInt(10*(0+Math.random()),10),c=parseInt(`${l}${i},10`);if(s.includes(c)){for(;s.includes(c);)if(l=parseInt(10*(0+Math.random()),10),i=parseInt(10*(0+Math.random()),10),c=parseInt(`${l}${i}`,10),!s.includes(c)){s.push(c),a=n.receiveAtack(i,l,n.Board,o);break}console.log(`New number Generated on PLayer: ${c}`)}else a=n.receiveAtack(l,i,n.Board,o),console.log(`Computer Turn,Moves: ${s}  Atacked on: X:${l} - Y: ${i}\n To Player Board \n${JSON.stringify(n.Board)}`);return[l,i,a]},playerInit:()=>{const e=n(5,"Carrier"),t=n(4,"Battleship"),r=n(3,"Cruiser"),o=n(3,"Submarine"),s=n(2,"Destroyer"),a=(e.ships,e.fill_ship(e.Lengths)),l=t.fill_ship(t.Lengths),i=r.fill_ship(r.Lengths),c=o.fill_ship(o.Lengths),u=s.fill_ship(s.Lengths);return e.ships[e.Name]=a,e.ships[t.Name]=l,e.ships[r.Name]=i,e.ships[o.Name]=c,e.ships[s.Name]=u,console.log(`Soy PLayer Init function: ${JSON.stringify(e.ships)}`),[e,t,r,o,s]},computerInit:()=>{const e=n(5,"Carrier"),t=n(4,"Battleship"),r=n(3,"Cruiser"),s=n(3,"Submarine"),a=n(2,"Destroyer"),l=(e.ships,e.fill_ship(e.Lengths)),i=t.fill_ship(t.Lengths),c=r.fill_ship(r.Lengths),u=s.fill_ship(s.Lengths),p=a.fill_ship(a.Lengths);e.ships[e.Name]=l,e.ships[t.Name]=i,e.ships[r.Name]=c,e.ships[s.Name]=u,e.ships[a.Name]=p;const d=o(),m=d.drawBoardPlayer();return d.placeShip(s,m,1,2,!0),d.placeShip(t,m,5,1,!1),d.placeShip(r,m,2,6,!0),d.placeShip(a,m,6,6,!1),d.placeShip(e,m,4,3,!1),console.log(`Soy Computer Init function: ${JSON.stringify(e)}`),[e,t,r,s,a,m]},fillPlayerMoves:e=>{for(let t=0;t<100;t+=1)e[t]=t+1;return e},fillComputerMoves:e=>{for(let t=0;t<100;t+=1)e[t]=t+1;return e}});s=a("").computerMoves;var l=a;(()=>{const e=(e,t)=>{for(let r=0;r<10;r+=1)for(let n=0;n<10;n+=1)if("-"!==e[r][n]){t[parseInt(`${r}${n}`,10)+100].style.backgroundColor=" rgba(26, 63, 40,0.7 )"}},t=(e,t,r,n,o,s,a)=>{try{const n=parseInt(t.value,10)||t,l=parseInt(r.value,10)||r;console.log(`Choosen number: ${s}\n on: ${o[s].Name}`);o[s];const i=o[s].Lengths;for(let t=0;t<i;t+=1){let r=0;a?r=parseInt(`${l+t}${n}`):(r=parseInt(`${l}${n+t}`),console.log(`Im new number ${r}`)),console.log(`Im Size: ${i} i: ${t} newNumber : ${r} \n Vertical: ${a}`),e[r].innerText=o[s].Name,"Submarine"===o[s].Name&&(e[r].style.backgroundColor="rgba(226, 63, 40,1 )"),"Destroyer"===o[s].Name&&(e[r].style.backgroundColor="rgba(26, 63, 180,1 )"),"Cruiser"===o[s].Name&&(e[r].style.backgroundColor="rgba(26, 233, 20,1 )"),"Carrier"===o[s].Name&&(e[r].style.backgroundColor="rgba(216, 146, 49,1 )"),"Battleship"===o[s].Name&&(e[r].style.backgroundColor="rgba(132, 104, 106,1 )")}console.log(`im X: ${n} Y: ${l} : Choosen: ${JSON.stringify(o)}`)}catch(e){const t=document.getElementById("messages");t.innerHTML="Place your ships in a valid position and press Start Game"+e.message,t.style.backgroundColor="rgba(255,0,0,0.7)",setTimeout(()=>{t.innerHTML="",t.style.backgroundColor="transparent"},3e3)}};return{render:()=>{const r=document.querySelector(".human"),n=document.querySelector(".computer"),s=document.getElementById("btn-place"),a=document.getElementById("btn-clean"),i=document.getElementById("btn-start"),c=document.getElementById("btn-random"),u=document.getElementById("checkbox"),p=document.getElementById("text-action"),d=document.getElementById("text-x"),m=document.getElementById("text-y"),g=document.getElementById("messages");let h="";const f=o();let y=!1,b=!1;for(let e=0;e<10;e+=1)for(let t=0;t<10;t+=1)h+=`<div data-position-x=${e} data-position-y=${t} class="box" id="box${e}${t}"></div>`;r.innerHTML=h,n.innerHTML=h;const $=document.getElementsByClassName("box"),k=document.getElementById("messages"),S=l("MephistoDevelop"),v=S.playerInit(),B=S.computerInit();let I=S.Turn;f.Board=f.drawBoardPlayer(),f.BoardComputer=B[5];let C=!1;g.innerHTML="Place your Ships and Press Start",g.style.backgroundColor="rgba(0,0,255,0.3)";for(let e=0;e<100;e+=1){let t=Math.floor(e/10),r=e%10;$[e].innerText=`${t}-${r}`}s.addEventListener("click",()=>{const e=parseInt(p.value,10);t($,d,m,p,v,e,b),d.innerText="",m.innerText=""}),u.addEventListener("click",()=>{y?(u.checked=!1,y=!1,b=!1):(u.checked=!0,y=!0,b=!0)}),c.addEventListener("click",()=>{N(),t($,1,1,p,v,0,!1),f.placeShip(v[0],f.Board,1,1),t($,8,2,p,v,1,!0),f.placeShip(v[1],f.Board,8,2,!0),t($,1,3,p,v,2,!0),f.placeShip(v[2],f.Board,1,3,!0),t($,3,7,p,v,3,!1),f.placeShip(v[3],f.Board,3,7,!1),t($,7,8,p,v,4,!1),f.placeShip(v[4],f.Board,7,8,!1),console.log(`PlayerBoard \n ${JSON.stringify(f)}`)}),i.addEventListener("click",()=>{e(f.BoardComputer,$);for(let e=$.length/2;e<$.length;e+=1){const t=$[e].getAttribute("data-position-x"),r=$[e].getAttribute("data-position-y");$[e].addEventListener("click",()=>{if(console.log("im turn"+I),0===I){if(S.Turn=0,C=S.Move(S.Turn,t,r,f,v)[1],k.innerText=`${l.Name} Turn ${I}`,S.Turn=1,C){parseInt(`${t}${r}`,10);$[e].style.backgroundImage="url('./img/hole.png')",$[e].style.backgroundColor="rgba(225, 28, 28,1)"}else $[e].style.backgroundImage="url('./img/ex.png')";setTimeout(()=>{const e=S.Move(S.Turn,0,0,f,B),t=parseInt(`${e[1]}${e[0]}`,10);C=e[2],S.Turn=0,$[t].style.opacity="1",C?($[t].style.backgroundImage="url('./img/hole.png')",$[t].style.backgroundColor="rgba(26, 63, 40,0.7 )"):$[t].style.backgroundImage="url('./img/ex.png')",S.computerMoves.push(t)},300)}console.log(S.computerMoves)})}g.innerHTML="Game Started , atack computer Board",g.style.backgroundColor="rgba(0,255,0,0.6)",setTimeout(()=>{g.innerHTML="",g.style.backgroundColor="transparent"},3e3),document.getElementById("content-hide").className="hide"}),a.addEventListener("click",()=>{N()});const N=()=>{m.value="",d.value="",p.selected=0;for(let e=0;e<100;e+=1){let t=Math.floor(e/10),r=e%10;$[e].innerText=`${t}-${r}`,$[e].style.backgroundColor="rgba(26, 63, 40, 1)"}}}}})().render()}]);