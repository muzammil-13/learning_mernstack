import React, {useState,useEffect} from 'react'

export default function Effecthook() {
    const[count, setCount]=useState(0);
    // similar to componentDidMount and componentDidUpdate:
    useEffect(()=>{
        // update the document title using the browser API
        document.titile=`You clicked ${count} times`;
    });

  return (
    <div>
        <p>You clicked {count} times</p>
        <button onClick={()=>{
            setCount(count+1);
        }}>Click me</button>
    </div>
  );
}
