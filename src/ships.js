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
