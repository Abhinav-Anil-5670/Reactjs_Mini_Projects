import React, { useEffect, useState } from 'react'

const App = () => {

  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")
  
  const fetchData = async () =>{
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const result = await response.json()
      setUsers(result)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    async function a(params) {
      await fetchData()
      
    }
    a()
    
  },[])

  
    
    const filtered = users.filter((data)=>{
      return data["name"].toLowerCase().includes(search.toLowerCase())
    })
  
  

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '600px', margin: '60px auto', padding: '30px', backgroundColor: '#f8fafc', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
      
      <h2 style={{ textAlign: 'center', color: '#0f172a', marginBottom: '24px', fontSize: '1.8rem' }}>User Directory</h2>

      <input 
        placeholder="Search names..."
        onChange={(e)=>setSearch(e.target.value)} 
        type="text" 
        style={{ width: '100%', padding: '16px 20px', fontSize: '1.05rem', border: '2px solid #e2e8f0', borderRadius: '12px', marginBottom: '30px', outline: 'none', boxSizing: 'border-box', backgroundColor: '#ffffff', color: '#1e293b', transition: 'border-color 0.2s' }}
      />
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {
        
        filtered.length > 0 ?
        
        filtered.map((data, index)=>(
          <h1 key={index} style={{ margin: 0, padding: '18px 24px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', fontSize: '1.1rem', color: '#334155', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
            {data.name}
          </h1>
        )) : <h1>No Results</h1>
      
      }
      </div>
    </div>
  )
}

export default App