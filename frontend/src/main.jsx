import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import DonerDataContextProvider from './context/DonerDataContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <DonerDataContextProvider>
      <App />
    </DonerDataContextProvider>
  </BrowserRouter>,
)
