import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
