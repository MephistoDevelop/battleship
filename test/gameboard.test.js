import GameBoard from '../src/GameBoard';
import ship from '../src/ships';

test ('draw board',() => {
    const board = GameBoard();
    const br = board.drawBoardPlayer();
    expect(br[1].length).toBe(10);
})

test('placeShip',() => {
    const board = GameBoard();
    const br = board.drawBoardPlayer();
    const shipElem = ship(2, 'Destroyer');
    const place = board.placeShip(shipElem,br,1,1);
    const newboard = br;
    expect(newboard[1][1]).toBe("Destroyer0");
})

