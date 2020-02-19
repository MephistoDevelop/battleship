import ship from './ships';
import gameBoard from './GameBoard';

let Moves = [];
const Player = (name) => ({
  Name: name,
  Turn: 0,
  computerMoves: [],
  Move: (Turn, x, y, board, createdShip) => {
    let hit = false;

    if (Turn === 0) {
      hit = board.receiveAtack(y, x, board.BoardComputer, createdShip);
      return [1, hit];
    }

    let ComputerMoveX = parseInt((0 + Math.random()) * (10 - 0), 10);
    let ComputerMoveY = parseInt((0 + Math.random()) * (10 - 0), 10);
    let number = parseInt(`${ComputerMoveY}${ComputerMoveX}`, 10);

    if (Moves.includes(number)) {
      while (Moves.includes(number)) {
        if (Moves.length >= 98) break;
        ComputerMoveX = parseInt((0 + Math.random()) * (10 - 0), 10);
        ComputerMoveY = parseInt((0 + Math.random()) * (10 - 0), 10);
        number = parseInt(`${ComputerMoveY}${ComputerMoveX}`, 10);
        if (!Moves.includes(number)) {
          Moves.push(number);
          hit = board.receiveAtack(
            ComputerMoveX,
            ComputerMoveY,
            board.Board,
            createdShip
          );

          break;
        }
      }
    } else {
      Moves.push(number);
      hit = board.receiveAtack(
        ComputerMoveX,
        ComputerMoveY,
        board.Board,
        createdShip
      );
    }

    return [ComputerMoveX, ComputerMoveY, hit];
  },
  playerInit: () => {
    const createdShip = ship(5, 'Carrier');
    const createdBattleShip = ship(4, 'Battleship');
    const createdCruiser = ship(3, 'Cruiser');
    const createdSubmarine = ship(3, 'Submarine');
    const createdDestroyer = ship(2, 'Destroyer');

    // Create arrays from every ship from player
    const arr = createdShip.fill_ship(createdShip.Lengths);
    const arrBattleship = createdBattleShip.fill_ship(
      createdBattleShip.Lengths
    );
    const arrCuiser = createdCruiser.fill_ship(createdCruiser.Lengths);
    const arrSubmarine = createdSubmarine.fill_ship(createdSubmarine.Lengths);
    const arrDestroyer = createdDestroyer.fill_ship(createdDestroyer.Lengths);

    // Push ship arrays on hash of ships from player
    createdShip.ships[createdShip.Name] = arr;
    createdShip.ships[createdBattleShip.Name] = arrBattleship;
    createdShip.ships[createdCruiser.Name] = arrCuiser;
    createdShip.ships[createdSubmarine.Name] = arrSubmarine;
    createdShip.ships[createdDestroyer.Name] = arrDestroyer;

    return [
      createdShip,
      createdBattleShip,
      createdCruiser,
      createdSubmarine,
      createdDestroyer
    ];
  },
  computerInit: () => {
    const createdShipComputer = ship(5, 'Carrier');
    const createdBattleShip = ship(4, 'Battleship');
    const createdCruiser = ship(3, 'Cruiser');
    const createdSubmarine = ship(3, 'Submarine');
    const createdDestroyer = ship(2, 'Destroyer');

    // Create arrays from every ship from player
    const arr = createdShipComputer.fill_ship(createdShipComputer.Lengths);
    const arrBattleship = createdBattleShip.fill_ship(
      createdBattleShip.Lengths
    );
    const arrCuiser = createdCruiser.fill_ship(createdCruiser.Lengths);
    const arrSubmarine = createdSubmarine.fill_ship(createdSubmarine.Lengths);
    const arrDestroyer = createdDestroyer.fill_ship(createdDestroyer.Lengths);

    // Push ship arrays on hash of ships from player
    createdShipComputer.ships[createdShipComputer.Name] = arr;
    createdShipComputer.ships[createdBattleShip.Name] = arrBattleship;
    createdShipComputer.ships[createdCruiser.Name] = arrCuiser;
    createdShipComputer.ships[createdSubmarine.Name] = arrSubmarine;
    createdShipComputer.ships[createdDestroyer.Name] = arrDestroyer;

    const board = gameBoard();
    const boardArr = board.drawBoardPlayer();

    board.placeShip(createdShipComputer, boardArr, 1, 2, true);
    board.placeShip(createdBattleShip, boardArr, 5, 1, false);
    board.placeShip(createdCruiser, boardArr, 2, 6, true);
    board.placeShip(createdSubmarine, boardArr, 6, 6, false);
    board.placeShip(createdDestroyer, boardArr, 4, 3, true);

    return [
      createdShipComputer,
      createdBattleShip,
      createdCruiser,
      createdSubmarine,
      createdDestroyer,
      boardArr
    ];
  },
  fillPlayerMoves: (playerBoard) => {
    const board = playerBoard;
    for (let i = 0; i < 100; i += 1) {
      board[i] = i + 1;
    }
    return board;
  },
  fillComputerMoves: (computerBoard) => {
    const board = computerBoard;
    for (let i = 0; i < 100; i += 1) {
      board[i] = i + 1;
    }
    return board;
  }
});

Moves = Player('').computerMoves;

export default Player;
