import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './Redux/counterSlice'
import UserList from './UserList'

function App() {
  const [count, setCount] = useState(0)


  const dispatch = useDispatch();
  const { value } = useSelector((store) => store.counter);

  console.log(value)
  return (
    <>
      <div>
        <UserList />
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
