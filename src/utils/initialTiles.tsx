import { type BoardType } from './types.tsx';

//tile values from 1 to 8 plus 0 which is the empty tile
//if index is 8 (last tile in the array) value is 0 otherwise value is index + 1
export const initialTiles: BoardType = Array.from({ length: 9 }, (_, index) => ({
    value: index === 8 ? 0 : index + 1,
    index: index
}));