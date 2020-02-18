!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n=(e,t)=>({Name:t,Lengths:e,ships:{},fill_ship:e=>{const t=[];for(let r=0;r<e;r+=1)t.push("O");return t},hit:(e,t,r)=>{const n=e[r];return n[t]="X",n},isSunk:e=>{let t=!1;for(let r=0;r<e.length;r+=1){if("X"!==e[r]){t=!1;break}t=!0}return t}});var o=()=>({Board:[],BoardComputer:[],drawBoardPlayer:()=>{const e=[];for(let t=0;t<10;t+=1){const t=[];for(let e=0;e<10;e+=1)t[e]="-";e.push(t)}return e},placeShip:(e,t,r,n,o=!1)=>{const a=e,s=t;let l=!1;if(a.Name){for(let e=0;e<t.length;e+=1){const r=`${a.Name}0`;if(t[e].includes(r)){l=!0;break}}if(l)return!1;{const e=e=>{let t=!1;for(let o=0;o<a.Lengths;o+=1){if("-"!==e[n][r+o]){t=!1;break}t=!0}return t},t=e=>{let t=!1;for(let o=0;o<a.Lengths;o+=1){if("-"!==e[n+o][r]){t=!1;break}t=!0}return t};if(r+a.Lengths<=10&&e(s)&&!1===o)for(let e=0;e<a.Lengths;e+=1)s[n][r+e]=`${a.Name}${e}`;else if(n+a.Lengths<=10&&t(s)&&!0===o)for(let e=0;e<a.Lengths;e+=1)s[n+e][r]=`${a.Name}${e}`;else console.log("place your ship in a valid position")}}return`X: ${n} - Y: ${r}, ${JSON.stringify(s)} `},receiveAtack:(e,t,r,n)=>{const o=n[0];let a="";const s=o.ships;if("-"===r[t][e])r[t][e]="X",a=!1;else{const n=r[t][e].split(""),l=n.splice(0,n.length-1).join("");if(""!==l){const i=parseInt(n);o.hit(s,i,l),r[t][e]=`${l}X`,a=!0}}return a},checkShipsSunked:e=>{let t=!1;const r=e,n=r.ships.Cruiser,o=r.ships.Submarine,a=r.ships.Destroyer,s=r.ships.Carrier,l=r.ships.Battleship;return r.isSunk(n)&&r.isSunk(o)&&r.isSunk(s)&&r.isSunk(a)&&r.isSunk(l)&&(t=!0),t}});let a=[];const s=e=>({Name:e,Turn:0,computerMoves:[],Move:(e,t,r,n,o)=>{let s=!1;if(0===e)return s=n.receiveAtack(r,t,n.BoardComputer,o),[1,s];let l=parseInt(10*(0+Math.random()),10),i=parseInt(10*(0+Math.random()),10),c=parseInt(`${i}${l},10`);if(a.includes(c)){for(;a.includes(c)&&99!==a.length;)if(l=parseInt(10*(0+Math.random()),10),i=parseInt(10*(0+Math.random()),10),c=parseInt(`${i}${l}`,10),!a.includes(c)){a.push(c),s=n.receiveAtack(l,i,n.Board,o);break}}else a.push(c),s=n.receiveAtack(l,i,n.Board,o);return[l,i,s]},playerInit:()=>{const e=n(5,"Carrier"),t=n(4,"Battleship"),r=n(3,"Cruiser"),o=n(3,"Submarine"),a=n(2,"Destroyer"),s=(e.ships,e.fill_ship(e.Lengths)),l=t.fill_ship(t.Lengths),i=r.fill_ship(r.Lengths),c=o.fill_ship(o.Lengths),u=a.fill_ship(a.Lengths);return e.ships[e.Name]=s,e.ships[t.Name]=l,e.ships[r.Name]=i,e.ships[o.Name]=c,e.ships[a.Name]=u,[e,t,r,o,a]},computerInit:()=>{const e=n(5,"Carrier"),t=n(4,"Battleship"),r=n(3,"Cruiser"),a=n(3,"Submarine"),s=n(2,"Destroyer"),l=(e.ships,e.fill_ship(e.Lengths)),i=t.fill_ship(t.Lengths),c=r.fill_ship(r.Lengths),u=a.fill_ship(a.Lengths),d=s.fill_ship(s.Lengths);e.ships[e.Name]=l,e.ships[t.Name]=i,e.ships[r.Name]=c,e.ships[a.Name]=u,e.ships[s.Name]=d;const p=o(),m=p.drawBoardPlayer();return p.placeShip(a,m,1,2,!0),p.placeShip(t,m,5,1,!1),p.placeShip(r,m,2,6,!0),p.placeShip(s,m,6,6,!1),p.placeShip(e,m,4,3,!1),[e,t,r,a,s,m]},fillPlayerMoves:e=>{for(let t=0;t<100;t+=1)e[t]=t+1;return e},fillComputerMoves:e=>{for(let t=0;t<100;t+=1)e[t]=t+1;return e}});a=s("").computerMoves;var l=s;(()=>{const e=(e,t)=>{for(let r=0;r<10;r+=1)for(let n=0;n<10;n+=1)if("-"!==e[r][n]){t[parseInt(`${r}${n}`,10)+100].style.backgroundColor=" rgba(26, 63, 40,0.98 )"}},t=(e,t,r,n,o,a,s,l)=>{try{const n=parseInt(t.value,10)||t,i=parseInt(r.value,10)||r;if(l.placeShip(o[a],l.Board,n,i,s)){o[a];const t=o[a].Lengths;for(let r=0;r<t;r+=1){let t=0;t=s?0===i?r:parseInt(`${i+r}${n}`):0===i?r:parseInt(`${i}${n+r}`),e[t].innerText=o[a].Name,"Submarine"===o[a].Name&&(e[t].style.backgroundColor="rgba(226, 63, 40,1 )"),"Destroyer"===o[a].Name&&(e[t].style.backgroundColor="rgba(26, 63, 180,1 )"),"Cruiser"===o[a].Name&&(e[t].style.backgroundColor="rgba(26, 233, 20,1 )"),"Carrier"===o[a].Name&&(e[t].style.backgroundColor="rgba(216, 146, 49,1 )"),"Battleship"===o[a].Name&&(e[t].style.backgroundColor="rgba(132, 104, 106,1 )")}}else message.style.backgroundColor="rgba(255, 3, 0,0.5 )",message.innerHTML="PLace Your Ship in a Valid Position"}catch(e){const t=document.getElementById("messages");t.innerHTML="Place your ships  and press Start Game",t.style.backgroundColor="rgba(255,0,0,0.7)",setTimeout(()=>{t.innerHTML="",t.style.backgroundColor="transparent"},3e3)}};return{render:()=>{const r=document.querySelector(".human"),n=document.querySelector(".computer"),a=document.getElementById("btn-place"),s=document.getElementById("btn-clean"),i=document.getElementById("btn-start"),c=document.getElementById("btn-restart"),u=document.getElementById("btn-random"),d=document.getElementById("checkbox"),p=document.getElementById("text-action"),m=document.getElementById("txt-name"),h=document.getElementById("text-x"),g=document.getElementById("text-y"),y=document.getElementById("messages");c.className="hide";let f="";const b=o();let k=!1,B=!1,S=!1,v=[];for(let e=0;e<10;e+=1)for(let t=0;t<10;t+=1)f+=`<div data-position-x=${e} data-position-y=${t} class="box" id="box${e}${t}"></div>`;r.innerHTML=f,n.innerHTML=f;const C=document.getElementsByClassName("box"),I=document.getElementById("messages");let L=l("Player 1"),T=L.playerInit(),$=L.computerInit();const N=L.Turn;b.Board=b.drawBoardPlayer(),b.BoardComputer=$[5];let x=!1;y.innerHTML="Place your Ships and Press Start",y.style.backgroundColor="rgba(0,0,255,0.3)";for(let e=0;e<100;e+=1){const t=Math.floor(e/10),r=e%10;C[e].innerText=`${t}-${r}`}const M=e=>{let t="";if(0===e){if(t=L.Name,b.checkShipsSunked($[0])){y.innerHTML=`Game Finished !! ${t} Wins. Wait few seconds to start new game`,y.style.backgroundColor="rgba(0,255,0,0.6)",S=!0;for(let e=C.length/2;e<C.length;e+=1)C[e].click=""}}else if(t="Computer",b.checkShipsSunked(T[0])){console.log("Coputer wins the Game"),y.innerText="Game Finished !! Coputer Wins",y.style.backgroundColor="rgba(0,255,0,0.6)",S=!0;for(let e=C.length/2;e<C.length;e+=1)C[e].click=""}};a.addEventListener("click",()=>{const e=parseInt(p.value,10);t(C,h,g,p,T,e,B,b),h.innerText="",g.innerText=""}),d.addEventListener("click",()=>{k?(d.checked=!1,k=!1,B=!1):(d.checked=!0,k=!0,B=!0)}),u.addEventListener("click",()=>{E(),t(C,1,1,p,T,0,!1,b),b.placeShip(T[0],b.Board,1,1),t(C,8,2,p,T,1,!0,b),b.placeShip(T[1],b.Board,8,2,!0),t(C,1,3,p,T,2,!0,b),b.placeShip(T[2],b.Board,1,3,!0),t(C,3,7,p,T,3,!1,b),b.placeShip(T[3],b.Board,3,7,!1),t(C,7,8,p,T,4,!1,b),b.placeShip(T[4],b.Board,7,8,!1)}),i.addEventListener("click",()=>{P()?(""!==m.value&&(L.Name=m.value),c.classList.remove("hide"),i.className="hide",_()):(y.innerText="Place your ship and then press Start",y.style.backgroundColor="rgba(255,0,0,0.6)")}),c.addEventListener("click",()=>{w()}),s.addEventListener("click",()=>{E()});const E=()=>{g.value="",h.value="",p.selected=0,b.Board=b.drawBoardPlayer(),b.BoardComputer=b.drawBoardPlayer(),b.BoardComputer=$[5],f="";for(let e=0;e<10;e+=1)for(let t=0;t<10;t+=1)f+=`<div data-position-x=${e} data-position-y=${t} class="box" id="box${e}${t}"></div>`;r.innerHTML=f,n.innerHTML=f;for(let e=0;e<100;e+=1){const t=Math.floor(e/10),r=e%10;C[e].innerText=`${t}-${r}`,C[e].style.backgroundColor="rgba(26, 63, 40, 1)",C[e].style.backgroundImage="none"}for(let e=100;e<200;e+=1)C[e].style.backgroundColor="rgba(26, 63, 40, 1)",C[e].style.backgroundImage="none"},P=()=>{let e=!1,t=!1,r=!1,n=!1,o=!1;for(let a=0;a<b.Board.length;a+=1)b.Board[a].includes("Battleship0")&&(e=!0),b.Board[a].includes("Submarine0")&&(t=!0),b.Board[a].includes("Carrier0")&&(r=!0),b.Board[a].includes("Destroyer0")&&(n=!0),b.Board[a].includes("Cruiser0")&&(o=!0);return!!(e&&t&&r&&n&&o)},_=()=>{if(P()){e(b.BoardComputer,C);for(let e=C.length/2;e<C.length;e+=1){const t=C[e].getAttribute("data-position-x"),r=C[e].getAttribute("data-position-y");C[e].addEventListener("click",n=>{if(0===N){if(L.Turn=0,x=L.Move(L.Turn,t,r,b,T)[1],M(N),S||(I.innerText="Computer Turn",setTimeout(()=>{I.innerText=`${L.Name} Turn`,I.style.backgroundColor="rgba(0,255,0,0.6)"},500)),S&&(document.querySelector(".board").style.pointerEvents="none",setTimeout(window.location.reload.bind(window.location),3e3)),"none"!==C[e].style.backgroundImage&&(C[e].style.pointerEvents="none"),L.Turn=1,x){parseInt(`${t}${r}`,10);C[e].style.backgroundImage="url('./img/hole.png')",C[e].style.backgroundColor="rgba(225, 28, 28,1)"}else C[e].style.backgroundImage="url('./img/ex.png')";setTimeout(()=>{const e=L.Move(L.Turn,0,0,b,$),t=parseInt(`${e[1]}${e[0]}`,10);x=e[2],M(L.Turn),L.Turn=0,C[t].style.opacity="1",x?(C[t].style.backgroundImage="url('./img/hole.png')",C[t].style.backgroundColor="rgba(26, 63, 40,0.7 )"):C[t].style.backgroundImage="url('./img/ex.png')",L.computerMoves.push(t)},150)}const o=C[e].cloneNode(!0);C[e].parentNode.replaceChild(o,C[e])})}y.innerHTML="Game Started , atack computer Board",y.style.backgroundColor="rgba(0,255,0,0.6)",document.getElementById("content-hide").className="hide"}else y.innerHTML="Write your name Place your ships and then press Start",y.style.backgroundColor="rgba(255,0,0,0.6)"},w=()=>{i.classList.remove("hide"),c.className="hide",E(),L=l("MephistoDevelop"),T=L.playerInit(),$=L.computerInit(),v=[],S=!1,L.turn=0,i.innerText="Start Game",y.innerHTML="Game Re-Started , Place your Ships and  Press Start",y.style.backgroundColor="rgba(0,255,0,0.6)",document.getElementById("content-hide").classList.remove("hide"),b.Board=b.drawBoardPlayer(),b.BoardComputer=$[5],i.click=""}}}})().render()}]);