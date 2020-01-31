const gameBoard = () => ({
  drawBoard: () => {
    const board = [];
    for (let i = 0; i < 10; i += 1) {
      const arr = [];
      for (let j = 0; j < 10; j += 1) {
        arr[j] = '-';
      }
      board.push(arr);
    }
    return board;
  },
  placeShip: (ship, ships, board, x, y, vertical = true) => {
    const Ship = ship;
    if (Ship.Name) {
      console.log('Size!: ' + Ship.Lengths);
      if ((y + Ship.Lengths) < 10) {
        for (let i = 0; i < Ship.Lengths; i += 1) {
          //    board[x][y + i] = `${Ship.Name}`;
        }
      } else {
        console.log('place your ship in a valid position');
      }
    }
    return `X: ${x} - Y: ${y}, ${JSON.stringify(board)} `;
  },
});
export default gameBoard;
