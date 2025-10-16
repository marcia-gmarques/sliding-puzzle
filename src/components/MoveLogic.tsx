//move logic stuff
import type { BoardType } from "../utils/types"; 

//helper function to check if two indices are adjacent on the board
const isAdjacent = (index1: number, index2: number, gridSize = 3): boolean => {
    //calculate row and column of each index
    const row1 = Math.floor(index1 / gridSize); //0 if in first row, 1 if in second row, 2 if in third row, and so on for larger grids
    const col1 = index1 % gridSize; //if remainder of division is 0 its in first column, if remainder is 1 its in second column, if remainder is 2 its in third column, and so on for larger grids

    const row2 = Math.floor(index2 / gridSize);
    const col2 = index2 % gridSize;    

    //two indices are adjacent if they are in the same row and their columns differ by 1, or if they are in the same column and their rows differ by 1
    //so the sum of the absolute differences of their rows and columns should be 1
    return (Math.abs(row1 - row2) + Math.abs(col1 - col2)) === 1;
}


let count = 0; //to count moves

//move tile when clicked, but only valid moves (adjacent to empty tile)
export const handleMoves = (board: BoardType, tileIdx: number) => {
    console.log("Tile clicked");
    //get the index of the empty tile (tile with value 0)
    const emptyTileIndex = board.findIndex(tile => tile.value === 0);
    //testing console logs
    console.log("Empty tile index: " + emptyTileIndex);
    console.log("tile clicked index: " + tileIdx);

    if(!isAdjacent(emptyTileIndex, tileIdx)){
        console.log("Invalid move");
        return board; //invalid move, return the board unchanged
    }
    if(isAdjacent(emptyTileIndex, tileIdx)){
        //testing
        console.log("Valid move");
        count++;
        console.log("Move count: " + count);
    }

    //create a new board array to avoid mutating the state directly
    const newBoard = [...board];
    //swap the clicked tile with the empty tile
    [newBoard[emptyTileIndex], newBoard[tileIdx]] = [newBoard[tileIdx], newBoard[emptyTileIndex]];
    console.log("Tile moved");
    return newBoard; //return the new board state
}