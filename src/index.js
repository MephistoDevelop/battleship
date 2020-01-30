import ship from './ships';

(() => {
  const val = ship(3, 'Submarino');
  const arr = val.fill_ship(val.Lengths);
  val.shipArray[val.Name] = arr;
  console.log(val.hit(val.shipArray[val.Name], 0));
  console.log(val.hit(val.shipArray[val.Name], 1));
  document.body.innerText = JSON.stringify(val) + '  Webpack !!';
})();
