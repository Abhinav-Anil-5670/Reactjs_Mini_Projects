import React, { useEffect, useState } from 'react'

const App = () => {
  const [product, setProduct] = useState([])
  const [skip, setSkip] = useState(0)

  async function getData(params) {
    const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${skip}`)
    const data = await response.json()
    return data.products
  }

  useEffect(()=>{
    getData().then((items)=>{
      console.log(items)
      if(product.length == 0) setProduct(items)
      else setProduct([...product,...items])
    })
    .catch((err)=>{
      console.log(err)
    })
  },[skip])

  const handleClick = ()=>{
    setSkip(prev => prev+10)
  }

  return  (
    <div style={{ padding: '20px', fontFamily: 'system-ui, sans-serif', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px', width: '100%', marginBottom: '30px' }}>
        { product.length != 0 ? 
          product.map((data, index)=>{
            return (
              <div key={index} style={{ border: '1px solid #eaeaea', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', backgroundColor: '#fff' }}>
                <h1 style={{ fontSize: '1.2rem', margin: '0 0 12px 0', color: '#1a1a1a' }}>{data.title}</h1>
                <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.5', flexGrow: 1, margin: '0 0 16px 0' }}>{data.description}</p>
                <h3 style={{ fontSize: '0.8rem', letterSpacing: '0.5px', color: '#0056b3', backgroundColor: '#e6f2ff', padding: '6px 12px', borderRadius: '16px', alignSelf: 'flex-start', margin: 0 }}>
                  {data.category.charAt(0).toUpperCase()+data.category.slice(1)}
                </h3>
              </div>
            )
          })
          : <h1 style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#666' }}>Loading</h1>
        }
      </div>
      <button 
        onClick={handleClick}
        disabled={product.length >= 100}
        style={{ cursor: product.length >= 100 ? 'not-allowed' : 'pointer', backgroundColor : product.length >= 100 ?  '#cccccc' : "#1a1a1a", padding: '12px 28px', fontSize: '1rem', fontWeight: '600', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', transition: 'background-color 0.2s' }}
        onMouseOver={(e) => {
          if (product.length < 100) e.target.style.backgroundColor = '#333'
        }}
        onMouseOut={(e) => {
          if (product.length < 100) e.target.style.backgroundColor = '#1a1a1a'
        }}
      >
        {product.length >= 100 ? 'No More Products' : 'Load More'}
      </button>
    </div>
  )  
}

export default App