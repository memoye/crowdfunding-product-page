import { useState } from 'react'
import './App.scss'
import { NavBar } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <NavBar />
      </div>
    </>
  )
}

export default App
