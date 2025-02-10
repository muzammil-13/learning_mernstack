import {useState} from 'react';
import axios from 'axios';

import './App.css'

function App() {
  const[value,setValue]=useState('click above button to view sample data')

  async function handleClick(){
    try{
      const response=await axios.get("http://localhost:3000/")
      setValue(response.data);
    }
    catch(error){
      console.error(error)
      setValue("failed to get response from backend")
    }
  }

  return (
    <>
      <div className='main'>
        <h1>Connecting Full stack</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde numquam accusantium vero minus eligendi, a quod quibusdam eaque quos corporis earum ullam sint, dolor impedit consequatur beatae dolore, voluptatum blanditiis.
        </p>
        <button onClick={handleClick}>Click here</button>
        <h2>{value}</h2>
      </div>
    </>
  )
}

export default App
