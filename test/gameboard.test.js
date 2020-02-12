import GameBoard from '../src/GameBoard';
import ship from '../src/ships';

test ('draw board',() => {
    const board = GameBoard();
    const br = board.drawBoardPlayer();
    expect(br[1].length).toBe(10);
});

test('placeShip',() => {
    const board = GameBoard();
    const br = board.drawBoardPlayer();
    const shipElem = ship(2, 'Destroyer');
    const place = board.placeShip(shipElem,br,1,1);
    const newboard = br;
    expect(newboard[1][1]).toBe("Destroyer0");
});

test('receiveAttack for empty cell',() => {
    const board = GameBoard();
    const br = board.drawBoardPlayer();
    const shipElem = ship(2, 'Destroyer');
    let ships = [];
    ships.push(shipElem);
    const attackEmpty = board.receiveAtack(1,1,br,ships);
    expect(attackEmpty).toBe(false);
});

// test('receiveAttack for cell with ship',() => {
//     const board = GameBoard();
//     const br = board.drawBoardPlayer();
//     const shipElem = ship(2, 'Destroyer');
//     board.placeShip(shipElem,br,1,1);
//     let ships = [];
//     ships.push(shipElem);
//     const newboard = br;
//     const attack = board.receiveAtack(1, 1,newboard,ships);
//     expect(attack).toBe(true);
// });

// test('check if sunked',() => {
//     const board = GameBoard();
//     const br = board.drawBoardPlayer();
//     const shipElem = ship(2, 'Destroyer');
//     board.placeShip(shipElem,br,1,1);
//     let ships = [];
//     ships.push(shipElem);
//     const newboard = br;
//     board.receiveAtack(1, 1,newboard,ships);
//     board.receiveAtack(1, 2,newboard,ships);
//     expect(ship.isSunk(shipElem)).toBe(true);
// })