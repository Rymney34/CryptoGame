import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import App from './App.jsx'
import { darkTheme } from './theme.jsx'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={darkTheme}>
    <BrowserRouter>
      <CssBaseline/>
      <App />
    </BrowserRouter>
  </ThemeProvider>
)
