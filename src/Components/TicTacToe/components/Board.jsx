import React from 'react';

function Board({ board, onCellClick }) {
  return (
    <div className="game grid grid-cols-3 gap-2 mx-auto">
      {board.map((cell, index) => (
        <button 
          key={index} 
          className="box border-none w-20 h-20 rounded-lg bg-gray-500 border-2 cursor-pointer text-3xl flex items-center justify-center"
          onClick={() => onCellClick(index)}
        >
          {cell === 'X' ? "X" : cell === 'O' ? "O" : null}
        </button>
      ))}
    </div>
  );
}

export default Board;