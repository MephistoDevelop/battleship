const ship = (length,name) => {

  return {
  name: name,
  length: length,
  shipArray: {},
  fill_ship: () => {
    for(let i=0; i<shipArray.length-1;i+=1){
      shipArray[i] = 0;
    }
  },
  hit: (position) => shipArray[position] = 1,
  isSunk: (battleship) => {
    battleship.forEach((index)=>{
    });
  },
  }
});
