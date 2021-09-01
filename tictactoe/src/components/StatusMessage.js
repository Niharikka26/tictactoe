import React from 'react'

const StatusMessage = ({winner,current}) => {
 // const message = winner
   // ? `Winner is ${winner}`
  //  : `Next player is ${current.next ? 'X' : 'O'}`;  

  const NoMovesLeft=current.board.every(el=>el!==null)
  return (
    <div className="status-message">
    {winner &&
     (
     <> 
    Winner is {' '}
    <span className={winner==='X'? 'text-green':'text-orange'}>{winner}</span>
    </>)
  } 
   {!winner && !NoMovesLeft &&
   (
   <> 
   Next player is{' '}
   <span className={current.next? 'text-green':'text-orange'}>
     {current.next? 'X' : 'O'}{' '}</span>
   </>
   )}
    {!winner && NoMovesLeft &&( 
      <>
      Both Players <span className="text-green">Tied</span>
      </>)
      }
    </div>
  )
}

export default StatusMessage
