import React from 'react'

const StatusMessage = ({winner,current}) => {
 // const message = winner
   // ? `Winner is ${winner}`
  //  : `Next player is ${current.next ? 'X' : 'O'}`;  

  const NoMovesLeft=current.board.every(el=>el!==null)
  return (
    <h2>
    {winner &&  `Winner is ${winner}`} 
   {!winner && !NoMovesLeft && `Next player is ${current.next ? 'X' : 'O'}`}
    {!winner && NoMovesLeft && `Both players tied`}
    </h2>
  )
}

export default StatusMessage
