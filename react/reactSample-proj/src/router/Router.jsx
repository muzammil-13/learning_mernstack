import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';

 function RouterMain() {
  return (
    <BrowserRouter>
    <nav>
        <ul>
            <li>
                <Link to='/home'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
    </nav>

    <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/home' element={ <Home/> } />
        <Route path='/about' element={ <About/> } />
        <Route path='/contact' element={ <Contact/> } />
    </Routes>
    
    </BrowserRouter>
  )
}


export default RouterMain;