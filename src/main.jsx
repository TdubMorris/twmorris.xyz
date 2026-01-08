import { createRoot } from 'react-dom/client'
import './styling/index.css'
import App from './App'
import { HashRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <HashRouter>
      <App />
  </HashRouter>
)
