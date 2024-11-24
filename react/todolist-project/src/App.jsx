import react, { useState } from 'react'
import './App.css'
import { Todolist } from './components/Todolist'
import { LoginForm } from './components/LoginForm'

function App() {

  return (
    <div>
      <Todolist />
      <LoginForm />
    </div>
    
  );
}

export default App