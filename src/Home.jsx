import React, { useEffect, useState } from 'react'
import './nav.css';

const Home = () => {
    let[count,setCount]=useState(0)
    useEffect(()=>{
        setCount(count + 1)
    },[])
  
  
  return (
    <div className='main-home'>
        
      <h1>{count}</h1>
      <button onClick={()=>setCount(count + 1)}>Add</button>
      <button onClick={()=>setCount(count - 1)}>Remove</button>

    </div>

  
  )
}

export default Home