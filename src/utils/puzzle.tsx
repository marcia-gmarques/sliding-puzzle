//shuffle tiles, is the puzzle solvable logic and is the puzzle solved logic
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
//for odd grids: a puzzle is solvable if the number of inversions is even - an inversion is when a higher numbered tile precedes a lower numbered tile, and the empty tile is ignored
//for even grids: both inversions and the row of the empty tile from the bottom need to be considered
//returns true if solvable, false otherwise
export function isSolvable(tiles: BoardType): boolean {
    //get grid size from number of tiles
    const gridSize = Math.sqrt(tiles.length);

    const tileValues = tiles.map(tile => tile.value);
    let inversions = 0; 

    //compare each tile with all tiles that come after it
    //if a higher number comes before a lower number, count it as an inversion
    for (let i = 0; i < tileValues.length; i++) {
        if (tileValues[i] === 0) continue; //skip empty tile
        for (let j = i + 1; j < tileValues.length; j++) {
            if (tileValues[j] === 0) continue; //skip empty tile
            if (tileValues[i] > tileValues[j]) inversions++;
        }
    }

    //for odd sized grids, if inversions is even the puzzle is solvable
    if (gridSize % 2 === 1) {
        return inversions % 2 === 0;
    } else {
        //for even sized grids, need to consider the row of the empty tile from the bottom
        const emptyTileIndex = tileValues.indexOf(0);
        const emptyTileRowFromBottom = gridSize - Math.floor(emptyTileIndex / gridSize);
        return (inversions + emptyTileRowFromBottom) % 2 === 0; //for even grids, puzzle is solvable if sum of inversions and empty tile row from bottom is even
    }
}



//function to check if the puzzle is solved
export function isSolved(tiles: BoardType): boolean {

    for (let i = 0; i < tiles.length - 1; i++) { //ignore the last tile which is the empty tile
        //if any tile is not in its correct position (value different from index + 1) return false
        if (tiles[i].value !== i + 1){
            return false;
        } ; 
    }
    //check if last tile is the empty tile (value 0)
    if (tiles[tiles.length - 1].value !== 0) {
        return false;
    }
    console.log("Puzzle is solved");
    //if all tiles are in their correct position return true
    return true; 
}

