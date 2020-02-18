!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n=(e,t)=>({Name:t,Lengths:e,ships:{},fill_ship:e=>{const t=[];for(let r=0;r<e;r+=1)t.push("O");return t},hit:(e,t,r)=>{const n=e[r];return n[t]="X",n},isSunk:e=>{let t=!1;for(let r=0;r<e.length;r+=1){if("X"!==e[r]){t=!1;break}t=!0}return t}});var o=()=>({Board:[],BoardComputer:[],drawBoardPlayer:()=>{const e=[];for(let t=0;t<10;t+=1){const t=[];for(let e=0;e<10;e+=1)t[e]="-";e.push(t)}return e},placeShip:(e,t,r,n,o=!1)=>{const s=e,a=t;let l=!1;if(s.Name){for(let e=0;e<t.length;e+=1){const r=`${s.Name}0`;if(t[e].includes(r)){l=!0;break}}if(l)return!1;{const e=e=>{let t=!1;for(let o=0;o<s.Lengths;o+=1){if("-"!==e[n][r+o]){t=!1;break}t=!0}return t},t=e=>{let t=!1;for(let o=0;o<s.Lengths;o+=1){if("-"!==e[n+o][r]){t=!1;break}t=!0}return t};if(r+s.Lengths<=10&&e(a)&&!1===o)for(let e=0;e<s.Lengths;e+=1)a[n][r+e]=`${s.Name}${e}`;else if(n+s.Lengths<=10&&t(a)&&!0===o)for(let e=0;e<s.Lengths;e+=1)a[n+e][r]=`${s.Name}${e}`}}return`X: ${n} - Y: ${r}, ${JSON.stringify(a)} `},receiveAtack:(e,t,r,n)=>{const o=n[0];let s="";const a=o.ships;if("-"===r[t][e])r[t][e]="X",s=!1;else{const n=r[t][e].split(""),l=n.splice(0,n.length-1).join("");if(""!==l){const i=parseInt(n,10);o.hit(a,i,l),r[t][e]=`${l}X`,s=!0}}return s},checkShipsSunked:e=>{let t=!1;const r=e,n=r.ships.Cruiser,o=r.ships.Submarine,s=r.ships.Destroyer,a=r.ships.Carrier,l=r.ships.Battleship;return r.isSunk(n)&&r.isSunk(o)&&r.isSunk(a)&&r.isSunk(s)&&r.isSunk(l)&&(t=!0),t}});let s=[];const a=e=>({Name:e,Turn:0,computerMoves:[],Move:(e,t,r,n,o)=>{let a=!1;if(0===e)return a=n.receiveAtack(r,t,n.BoardComputer,o),[1,a];let l=parseInt(10*(0+Math.random()),10),i=parseInt(10*(0+Math.random()),10),c=parseInt(`${i}${l}`,10);if(s.includes(c)){for(;s.includes(c)&&!(s.length>=98);)if(l=parseInt(10*(0+Math.random()),10),i=parseInt(10*(0+Math.random()),10),c=parseInt(`${i}${l}`,10),!s.includes(c)){s.push(c),a=n.receiveAtack(l,i,n.Board,o);break}}else s.push(c),a=n.receiveAtack(l,i,n.Board,o);return[l,i,a]},playerInit:()=>{const e=n(5,"Carrier"),t=n(4,"Battleship"),r=n(3,"Cruiser"),o=n(3,"Submarine"),s=n(2,"Destroyer"),a=e.fill_ship(e.Lengths),l=t.fill_ship(t.Lengths),i=r.fill_ship(r.Lengths),c=o.fill_ship(o.Lengths),u=s.fill_ship(s.Lengths);return e.ships[e.Name]=a,e.ships[t.Name]=l,e.ships[r.Name]=i,e.ships[o.Name]=c,e.ships[s.Name]=u,[e,t,r,o,s]},computerInit:()=>{const e=n(5,"Carrier"),t=n(4,"Battleship"),r=n(3,"Cruiser"),s=n(3,"Submarine"),a=n(2,"Destroyer"),l=e.fill_ship(e.Lengths),i=t.fill_ship(t.Lengths),c=r.fill_ship(r.Lengths),u=s.fill_ship(s.Lengths),d=a.fill_ship(a.Lengths);e.ships[e.Name]=l,e.ships[t.Name]=i,e.ships[r.Name]=c,e.ships[s.Name]=u,e.ships[a.Name]=d;const p=o(),g=p.drawBoardPlayer();return p.placeShip(s,g,1,2,!0),p.placeShip(t,g,5,1,!1),p.placeShip(r,g,2,6,!0),p.placeShip(a,g,6,6,!1),p.placeShip(e,g,4,3,!1),[e,t,r,s,a,g]},fillPlayerMoves:e=>{for(let t=0;t<100;t+=1)e[t]=t+1;return e},fillComputerMoves:e=>{for(let t=0;t<100;t+=1)e[t]=t+1;return e}});s=a("").computerMoves;var l=a;({render:()=>{const e=document.querySelector(".human"),t=document.querySelector(".computer"),r=document.getElementById("btn-place"),n=document.getElementById("btn-clean"),s=document.getElementById("btn-start"),a=document.getElementById("btn-random"),i=document.getElementById("checkbox"),c=document.getElementById("text-action"),u=document.getElementById("text-x"),d=document.getElementById("text-y"),p=document.getElementById("messages");let g="";const m=o();let h=!1,f=!1,y=!1;for(let e=0;e<10;e+=1)for(let t=0;t<10;t+=1)g+=`<div data-position-x=${e} data-position-y=${t} class="box" id="box${e}${t}"></div>`;e.innerHTML=g,t.innerHTML=g;const b=document.getElementsByClassName("box"),k=document.getElementById("messages"),S=l("MephistoDevelop"),B=S.playerInit(),$=S.computerInit(),v=S.Turn;m.Board=m.drawBoardPlayer(),m.BoardComputer=$[5];let I=!1;p.innerHTML="Place your Ships and Press Start",p.style.backgroundColor="rgba(0,0,255,0.3)";for(let e=0;e<100;e+=1){const t=Math.floor(e/10),r=e%10;b[e].innerText=`${t}-${r}`}const C=e=>{let t="";if(0===e){if(t=S.Name,m.checkShipsSunked(B[0])){p.innerHTML=`Game Finished !! ${t} Wins. Wait few seconds to start new game`,p.style.backgroundColor="rgba(0,255,0,0.6)",y=!0;for(let e=b.length/2;e<b.length;e+=1)b[e].click=""}}else if(t="Computer",m.checkShipsSunked($[0])){p.innerText=`Game Finished !! ${t} Wins`,p.style.backgroundColor="rgba(0,255,0,0.6)",y=!0;for(let e=0;e<b.length/2;e+=1)b[e].click=""}},L=(e,t,r,n,o,s,a,l)=>{try{const n=parseInt(t.value,10)||t,i=parseInt(r.value,10)||r;if(l.placeShip(o[s],l.Board,n,i,a)){o[s];const t=o[s].Lengths;for(let r=0;r<t;r+=1){let t=0;t=a?0===i?r:parseInt(`${i+r}${n}`):0===i?r:parseInt(`${i}${n+r}`),e[t].innerText=o[s].Name,"Submarine"===o[s].Name&&(e[t].style.backgroundColor="rgba(226, 63, 40,1 )"),"Destroyer"===o[s].Name&&(e[t].style.backgroundColor="rgba(26, 63, 180,1 )"),"Cruiser"===o[s].Name&&(e[t].style.backgroundColor="rgba(26, 233, 20,1 )"),"Carrier"===o[s].Name&&(e[t].style.backgroundColor="rgba(216, 146, 49,1 )"),"Battleship"===o[s].Name&&(e[t].style.backgroundColor="rgba(132, 104, 106,1 )")}}else p.style.backgroundColor="rgba(255, 3, 0,0.5 )",p.innerHTML="PLace Your Ship in a Valid Position";console.log(`X:${n} Y:${i}Choosen number: ${s}\n on: ${o[s].Name}\n an  Boards: \n ${JSON.stringify(l.Board)}`)}catch(e){const t=document.getElementById("messages");t.innerHTML="Place your ships  and press Start Game"+e.message,t.style.backgroundColor="rgba(255,0,0,0.7)",setTimeout(()=>{t.innerHTML="",t.style.backgroundColor="transparent"},3e3)}};r.addEventListener("click",()=>{const e=parseInt(c.value,10);L(b,u,d,0,B,e,f,m),u.innerText="",d.innerText=""}),i.addEventListener("click",()=>{h?(i.checked=!1,h=!1,f=!1):(i.checked=!0,h=!0,f=!0)});const T=()=>{d.value="",u.value="",c.selected=0,m.Board=m.drawBoardPlayer();for(let e=0;e<100;e+=1){let t=Math.floor(e/10),r=e%10;b[e].innerText=`${t}-${r}`,b[e].style.backgroundColor="rgba(26, 63, 40, 1)"}};a.addEventListener("click",()=>{T(),L(b,1,1,0,B,0,!1,m),m.placeShip(B[0],m.Board,1,1),L(b,8,2,0,B,1,!0,m),m.placeShip(B[1],m.Board,8,2,!0),L(b,1,3,0,B,2,!0,m),m.placeShip(B[2],m.Board,1,3,!0),L(b,3,7,0,B,3,!1,m),m.placeShip(B[3],m.Board,3,7,!1),L(b,7,8,0,B,4,!1,m),m.placeShip(B[4],m.Board,7,8,!1),console.log(`PlayerBoard \n ${JSON.stringify(m)}`)}),s.addEventListener("click",()=>{((e,t)=>{for(let r=0;r<10;r+=1)for(let n=0;n<10;n+=1)"-"!==e[r][n]&&(t[parseInt(`${r}${n}`,10)+100].style.backgroundColor=" rgba(26, 63, 40,.98 )")})(m.BoardComputer,b);for(let e=b.length/2;e<b.length;e+=1){const t=b[e].getAttribute("data-position-x"),r=b[e].getAttribute("data-position-y");b[e].addEventListener("click",()=>{0===v&&(S.Turn=0,I=S.Move(S.Turn,t,r,m,B)[1],C(v),y||(k.innerText="Computer Turn",setTimeout(()=>{k.innerText=`${S.Name} Turn`,k.style.backgroundColor="rgba(0,255,0,0.6)"},1e3)),y&&(document.querySelector(".board").style.pointerEvents="none",setTimeout(window.location.reload.bind(window.location),3e3)),"none"!==b[e].style.backgroundImage&&(b[e].style.pointerEvents="none"),S.Turn=1,I?(parseInt(`${t}${r}`,10),b[e].style.backgroundImage="url('./img/hole.png')",b[e].style.backgroundColor="rgba(225, 28, 28,1)"):b[e].style.backgroundImage="url('./img/ex.png')",setTimeout(()=>{const e=S.Move(S.Turn,0,0,m,$),t=parseInt(`${e[1]}${e[0]}`,10);I=e[2],C(v),S.Turn=0,b[t].style.opacity="1",I?(b[t].style.backgroundImage="url('./img/hole.png')",b[t].style.backgroundColor="rgba(26, 63, 40,0.7 )"):b[t].style.backgroundImage="url('./img/ex.png')",S.computerMoves.push(t)},600))})}p.innerHTML="Game Started , atack computer Board",p.style.backgroundColor="rgba(0,255,0,0.6)",document.getElementById("content-hide").className="hide"}),n.addEventListener("click",()=>{T()})}}).render()}]);