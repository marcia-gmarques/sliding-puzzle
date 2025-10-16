import React from "react";
import '../styles/Board.css';

export default function Board() {

    //tile values from 1 to 9, 0 is the empty tile
    const initialTiles: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 0];
    const [tiles, setTiles] = React.useState<number[]>(initialTiles);

  return (
    <div className="board">
      {initialTiles.map((tile, index) => (
        <div key={index} className={`tile ${tile === 0 ? 'empty' : ''}`}>
          {tile !== 0 ? tile : ''}
        </div>
      ))}
    </div>
  );
}