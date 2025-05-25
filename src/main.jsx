import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './links'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
