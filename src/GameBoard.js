/* eslint-disable radix */
/* eslint-disable no-param-reassign */

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

  placeShip: (ships, board, x, y, vertical = false) => {
    const Ship = ships;
    const newBoard = board;
    let existShiponBoard = false;
    if (Ship.Name) {
      for (let i = 0; i < board.length; i += 1) {
        const name = `${Ship.Name}0`;
        if (board[i].includes(name)) {
          existShiponBoard = true;
          break;
        }
      }
      if (existShiponBoard) {
        return false;
      }
      const checkEmptyHorizontalCells = (Board) => {
        let answer = false;
        for (let i = 0; i < Ship.Lengths; i += 1) {
          if (Board[y][x + i] === '-') {
            answer = true;
          } else {
            answer = false;
            break;
          }
        }
        return answer;
      };
      const checkEmptyVerticalCells = (Board) => {
        let answer = false;
        for (let i = 0; i < Ship.Lengths; i += 1) {
          if (Board[y + i][x] === '-') {
            answer = true;
          } else {
            answer = false;
            break;
          }
        }
        return answer;
      };
      if (
        x + Ship.Lengths <= 10
          && checkEmptyHorizontalCells(newBoard)
          && vertical === false
      ) {
        for (let i = 0; i < Ship.Lengths; i += 1) {
          newBoard[y][x + i] = `${Ship.Name}${i}`;
        }
      } else if (
        y + Ship.Lengths <= 10
          && checkEmptyVerticalCells(newBoard)
          && vertical === true
      ) {
        for (let i = 0; i < Ship.Lengths; i += 1) {
          newBoard[y + i][x] = `${Ship.Name}${i}`;
        }
      }
    }
    return `X: ${y} - Y: ${x}, ${JSON.stringify(newBoard)} `;
  },

  receiveAtack: (x, y, Board, ships) => {
    const board = Board;
    const shipFactory = ships[0];
    let answer = '';
    const shipsArray = shipFactory.ships;
    const isEmptyCell = board[y][x] === '-';
    if (isEmptyCell) {
      board[y][x] = 'X';
      answer = false;
    } else {
      const shipName = board[y][x].split('');
      const name = shipName.splice(0, shipName.length - 1).join('');
      if (name !== '') {
        const hittedShipPosition = parseInt(shipName);
        shipFactory.hit(shipsArray, hittedShipPosition, name);
        board[y][x] = `${name}X`;
        answer = true;
      }
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

    if (
      Obj.isSunk(shipCruiser)
      && Obj.isSunk(shipSubmarine)
      && Obj.isSunk(shipCarrier)
      && Obj.isSunk(shipDestroyer)
      && Obj.isSunk(shipBattleship)
    ) answer = true;
    return answer;
  },
});
export default gameBoard;
