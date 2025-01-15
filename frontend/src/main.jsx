import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

const CLIENT_ID= '349488632873-mk2mu8pkrhba44iqlne1m882pva74see.apps.googleusercontent.com'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </GoogleOAuthProvider>  
  </StrictMode>,
)
