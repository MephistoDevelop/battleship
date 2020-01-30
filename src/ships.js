const ship = (length, name) => ({
  Name: name,
  Lengths: length,
  shipArray: {},
  fill_ship: (array) => {
    const newArray = [];
    for (let i = 0; i < array - 1; i += 1) {
      newArray.push('O');
    }
    return newArray;
  },
  hit: (shipArray, position) => {
    const newArray = shipArray;
    newArray[position] = 'X';
    return newArray;
  },
  isSunk: (battleship) => {
    battleship.forEach((index) => {
      const isSunked = battleship[index] === 1;
      return isSunked;
    });
  },
});

export default ship;
