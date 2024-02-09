import React from 'react'
import { useState } from 'react'

const MyWebComponent = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>up</button>
        <p>{count}</p>
        <button onClick={()=>setCount(count-1)}>down</button>
    </div>
  )
}

export default MyWebComponent