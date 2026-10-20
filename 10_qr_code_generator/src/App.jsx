import React from 'react'
import QRCode from "react-qr-code"
import { useState } from 'react'

const App = () => {

  const [val,setVal] = useState("")
  const [type, setType] = useState("")
  const [val2,setVal2] = useState("")

  const handleQR = () =>{
    setType(val2)
  }

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '600px', margin: '50px auto', padding: '40px', backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', textAlign: 'center' }}>
      
      <input 
        type="text" 
        onChange={(e)=>setVal(e.target.value)} 
        style={{ padding: '14px 18px', fontSize: '1rem', width: '80%', borderRadius: '8px', border: '1px solid #ccc', marginBottom: '30px', outline: 'none', backgroundColor: '#f9f9f9' }}
      />

      {
        val && val.length > 0 ? <QRCode style={{ height: "auto", maxWidth: "100%", width: "200px", margin: "0 auto" }} value={val}/> : <p style={{ color: '#888', fontStyle: 'italic', margin: '40px 0' }}>Type Something</p>
      }

      <br />
      <hr style={{ margin: '40px 0', border: 'none', borderTop: '2px solid #f0f0f0' }} />
      
      <h1 style={{ fontSize: '1.4rem', color: '#222', marginBottom: '24px' }}>QR On Click of a button</h1>
      
      <input 
        type="text" 
        onChange={(e)=>setVal2(e.target.value)} 
        style={{ padding: '14px 18px', fontSize: '1rem', width: '50%', borderRadius: '8px', border: '1px solid #ccc', marginRight: '12px', marginBottom: '30px', outline: 'none', backgroundColor: '#f9f9f9' }}
      />
      <button 
        onClick={handleQR}
        style={{ padding: '14px 28px', fontSize: '1rem', borderRadius: '8px', border: 'none', backgroundColor: '#1a1a1a', color: '#fff', cursor: 'pointer', fontWeight: 'bold', marginBottom: '30px' }}
      >
        Generate
      </button>

      {
        type && type.length > 0 ? <QRCode style={{ height: "auto", maxWidth: "100%", width: "200px", margin: "0 auto" }} value={type}/> : <p style={{ color: '#888', fontStyle: 'italic', margin: '40px 0' }}>Type Something</p>
      }
    </div>

  )
}

export default App