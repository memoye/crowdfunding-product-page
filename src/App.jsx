import { useState } from 'react'
import './App.scss'
import { NavBar, Project } from './components'
import { ProjectsContextProvider } from './context/ProjectsContext'

function App() {

  return (
    <>
      <div className='App'>
        <NavBar />

        <ProjectsContextProvider>
          <Project />
        </ProjectsContextProvider>
      </div >
    </>
  )
}

export default App