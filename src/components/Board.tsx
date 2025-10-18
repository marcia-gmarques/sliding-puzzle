// import { useState } from "react";
import '../styles/Board.css';
import { type BoardType } from '../utils/types.tsx';
import { handleMoves } from './MoveLogic.tsx';

export default function Board(props: { 
  board: BoardType, 
  setBoard: (board: BoardType) => void, 
  moves: number, 
  setMoves: (moves: number) => void,
  gridSize: number, 
  showImage: boolean
}) {

    const onTileClick = (idx: number) => {
    const { newBoard, moved, newCount } = handleMoves(props.board, idx, props.moves, props.gridSize);
    if (moved) {
        props.setBoard(newBoard);
        props.setMoves(newCount);
    }
    };

  //image path for the puzzle image
  const imagePath = '/src/assets/red-illustration.png'; 

  return (
    <div className="board" style={{ gridTemplateColumns: `repeat(${props.gridSize}, 1fr)` }}>
      {props.board.map((tile, idx) => {
        //for image mode, calculate correct row/col for this tile's value
        let tileContent = null;
        let tileStyle = {};
        //only set background image if showImage is true and tile is not the empty tile
        if (props.showImage && tile.value !== 0) {
          //get the exact position for this tile based on its value
          const correctIndex = tile.value - 1;
          const row = Math.floor(correctIndex / props.gridSize);
          const col = correctIndex % props.gridSize;
          //percent spacing between tiles for background position
          const percent = props.gridSize > 1 ? 100 / (props.gridSize - 1) : 0;
          tileStyle = {
            backgroundImage: `url(${imagePath})`,
            backgroundSize: `${props.gridSize * 100}% ${props.gridSize * 100}%`,
            backgroundPosition: `${col * percent}% ${row * percent}%`,
            backgroundRepeat: 'no-repeat',
          };
          //else for number mode, just show the tile value
        } else if (!props.showImage && tile.value !== 0) {
          tileContent = tile.value;
        }
        return (
          <div
            key={tile.value}
            className={`tile ${tile.value === 0 ? 'empty' : ''}`}
            style={tileStyle}
            onClick={() => onTileClick(idx)}
          >
            {tileContent}
          </div>
        );
      })}
    </div>
  );
}