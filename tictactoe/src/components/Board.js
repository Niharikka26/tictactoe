import React from 'react';
import Square from './Square';


const Board = ({board,handleSquareClick}) => {
 
const RenderSquare = position => {
  return (
    <Square
      value={board[position]}
      onClick={() => handleSquareClick(position)}
    />
  );
};
  return (
   
    <div className="board">
      <div className="board-row">
        {RenderSquare(0)}
        {RenderSquare(1)}{RenderSquare(2)}
     
       
      
    </div>
    <div className="board-row">
      {RenderSquare(3)}
        {RenderSquare(4)}{RenderSquare(5)}

</div>
<div className="board-row">{RenderSquare(6)}
        {RenderSquare(7)}{RenderSquare(8)}

    </div>

    </div>
  )
  
  
  }
export default Board  
