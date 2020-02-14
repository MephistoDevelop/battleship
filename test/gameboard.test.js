import GameBoard from '../src/GameBoard';
import ship from '../src/ships';
import player from '../src/players';

test ('draw board',() => {
  const board = GameBoard();
  const br = board.drawBoardPlayer();
  expect(br[1].length).toBe(10);
});

test('placeShip horizontally',() => {
  const board = GameBoard();
  const br = board.drawBoardPlayer();
  const shipElem = ship(2, 'Destroyer');
  const place = board.placeShip(shipElem,br,1,1);
  const newboard = br;
  expect(newboard[1][2]).toBe("Destroyer1");
});

test('placeShip vertically',() => {
  const board = GameBoard();
  const br = board.drawBoardPlayer();
  const pl = player('Ansar');
  const shipElem = ship(2, 'Destroyer');
  const place = board.placeShip(shipElem,br,1,1, true);
  const newboard = br;
  expect(newboard[2][1]).toBe("Destroyer1");
});

test('receiveAttack for empty cell',() => {
  const board = GameBoard();
  const br = board.drawBoardPlayer();
  const shipElem = ship(2, 'Destroyer');
  let ships = [];
  ships.push(shipElem);
  const attackEmpty = board.receiveAtack(1,1,br,ships);
  expect(attackEmpty).toBe(false);
});

// test('receiveAttack for cell with ship',() => {
//   const board = GameBoard();
//   const br = board.drawBoardPlayer();
//   const shipElem = ship(2, 'Destroyer');
//   board.placeShip(shipElem,br,1, 1, true);
//   let ships = [];
//   shipElem.fill_ship(shipElem.Lengths);
//   ships.push(shipElem);
//   const newboard = br;
//   const attack = board.receiveAtack(1, 1, newboard,ships);
//   expect(attack).toBe(true);
// });

// test('check if sunked',() => {
//     const board = GameBoard();
//     const br = board.drawBoardPlayer();
//     const shipElem = ship(2, 'Destroyer');
//     board.placeShip(shipElem,br,1,1);
//     let ships = [];
//     ships.push(shipElem);
//     const newboard = br;
//     board.receiveAtack(1, 1,newboard,ships);
//     board.receiveAtack(1, 2,newboard,ships);
//     expect(ship.isSunk(shipElem)).toBe(true);
// })