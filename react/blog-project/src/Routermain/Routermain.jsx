import React from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import './router.css'
import Contact from '../pages/Contact'


const Routermain=()=>{
  return (
    <BrowserRouter>
    <nav className='route'>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
       
      </ul>
      </nav> 
      <Routes>
        <Route path='/home'element={<Home/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/contact'element={<Contact/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}
export default Routermain
