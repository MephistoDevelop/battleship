import Player from './players';
import gameBoard from './GameBoard';

const display = (() => {
  const render = () => {
    const human = document.querySelector('.human');
    const computer = document.querySelector('.computer');
    let boardUI = '';
    const board = gameBoard();

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


    for (let i = (boxs.length / 2); i < boxs.length; i += 1) {
      const x = boxs[i].getAttribute('data-position-x');
      const y = boxs[i].getAttribute('data-position-y');
      // eslint-disable-next-line no-loop-func

      boxs[i].addEventListener('click', () => {
        if (turn === 0) {
          player.Turn = player.Move(player.Turn, x, y, board, playerShips);
          lblmessage.innerText = `${Player.Name} Turn ${JSON.stringify(playerShips)}`;
          turn = 1;
          const computerCoordinatesAtack = player.Move(player.Turn, x, y, board, computerShips);
          lblmessage.innerText = `${player.Name} Turn`;
          const number = parseInt(`${computerCoordinatesAtack[0]}${computerCoordinatesAtack[1]}`, 10);
          boxs[number].style.backgroundImage = "url('./img/ex.png')"
          turn = 0;

        } else {

          //  console.log(`Computer Turn: ${turn} - ${turn === 0}`);
        }
        if (i % 2 === 0) boxs[i].style.backgroundImage = "url('./img/hole.png')";
        else boxs[i].style.backgroundImage = "url('./img/ex.png')";
        //  console.log(`${x} - ${y} \n ${JSON.stringify(playerShips)} \n Computer Ships: \n ${computerShips} `);
      });
    }
  };

  return { render };
})();

export default display;