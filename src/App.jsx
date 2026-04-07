import { useState,  useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Component/Home'
import HomePage from './Pages/HomePage'
import Loader from '../Loader'
import { AnimatePresence } from "framer-motion"




function App() {
  
  const [count, setCount] = useState(0)
  
const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 3.5 seconds ke baad loader gayab ho jayega
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
        <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<HomePage/>}/>
    </Routes>
</BrowserRouter>     
    </>
  )
}

export default App
