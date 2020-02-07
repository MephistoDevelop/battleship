/* eslint-disable no-loop-func */
import Player from './players';
import gameBoard from './GameBoard';

const display = (() => {
  const render = () => {
    const human = document.querySelector('.human');
    const computer = document.querySelector('.computer');
    const btnPlaceShip = document.getElementById('btn-place');
    const checkBox = document.getElementById('checkbox');
    const txtbox = document.getElementById('text-action');
    const txtx = document.getElementById('text-x');
    const txty = document.getElementById('text-y');
    let boardUI = '';
    const board = gameBoard();
    let check = false;
    let vertical = false;
    let computerMovs = [];
    for (let x = 0; x < 10; x += 1) {
      for (let y = 0; y < 10; y += 1) {
        boardUI += `<div data-position-x=${x} data-position-y=${y} class="box" id="box${x}${y}"></div>`;
      }
    }

    human.innerHTML = boardUI;
    computer.innerHTML = boardUI;
    const boxs = document.getElementsByClassName('box');
    const lblmessage = document.getElementById('messages');
    const player = Player('MephistoDevelop');
    const playerShips = player.playerInit();
    const computerShips = player.computerInit();
    let turn = player.Turn;
    board.Board = board.drawBoardPlayer();
    board.BoardComputer = computerShips[5];

    renderships(board.BoardComputer, boxs);
    for (let i = (boxs.length / 2); i < boxs.length; i += 1) {
      const x = boxs[i].getAttribute('data-position-x');
      const y = boxs[i].getAttribute('data-position-y');
      // eslint-disable-next-line no-loop-func

      boxs[i].addEventListener('click', () => {
        console.log('im turn' + turn);
        if (turn === 0) {
          player.Turn = 0;
          const hit = player.Move(player.Turn, x, y, board, playerShips)[1];
          lblmessage.innerText = `${Player.Name} Turn ${JSON.stringify(playerShips)}`;
          player.Turn = 1;
          if (hit) boxs[i].style.backgroundImage = "url('./img/hole.png')";
          else boxs[i].style.backgroundImage = "url('./img/ex.png')";

          setTimeout(() => {
            let computerCoordinatesAtack = player.Move(player.Turn, 0, 0, board, computerShips);
            // lblmessage.innerText = `${player.Name} Turn`;
            let number = parseInt(`${computerCoordinatesAtack[0]}${computerCoordinatesAtack[1]}`, 10);
            console.log(`Exist onarray?:${player.computerMoves.includes(number)}`);
            while (player.computerMoves.includes(number)) {
              console.log('repetead number');
              computerCoordinatesAtack = player.Move(player.Turn, 0, 0, board, computerShips);
              number = parseInt(`${computerCoordinatesAtack[0]}${computerCoordinatesAtack[1]}`, 10);
              if (!player.computerMoves.includes(number)) {
                player.computerMoves.push(number);
                boxs[number].style.backgroundImage = "url('./img/ex.png')";
                player.Turn = 0;
                break;
              }
            }
            player.computerMoves.push(number);
            boxs[number].style.backgroundImage = "url('./img/ex.png')";
            player.Turn = 0;
          }, 800);
        } else {

          //  console.log(`Computer Turn: ${turn} - ${turn === 0}`);
        }
        console.log(player.computerMoves);
        //  console.log(`${x} - ${y} \n ${JSON.stringify(playerShips)} \n Computer Ships: \n ${computerShips} `);
      });
    }

    btnPlaceShip.addEventListener('click', () => {
      console.log('Placed clicked');
      const choosenShipNumber = parseInt(txtbox.value, 10);
      displayShipPlayer(boxs, txtx, txty, txtbox, playerShips, choosenShipNumber, vertical);
    });

    checkBox.addEventListener('click', () => {
      if (check) {
        checkBox.checked = false;
        check = false;
        vertical = false;
      } else {
        checkBox.checked = true;
        check = true;
        vertical = true;
      }
    });
  };

  const renderships = (board, boxs) => {
    for (let x = 0; x < 10; x += 1) {
      for (let y = 0; y < 10; y += 1) {
        if (board[x][y] !== '-') {
          const number = parseInt(`${x}${y}`, 10);
          boxs[number + 100].innerText = board[x][y];
          boxs[number + 100].style.opacity = '0.5';
          // console.log(`Im renderships on X: ${x} - Y: ${y} !! \n${board[x][y]}`);
        }
      }
    }
  };

  const displayShipPlayer = (boxs, txtx, txty, txtbox, ShipsArray, number, vertical) => {
    const x = parseInt(txtx.value, 10);
    const y = parseInt(txty.value, 10);
    console.log(`Choosen number: ${number}\n on: ${ShipsArray[number].Name}`);

    const choosenShip = ShipsArray[number];
    const size = ShipsArray[number].Lengths;
    for (let i = 0; i < size; i += 1) {
      let newnumber = 0;
      if (vertical) {
        newnumber = parseInt(`${y + i}${x}`, 10);
      } else {
        newnumber = parseInt(`${y}${x + i}`, 10);
      }
      boxs[newnumber].innerText = ShipsArray[number].Name;
      boxs[newnumber].style.opacity = '0.5';
    }
    console.log(`im X: ${x} Y: ${y} : Choosen: ${JSON.stringify(ShipsArray)}`);
  };

  return { render };
})();

export default display;
