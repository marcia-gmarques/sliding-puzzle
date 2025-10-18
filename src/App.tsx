import React, { useState } from 'react'
import { type BoardType } from './utils/types.tsx'
import './App.css'
import { initialTiles } from './utils/initialTiles.tsx';
import Board from "./components/Board";
import Winner from "./components/Winner";
import { shuffleTiles } from './utils/puzzle.tsx';

function App() {


  //state to hold the board and move count
  const [board, setBoard] = useState<BoardType>(() => shuffleTiles(initialTiles));
  const [moves, setMoves] = useState<number>(0);

  //function to handle shuffle button click - shuffles the tiles in the board and resets move count
  const handleShuffle = () => {
    setBoard(shuffleTiles(board));
    setMoves(0); //reset move count
    console.log("Board shuffled");
  }


  return (
    <>
      <div>
        <div className="title">
          <h1>Sliding Puzzle</h1>
          <div className="sizeButtons">
            <button>3x3</button>
            <button>4x4</button>
            <button>5x5</button>
          </div>
        </div>
        <div>
          <h2 id='validMoves'>Moves : {moves}</h2>
          <Board board={board} setBoard={setBoard} moves={moves} setMoves={setMoves} />
          <Winner board={board} />
          <button onClick={handleShuffle} id='newGameButton'>New Game</button>
        </div>
        
      </div>
    </>
  )
}

export default App
