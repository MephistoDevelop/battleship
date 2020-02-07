!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=(e,t)=>({Name:t,Lengths:e,ships:{},fill_ship:e=>{const t=[];for(let n=0;n<e;n+=1)t.push("O");return t},hit:(e,t,n)=>{const r=e[n];return r[t]="X",r},isSunk:e=>{let t=!1;for(let n=0;n<e.length;n+=1){if("X"!==e[n]){t=!1;break}t=!0}return t}});var o=()=>({Board:[],BoardComputer:[],drawBoardPlayer:()=>{const e=[];for(let t=0;t<10;t+=1){const t=[];for(let e=0;e<10;e+=1)t[e]="-";e.push(t)}return e},placeShip:(e,t,n,r,o=!1)=>{const s=e,i=t;if(s.Name){const e=e=>{let t=!1;for(let o=0;o<s.Lengths;o+=1){if("-"!==e[r][n+o]){t=!1;break}t=!0}return t},t=e=>{let t=!1;for(let o=0;o<s.Lengths;o+=1){if("-"!==e[r+o][n]){t=!1;break}t=!0}return t};if(n+s.Lengths<=10&&e(i)&&!1===o)for(let e=0;e<s.Lengths;e+=1)i[r][n+e]=`${s.Name}${e}`;else if(r+s.Lengths<=10&&t(i)&&!0===o)for(let e=0;e<s.Lengths;e+=1)i[r+e][n]=`${s.Name}${e}`;else console.log("place your ship in a valid position")}return`X: ${r} - Y: ${n}, ${JSON.stringify(i)} `},receiveAtack:(e,t,n,r)=>{const o=r[0];let s="";const i=o.ships,l="-"===n[t][e];if(l)n[t][e]="X",s="Failed on:  X: "+e+" Y: "+t+"Empty Cell? :"+l;else{const r=n[t][e].split(""),a=r.splice(0,r.length-1).join(""),u=parseInt(r);o.hit(i,u,a),n[t][e]=`${a}X`,s=`${JSON.stringify(i)}- ${a} - ${u} \n Atacked on Pos; X: ${e}:   Y: ${t}:    Empty Cell ? : ${l}    \n BoardArr:  ${n}`}return s},checkShipsSunked:e=>{let t=!1;const n=e,r=n.ships.Cruiser,o=n.ships.Submarine,s=n.ships.Destroyer,i=n.ships.Carrier,l=n.ships.Battleship;return n.isSunk(r)&&n.isSunk(o)&&n.isSunk(i)&&n.isSunk(s)&&n.isSunk(l)&&(t=!0),t}});var s=e=>({Name:e,Turn:0,playerBoard:{name:e,Board:[]},computerBoard:{Board:[]},Move:(e,t,n,r,o)=>{if(0===e)return r.receiveAtack(t,n,r.BoardComputer,o),console.log(`Player Turn, Atacked on: X:${t} - Y: ${n}\nTo  Computer Board \n ${JSON.stringify(r.BoardComputer)}`),1;const s=parseInt(10*(0+Math.random()),10),i=parseInt(10*(0+Math.random()),10);return r.receiveAtack(s,i,r.Board,o),console.log(`Computer Turn, Atacked on: X:${s} - Y: ${i}\n To Player Board \n${JSON.stringify(r.Board)}`),[s,i]},playerInit:()=>{const e=r(5,"Carrier"),t=r(4,"Battleship"),n=r(3,"Cruiser"),o=r(3,"Submarine"),s=r(2,"Destroyer"),i=(e.ships,e.fill_ship(e.Lengths)),l=t.fill_ship(t.Lengths),a=n.fill_ship(n.Lengths),u=o.fill_ship(o.Lengths),c=s.fill_ship(s.Lengths);return e.ships[e.Name]=i,e.ships[t.Name]=l,e.ships[n.Name]=a,e.ships[o.Name]=u,e.ships[s.Name]=c,console.log(`Soy PLayer Init function: ${JSON.stringify(e.ships)}`),[e,t,n,o]},computerInit:()=>{const e=r(5,"Carrier"),t=r(4,"Battleship"),n=r(3,"Cruiser"),s=r(3,"Submarine"),i=r(2,"Destroyer"),l=(e.ships,e.fill_ship(e.Lengths)),a=t.fill_ship(t.Lengths),u=n.fill_ship(n.Lengths),c=s.fill_ship(s.Lengths),p=i.fill_ship(i.Lengths);e.ships[e.Name]=l,e.ships[t.Name]=a,e.ships[n.Name]=u,e.ships[s.Name]=c,e.ships[i.Name]=p;const d=o(),h=d.drawBoardPlayer();return d.placeShip(s,h,1,2,!0),d.placeShip(t,h,5,1,!1),d.placeShip(n,h,2,6,!0),d.placeShip(i,h,6,6,!1),d.placeShip(e,h,4,3,!1),console.log(`Soy Computer Init function: ${JSON.stringify(e)}`),[e,t,n,s,i,h]},fillPlayerMoves:e=>{for(let t=0;t<100;t+=1)e[t]=t+1;return e},fillComputerMoves:e=>{for(let t=0;t<100;t+=1)e[t]=t+1;return e}});(()=>{const e=(e,t)=>{for(let n=0;n<10;n+=1)for(let r=0;r<10;r+=1)if("-"!==e[n][r]){const o=parseInt(`${n}${r}`,10);t[o].innerText=e[n][r],t[o].style.opacity="0.5"}},t=(e,t,n,r,o,s)=>{const i=parseInt(t.value,10),l=parseInt(n.value,10);console.log(`Choosen number: ${s}\n on: ${o[s].Name}`);o[s];const a=o[s].Lengths;for(let t=0;t<a;t+=1){const n=parseInt(`${i}${l+t}`,10);e[n+100].innerText=o[s].Name,e[n+100].style.opacity="0.7"}console.log(`im X: ${i} Y: ${l} : Choosen: ${JSON.stringify(o)}`)};return{render:()=>{const n=document.querySelector(".human"),r=document.querySelector(".computer"),i=document.getElementById("btn-place"),l=(document.getElementById("checkbox"),document.getElementById("text-action")),a=document.getElementById("text-x"),u=document.getElementById("text-y");let c="";const p=o();for(let e=0;e<10;e+=1)for(let t=0;t<10;t+=1)c+=`<div data-position-x=${e} data-position-y=${t} class="box" id="box${e}${t}"></div>`;n.innerHTML=c,r.innerHTML=c;const d=document.getElementsByClassName("box"),h=document.getElementById("messages"),f=s("MephistoDevelop"),m=f.playerInit(),g=f.computerInit();let y=f.Turn;p.Board=p.drawBoardPlayer(),p.BoardComputer=g[5],e(p.BoardComputer,d);for(let e=d.length/2;e<d.length;e+=1){const t=d[e].getAttribute("data-position-x"),n=d[e].getAttribute("data-position-y");d[e].addEventListener("click",()=>{0===y&&(f.Turn=f.Move(f.Turn,t,n,p,m),h.innerText=`${s.Name} Turn ${JSON.stringify(m)}`,y=1,setTimeout(()=>{const e=f.Move(f.Turn,0,0,p,g),t=parseInt(`${e[0]}${e[1]}`,10);console.log(`Soy number:${t}`),d[t].style.backgroundImage="url('./img/ex.png')",y=0},1500)),d[e].style.backgroundImage=e%2==0?"url('./img/hole.png')":"url('./img/ex.png')"})}i.addEventListener("click",()=>{console.log("Placed clicked");const e=parseInt(l.value,10);t(d,a,u,l,m,e)})}}})().render()}]);