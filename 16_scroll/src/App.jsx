import React from 'react'
import { useRef } from 'react'
const App = () => {

  //Scroll to a prticulat section
  const specialSectionRef = useRef(null)
  const scrollToSpecialSection = () => {
    
    specialSectionRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', margin: 0, padding: 0 }}>
      
      {/* Navigation / Control Panel */}
      <div style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: '#0f172a', padding: '15px', display: 'flex', gap: '15px', justifyContent: 'center', zIndex: 10, boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <button onClick={()=>window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })} style={{ padding: '10px 20px', fontSize: '1rem', borderRadius: '6px', border: 'none', backgroundColor: '#3b82f6', color: 'white', cursor: 'pointer' }}>
          Scroll to Bottom
        </button>
        <button onClick={()=>scrollToSpecialSection()} style={{ padding: '10px 20px', fontSize: '1rem', borderRadius: '6px', border: 'none', backgroundColor: '#fbbf24', color: '#0f172a', fontWeight: 'bold', cursor: 'pointer' }}>
          Go to Special Section
        </button>
      </div>

      {/* Sections */}
      <div style={{ height: '100vh', backgroundColor: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ color: '#64748b' }}>Top Section</h1>
      </div>

      <div style={{ height: '100vh', backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ color: '#64748b' }}>Middle Section 1</h1>
      </div>

      {/* The Target Section */}
      <div ref={specialSectionRef} style={{ height: '100vh', backgroundColor: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ color: '#b45309', fontSize: '3rem' }}>⭐ The Special Section ⭐</h1>
      </div>

      <div style={{ height: '100vh', backgroundColor: '#cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ color: '#475569' }}>Middle Section 2</h1>
      </div>

      <div style={{ height: '100vh', backgroundColor: '#1e293b', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
        <h1>Bottom Section</h1>
        <button onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ padding: '10px 20px', marginTop: '30px', fontSize: '1rem', borderRadius: '6px', border: 'none', backgroundColor: '#ef4444', color: 'white', cursor: 'pointer' }}>
          Scroll to Top
        </button>
      </div>

    </div>
  )
}

export default App