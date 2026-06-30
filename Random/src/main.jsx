import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import FocusText from './FocusText.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FocusText/>
  </StrictMode>,
)
