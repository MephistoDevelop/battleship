/* eslint-disable no-param-reassign */
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
    let winner = false;

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
    const turn = player.Turn;
    board.Board = board.drawBoardPlayer();
    const position = 5;
    board.BoardComputer = computerShips[position];
    let hit = false;

    message.innerHTML = 'Place your Ships and Press Start';
    message.style.backgroundColor = 'rgba(0,0,255,0.3)';

    for (let i = 0; i < 100; i += 1) {
      const x = Math.floor(i / 10);
      const y = i % 10;
      boxs[i].innerText = `${x}-${y}`;
    }

    const checkWinner = (turn) => {
      let name = '';

      if (turn === 0) {
        name = player.Name;
        if (board.checkShipsSunked(playerShips[0])) {
          message.innerHTML = `Game Finished !! ${name} Wins. Wait few seconds to start new game`;
          message.style.backgroundColor = 'rgba(0,255,0,0.6)';
          winner = true;
          for (let i = boxs.length / 2; i < boxs.length; i += 1) {
            boxs[i].click = '';
          }
        }
      } else {
        name = 'Computer';
        if (board.checkShipsSunked(computerShips[0])) {
          message.innerText = `Game Finished !! ${name} Wins`;
          message.style.backgroundColor = 'rgba(0,255,0,0.6)';
          winner = true;
          for (let i = 0; i < boxs.length / 2; i += 1) {
            boxs[i].click = '';
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
      vertical,
      board
    ) => {
      try {
        const x = parseInt(txtx.value, 10) || txtx;
        const y = parseInt(txty.value, 10) || txty;
        if (!board.placeShip(ShipsArray[number], board.Board, x, y, vertical)) {
          message.style.backgroundColor = 'rgba(255, 3, 0,0.5 )';
          message.innerHTML = 'PLace Your Ship in a Valid Position';
        } else {
          const size = ShipsArray[number].Lengths;

          for (let i = 0; i < size; i += 1) {
            let newnumber = 0;
            if (vertical) {
              if (y === 0) newnumber = i;
              else newnumber = parseInt(`${y + i}${x}`, 10);
            } else {
              if (y === 0) newnumber = i;
              else newnumber = parseInt(`${y}${x + i}`, 10);
            }
            boxs[newnumber].innerText = ShipsArray[number].Name;
            if (ShipsArray[number].Name === 'Submarine') {
              boxs[newnumber].style.backgroundColor = 'rgba(226, 63, 40,1 )';
            }
            if (ShipsArray[number].Name === 'Destroyer') {
              boxs[newnumber].style.backgroundColor = 'rgba(26, 63, 180,1 )';
            }
            if (ShipsArray[number].Name === 'Cruiser') {
              boxs[newnumber].style.backgroundColor = 'rgba(26, 233, 20,1 )';
            }
            if (ShipsArray[number].Name === 'Carrier') {
              boxs[newnumber].style.backgroundColor = 'rgba(216, 146, 49,1 )';
            }
            if (ShipsArray[number].Name === 'Battleship') {
              boxs[newnumber].style.backgroundColor = 'rgba(132, 104, 106,1 )';
            }
          }
        }
      } catch (error) {
        const message = document.getElementById('messages');
        message.innerHTML = `Place your ships  and press Start Game  ${error.message}`;
        message.style.backgroundColor = 'rgba(255,0,0,0.7)';
        setTimeout(() => {
          message.innerHTML = '';
          message.style.backgroundColor = 'transparent';
        }, 3000);
      }
    };

    btnPlaceShip.addEventListener('click', () => {
      const choosenShipNumber = parseInt(txtbox.value, 10);
      displayShipPlayer(
        boxs,
        txtx,
        txty,
        txtbox,
        playerShips,
        choosenShipNumber,
        vertical,
        board
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

    const cleanBoard = () => {
      txty.value = '';
      txtx.value = '';
      txtbox.selected = 0;
      board.Board = board.drawBoardPlayer();
      for (let i = 0; i < 100; i += 1) {
        const x = Math.floor(i / 10);
        const y = i % 10;
        boxs[i].innerText = `${x}-${y}`;
        boxs[i].style.backgroundColor = 'rgba(26, 63, 40, 1)';
      }
    };

    btnRandom.addEventListener('click', () => {
      cleanBoard();
      displayShipPlayer(boxs, 1, 1, txtbox, playerShips, 0, false, board);
      board.placeShip(playerShips[0], board.Board, 1, 1);
      displayShipPlayer(boxs, 8, 2, txtbox, playerShips, 1, true, board);
      board.placeShip(playerShips[1], board.Board, 8, 2, true);
      displayShipPlayer(boxs, 1, 3, txtbox, playerShips, 2, true, board);
      board.placeShip(playerShips[2], board.Board, 1, 3, true);
      displayShipPlayer(boxs, 3, 7, txtbox, playerShips, 3, false, board);
      board.placeShip(playerShips[3], board.Board, 3, 7, false);
      displayShipPlayer(boxs, 7, 8, txtbox, playerShips, 4, false, board);
      board.placeShip(playerShips[4], board.Board, 7, 8, false);
    });

    const renderships = (board, boxs) => {
      for (let x = 0; x < 10; x += 1) {
        for (let y = 0; y < 10; y += 1) {
          if (board[x][y] !== '-') {
            const number = parseInt(`${x}${y}`, 10);
            boxs[number + 100].style.backgroundColor = ' rgba(26, 63, 40,.98 )';
          }
        }
      }
    };

    btnStart.addEventListener('click', () => {
      renderships(board.BoardComputer, boxs);
      for (let i = boxs.length / 2; i < boxs.length; i += 1) {
        const x = boxs[i].getAttribute('data-position-x');
        const y = boxs[i].getAttribute('data-position-y');
        // eslint-disable-next-line no-loop-func
        boxs[i].addEventListener('click', () => {
          if (turn === 0) {
            player.Turn = 0;
            const position = 1;
            hit = player.Move(player.Turn, x, y, board, playerShips)[position];
            checkWinner(turn);
            if (!winner) {
              lblmessage.innerText = 'Computer Turn';
              setTimeout(() => {
                lblmessage.innerText = `${player.Name} Turn`;
                lblmessage.style.backgroundColor = 'rgba(0,255,0,0.6)';
              }, 1000);
            }
            if (winner) {
              document.querySelector('.board').style.pointerEvents = 'none';
              setTimeout(window.location.reload.bind(window.location), 3000);
            }

            if (boxs[i].style.backgroundImage !== 'none') {
              boxs[i].style.pointerEvents = 'none';
            }

            player.Turn = 1;

            if (hit) {
              boxs[i].style.backgroundImage = "url('./img/hole.png')";
              boxs[i].style.backgroundColor = 'rgba(225, 28, 28,1)';
            } else {
              boxs[i].style.backgroundImage = "url('./img/ex.png')";
            }

            setTimeout(() => {
              const computerCoordinatesAtack = player.Move(
                player.Turn,
                0,
                0,
                board,
                computerShips
              );
              const zero = 0;
              const one = 1;
              const two = 2;
              const number = parseInt(
                `${computerCoordinatesAtack[one]}${computerCoordinatesAtack[zero]}`,
                10
              );
              hit = computerCoordinatesAtack[two];
              checkWinner(turn);
              player.Turn = 0;
              boxs[number].style.opacity = '1';
              if (hit) {
                boxs[number].style.backgroundImage = "url('./img/hole.png')";
                boxs[number].style.backgroundColor = 'rgba(26, 63, 40,0.7 )';
              } else boxs[number].style.backgroundImage = "url('./img/ex.png')";
              player.computerMoves.push(number);
            }, 600);
          }
        });
      }

      message.innerHTML = 'Game Started , atack computer Board';
      message.style.backgroundColor = 'rgba(0,255,0,0.6)';

      document.getElementById('content-hide').className = 'hide';
    });

    btnClean.addEventListener('click', () => {
      cleanBoard();
    });
  };
  return { render };
})();

export default display;
