import ship from './ships';

const gameBoard = () => ({
  drawBoard: () => {
    const board = [];
    for (let i = 0; i < 10; i += 1) {
      const arr = [];
      for (let j = 0; j < 10; j += 1) {
        arr[j] = '-';
      }
      board.push(arr);
    }
    return board;
  },

  placeShip: (ship, board, x, y, vertical = false) => {
    const Ship = ship;
    const newBoard = board;
    if (Ship.Name) {
      const checkEmptyCells = (Board) => {
        let answer = false;
        for (let i = 0; i < Ship.Lengths; i += 1) {
          //  console.log('answer: ' + answer + '  Board[x+' + i + '] : ' + Board[y][(x + i)]);
          if (Board[y][(x + i)] === '-') {
            answer = true;
          } else {
            answer = false;
            break;
          }
        }
        return answer;
      };

      if ((x + Ship.Lengths) <= 10 && checkEmptyCells(newBoard)) {
        for (let i = 0; i < Ship.Lengths; i += 1) {
          newBoard[y][(x + i)] = `${Ship.Name}${i}`;
        }
      } else {
        console.log('place your ship in a valid position');
      }
    }
    return `X: ${x} - Y: ${y}, ${JSON.stringify(newBoard)} `;
  },

  receiveAtack: (x, y, board, ships) => {
    const shipFactory = ships;
    let answer = '';
    const shipsArray = ships;
    const isEmptyCell = board[x][y] === '-';
    console.log('im board[' + x + '][' + y + ']: ' + board[x][y]);
    if (isEmptyCell) {
      board[x][y] = 'X';
      answer = 'Failed on:  X: ' + x + ' Y: ' + y + 'Empty Cell? :' + isEmptyCell;
    } else {
      console.log(shipsArray);
      const shipName = (board[x][y]).split('');
      const name = (shipName.splice(0, shipName.length - 1)).join('');
      const hittedShipPosition = parseInt(shipName);
      //shipFactory.hit(shipsArray, hittedShipPosition, name);
      answer = `${name} - ${hittedShipPosition}  Atacked on Pos; X: ${x}:   Y: ${y}:    Empty Cell ? : ${isEmptyCell}      ${board}`;
    }
    return answer;
  },
});
export default gameBoard;
