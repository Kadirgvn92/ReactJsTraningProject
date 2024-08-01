import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')


  useEffect(() => {
    console.log("Her zaman çalışır")
  })

  useEffect(() => {
    console.log("İlk Render edildiğinde bir kez kullanılır")
  }, [])

  useEffect(() => {
    console.log("İlk render edildiğinde ve firstName state değeri değiştiğinde çalışır")
  }, [firstName])


  useEffect(() => {
    console.log("İlk render edildiğinde ve lastname state değeri değiştiğinde çalışır")
  }, [lastName])

  return (
    <>
      <div>
        UseEffect
        <div><button onClick={() => setFirstName("Kadir")}>Adı Değiştir</button></div>
        <div><button onClick={() => setLastName("GÜVEN")}>Adı Değiştir</button></div>
      </div>
    </>
  )
}

export default App
