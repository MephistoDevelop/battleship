import ship from '../src/ships';
import gameBoard from '../src/GameBoard';

const shipElem = ship(2, 'Destroyer');
test('length of ship',() => {
  expect(shipElem.Lengths).toBe(2);
});

test('hit the ship',() => {
  const name = shipElem.Name;
  const ships = shipElem.ships;
  shipElem.hit(ships,0,name);
  expect(ships[name]).toBe(['X']);
});