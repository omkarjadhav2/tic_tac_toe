import Board from "./components/board";
import "./index.css";
import React from "react";

function App() {
  return (
    <div className="flex items-center justify-center bg-black h-[800px]">
      <div className="text-center">
        <h1 className="text-6xl text-white mb-10">Tic-Tac-Toe</h1>
        <Board />
        
      </div>
    </div>
  );
}


export default App;
