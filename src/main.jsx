import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './bootstrap.min (2).css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import ecartStore from './redux/ecartStore.js'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={ecartStore}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>    
  </StrictMode>,
)
