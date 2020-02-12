import ship from '../src/ships';
import gameBoard from '../src/GameBoard';

const shipElem = ship(2, 'Destroyer');
test('length of ship',() => {
  expect(shipElem.Lengths).toBe(2);
});

test('hit the ship', () => {
  const name = shipElem.Name;
  const shipArray = shipElem.ships;
  const arr = shipElem.fill_ship(shipElem.Lengths);
  shipElem.ships[name] = arr;
  shipElem.hit(shipArray, 0, name);
  expect(shipArray[name]).toStrictEqual(['X', 'O']);
});