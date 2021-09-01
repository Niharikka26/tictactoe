import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './helper';

import './styles/root.scss';

const NEW_GAME=[
  { board: Array(9).fill(null), next: true },
]
const App = () => {


  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];


  const {winner,winningSquares} = calculateWinner(current.board);
  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }

    setHistory(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((Square, pos) => {
        if (pos === position) {
          return last.next ? 'X' : 'O';
        }

        return Square;
      });

      return prev.concat({ board: newBoard, next: !last.next });
    });

    setCurrentMove(prev => prev + 1);
  };
 const moveTo=(move)=>
 {
 setCurrentMove(move);
 }
  const OnNewGame =()=>{
    setHistory(NEW_GAME)
    setCurrentMove(0)
  }
  const NoMovesLeft=current.board.every(el=>el!==null)
  return (
    <div className="app">
      <h1>TIC <span className="text-green">TAC</span> TOE</h1>
    <StatusMessage winner={winner} current={current}  />
      <Board board={current.board} handleSquareClick={handleSquareClick} winningSquares={winningSquares} />
      <button type="button" onClick={OnNewGame
      } className={`btn-reset  ${NoMovesLeft ?'active ':' '}${winner ?'active ':' '}` }>Start a new game</button>
      <h2 style={{fontWeight:'normal'}} > Game History</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove}/>
      <div className="bg-balls"/>
    </div >
   
  );
};

export default App;
