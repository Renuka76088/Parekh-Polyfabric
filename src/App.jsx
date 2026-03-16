import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Component/Home'
import HomePage from './Pages/HomePAge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
