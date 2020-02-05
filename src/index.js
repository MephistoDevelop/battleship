import ship from './ships';
import gameBoard from './GameBoard';
import Player from './players';

const txtbox = document.getElementById('text-action');
const txtx = document.getElementById('text-x');
const txty = document.getElementById('text-y');
const btnAtack = document.getElementById('btn-action');
const btnPlace = document.getElementById('btn-place');
const lblmessage = document.getElementById('messages');


const player = Player('MephistoDevelop');
const PlayerArr = player.fillPlayerMoves([]);
// console.log('Soy: ' + player.Name + '\n' + PlayerArr);
lblmessage.innerText = `${player.Name} Turn`;
const playerShips = player.playerInit();
const computerShips = player.computerInit();
const board = gameBoard();


board.Board = board.drawBoardPlayer();
board.BoardComputer = board.drawBoardPlayer();
//Print player and computer Board
console.log(JSON.stringify(board));

const doAttack = () => {
  console.log(`clicked me !! \n Box: ${txtbox.value}`);
  txtbox.value = '';
  const x = txtx.value;
  const y = txty.value;
  const turn = player.Turn;
  // /console.log(playerShips);
  console.log(`Soy Player.Turn: ${turn} - ${turn === 0}`);

  if (turn === 0) {
    player.Turn = player.Move(player.Turn, x, y, board, playerShips);
    console.log(`Soy Player.Turn cero: ${player.Turn}`);
  } else { player.Turn = player.Move(player.Turn, x, y, board, computerShips); }
};

const placeShip = (ShipsArray) => {
  const x = parseInt(txtx.value, 10);
  const y = parseInt(txty.value, 10);
  const number = txtbox.value;
  const shipPosition = parseInt(number, 10);
  const choosenShip = ShipsArray[shipPosition];
  console.log(`X: ${x} Y: ${y} , ShiPos: ${shipPosition} , ChoosenShip: ${JSON.stringify(choosenShip)}`);
  console.log(board.placeShip(choosenShip, board.Board, x, y, true));
};

