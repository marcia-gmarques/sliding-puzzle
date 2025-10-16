import React, { useState } from 'react'
import { type BoardType } from './utils/types.tsx'
import './App.css'
import { initialTiles } from './utils/initialTiles.tsx';
import Board from "./components/Board";
import { shuffleTiles } from './utils/puzzle.tsx';

function App() {


  //state to hold the board
  const [board, setBoard] = useState<BoardType>(() => shuffleTiles(initialTiles));

  //function to handle shuffle button click - shuffles the tiles in the board
  const handleShuffle = () => {
    setBoard(shuffleTiles(board));
    console.log("Board shuffled");
  }


  return (
    <>
      <div>
        <div className="title">
          <h1>Sliding Puzzle</h1>
        </div>
        <div>
          <h2 id="validMoves"></h2>
          <Board board={board} setBoard={setBoard} />
          <button onClick={handleShuffle}>New Game</button>
        </div>
        
      </div>
    </>
  )
}

export default App
