import ship from '../src/ships';

const shipElem = ship(2, 'Destroyer');
test('length of ship', () => {
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

test('test is sunked', () => {
  const name = shipElem.Name;
  const shipArray = shipElem.ships;
  const arr = shipElem.fill_ship(shipElem.Lengths);
  shipElem.ships[name] = arr;
  shipElem.hit(shipArray, 0, name);
  expect(shipElem.isSunk(shipArray)).toBe(false);
});