btnAtack.addEventListener('click', () => {
  doAttack();
});
btnPlace.addEventListener('click', () => {
  placeShip(playerShips);
});
(() => {
  //Game flow to understand the logic to initialize game,created ships ,place ships and hit a ships.
  // //Ships From Player
  // const createdShip = ship(5, 'Carrier');
  // const createdBattleShip = ship(4, 'Battleship');
  // const createdCruiser = ship(3, 'Cruiser');
  // const createdSubmarine = ship(3, 'Submarine');
  // const createdDestroyer = ship(2, 'Destroyer');

  // //Ships From Computer
  // const createdShipComputer = ship(5, 'Carrier');
  // const createdBattleShipComputer = ship(4, 'Battleship');
  // const createdCruiserComputer = ship(3, 'Cruiser');
  // const createdSubmarineComputer = ship(3, 'Submarine');
  // const createdDestroyerComputer = ship(2, 'Destroyer');


  // let shipArr = createdShip.ships;
  // let shipArrComputer = createdShipComputer.ships;

  // //Create arrays from every ship from player
  // const arr = createdShip.fill_ship(createdShip.Lengths);
  // const arrBattleship = createdBattleShip.fill_ship(createdBattleShip.Lengths);
  // const arrCuiser = createdCruiser.fill_ship(createdCruiser.Lengths);
  // const arrSubmarine = createdSubmarine.fill_ship(createdSubmarine.Lengths);
  // const arrDestroyer = createdDestroyer.fill_ship(createdDestroyer.Lengths);


  // //Create arrays from every ship from Computer
  // const arrComputer = createdShipComputer.fill_ship(createdShipComputer.Lengths);
  // const arrBattleshipComputer = createdBattleShipComputer.fill_ship(createdBattleShipComputer.Lengths);
  // const arrCuiserComputer = createdCruiserComputer.fill_ship(createdCruiserComputer.Lengths);
  // const arrSubmarineComputer = createdSubmarineComputer.fill_ship(createdSubmarineComputer.Lengths);
  // const arrDestroyerComputer = createdDestroyerComputer.fill_ship(createdDestroyerComputer.Lengths);

  // //Push ship arrays on hash of ships from player
  // createdShip.ships[createdShip.Name] = arr;
  // createdShip.ships[createdBattleShip.Name] = arrBattleship;
  // createdShip.ships[createdCruiser.Name] = arrCuiser;
  // createdShip.ships[createdSubmarine.Name] = arrSubmarine;
  // createdShip.ships[createdDestroyer.Name] = arrDestroyer;

  // //Push ship arrays on hash of ships from Computer
  // createdShipComputer.ships[createdShipComputer.Name] = arr;
  // createdShipComputer.ships[createdBattleShipComputer.Name] = arrBattleshipComputer;
  // createdShipComputer.ships[createdCruiserComputer.Name] = arrCuiserComputer;
  // createdShipComputer.ships[createdSubmarineComputer.Name] = arrSubmarineComputer;
  // createdShipComputer.ships[createdDestroyerComputer.Name] = arrDestroyerComputer;

  // "Soy Arr: " + JSON.stringify(createdShip.ships);
  // // createdShip.hit(createdShip.ships, 0, createdShip.Name);
  // // createdShip.hit(createdShip.ships, 3 - 1, createdShip.Name);
  // // createdShip.hit(createdShip.ships, 0, createdBattleShip.Name);
  // // createdShip.hit(createdShip.ships, 0, createdSubmarine.Name);
  // // createdShip.hit(createdShip.ships, 0, createdDestroyer.Name);
  // // createdShip.hit(createdShip.ships, 1, createdDestroyer.Name);
  // // createdShip.hit(createdShip.ships, 2, createdDestroyer.Name);
  // // createdShip.Name + '  hitted  ' + JSON.stringify(createdShip.ships);
  // // createdDestroyer.Name + ' is Sunked? ' + createdShip.isSunk(createdShip.ships[createdDestroyer.Name]);


  // const board = gameBoard();
  // let boardArr = board.drawBoardPlayer();
  // const boardComputer = gameBoard();
  // let boardArrComputer = boardComputer.drawBoardPlayer();
  // //console.log('im the  board:  ' + boardArr);
  // 'placedship Submarine: ' + board.placeShip(createdSubmarine, boardArr, 0, 2, true) + ' - ';
  // 'placedship Battleship: ' + board.placeShip(createdBattleShip, boardArr, 3, 2, true) + ' - ';
  // 'placedship Cruiser: ' + board.placeShip(createdCruiser, boardArr, 3, 0, true) + ' - ';
  // 'placedship Destroyer: ' + board.placeShip(createdDestroyer, boardArr, 6, 7, true) + ' - ';
  // 'placedship Carrier: ' + board.placeShip(createdShip, boardArr, 5, 8, true);
  // //console.log('Received atack: ' + board.receiveAtack(8, 7, boardArr, createdShip));
  // //console.log('Received atack: ' + board.receiveAtack(2, 3, boardArr, createdShip));

  // //Cruiser Attacks and sunked
  // 'Received atack: ' + board.receiveAtack(3, 0, boardArr, createdShip);
  // 'Received atack: ' + board.receiveAtack(4, 0, boardArr, createdShip);
  // 'Received atack: ' + board.receiveAtack(5, 0, boardArr, createdShip);

  // //Submarine Attacks and sunked
  // 'Received atack Submarine: ' + board.receiveAtack(0, 2, boardArr, createdShip);
  // 'Received atack Submarine: ' + board.receiveAtack(1, 2, boardArr, createdShip);
  // 'Received atack Submarine: ' + board.receiveAtack(2, 2, boardArr, createdShip);

  // //Battleship Attacks and sunked
  // 'Received atack Submarine: ' + board.receiveAtack(3, 2, boardArr, createdShip);
  // 'Received atack Submarine: ' + board.receiveAtack(4, 2, boardArr, createdShip);
  // 'Received atack Submarine: ' + board.receiveAtack(5, 2, boardArr, createdShip);
  // 'Received atack Battleship: ' + board.receiveAtack(6, 2, boardArr, createdShip);

  // //Destroyer Attacks and sunked
  // 'Received atack: ' + board.receiveAtack(6, 7, boardArr, createdShip);
  // 'Received atack Destroyer: ' + board.receiveAtack(7, 7, boardArr, createdShip);

  // //Carrier Attacks and sunked
  // 'Received atack: ' + board.receiveAtack(5, 8, boardArr, createdShip);
  // 'Received atack: ' + board.receiveAtack(6, 8, boardArr, createdShip);
  // 'Received atack: ' + board.receiveAtack(7, 8, boardArr, createdShip);
  // 'Received atack: ' + board.receiveAtack(8, 8, boardArr, createdShip);
  // 'Received atack: Carrier ' + board.receiveAtack(9, 8, boardArr, createdShip);


  // //missed Atacks
  // 'Received atack: Missed ' + board.receiveAtack(0, 1, boardArr, createdShip);
  // 'Received atack: Missed ' + board.receiveAtack(5, 4, boardArr, createdShip);
  // 'Received atack: Missed ' + board.receiveAtack(7, 5, boardArr, createdShip);
  // console.log('Board Array: ' + boardArr);

  // console.log('Check Sunked Ships or Not:  ' + board.checkShipsSunked(createdShip));
  // console.log('Board Computer' + boardArrComputer.toString()) + ':    :' + boardComputer.checkShipsSunked(createdShipComputer);
})();
