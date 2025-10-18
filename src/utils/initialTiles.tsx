import { type BoardType } from './types.tsx';

//tile values from 1 to 8 plus 0 which is the empty tile
//if index is 8 (last tile in the array) value is 0 otherwise value is index + 1
// export const initialTiles: BoardType = Array.from({ length: 9 }, (_, index) => ({
//     value: index === 8 ? 0 : index + 1,
//     index: index
// }));

//new function to generate initial tiles based on grid size
export const generateInitialTiles = (gridSize: number): BoardType => {
    const totalTiles = gridSize * gridSize;
    return Array.from({ length: totalTiles }, (_, index) => ({
        value: index === totalTiles - 1 ? 0 : index + 1,
        index: index
    }));
};
