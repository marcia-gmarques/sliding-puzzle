import { useState } from 'react';
import './App.css'
import Board from "./components/Board";

function App() {

  return (
    <>
      <div>
        <div className="title">
          <h1>Sliding Puzzle</h1>
        </div>
        <Board />
      </div>
    </>
  )
}

export default App
