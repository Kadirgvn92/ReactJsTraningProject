import './App.css'
import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('Kadir');
  const [lastName, setLastName] = useState('Güven')
  const [names, setNames] = useState(['Kadir', 'Enes', 'Ali', 'Veli'])

  const handleChange = () => {
    setFirstName('Haydar')
  }

  return (
    <div>
      {firstName} {lastName}

      <div><button onClick={() => { setFirstName('Osman') }}>İsmi Değiştir</button></div>
      <br />
      <div><button onClick={handleChange}>Başka İsim Değiştir</button></div>
      <br />
      <div>
        {
          names.map((name, index) => (
            <div key={index}>{name}</div>
          ))}
      </div>
    </div>

  )
}

export default App
