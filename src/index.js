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

  "Soy Arr: " + JSON.stringify(createdShip.ships);
  // createdShip.hit(createdShip.ships, 0, createdShip.Name);
  // createdShip.hit(createdShip.ships, 3 - 1, createdShip.Name);
  // createdShip.hit(createdShip.ships, 0, createdBattleShip.Name);
  // createdShip.hit(createdShip.ships, 0, createdSubmarine.Name);
  // createdShip.hit(createdShip.ships, 0, createdDestroyer.Name);
  // createdShip.hit(createdShip.ships, 1, createdDestroyer.Name);
  // createdShip.hit(createdShip.ships, 2, createdDestroyer.Name);
  // createdShip.Name + '  hitted  ' + JSON.stringify(createdShip.ships);
  // createdDestroyer.Name + ' is Sunked? ' + createdShip.isSunk(createdShip.ships[createdDestroyer.Name]);

  const board = gameBoard();
  let boardArr = board.drawBoard();
  console.log('im the  board:  ' + boardArr);
  'placedship Submarine: ' + board.placeShip(createdSubmarine, boardArr, 0, 2, true) + ' - ';
  'placedship Battleship: ' + board.placeShip(createdBattleShip, boardArr, 3, 2, true) + ' - ';
  'placedship Cruiser: ' + board.placeShip(createdCruiser, boardArr, 3, 0, true) + ' - ';
  'placedship Destroyer: ' + board.placeShip(createdDestroyer, boardArr, 6, 7, true) + ' - ';
  console.log('placedship Carrier: ' + board.placeShip(createdShip, boardArr, 5, 8, true) + ' - ');
  //console.log('Received atack: ' + board.receiveAtack(8, 7, boardArr, createdShip));
  //console.log('Received atack: ' + board.receiveAtack(2, 3, boardArr, createdShip));
  console.log('Received atack: ' + board.receiveAtack(0, 4, boardArr, createdShip));
})();
