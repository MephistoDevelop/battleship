import ship from './ships';
import gameBoard from './GameBoard';

const Player = (name) => ({
  Name: name,
  Turn: 0,
  playerBoard: {
    name,
    Board: [],
  },
  computerBoard: {
    Board: [],
  },
  Move: (Turn, x, y, board, createdShip) => {
    if (Turn === 0) {
      board.receiveAtack(x, y, board.BoardComputer, createdShip);
      console.log(`Player Turn, Atacked on: X:${x} - Y: ${y}\nTo  Computer Board \n ${JSON.stringify(board.BoardComputer)}`);
      return 1;
    }
    const ComputerMoveX = parseInt((0 + Math.random()) * (10 - 0), 10);
    const ComputerMoveY = parseInt((0 + Math.random()) * (10 - 0), 10);
    board.receiveAtack(ComputerMoveX, ComputerMoveY, board.Board, createdShip);
    console.log(`Computer Turn, Atacked on: X:${ComputerMoveX} - Y: ${ComputerMoveY}\n To Player Board \n${JSON.stringify(board.Board)}`);
    return [ComputerMoveX, ComputerMoveY];
  },
  playerInit: () => {
    const createdShip = ship(5, 'Carrier');
    const createdBattleShip = ship(4, 'Battleship');
    const createdCruiser = ship(3, 'Cruiser');
    const createdSubmarine = ship(3, 'Submarine');
    const createdDestroyer = ship(2, 'Destroyer');

    const shipArr = createdShip.ships;

    // Create arrays from every ship from player
    const arr = createdShip.fill_ship(createdShip.Lengths);
    const arrBattleship = createdBattleShip.fill_ship(createdBattleShip.Lengths);
    const arrCuiser = createdCruiser.fill_ship(createdCruiser.Lengths);
    const arrSubmarine = createdSubmarine.fill_ship(createdSubmarine.Lengths);
    const arrDestroyer = createdDestroyer.fill_ship(createdDestroyer.Lengths);

    // Push ship arrays on hash of ships from player
    createdShip.ships[createdShip.Name] = arr;
    createdShip.ships[createdBattleShip.Name] = arrBattleship;
    createdShip.ships[createdCruiser.Name] = arrCuiser;
    createdShip.ships[createdSubmarine.Name] = arrSubmarine;
    createdShip.ships[createdDestroyer.Name] = arrDestroyer;

    console.log(`Soy PLayer Init function: ${JSON.stringify(createdShip.ships)}`);

    return [createdShip, createdBattleShip, createdCruiser, createdSubmarine];
  },
  computerInit: () => {
    const createdShipComputer = ship(5, 'Carrier');
    const createdBattleShip = ship(4, 'Battleship');
    const createdCruiser = ship(3, 'Cruiser');
    const createdSubmarine = ship(3, 'Submarine');
    const createdDestroyer = ship(2, 'Destroyer');

    const shipArr = createdShipComputer.ships;

    // Create arrays from every ship from player
    const arr = createdShipComputer.fill_ship(createdShipComputer.Lengths);
    const arrBattleship = createdBattleShip.fill_ship(createdBattleShip.Lengths);
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

    //console.log('im the  board:  ' + boardArr);
    'placedship Submarine: ' + board.placeShip(createdSubmarine, boardArr, 0, 2, true) + ' - ';
    'placedship Battleship: ' + board.placeShip(createdBattleShip, boardArr, 3, 2, true) + ' - ';
    'placedship Cruiser: ' + board.placeShip(createdCruiser, boardArr, 3, 0, true) + ' - ';
    'placedship Destroyer: ' + board.placeShip(createdDestroyer, boardArr, 6, 7, true) + ' - ';
    'placedship Carrier: ' + board.placeShip(createdShipComputer, boardArr, 5, 8, true);

    console.log(`Soy Computer Init function: ${JSON.stringify(createdShipComputer.ships)}`);

    return [createdShipComputer, createdBattleShip, createdCruiser, createdSubmarine, createdDestroyer, boardArr];
  },
  fillPlayerMoves: (playerBoard) => {
    for (let i = 0; i < 100; i += 1) {
      playerBoard[i] = i + 1;
    }
    return playerBoard;
  },
  fillComputerMoves: (computerBoard) => {
    for (let i = 0; i < 100; i += 1) {
      computerBoard[i] = i + 1;
    }
    return computerBoard;
  },
});

export default Player;
