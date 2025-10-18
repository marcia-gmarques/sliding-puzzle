import { useState } from 'react'
import { type BoardType } from './utils/types.tsx'
import './App.css'
import { generateInitialTiles } from './utils/initialTiles.tsx';
import Board from "./components/Board";
import Winner from "./components/Winner";
import { shuffleTiles } from './utils/puzzle.tsx';

function App() {


  //state to hold the board, move count and grid size
  const [board, setBoard] = useState<BoardType>(() => shuffleTiles(generateInitialTiles(3)));
  const [moves, setMoves] = useState<number>(0);
  const [gridSize, setGridSize] = useState<number>(3);
  const [showImage, setShowImage] = useState(false);

  //function to handle grid size button click - changes grid size, generates new board and resets move count
  const handleGridSizeChange = (newSize: number) => {
    setGridSize(newSize);
    const newInitialTiles = generateInitialTiles(newSize);
    setBoard(shuffleTiles(newInitialTiles));
    setMoves(0);
    console.log(`Grid size changed to ${newSize}x${newSize}`);
  };

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
            <button className={gridSize === 3 ? "active" : ""} onClick={() => handleGridSizeChange(3)}>3x3</button>
            <button className={gridSize === 4 ? "active" : ""} onClick={() => handleGridSizeChange(4)}>4x4</button>
            <button className={gridSize === 5 ? "active" : ""} onClick={() => handleGridSizeChange(5)}>5x5</button>
            <button className={showImage ? "active" : ""} onClick={() => setShowImage(!showImage)}>{showImage ? "Remove Image" : "With Image"}</button>
          </div>
        </div>
        <div>
          <h2 id='validMoves'>Moves : {moves}</h2>
          <Board board={board} setBoard={setBoard} moves={moves} setMoves={setMoves} gridSize={gridSize} showImage={showImage} />
          <Winner board={board} />
          <button onClick={handleShuffle} id='newGameButton'>New Game</button>
        </div>
        
      </div>
    </>
  )
}

export default App
