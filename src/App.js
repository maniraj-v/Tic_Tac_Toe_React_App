import "./styles.css";
import Board from './Board'
import {useState } from "react";


export default function App() {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState('');
  const [moves, setMoves] = useState(Array.from({length:9}));
  const [count, setCount] = useState(0);

  const isWinner = (arr, player) =>{
    return  (arr[0] === player && arr[1] === player && arr[2] === player)? true:
            (arr[3] === player && arr[4] === player && arr[5] === player)? true:
            (arr[6] === player && arr[7] === player && arr[8] === player)? true:
            (arr[0] === player && arr[3] === player && arr[6] === player)? true:
            (arr[1] === player && arr[4] === player && arr[7] === player)? true:
            (arr[2] === player && arr[5] === player && arr[8] === player)? true:
            (arr[0] === player && arr[4] === player && arr[8] === player)? true:
            (arr[2] === player && arr[4] === player && arr[6] === player)? true:
            false
  }

  const processResult =(e)=>{
   if(e.target.classList.contains('square') && !winner){
     const index = Number(e.target.dataset.index);
     if(!moves[index]){
        const newCount = count +1;
        setCount(newCount);
        const tempArr = [...moves];
        tempArr[index]=currentPlayer
        setMoves(tempArr);
        if(isWinner(tempArr, currentPlayer)){
          setWinner(currentPlayer);
        }else if(newCount >= 9){
          setWinner('draw');
        }
        let nextPlayer = currentPlayer === 'X'? 'O' : 'X';
        setCurrentPlayer(nextPlayer);
      }
    }
  }
  const resetGame = () =>{
    setCurrentPlayer('X');
    setWinner('');
    setMoves(Array.from({length:9}));
    setCount(0);
  }

  return (
      <main className="App">
        <h1>TIC TAC TOE GAME</h1>
        {winner 
        ?
        (
        winner === 'draw'
        ?
        <p> Match Drawn.. Click Reset button to Restart Game</p>
        :
        <p> Winner is : {winner}</p>
        )
        :
        <p>Next Player : {currentPlayer}</p>
        }
        <Board moves={moves} processResult={processResult}/>
        <button
        onClick={resetGame} 
        className='reset-btn'>
          reset
        </button>
      </main>
  );
}
