import React, { use, useState } from 'react'

const App = () => {

  const [mode,setMode] = useState("hex")
  const [color, setColor] = useState("")

  function generateRandom(x){
    return Math.floor(Math.random()*x)
  }

  const handleClick = ()=>{
    if(mode == "hex"){
      let hex = "#"
    const values = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

    for(let i=0; i<6 ; i++){
      hex+=values[generateRandom(values.length)]
    }
    setColor(hex)
    console.log(hex)
    }
    else if(mode == "rgb"){
      let r = Math.floor(256*Math.random())
      let g = Math.floor(256*Math.random())
      let b = Math.floor(256*Math.random())
      setColor(`rgb(${r},${g},${b})`)
      console.log(color)
    }
  }

  const changeMode = ()=>{
    if(mode == "hex" ) setMode("rgb")
    else (setMode("hex"))
  }

  return (
    <div className='complete' style={{backgroundColor : `${color}`}}>
      <button onClick={()=>handleClick()}>Change Color</button>
      <button onClick={changeMode}>Change Mode</button>
      <h1>{color}</h1>
    </div>
  )
}

export default App