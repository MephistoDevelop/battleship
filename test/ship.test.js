import ship from '../src/ships';
import Player from '../src/players';


// test('hit the position', () => {

//   expect(ships.Lengths).toBe(2);
//   const turnOf = Player('MephistoDevelop');
//   const ships = ship(2,'Destroyer');
// })

test('length of ship',() => {
  const shipElem = ship(2, 'Destroyer');
  expect(shipElem.length).toBe(2);
});