// import { useState } from "react";
import '../styles/Board.css';
import { type BoardType } from '../utils/types.tsx';
import { handleMoves } from './MoveLogic.tsx';

export default function Board(props: { board: BoardType, setBoard: (board: BoardType) => void, moves: number, setMoves: (moves: number) => void }) {

    const onTileClick = (idx: number) => {
    const { newBoard, moved, newCount } = handleMoves(props.board, idx, props.moves);
    if (moved) {
        props.setBoard(newBoard);
        props.setMoves(newCount);
    }
    };

  return (
    <div className="board">
      {props.board.map((tile, idx) => (
        <div key={tile.value} 
             className={`tile ${tile.value === 0 ? 'empty' : ''}`} 
             onClick={() => onTileClick(idx)}>
          {tile.value !== 0 ? tile.value : ''}
        </div>
      ))}
      
    </div>
        
    
  );
}