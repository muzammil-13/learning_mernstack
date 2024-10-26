import { useState } from 'react'
import './App.css'

import RouterMain from './router/router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterMain/>
    </>
  )
}

export default App
