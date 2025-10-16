// import { useState } from "react";
import '../styles/Board.css';
import { type BoardType } from '../utils/types.tsx';
import { handleMoves } from './MoveLogic.tsx';

export default function Board(props: { board: BoardType, setBoard: (board: BoardType) => void }) {

    //state to hold completed status and move count
    // const [completed, setCompleted] = useState<boolean>(false);
    // const [moves, setMoves] = useState<number>(0);



  return (
    <div className="board">
      {props.board.map((tile, idx) => (
        <div key={tile.value} 
             className={`tile ${tile.value === 0 ? 'empty' : ''}`} 
             onClick={() => props.setBoard(handleMoves(props.board, idx))}>
          {tile.value !== 0 ? tile.value : ''}
        </div>
      ))}
      
    </div>
        
    
  );
}