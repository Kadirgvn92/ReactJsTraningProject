import { useState } from 'react'
import './App.css'
import TodoCreate from './Components/TodoCreate'
import TodoList from './Components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <div className='TodoApp' style={{ width: '500px' }}>
          <TodoCreate />
          <TodoList />
        </div>

      </div>
    </>
  )
}

export default App
