const ship = (length, name) => ({
  Name: name,
  Length: length,
  shipArray: {},
  fill_ship: (shipArray) => {
    const newArray = shipArray;
    for (let i = 0; i < shipArray.length - 1; i += 1) {
      newArray[i] = 0;
    }
    return newArray;
  },
  hit: (shipArray, position) => {
    const newArray = shipArray;
    newArray[position] = 1;
    return shipArray;
  },
  isSunk: (battleship) => {
    battleship.forEach((index) => index);
  },
});

export { ship };
