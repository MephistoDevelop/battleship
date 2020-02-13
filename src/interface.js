/* eslint-disable no-loop-func */
import Player from './players';
import gameBoard from './GameBoard';

const display = (() => {
  const render = () => {
    const human = document.querySelector('.human');
    const computer = document.querySelector('.computer');
    const btnPlaceShip = document.getElementById('btn-place');
    const btnClean = document.getElementById('btn-clean');
    const btnStart = document.getElementById('btn-start');
    const btnRandom = document.getElementById('btn-random');
    const checkBox = document.getElementById('checkbox');
    const txtbox = document.getElementById('text-action');
    const txtx = document.getElementById('text-x');
    const txty = document.getElementById('text-y');
    const message = document.getElementById('messages');
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
    let hit = false;

    message.innerHTML = 'Place your Ships and Press Start';
    message.style.backgroundColor = 'rgba(0,0,255,0.3)';

    for (let i = 0; i < 100; i += 1) {
      let x = Math.floor(i / 10);
      let y = i % 10;
      boxs[i].innerText = `${x}-${y}`;
    }

    btnPlaceShip.addEventListener('click', () => {
      const choosenShipNumber = parseInt(txtbox.value, 10);
      displayShipPlayer(
        boxs,
        txtx,
        txty,
        txtbox,
        playerShips,
        choosenShipNumber,
        vertical
      );
      txtx.innerText = '';
      txty.innerText = '';
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

    btnRandom.addEventListener('click', () => {
      cleanBoard();
      displayShipPlayer(boxs, 1, 1, txtbox, playerShips, 0, false);
      board.placeShip(playerShips[0], board.Board, 1, 1);
      displayShipPlayer(boxs, 8, 2, txtbox, playerShips, 1, true);
      board.placeShip(playerShips[1], board.Board, 8, 2, true);
      displayShipPlayer(boxs, 1, 3, txtbox, playerShips, 2, true);
      board.placeShip(playerShips[2], board.Board, 1, 3, true);
      displayShipPlayer(boxs, 3, 7, txtbox, playerShips, 3, false);
      board.placeShip(playerShips[3], board.Board, 3, 7, false);
      displayShipPlayer(boxs, 7, 8, txtbox, playerShips, 4, false);
      board.placeShip(playerShips[4], board.Board, 7, 8, false);
      console.log(`PlayerBoard \n ${JSON.stringify(board)}`);
    });

    btnStart.addEventListener('click', () => {
      renderships(board.BoardComputer, boxs);
      for (let i = boxs.length / 2; i < boxs.length; i += 1) {
        const x = boxs[i].getAttribute('data-position-x');
        const y = boxs[i].getAttribute('data-position-y');
        // eslint-disable-next-line no-loop-func

        boxs[i].addEventListener('click', () => {
          console.log('im turn' + turn);
          if (turn === 0) {
            player.Turn = 0;
            hit = player.Move(player.Turn, x, y, board, playerShips)[1];
            lblmessage.innerText = `${Player.Name} Turn ${turn}`;
            player.Turn = 1;

            if (hit) {
              const number = parseInt(`${x}${y}`, 10);
              // if (board.BoardComputer[] === 'Submarine') boxs[newnumber].style.backgroundColor = `rgba(226, 63, 40,1 )`;
              // if (ShipsArray[number].Name === 'Destroyer') boxs[newnumber].style.backgroundColor = `rgba(26, 63, 180,1 )`;
              // if (ShipsArray[number].Name === 'Cruiser') boxs[newnumber].style.backgroundColor = `rgba(26, 233, 20,1 )`;
              // if (ShipsArray[number].Name === 'Carrier') boxs[newnumber].style.backgroundColor = `rgba(216, 146, 49,1 )`;
              // if (ShipsArray[number].Name === 'Battleship') boxs[newnumber].style.backgroundColor = `rgba(132, 104, 106,1 )`;
              boxs[i].style.backgroundImage = "url('./img/hole.png')";
              boxs[i].style.backgroundColor = 'rgba(225, 28, 28,1)';
            } else boxs[i].style.backgroundImage = "url('./img/ex.png')";

            setTimeout(() => {
              const computerCoordinatesAtack = player.Move(
                player.Turn,
                0,
                0,
                board,
                computerShips
              );
              const number = parseInt(
                `${computerCoordinatesAtack[1]}${computerCoordinatesAtack[0]}`,
                10
              );
              hit = computerCoordinatesAtack[2];
              player.Turn = 0;
              boxs[number].style.opacity = '1';
              if (hit) {
                boxs[number].style.backgroundImage = "url('./img/hole.png')";
                boxs[number].style.backgroundColor = 'rgba(26, 63, 40,0.7 )';
              } else boxs[number].style.backgroundImage = "url('./img/ex.png')";
              player.computerMoves.push(number);
            }, 300);
          }
          console.log(player.computerMoves);
        });
      }

      message.innerHTML = 'Game Started , atack computer Board';
      message.style.backgroundColor = 'rgba(0,255,0,0.6)';
      setTimeout(() => {
        message.innerHTML = '';
        message.style.backgroundColor = 'transparent';
      }, 3000);
      document.getElementById('content-hide').className = 'hide';
    });

    btnClean.addEventListener('click', () => {
      cleanBoard();
    });

    const cleanBoard = () => {
      txty.value = '';
      txtx.value = '';
      txtbox.selected = 0;
      for (let i = 0; i < 100; i += 1) {
        let x = Math.floor(i / 10);
        let y = i % 10;
        boxs[i].innerText = `${x}-${y}`;
        boxs[i].style.backgroundColor = 'rgba(26, 63, 40, 1)';
      }
    };
  };

  const renderships = (board, boxs) => {
    for (let x = 0; x < 10; x += 1) {
      for (let y = 0; y < 10; y += 1) {
        if (board[x][y] !== '-') {
          const number = parseInt(`${x}${y}`, 10);

          //  boxs[number + 100].innerText = board[x][y];
          boxs[number + 100].style.backgroundColor = ' rgba(26, 63, 40,0.7 )';

          // console.log(`Im renderships on X: ${x} - Y: ${y} !! \n${board[x][y]}`);
        }
      }
    }
  };

  const displayShipPlayer = (
    boxs,
    txtx,
    txty,
    txtbox,
    ShipsArray,
    number,
    vertical
  ) => {
    try {
      const x = parseInt(txtx.value, 10) || txtx;
      const y = parseInt(txty.value, 10) || txty;

      console.log(
        `X:${x} Y:${y}Choosen number: ${number}\n on: ${ShipsArray[number].Name}`
      );

      const choosenShip = ShipsArray[number];
      const size = ShipsArray[number].Lengths;

      for (let i = 0; i < size; i += 1) {
        let newnumber = 0;
        if (vertical) {
          if (y === 0) newnumber = i;
          else newnumber = parseInt(`${y + i}${x}`);
        } else {
          if (y === 0) newnumber = i;
          else newnumber = parseInt(`${y}${x + i}`);
          console.log(`Im new number ${y.value}${x.value} ${newnumber}`);
        }
        console.log(
          `Im Size: ${size} i: ${i} newNumber : ${newnumber} \n Vertical: ${vertical}`
        );
        boxs[newnumber].innerText = ShipsArray[number].Name;
        if (ShipsArray[number].Name === 'Submarine')
          boxs[newnumber].style.backgroundColor = `rgba(226, 63, 40,1 )`;
        if (ShipsArray[number].Name === 'Destroyer')
          boxs[newnumber].style.backgroundColor = `rgba(26, 63, 180,1 )`;
        if (ShipsArray[number].Name === 'Cruiser')
          boxs[newnumber].style.backgroundColor = `rgba(26, 233, 20,1 )`;
        if (ShipsArray[number].Name === 'Carrier')
          boxs[newnumber].style.backgroundColor = `rgba(216, 146, 49,1 )`;
        if (ShipsArray[number].Name === 'Battleship')
          boxs[newnumber].style.backgroundColor = `rgba(132, 104, 106,1 )`;
        //boxs[newnumber].style.backgroundColor = `rgba(${color}, ${color2}, ${color3},1)`;
      }

      console.log(
        `im X: ${x} Y: ${y} : Choosen: ${JSON.stringify(ShipsArray)}`
      );
    } catch (error) {
      const message = document.getElementById('messages');
      message.innerHTML =
        'Place your ships in a valid position and press Start Game' +
        error.message;
      message.style.backgroundColor = 'rgba(255,0,0,0.7)';
      setTimeout(() => {
        message.innerHTML = '';
        message.style.backgroundColor = 'transparent';
      }, 3000);
    }
  };

  return { render };
})();

export default display;
