import React from 'react';
import { useState,useEffect,useRef } from 'react';
import "./style.css";

function Counter() {

    const [counter,setCounter]=useState(0);
    const buttonRef = useRef(null);

    useEffect(() => {
      document.title = `Counter: ${counter}`;
    }, [counter]);

    const increment = () => {
        setCounter(prevCounter => prevCounter + 1);
      };
    
      const decrement = () => {
        setCounter(prevCounter => prevCounter - 1);
      };
    
  

  return (
    <div className='Counter'>
        <h2 className='declare'>{counter}</h2>
        <button className="Increment" ref={buttonRef} onClick={increment}>Increament</button>
        <button className='Decrement' onClick={decrement}>Decrement</button>
      
    </div>
  )
}

export default Counter
