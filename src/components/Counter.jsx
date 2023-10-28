import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'


const Counter = ({onClick,count}) => {
    const [counter,setCounter]=useState(0)

    const counters=()=>{

setCounter(counter-1)
    }
  return (  
    <>
    <Outlet/>
     <div> Counter {counter} </div>
     <h1> hello{counter}</h1>
    <button onClick={()=>setCounter(counter+1)}>Add value</button>
  <button onClick={counters}>Remove Value </button>
<button onClick={onClick}>hello</button>
<p>{count}</p>

    </>
  )
}

export default Counter