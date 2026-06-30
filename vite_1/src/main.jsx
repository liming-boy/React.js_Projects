import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import First_file from './FirstFile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode><App /><First_file /></StrictMode>
)
