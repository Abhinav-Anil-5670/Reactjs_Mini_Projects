import React, { useState } from 'react'

const Tabs = ({tabData}) => {
    const [id, setId] = useState(0)

  return (
    <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
        {/* Tab Headers Container */}
        <div style={{ display: 'flex', backgroundColor: '#f1f5f9', borderBottom: '1px solid #e2e8f0' }}>
        {
            tabData.map((data, index)=>(
                <h2 
                  style={{
                    margin: 0,
                    padding: '16px 24px',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    flex: 1,
                    textAlign: 'center',
                    // This creates the visual effect of the active tab
                    backgroundColor: id === index ? "#ffffff" : "transparent",
                    color: id === index ? "#0f172a" : "#64748b",
                    borderBottom: id === index ? "3px solid #3b82f6" : "3px solid transparent",
                    transition: 'all 0.2s ease-in-out'
                  }} 
                  key={index} 
                  onClick={()=> setId(index)}
                >
                  {data.label}
                </h2>
            ))
        }
        </div>

        {/* Tab Content Container */}
        <div style={{ padding: '40px', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {
            tabData && <h3 style={{ margin: 0, color: "#334155", fontSize: '1.25rem', fontWeight: '500' }}>{tabData[id].content }</h3>
        }
        </div>
    </div>
  )
}

export default Tabs