import React, { useState } from 'react'
import useFetch from './hooks/useFetch'

const App = () => {
  const [value, setValue] = useState("")
  const [data, getData] = useFetch()

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', minHeight: '100vh', backgroundColor: '#f6f8fa', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '60px 20px' }}>
      
      <div style={{ display: 'flex', gap: '10px', marginBottom: '40px', width: '100%', maxWidth: '450px' }}>
        <input 
          type="text" 
          placeholder="Enter GitHub username..."
          onChange={(e) => setValue(e.target.value)} 
          style={{ flex: 1, padding: '12px 16px', fontSize: '1rem', borderRadius: '6px', border: '1px solid #d0d7de', outline: 'none', backgroundColor: '#ffffff', color: '#24292f' }}
        />
        <button 
          onClick={()=>getData(value)}
          style={{ padding: '12px 24px', fontSize: '1rem', fontWeight: '600', backgroundColor: '#2da44e', color: '#ffffff', border: 'none', borderRadius: '6px', cursor: 'pointer', transition: 'background-color 0.2s' }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#2c974b'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#2da44e'}
        >
          Search
        </button>
      </div>

      {
        data.login && (
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #d0d7de', padding: '32px', borderRadius: '6px', width: '100%', maxWidth: '450px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            
            <img 
              src={data.avatar_url} 
              alt="Profile Avatar" 
              style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '20px', border: '1px solid #d0d7de' }} 
            />
            
            <h1 style={{ margin: '0 0 16px 0', color: '#24292f', fontSize: '1.5rem' }}>@{data.login}</h1>
            
            {data.bio && <h3 style={{ margin: '0 0 24px 0', color: '#57606a', fontSize: '1rem', fontWeight: '400', textAlign: 'center', lineHeight: '1.5' }}>{data.bio}</h3>}
            
            <div style={{ display: 'flex', gap: '30px', marginBottom: '32px', borderTop: '1px solid #eaecef', borderBottom: '1px solid #eaecef', padding: '16px 0', width: '100%', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ margin: '0', fontWeight: '600', fontSize: '1.25rem', color: '#24292f' }}>{data.followers}</p>
                <p style={{ margin: '0', fontSize: '0.875rem', color: '#57606a' }}>Followers</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{ margin: '0', fontWeight: '600', fontSize: '1.25rem', color: '#24292f' }}>{data.following}</p>
                <p style={{ margin: '0', fontSize: '0.875rem', color: '#57606a' }}>Following</p>
              </div>
            </div>
            
            <a 
              target="_blank" 
              rel="noreferrer"
              href={data.html_url}
              style={{ display: 'block', width: '100%', textAlign: 'center', padding: '10px 0', backgroundColor: '#f6f8fa', color: '#0969da', textDecoration: 'none', border: '1px solid #d0d7de', borderRadius: '6px', fontWeight: '600', transition: 'background-color 0.2s' }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#f0f3f6'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#f6f8fa'}
            >
              View Github Page
            </a>

          </div>
        )
      }
    </div>
  )
}

export default App