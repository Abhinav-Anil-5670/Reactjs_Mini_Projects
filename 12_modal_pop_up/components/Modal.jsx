import React from 'react'

const Modal = ({handleClick}) => {
  return (
    <div  onClick={handleClick} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, backgroundColor: 'rgba(0, 0, 0, 0.75)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        
        {/* The White Modal Box */}
        <div onClick={(e)=>e.stopPropagation()} style={{ backgroundColor: '#ffffff', color: '#1e293b', padding: '40px', borderRadius: '16px', maxWidth: '500px', width: '90%', textAlign: 'center', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}>
          
          <h1 style={{ fontSize: '1.5rem', margin: '0 0 16px 0', color: '#0f172a' }}>TEST THE MODAL FUNCTION</h1>
          
          <h2 style={{ fontSize: '1.1rem', fontWeight: '400', color: '#64748b', lineHeight: '1.6', margin: '0 0 32px 0' }}>IT'S MORE OF CSS MAGIC AND LESS OF REACTJS .. LOL!!</h2>
          
          <button 
            onClick={handleClick} 
            style={{ padding: '10px 24px', fontSize: '1rem', fontWeight: '600', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', transition: 'background-color 0.2s' }}
          >
            Close
          </button>
          
        </div>
        
    </div>
  )
}

export default Modal