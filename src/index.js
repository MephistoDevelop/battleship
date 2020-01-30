import ship from './ships';

(() => {
  const createdShip = ship(3, 'Submarino');
  const arr = createdShip.fill_ship(createdShip.Lengths);
  createdShip.shipArray[createdShip.Name] = arr;
  console.log(createdShip.hit(createdShip.shipArray[createdShip.Name], 0));
  console.log(createdShip.hit(createdShip.shipArray[createdShip.Name], 1));
  console.log(createdShip.isSunk(createdShip.shipArray[createdShip.Name]));
  document.body.innerText = JSON.stringify(createdShip) + '  Webpack !!';
})();
