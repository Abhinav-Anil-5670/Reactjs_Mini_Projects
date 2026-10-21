import React from 'react'
import Tabs from '../components/Tabs'

const App = () => {
  const tabData = [ 
    { label: "Tab 1", content: "This is screen 1" },
    { label: "Tab 2", content: "This is screen 2" }, 
    { label: "Tab 3", content: "This is screen 3" } 
  ]

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: '60px 20px', minHeight: '100vh', backgroundColor: '#f8fafc', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: '700px' }}>
        <h1 style={{ textAlign: 'center', color: '#1e293b', marginBottom: '40px', fontSize: '2rem' }}>Interactive Tabs</h1>
        <Tabs tabData={tabData}/>
      </div>
    </div>
  )
}

export default App