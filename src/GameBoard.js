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
  placeShip: (ship, board, x, y, vertical = true) => {
    const Ship = ship;
    const newBoard = board;
    if (Ship.Name) {
      console.log('Size!: ' + Ship.Lengths);
      const checkEmptyCells = (Board) => {
        let answer = false;
        for (let i = 0; i < Ship.Lengths; i += 1) {
          //  console.log('answer: ' + answer + '  Board[x+' + i + '] : ' + Board[y][(x + i)]);
          if (Board[y][(x + i)] === '-') {
            answer = true;
          } else {
            answer = false;
            break;
          }
        }
        return answer;
      };
      if ((y + Ship.Lengths) < 10 && checkEmptyCells(newBoard)) {
        for (let i = 0; i < Ship.Lengths; i += 1) {
          newBoard[y][(x + i)] = `${Ship.Name}`;
        }
      } else {
        console.log('place your ship in a valid position');
      }
    }
    return `X: ${x} - Y: ${y}, ${JSON.stringify(newBoard)} `;
  },
});
export default gameBoard;
