import { useState } from "react"

export default function Counter(){

    const [count, setCount]= useState(0);

    const handleAdd =()=>{
        // console.log('add button clicked')
        const newCount = count + 1;
        setCount(newCount);
    }

    const counterStyle ={
        border:'3px solid yellow',
        borderRadius:'15px',
      
        padding:'15px'
    }

    return(
        <div style={counterStyle}>
            <h3>Count: {count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}