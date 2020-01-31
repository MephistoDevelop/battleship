const ship = (length, name) => ({
  Name: name,
  Lengths: length,
  ships: {},
  fill_ship: (array) => {
    const newArray = [];
    for (let i = 0; i < array; i += 1) {
      newArray.push('O');
    }
    return newArray;
  },

  hit: (ships, position, shipName) => {
    const Name = shipName;
    const newArray = ships[Name];
    newArray[position] = 'X';
    return newArray;
  },

  isSunk: (shipArr) => {
    let isSunked = false;
    for (let i = 0; i < shipArr.length; i += 1) {
      if (shipArr[i] === 'X') {
        isSunked = true;
      } else {
        isSunked = false;
        break;
      }
    }

    return isSunked;
  },
});

export default ship;
