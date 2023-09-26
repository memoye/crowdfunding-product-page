import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import 'normalize.css'
import { ProjectsContextProvider } from './context/ProjectsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProjectsContextProvider>
      <App />
    </ProjectsContextProvider>
  </React.StrictMode>,
)
