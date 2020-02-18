import GameBoard from '../src/GameBoard';
import ship from '../src/ships';
import player from '../src/players';

test('draw board', () => {
  const board = GameBoard();
  const br = board.drawBoardPlayer();
  expect(br[1].length).toBe(10);
});

test('placeShip horizontally', () => {
  const board = GameBoard();
  const br = board.drawBoardPlayer();
  const shipElem = ship(2, 'Destroyer');
  const place = board.placeShip(shipElem, br, 1, 1);
  const newboard = br;
  expect(newboard[1][2]).toBe('Destroyer1');
});

test('placeShip vertically', () => {
  const board = GameBoard();
  const br = board.drawBoardPlayer();
  const pl = player('Ansar');
  const shipElem = ship(2, 'Destroyer');
  const place = board.placeShip(shipElem, br, 1, 1, true);
  const newboard = br;
  expect(newboard[2][1]).toBe('Destroyer1');
});

test('receiveAttack for empty cell', () => {
  const board = GameBoard();
  const br = board.drawBoardPlayer();
  const shipElem = ship(2, 'Destroyer');
  let ships = [];
  ships.push(shipElem);
  const attackEmpty = board.receiveAtack(1, 1, br, ships);
  expect(attackEmpty).toBe(false);
});

test('receiveAttack for cell with ship', () => {
  const shipElem = ship(2, 'Destroyer');
  const shipArray = shipElem.ships;
  const arr = shipElem.fill_ship(shipElem.Lengths);
  shipElem.ships[shipElem.Name] = arr;
  const board = GameBoard();
  const br = board.drawBoardPlayer();
  board.placeShip(shipElem, br, 1, 1, true);
  const hit = board.receiveAtack(1, 1, br, [shipElem, 1]);
  expect(hit).toBe(true);
});

test('check if sunked', () => {
  const shipElem = ship(3, 'Carrierr');
  const shipArray = shipElem.ships;
  const arr = shipElem.fill_ship(shipElem.Lengths);
  shipElem.ships[shipElem.Name] = arr;
  const board = GameBoard();
  const br = board.drawBoardPlayer();
  board.placeShip(shipElem, br, 1, 1, true);
  board.receiveAtack(1, 1, br, [shipElem, 1]);
  board.receiveAtack(1, 2, br, [shipElem, 1]);
  board.receiveAtack(1, 3, br, [shipElem, 1]);
  console.log('Soy Arr of sunked test:' + JSON.stringify(shipArray));
  expect(shipElem.isSunk(shipArray[shipElem.Name])).toBe(true);
});
