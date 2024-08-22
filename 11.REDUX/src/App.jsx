import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './Redux/counterSlice'

function App() {
  const [count, setCount] = useState(0)


  const dispatch = useDispatch();
  const { value } = useSelector((store) => store.counter);

  console.log(value)
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
      <h1>Vite + React</h1>
      <div className="card">
        <p>{value}</p>
        <button onClick={() => dispatch(increment())}>
          +
        </button>
        <button onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>

    </>
  )
}

export default App
