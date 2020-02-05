import ship from './ships';

const gameBoard = () => ({
  Board: [],
  BoardComputer: [],
  drawBoardPlayer: () => {
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
          console.log('answer: ' + answer + '  Board[x+' + i + '] : ' + Board[y][(x + i)]);
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
    return `X: ${y} - Y: ${x}, ${JSON.stringify(newBoard)} `;
  },

  receiveAtack: (x, y, board, ships) => {
    const shipFactory = ships[0];
    let answer = '';
    const shipsArray = shipFactory.ships;
    const isEmptyCell = board[y][x] === '-';
    //console.log('im board on Position[' + y + '][' + x + ']:');// + board[x][y]);
    if (isEmptyCell) {
      board[y][x] = 'X';
      answer = 'Failed on:  X: ' + x + ' Y: ' + y + 'Empty Cell? :' + isEmptyCell;
    } else {
      // console.log(shipsArray);
      const shipName = (board[y][x]).split('');
      const name = (shipName.splice(0, shipName.length - 1)).join('');
      const hittedShipPosition = parseInt(shipName);
      shipFactory.hit(shipsArray, hittedShipPosition, name);
      board[y][x] = `${name}X`;
      answer = `${JSON.stringify(shipsArray)}- ${name} - ${hittedShipPosition} \n Atacked on Pos; X: ${x}:   Y: ${y}:    Empty Cell ? : ${isEmptyCell}    \n BoardArr:  ${board}`;
    }
    return answer;
  },

  checkShipsSunked: (shipObj) => {
    let answer = false;
    const Obj = shipObj;
    const shipCruiser = Obj.ships.Cruiser;
    const shipSubmarine = Obj.ships.Submarine;
    const shipDestroyer = Obj.ships.Destroyer;
    const shipCarrier = Obj.ships.Carrier;
    const shipBattleship = Obj.ships.Battleship;

    if (Obj.isSunk(shipCruiser) && Obj.isSunk(shipSubmarine) && Obj.isSunk(shipCarrier) && Obj.isSunk(shipDestroyer) && Obj.isSunk(shipBattleship)) answer = true;
    return answer;
  },
});
export default gameBoard;
