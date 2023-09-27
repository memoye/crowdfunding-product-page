import { useEffect, useState } from 'react'
import './App.scss'
import { Modal, NavBar, Project } from './components'
import { getProjectContext } from './context/ProjectsContext'

function App() {
  const { modalOpen } = getProjectContext()

  // disable scroll if modal is open
  useEffect(() => {
    if (modalOpen === true) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    }
  }, [modalOpen])

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