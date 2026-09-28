//setInterval() returns an ID.
//There is an id for every particular interval

//clearInterval is a JavaScript function used to stop a running interval created by setInterval.
//syntax - clearInterval(intervalID)
//We need the id to stop the interval

//use useState, when component re-rendering is required, and useRef when a value and UI change is not required

import React, { useRef, useState } from 'react'

const App = () => {

  const [time,setTime] = useState(0)
  const timeRef = useRef(null)

  function handleStart(){

    if(timeRef.current !=null){ //if the value of the id is not null, that means the timer has tarted and the button work run, unless stopeed
      return
    }

    timeRef.current = setInterval(()=>{
      setTime(time => time + 1)
    },1000)
    
  } 

  //changing the timeRef does not cause a re-render, keeping the UI Value same
  function handleStop(){
    clearInterval(timeRef.current)
    timeRef.current = null
  }

  function handleClear(){
    setTime(0)
    timeRef.current = null //id.current is the id of a particular timer change
  }

  

  return (

  <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">

    <div className="w-full max-w-md rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-8 sm:p-10">

      <h1 className="text-center text-3xl sm:text-4xl font-bold text-white tracking-tight">
        Stopwatch value : <span className="text-cyan-400">{time}</span>
      </h1>

      <div className="mt-8 flex flex-col gap-3">

        <button
          onClick={handleStart}
          className="w-full rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-white transition-all duration-200 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-[0.98]"
        >
          Start
        </button>

        <button
          onClick={handleStop}
          className="w-full rounded-xl bg-amber-500 px-5 py-3 font-semibold text-white transition-all duration-200 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/20 active:scale-[0.98]"
        >
          Stop
        </button>

        <button
          onClick={handleClear}
          className="w-full rounded-xl bg-rose-500 px-5 py-3 font-semibold text-white transition-all duration-200 hover:bg-rose-400 hover:shadow-lg hover:shadow-rose-500/20 active:scale-[0.98]"
        >
          Clear
        </button>

      </div>

    </div>

  </div>

)
}

export default App