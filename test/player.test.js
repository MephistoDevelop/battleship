import GameBoard from '../src/GameBoard';
import ship from '../src/ships';
import player from '../src/players';

const shipElem = ship(2, 'Destroyer');
let ships = [];
ships.push(shipElem);
const board = GameBoard();
const pl = player('Ansar');
const x = 0;
const y = 0;

test('player turn',() => {
  expect(pl.Turn).toBe(0);
});

test('move turn',() => {
  const br = board.drawBoardPlayer();
  board.Board = br;
  board.BoardComputer = br;
  const move = pl.Move(pl.Turn, x, y, board, ships);
  expect(move).toStrictEqual([1,false]);
});

test('computer move',() => {
  const br = board.drawBoardPlayer();
  board.Board = br;
  board.BoardComputer = br;
  // board.placeShip(shipElem,br,1,1);
  const move =pl.Move(1, x, y, board, ships);
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  expect(numbers.includes(move[1])).toBe(true);
});
