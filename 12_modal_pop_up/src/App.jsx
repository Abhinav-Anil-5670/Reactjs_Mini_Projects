import React, { useState } from 'react'
import Modal from '../components/Modal'

const App = () => {
  const [show, setShow] = useState(false)

  const handleClick = () =>{
    setShow(prev => !prev)
  }

  return (
    <div style={{ backgroundColor: "#121212", minHeight: "100vh", width: "100vw", color: "white", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "system-ui, sans-serif", margin: 0 }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "30px", letterSpacing: "1px" }}>App</h1>
      
      <button 
        onClick={handleClick}
        style={{ padding: "12px 28px", fontSize: "1.1rem", fontWeight: "bold", backgroundColor: "#3b82f6", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", boxShadow: "0 4px 12px rgba(59, 130, 246, 0.4)" }}
      >
        Modal Work
      </button>
      
      {
        show && <Modal handleClick={handleClick}/>
      }
    </div>
  )
}

export default App