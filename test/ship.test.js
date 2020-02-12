import ship from '../src/ships';
import gameBoard from '../src/GameBoard';

const shipElem = ship(2, 'Destroyer');
const board = gameBoard.drawBoardPlayer;
// const position = parseInt(board[2]).split('');
test('length of ship',() => {
  expect(shipElem.Lengths).toBe(2);
});

test('hit the ship',() => {
  // shipElem.hit(shipElem.ships,  0, shipElem.Name);
  // expect(shipElem.isSunked).toBe(false);
  gameBoard.receiveAtack(1, 1, board, shipElem.ships)
});