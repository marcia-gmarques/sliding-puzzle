//shuffle tiles, is the puzzle solvable logic and move tile logic
import { type BoardType } from './types.tsx';


//function to shuffle the tiles
//returns a new array of tiles shuffled
export function shuffleTiles(tiles: BoardType): BoardType {
    const shuffledTiles = [...tiles];

    //do has the shuffle logic, and reshuffle if not solvable or already solved
    do {
        //shuffle the tiles
        for (let i = shuffledTiles.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledTiles[i], shuffledTiles[j]] = [shuffledTiles[j], shuffledTiles[i]];
        }
    } while (!isSolvable(shuffledTiles) || isSolved(shuffledTiles)); 

    return shuffledTiles;
}



//function to check if the puzzle is solvable
//a puzzle is solvable if the number of inversions is even - an inversion is when a higher numbered tile precedes a lower numbered tile, and the empty tile is ignored
//returns true if solvable, false otherwise
export function isSolvable(tiles: BoardType): boolean {

    //remove the empty tile since it doesn't count for inversions
    const tileValues = tiles.map(tile => tile.value).filter(value => value !== 0); 
    let inversions = 0; 

    //compare each tile with all tiles that come after it
    for (let i = 0; i < tileValues.length; i++) {
        for (let j = i + 1; j < tileValues.length; j++) {
            //if a higher number comes before a lower number, count it as an inversion
            if (tileValues[i] > tileValues[j]) inversions++;
        }
    }

    //if inversions is even the puzzle is solvable
    return inversions % 2 === 0; 
}



//function to check if the puzzle is solved
export function isSolved(tiles: BoardType): boolean {

    for (let i = 0; i < tiles.length - 1; i++) { //ignore the last tile which is the empty tile
        //if any tile is not in its correct position (value different from index + 1) return false
        if (tiles[i].value !== i + 1){
            return false;
        } ; 
    }
    console.log("Puzzle is solved");
    //if all tiles are in their correct position return true
    return true; 
}



//function to check if a tile can be moved (if it is adjacent to the empty tile)
export function getValidMoves(emptyTileIndex: number): number[] {
    const validMoves: number[] = [];
    const row = Math.floor(emptyTileIndex / 3); //check which row the empty tile is in, 0 if in the first row, 1 if in the second row, 2 if in the third row
    const col = emptyTileIndex % 3; //check which column the empty tile is in, if col is 0 (remainer of division is 0) its in the first column, if col is 1 its in the second column, if col is 2 its in the third column

    //check if the empty tile can move up, down, left or right
    if (row > 0) validMoves.push(emptyTileIndex - 3); //up
    if (row < 2) validMoves.push(emptyTileIndex + 3); //down    
    if (col > 0) validMoves.push(emptyTileIndex - 1); //left
    if (col < 2) validMoves.push(emptyTileIndex + 1); //right
    return validMoves;
}