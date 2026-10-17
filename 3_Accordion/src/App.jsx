import React, { useState } from 'react'
import data from './data.js'

const App = () => {

  const [selected,setSelected] = useState([])
  const [single, setSingle] = useState(null)
  const [multi,setMulti] = useState(false)

   const handleClick = (id)=>{

    if(multi){
      if (selected.includes(id)) {
      // Remove the id by filtering it out
      setSelected((prev) => prev.filter((item) => item !== id));
    } else {
      // Add the id to the array
      setSelected((prev) => [...prev, id]);
    }
    }
    else{
      if(single == id) setSingle(null)
      else setSingle(id)
    }
    
    
  }

  const open = ()=>{
    setMulti(prev => !prev)
    setSelected([])
    setSingle(null)
  }

  return (
    <div>
      {data.map((d,i)=>{
        const isOpen = multi ? selected.includes(d.id) : single === d.id
        return <div key={i}>
           <h1 onClick={(e)=>handleClick(d.id)}>{d.question}</h1>
           
           {isOpen ? <h3>{d.answer}</h3> : null }

           
           
        </div>
        
      })}

      <button onClick={open}>{ multi ? "Multiple Allowed" : "No Multple"}</button>
      
    </div>
  )
}

export default App