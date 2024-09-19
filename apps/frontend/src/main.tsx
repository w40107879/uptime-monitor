import {BrowserRouter as Router} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import QueryProvider from '@/providers/QueryProvider'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryProvider>
      <Router>
        <App />
      </Router>
    </QueryProvider>
  </React.StrictMode>,
)
