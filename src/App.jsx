import { useState } from 'react'
import './App.scss'
import { Modal, NavBar, Project } from './components'
import { getProjectContext } from './context/ProjectsContext'

function App() {
  const { modalOpen } = getProjectContext()

  return (
    <>
      <div className={ `App` }>
        <NavBar />

        <Project />

        { modalOpen && <Modal /> }

      </div >
    </>
  )
}

export default App