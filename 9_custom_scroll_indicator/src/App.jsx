import React, { useEffect, useState } from 'react'

const App = () => {
  const [scroll, setScroll] = useState(0)

  const handleScroll = ()=>{
    console.log("Scrolling")
    let x = document.documentElement.scrollTop
    let y = document.documentElement.scrollHeight
    let z = document.documentElement.clientHeight
    let finalVal = (x / (y - z)) * 100
    setScroll(finalVal)
    console.log(x)
  }

  useEffect(()=>{
    window.addEventListener("scroll",handleScroll)

    //The Cleanup Function: Remove the listener when the component unmounts
    return () => {
    window.removeEventListener('scroll', handleScroll);
  };
  },[])

  return (
    <div style={{height: "3000px", }}>
      <div style={{position: 'fixed', top: 0, left: 0, width: `${scroll}%` , backgroundColor : "red" }}>fd</div>
    </div>
  )
}

export default App