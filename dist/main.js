!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n=(e,t)=>({Name:t,Lengths:e,ships:{},fill_ship:e=>{const t=[];for(let r=0;r<e;r+=1)t.push("O");return t},hit:(e,t,r)=>{const n=e[r];return n[t]="X",n},isSunk:e=>{let t=!1;for(let r=0;r<e.length;r+=1){if("X"!==e[r]){t=!1;break}t=!0}return t}});var o=()=>({Board:[],BoardComputer:[],drawBoardPlayer:()=>{const e=[];for(let t=0;t<10;t+=1){const t=[];for(let e=0;e<10;e+=1)t[e]="-";e.push(t)}return e},placeShip:(e,t,r,n,o=!1)=>{const s=e,i=t;if(s.Name){const e=e=>{let t=!1;for(let o=0;o<s.Lengths;o+=1){if("-"!==e[n][r+o]){t=!1;break}t=!0}return t};if(r+s.Lengths<=10&&e(i))for(let e=0;e<s.Lengths;e+=1)i[n][r+e]=`${s.Name}${e}`;else console.log("place your ship in a valid position")}return`X: ${n} - Y: ${r}, ${JSON.stringify(i)} `},receiveAtack:(e,t,r,n)=>{const o=n[0];let s="";const i=o.ships,l="-"===r[t][e];if(l)r[t][e]="X",s="Failed on:  X: "+e+" Y: "+t+"Empty Cell? :"+l;else{const n=r[t][e].split(""),a=n.splice(0,n.length-1).join(""),u=parseInt(n);o.hit(i,u,a),r[t][e]=`${a}X`,s=`${JSON.stringify(i)}- ${a} - ${u} \n Atacked on Pos; X: ${e}:   Y: ${t}:    Empty Cell ? : ${l}    \n BoardArr:  ${r}`}return s},checkShipsSunked:e=>{let t=!1;const r=e,n=r.ships.Cruiser,o=r.ships.Submarine,s=r.ships.Destroyer,i=r.ships.Carrier,l=r.ships.Battleship;return r.isSunk(n)&&r.isSunk(o)&&r.isSunk(i)&&r.isSunk(s)&&r.isSunk(l)&&(t=!0),t}});var s=e=>({Name:e,Turn:0,playerBoard:{name:e,Board:[]},computerBoard:{Board:[]},Move:(e,t,r,n,o)=>0===e?(n.receiveAtack(t,r,n.BoardComputer,o),console.log(e+" Player Turn, Atacked on: "+t+" - "+r+"\n Computer Board \n"+JSON.stringify(n.BoardComputer)),1):(n.receiveAtack(t,r,n.Board,o),console.log("Computer Turn, Atacked on: "+t+" - "+r+"\n Player Board \n"+JSON.stringify(n.Board)),0),playerInit:()=>{const e=n(5,"Carrier"),t=n(4,"Battleship"),r=n(3,"Cruiser"),o=n(3,"Submarine"),s=n(2,"Destroyer"),i=(e.ships,e.fill_ship(e.Lengths)),l=t.fill_ship(t.Lengths),a=r.fill_ship(r.Lengths),u=o.fill_ship(o.Lengths),p=s.fill_ship(s.Lengths);return e.ships[e.Name]=i,e.ships[t.Name]=l,e.ships[r.Name]=a,e.ships[o.Name]=u,e.ships[s.Name]=p,console.log(`Soy PLayer Init function: ${JSON.stringify(e.ships)}`),[e,t,r,o]},computerInit:()=>{const e=n(5,"Carrier"),t=n(4,"Battleship"),r=n(3,"Cruiser"),o=n(3,"Submarine"),s=n(2,"Destroyer"),i=(e.ships,e.fill_ship(e.Lengths)),l=t.fill_ship(t.Lengths),a=r.fill_ship(r.Lengths),u=o.fill_ship(o.Lengths),p=s.fill_ship(s.Lengths);return e.ships[e.Name]=i,e.ships[t.Name]=l,e.ships[r.Name]=a,e.ships[o.Name]=u,e.ships[s.Name]=p,console.log(`Soy Computer Init function: ${JSON.stringify(e.ships)}`),[e,t,r,o,s]},fillPlayerMoves:e=>{for(let t=0;t<100;t+=1)e[t]=t+1;return e},fillComputerMoves:e=>{for(let t=0;t<100;t+=1)e[t]=t+1;return e}});const i=document.getElementById("text-action"),l=document.getElementById("text-x"),a=document.getElementById("text-y"),u=document.getElementById("btn-action"),p=document.getElementById("btn-place"),c=document.getElementById("messages"),h=s("MephistoDevelop");h.fillPlayerMoves([]);c.innerText=`${h.Name} Turn`;const f=h.playerInit(),d=h.computerInit(),m=o();m.Board=m.drawBoardPlayer(),m.BoardComputer=m.drawBoardPlayer(),console.log(JSON.stringify(m));u.addEventListener("click",()=>{(()=>{console.log(`clicked me !! \n Box: ${i.value}`),i.value="";const e=l.value,t=a.value,r=h.Turn;0===r?(h.Turn=h.Move(h.Turn,e,t,m,f),console.log("Player Turn")):(h.Turn=h.Move(h.Turn,e,t,m,d),console.log(`Computer.Turn: ${r} - ${0===r}`))})()}),p.addEventListener("click",()=>{(e=>{const t=parseInt(l.value,10),r=parseInt(a.value,10),n=i.value,o=parseInt(n,10),s=e[o];console.log(`X: ${t} Y: ${r} , ShiPos: ${o} , ChoosenShip: ${JSON.stringify(s)}`),console.log(m.placeShip(s,m.Board,t,r,!0))})(f)})}]);