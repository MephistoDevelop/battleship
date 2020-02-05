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
      board.receiveAtack(x, y, board.Board, createdShip);
      console.log(Turn + ' Player Turn, Atacked on: ' + x + ' - ' + y + '\n Player Board \n' + JSON.stringify(board.Board));
      return 1;
    } else {
      board.receiveAtack(x, y, board.BoardComputer, createdShip);
      console.log('Computer Turn, Atacked on: ' + x + ' - ' + y + '\n Computer Board \n' + JSON.stringify(board.BoardComputer));
      return 0;
    }
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

    return [createdShip, createdBattleShip, createdCruiser, createdSubmarine, createdDestroyer];
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

    console.log(`Soy Computer Init function: ${JSON.stringify(createdShipComputer.ships)}`);

    return createdShipComputer.ships;
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
