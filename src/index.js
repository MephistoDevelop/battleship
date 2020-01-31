import ship from './ships';

(() => {

  const createdShip = ship(5, 'Carrier');
  const createdShip2 = ship(4, 'Battleship');
  const createdShip3 = ship(3, 'Cruiser');
  const createdShip4 = ship(3, 'Submarine');
  const createdShip5 = ship(2, 'Destroyer');

  const arr = createdShip.fill_ship(createdShip.Lengths);
  const arrBattleship = createdShip2.fill_ship(createdShip2.Lengths);
  const arrCuiser = createdShip3.fill_ship(createdShip3.Lengths);
  const arrSubmarine = createdShip4.fill_ship(createdShip4.Lengths);
  const arrDestroyer = createdShip5.fill_ship(createdShip5.Lengths);

  createdShip.ships[createdShip.Name] = arr;
  createdShip.ships[createdShip2.Name] = arrBattleship;
  createdShip.ships[createdShip3.Name] = arrCuiser;
  createdShip.ships[createdShip4.Name] = arrSubmarine;
  createdShip.ships[createdShip5.Name] = arrDestroyer;

  console.log("Soy Arr: " + JSON.stringify(createdShip.ships));
  console.log(createdShip.hit(createdShip.ships, 0, createdShip.Name));
  console.log(createdShip.hit(createdShip.ships, 3 - 1, createdShip.Name));
  console.log(createdShip.hit(createdShip.ships, 0, createdShip2.Name));
  console.log(createdShip.hit(createdShip.ships, 0, createdShip4.Name));
  console.log(createdShip.hit(createdShip.ships, 0, createdShip5.Name));
  console.log(createdShip.hit(createdShip.ships, 1, createdShip5.Name));
  console.log(createdShip.hit(createdShip.ships, 2, createdShip5.Name));
  console.log(createdShip.Name + 'hitted' + JSON.stringify(createdShip.ships));
  console.log(createdShip.isSunk(createdShip.ships[createdShip5.Name]));
})();
