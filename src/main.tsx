import ReactDOM from 'react-dom/client'
import './global.css'
import Login from './pages/login'
import { AuthProvider } from './context/AuthContext'
import { Toaster } from 'react-hot-toast'
import Subscribe from './pages/subscribe'
import Home from './pages/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from './pages/welcome'
import NotFile from './pages/404'
import PrivateRoutes from './utils/PrivateRoutes'
import MyDiscs from './pages/MyDiscs'
import Wallet from './pages/wallet'



ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
            
            <Toaster position='top-right'/>
            <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element = {<Welcome/>} />
                    <Route path='/login' element = {<Login/>} />
                    <Route path='/cadastro' element = {<Subscribe/>} />
                    <Route path='*' element = {<NotFile/>} />
                   

                   <Route element={<PrivateRoutes/>}>
                        <Route path='/home' index element = {<Home/>} />
                        <Route path="/mydiscs" element = {<MyDiscs/>}/>
                        <Route path='/carteira' element = {<Wallet/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
            </AuthProvider>
        
    </>
   
    
)
