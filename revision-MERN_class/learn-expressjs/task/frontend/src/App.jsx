import {useState} from 'react';
import axios from 'axios';

import './App.css'

function App() {
  const[value,setValue]=useState('click above button to view students lists')

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
        <h1>Students list</h1>
        <p>
          Here is the list of students in the class
        </p>
        <button onClick={handleClick}>Click here</button>
        
        <div className='student-list'>
          {Array.isArray(value)?(
            <ul>
              {value.map((student, index)=>(
                <li key={index}>{student}</li>
              ))}
            </ul>
          ):(
          <h2>{value}</h2>
        )}
        </div>

      </div>
    </>
  )
}

export default App