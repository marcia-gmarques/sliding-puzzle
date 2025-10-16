// import { useState } from "react";
import '../styles/Board.css';
import { type BoardType } from '../utils/types.tsx';
//import { shuffleTiles } from '../utils/puzzle.tsx';

export default function Board(props: { board: BoardType }) {

    //state to hold completed status and move count
    // const [completed, setCompleted] = useState<boolean>(false);
    // const [moves, setMoves] = useState<number>(0);

    
    //console.log(initialTiles);

    //shuffle board on load/initial render
    // useEffect(() => {
    //     setBoard(shuffleTiles(board));
    // }, []);


  return (
    <div>
    <div className="board">
      {props.board.map((tile) => (
        <div key={tile.index} className={`tile ${tile.value === 0 ? 'empty' : ''}`} onClick={() => {}}>
          {tile.value !== 0 ? tile.value : ''}
        </div>
      ))}
      
    </div>
        {/* <button onClick={() => setBoard(shuffleTiles(board))}>New Game</button> */}
    </div>
    
  );
}