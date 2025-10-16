import { useState } from "react";
import '../styles/Board.css';
import { type BoardType } from '../utils/types.tsx';

export default function Board() {

    //tile values from 1 to 8 plus 0 which is the empty tile
    //if index is 8 (last tile in the array) value is 0 otherwise value is index + 1
    const initialTiles: BoardType = Array.from({ length: 9 }, (_, index) => ({
        value: index === 8 ? 0 : index + 1,
        index: index
    }));

    //console.log(initialTiles);

    //state to hold the tiles
    const [tiles, setTiles] = useState<BoardType>(initialTiles);

  return (
    <div className="board">
      {tiles.map((tile) => (
        <div key={tile.index} className={`tile ${tile.value === 0 ? 'empty' : ''}`}>
          {tile.value !== 0 ? tile.value : ''}
        </div>
      ))}
    </div>
  );
}