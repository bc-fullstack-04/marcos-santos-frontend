import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import Signup from './pages/signup/index.tsx'
import { Toaster } from 'react-hot-toast'
import Albums from './pages/landing/landing.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  
    <>
      <Toaster position='top-right' toastOptions={{duration: 5000}}/>
      <Albums/>
    </>
    
)
