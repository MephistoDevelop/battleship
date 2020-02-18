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
    const btnReStart = document.getElementById('btn-restart');
    const btnRandom = document.getElementById('btn-random');
    const checkBox = document.getElementById('checkbox');
    const txtbox = document.getElementById('text-action');
    const txtname = document.getElementById('txt-name');
    const txtx = document.getElementById('text-x');
    const txty = document.getElementById('text-y');
    const message = document.getElementById('messages');
    btnReStart.className = 'hide';
    let boardUI = '';
    const name = 'Player 1';
    const board = gameBoard();
    let check = false;
    let vertical = false;
    let winner = false;
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
    let player = Player(name);
    let playerShips = player.playerInit();
    let computerShips = player.computerInit();
    const turn = player.Turn;
    board.Board = board.drawBoardPlayer();
    board.BoardComputer = computerShips[5];
    let hit = false;

    message.innerHTML = 'Place your Ships and Press Start';
    message.style.backgroundColor = 'rgba(0,0,255,0.3)';

    for (let i = 0; i < 100; i += 1) {
      const x = Math.floor(i / 10);
      const y = i % 10;
      boxs[i].innerText = `${x}-${y}`;
    }

    // const unclick = () => {
    //   for (let i=0;i<200;i+=1){
    //     if boxs[i].style.backgroundImage !== 'none' {
    //       boxs[i].style.pointerEvents='none';
    //     }
    //   }
    // }

    const checkWinner = (turn) => {
      let name = '';

      if (turn === 0) {
        name = player.Name;
        if (board.checkShipsSunked(computerShips[0])) {
          message.innerHTML = `Game Finished !! ${name} Wins. Wait few seconds to start new game`;
          message.style.backgroundColor = 'rgba(0,255,0,0.6)';
          winner = true;
          for (let i = boxs.length / 2; i < boxs.length; i += 1) {
            boxs[i].click = '';
          }
        }
      } else {
        //console.log(`Ships COmputer: ${JSON.stringify(computerShips[0])}`);
        name = 'Computer';
        if (board.checkShipsSunked(playerShips[0])) {
          console.log('Coputer wins the Game');
          message.innerText = 'Game Finished !! Coputer Wins';
          message.style.backgroundColor = 'rgba(0,255,0,0.6)';
          winner = true;
          for (let i = boxs.length / 2; i < boxs.length; i += 1) {
            boxs[i].click = '';
          }
        }
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
      // console.log(`PlayerBoard \n ${JSON.stringify(board)}`);
    });

    btnStart.addEventListener('click', () => {
      if (checkStartInit()) {
        if (txtname.value !== '') player.Name = txtname.value;
        btnReStart.classList.remove('hide');
        btnStart.className = 'hide';
        startGame();
      } else {
        message.innerText = 'Place your ship and then press Start';
        message.style.backgroundColor = 'rgba(255,0,0,0.6)';
      }
    });

    btnReStart.addEventListener('click', () => {
      restartGame();
    });

    btnClean.addEventListener('click', () => {
      cleanBoard();
    });

    const cleanBoard = () => {
      txty.value = '';
      txtx.value = '';
      txtbox.selected = 0;
      board.Board = board.drawBoardPlayer();
      board.BoardComputer = board.drawBoardPlayer();
      board.BoardComputer = computerShips[5];
      boardUI = '';
      for (let x = 0; x < 10; x += 1) {
        for (let y = 0; y < 10; y += 1) {
          boardUI += `<div data-position-x=${x} data-position-y=${y} class="box" id="box${x}${y}"></div>`;
        }
      }
      human.innerHTML = boardUI;
      computer.innerHTML = boardUI;
      for (let i = 0; i < 100; i += 1) {
        const x = Math.floor(i / 10);
        const y = i % 10;
        boxs[i].innerText = `${x}-${y}`;
        boxs[i].style.backgroundColor = 'rgba(26, 63, 40, 1)';
        boxs[i].style.backgroundImage = 'none';
      }
      for (let i = 100; i < 200; i += 1) {
        boxs[i].style.backgroundColor = 'rgba(26, 63, 40, 1)';
        boxs[i].style.backgroundImage = 'none';
      }
    };

    const checkStartInit = () => {
      let ship1 = false;
      let ship2 = false;
      let ship3 = false;
      let ship4 = false;
      let ship5 = false;
      for (let i = 0; i < board.Board.length; i += 1) {
        if (board.Board[i].includes('Battleship0')) ship1 = true;
        if (board.Board[i].includes('Submarine0')) ship2 = true;
        if (board.Board[i].includes('Carrier0')) ship3 = true;
        if (board.Board[i].includes('Destroyer0')) ship4 = true;
        if (board.Board[i].includes('Cruiser0')) ship5 = true;
      }

      if (ship1 && ship2 && ship3 && ship4 && ship5) {
        return true;
      }
      return false;
    };
    const startGame = () => {
      if (checkStartInit()) {
        renderships(board.BoardComputer, boxs);
        for (let i = boxs.length / 2; i < boxs.length; i += 1) {
          const x = boxs[i].getAttribute('data-position-x');
          const y = boxs[i].getAttribute('data-position-y');
          // eslint-disable-next-line no-loop-func
          boxs[i].addEventListener('click', (e) => {
            if (turn === 0) {
              player.Turn = 0;
              hit = player.Move(player.Turn, x, y, board, playerShips)[1];
              checkWinner(turn);
              if (!winner) {
                lblmessage.innerText = 'Computer Turn';
                setTimeout(() => {
                  lblmessage.innerText = `${player.Name} Turn`;
                  lblmessage.style.backgroundColor = 'rgba(0,255,0,0.6)';
                }, 500);
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
                const number = parseInt(`${x}${y}`, 10);
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
                const number = parseInt(
                  `${computerCoordinatesAtack[1]}${computerCoordinatesAtack[0]}`,
                  10
                );
                hit = computerCoordinatesAtack[2];
                checkWinner(player.Turn);
                // console.log(`HItted number ${number}`);
                player.Turn = 0;
                boxs[number].style.opacity = '1';
                // console.log(
                //   `Coputer Atack: ${number} Hit: ${hit} computerCoordinate:${
                //     computerCoordinatesAtack[2]
                //   } Board: ${JSON.stringify(board.Board)} \n Y: ${
                //     computerCoordinatesAtack[1]
                //   } X: ${computerCoordinatesAtack[0]}`
                // );
                if (hit) {
                  boxs[number].style.backgroundImage = "url('./img/hole.png')";
                  boxs[number].style.backgroundColor = 'rgba(26, 63, 40,0.7 )';
                } else
                  boxs[number].style.backgroundImage = "url('./img/ex.png')";
                player.computerMoves.push(number);
              }, 150);
            }
            const clone = boxs[i].cloneNode(true);
            boxs[i].parentNode.replaceChild(clone, boxs[i]);
          });
        }

        message.innerHTML = 'Game Started , atack computer Board';
        message.style.backgroundColor = 'rgba(0,255,0,0.6)';
        document.getElementById('content-hide').className = 'hide';
      } else {
        message.innerHTML =
          'Write your name Place your ships and then press Start';
        message.style.backgroundColor = 'rgba(255,0,0,0.6)';
      }
    };
    const restartGame = () => {
      btnStart.classList.remove('hide');
      btnReStart.className = 'hide';
      cleanBoard();
      player = Player('MephistoDevelop');
      playerShips = player.playerInit();
      computerShips = player.computerInit();
      computerMovs = [];
      winner = false;
      player.turn = 0;
      btnStart.innerText = 'Start Game';
      message.innerHTML = 'Game Re-Started , Place your Ships and  Press Start';
      message.style.backgroundColor = 'rgba(0,255,0,0.6)';
      document.getElementById('content-hide').classList.remove('hide');
      board.Board = board.drawBoardPlayer();
      board.BoardComputer = computerShips[5];
      btnStart.click = '';
    };
  };
  const renderships = (board, boxs) => {
    for (let x = 0; x < 10; x += 1) {
      for (let y = 0; y < 10; y += 1) {
        if (board[x][y] !== '-') {
          const number = parseInt(`${x}${y}`, 10);
          //  boxs[number + 100].innerText = board[x][y];
          boxs[number + 100].style.backgroundColor = ' rgba(26, 63, 40,0.98 )';
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
        // console.log(
        //   `X:${x} Y:${y} \n on: ${
        //     ShipsArray[number].Name
        //   }\n an  Boards: \n ${JSON.stringify(board.Board)}`
        // );

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
            // console.log(`Im new number ${y.value}${x.value} ${newnumber}`);
          }
          // console.log(
          //   `Im Size: ${size} i: ${i} newNumber : ${newnumber} \n Vertical: ${vertical}`
          // );
          boxs[newnumber].innerText = ShipsArray[number].Name;
          if (ShipsArray[number].Name === 'Submarine')
            boxs[newnumber].style.backgroundColor = 'rgba(226, 63, 40,1 )';
          if (ShipsArray[number].Name === 'Destroyer')
            boxs[newnumber].style.backgroundColor = 'rgba(26, 63, 180,1 )';
          if (ShipsArray[number].Name === 'Cruiser')
            boxs[newnumber].style.backgroundColor = 'rgba(26, 233, 20,1 )';
          if (ShipsArray[number].Name === 'Carrier')
            boxs[newnumber].style.backgroundColor = 'rgba(216, 146, 49,1 )';
          if (ShipsArray[number].Name === 'Battleship')
            boxs[newnumber].style.backgroundColor = 'rgba(132, 104, 106,1 )';
          // boxs[newnumber].style.backgroundColor = `rgba(${color}, ${color2}, ${color3},1)`;
        }
      }
      // console.log(
      //   `X:${x} Y:${y}Choosen number: ${number}\n on: ${
      //     ShipsArray[number].Name
      //   }\n an  Boards: \n ${JSON.stringify(board.Board)}`
      // );

      // console.log(
      //   `im X: ${x} Y: ${y} : Choosen: ${JSON.stringify(ShipsArray)}`
      // );
    } catch (error) {
      const message = document.getElementById('messages');
      message.innerHTML = 'Place your ships  and press Start Game';
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
