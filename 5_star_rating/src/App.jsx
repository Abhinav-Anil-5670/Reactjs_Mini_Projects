import React, { useState } from 'react'
import { use } from 'react'
import {FaStar} from "react-icons/fa"
const App = ({noStars = 5}) => {

  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  function handleClick(getCurrentIndex){
    console.log(`Click -> ${getCurrentIndex}`)
    setRating(getCurrentIndex)
  }

  function handleMouseEnter(getCurrentIndex){
    console.log(`On Hover-> ${getCurrentIndex}`)
      setHover(getCurrentIndex)
  }

  function handleMouseLeave(getCurrentIndex){
    setHover(0)
    console.log(`Off Hover-> ${getCurrentIndex}`)
  }

  return (
    <div>
      { 
        [...Array(noStars)].map((_,index)=>{
          index += 1
          return <FaStar 
          style={{color : `${index  <= (hover|| rating) ? "red" : "blue"}`}}
          key={index}
          onClick={()=>handleClick(index)}
          onMouseEnter={()=>handleMouseEnter(index)}
          onMouseLeave={()=>handleMouseLeave(index)}
          size={40}
          />
        })
      }
      <button onClick={()=>setRating(0)}>Remove Rating</button>

    </div>
  )
}

export default App