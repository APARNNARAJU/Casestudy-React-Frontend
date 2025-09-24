import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Empform from './components/Empform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/form' element={<Empform eform={{id:1,name:"Abc",email:"abc@gmail.com"}} />}></Route>
      </Routes>
    </>
  )
}

export default App
