import React from 'react'
import { useState } from 'react'
const App = () => {

  const winningLines = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Cols
  [0, 4, 8], [2, 4, 6]             // Diagonals
];
const calculateWinner = (boardVal) =>{
    for (let i = 0; i<winningLines.length ;i++){
      const [a, b, c] = winningLines[i]
      // console.log(a,b,c)

      if(boardVal[a] && boardVal[a] === boardVal[b] && boardVal[a] === boardVal[c]){
        console.log(boardVal[a])
        return boardVal[a]
      }
    }
    return null
  }

  const [board, setBoard] = useState(Array(9).fill(null))
  const [player,setPlayer] = useState(true)
  const winner = calculateWinner(board);

  

  const handleClick = (index) =>{
    if (board[index] || calculateWinner(board)) return;
    // console.log(index)
    const newBoard = [...board]
    newBoard[index] = player ? "X" : "Y"
    setBoard(newBoard)
    setPlayer(prev => !prev)
  }

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc' }}>
      
      <h1 style={{ color: '#0f172a', marginBottom: '10px', fontSize: '2.5rem' }}>Tic-Tac-Toe</h1>
      
      {/* Placeholder for whose turn it is or who won */}
      <h2 style={{ color: '#475569', marginBottom: '30px', fontSize: '1.5rem', fontWeight: '500' }}>
        
        {winner ? `Winner is ${winner}` : `Next player - ${player ? "X" : "Y"}`}
        
        
      </h2>

      {/* The Game Board */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 100px)', 
        gridTemplateRows: 'repeat(3, 100px)', 
        gap: '10px', 
        backgroundColor: '#cbd5e1', 
        padding: '10px', 
        borderRadius: '16px', 
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)' 
      }}>
        
        {board.map((square, index) => (
          <button 
            key={index}
            onClick={()=>handleClick(index)}
            style={{ 
              backgroundColor: '#ffffff', 
              border: 'none', 
              borderRadius: '8px', 
              fontSize: '4rem', 
              fontWeight: 'bold', 
              // Making X red and O blue purely for visuals
              color: square === 'X' ? '#ef4444' : '#3b82f6', 
              cursor: 'pointer', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
            }}
          >
            {square}
          </button>
        ))}

      </div>

      {/* Placeholder for your reset function */}
      <button 
      onClick={()=>{setBoard(Array(9).fill(null)); setPlayer(true)}}
        style={{ marginTop: '40px', padding: '12px 30px', fontSize: '1.1rem', fontWeight: '600', backgroundColor: '#0f172a', color: '#ffffff', border: 'none', borderRadius: '8px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(15, 23, 42, 0.3)' }}
      >
        Restart Game
      </button>

    </div>
  )
}

export default App