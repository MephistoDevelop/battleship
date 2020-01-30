import ship from './ships';

(() => {
  const val = ship(3, 'Submarino');
  const arr = val.fill_ship(val.Lengths);
  val.shipArray[val.Name] = arr;
  document.body.innerText = JSON.stringify(val) + '  Webpack !!';
})();
