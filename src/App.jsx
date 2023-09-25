import { useState } from 'react'
import './App.scss'
import { NavBar, Project } from './components'

function App() {

  return (
    <>

      <div className='App'>
        <NavBar />
        <Project />
      </div >
    </>
  )
}

export default App