import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import NotFoundPages from './pages/NotFoundPages'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Products' element={<Products />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='*' element={<NotFoundPages />}></Route>
      </Routes>
    </>
  )
}

export default App
