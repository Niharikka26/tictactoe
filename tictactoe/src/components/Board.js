import React,{useState} from 'react';
import Square from './Square';


const Board = () => {
  const [board,setBoard]=useState(Array(9).fill(null));
  const [next,setnext]=useState(false);
  const handleSquareClick= (position)=>{
    if(board[position]){
      return;
    }

setBoard((prev)=>{
  return prev.map((square,pos)=>
  {
    if (pos===position){
    return next? 'X':'0';
    }
    return(square);
  }
 
  )
})
setnext(prev=>!prev)
}
  
  
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
