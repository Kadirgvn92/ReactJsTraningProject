import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let a = 15;
  let sonuc = false;
  let isimler = ["Kadir", "Enes", "Eray","Osman"]
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React + Vite </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR at {a}
        </p>
        { sonuc ? <p> Geçtin</p> : <p>Kaldın</p>}
      </div>
      <p className="read-the-docs">
        Tıkla
      </p>
      {
        isimler.map((isim, index) => (
          <div key={index}>
           {isim}
          </div>
        ))
      }
    </>
  )
}

export default App
