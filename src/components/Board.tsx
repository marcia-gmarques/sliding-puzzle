import { useEffect, useState } from "react";
import '../styles/Board.css';
import { type BoardType } from '../utils/types.tsx';
import { shuffleTiles } from '../utils/puzzle.tsx';

export default function Board() {

    //tile values from 1 to 8 plus 0 which is the empty tile
    //if index is 8 (last tile in the array) value is 0 otherwise value is index + 1
    const initialTiles: BoardType = Array.from({ length: 9 }, (_, index) => ({
        value: index === 8 ? 0 : index + 1,
        index: index
    }));

    //state to hold the board, completed status and move count
    const [board, setBoard] = useState<BoardType>(initialTiles);
    const [completed, setCompleted] = useState<boolean>(false);
    const [moves, setMoves] = useState<number>(0);

    
    //console.log(initialTiles);

    //shuffle board on initial render
    useEffect(() => {
        setBoard(shuffleTiles(board));
    }, []);
    

  return (
    <div>
    <div className="board">
      {board.map((tile) => (
        <div key={tile.index} className={`tile ${tile.value === 0 ? 'empty' : ''}`} onClick={() => {}}>
          {tile.value !== 0 ? tile.value : ''}
        </div>
      ))}
      
    </div>
        <button onClick={() => setBoard(shuffleTiles(board))}>New Game</button>
    </div>
    
  );
}