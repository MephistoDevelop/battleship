import ship from './ships';
import gameBoard from './GameBoard';

(() => {

  const createdShip = ship(5, 'Carrier');
  const createdBattleShip = ship(4, 'Battleship');
  const createdCruiser = ship(3, 'Cruiser');
  const createdSubmarine = ship(3, 'Submarine');
  const createdDestroyer = ship(2, 'Destroyer');

  let shipArr = createdShip.ships;

  const arr = createdShip.fill_ship(createdShip.Lengths);
  const arrBattleship = createdBattleShip.fill_ship(createdBattleShip.Lengths);
  const arrCuiser = createdCruiser.fill_ship(createdCruiser.Lengths);
  const arrSubmarine = createdSubmarine.fill_ship(createdSubmarine.Lengths);
  const arrDestroyer = createdDestroyer.fill_ship(createdDestroyer.Lengths);

  createdShip.ships[createdShip.Name] = arr;
  createdShip.ships[createdBattleShip.Name] = arrBattleship;
  createdShip.ships[createdCruiser.Name] = arrCuiser;
  createdShip.ships[createdSubmarine.Name] = arrSubmarine;
  createdShip.ships[createdDestroyer.Name] = arrDestroyer;

  console.log("Soy Arr: " + JSON.stringify(createdShip.ships));
  console.log(createdShip.hit(createdShip.ships, 0, createdShip.Name));
  console.log(createdShip.hit(createdShip.ships, 3 - 1, createdShip.Name));
  console.log(createdShip.hit(createdShip.ships, 0, createdBattleShip.Name));
  console.log(createdShip.hit(createdShip.ships, 0, createdSubmarine.Name));
  console.log(createdShip.hit(createdShip.ships, 0, createdDestroyer.Name));
  console.log(createdShip.hit(createdShip.ships, 1, createdDestroyer.Name));
  console.log(createdShip.hit(createdShip.ships, 2, createdDestroyer.Name));
  console.log(createdShip.Name + '  hitted  ' + JSON.stringify(createdShip.ships));
  console.log(createdDestroyer.Name + ' is Sunked? ' + createdShip.isSunk(createdShip.ships[createdDestroyer.Name]));
  const board = gameBoard();
  let boardArr = board.drawBoard();
  console.log('im the  board:  ' + boardArr);
  console.log('placedship Submarine: ' + board.placeShip(createdSubmarine, boardArr, 0, 2, true) + ' - ');
  console.log('placedship Battleship: ' + board.placeShip(createdBattleShip, boardArr, 3, 2, true) + ' - ');
  console.log('placedship Cruiser: ' + board.placeShip(createdCruiser, boardArr, 3, 0, true) + ' - ');
  console.log('placedship Destroyer: ' + board.placeShip(createdDestroyer, boardArr, 8, 7, true) + ' - ');
  console.log('placedship Carrier: ' + board.placeShip(createdShip, boardArr, 5, 4, true) + ' - ');
})();
