import './App.css'
import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('Kadir');
  const [lastName, setLastName] = useState('Güven')
  const [names, setNames] = useState(['Kadir', 'Enes', 'Ali', 'Veli'])
  const [userInfo, setUserInfo] = useState({ userName: "Kguven", password: "1423" })
  const [inputUserName, setInputUserName] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleChange = () => {
    setFirstName('Haydar')
  }

  const handleLogin = () => {
    if (inputUserName === userInfo.userName && inputPassword === userInfo.password) {
      setLoginMessage('Başarılı');
    } else {
      setLoginMessage('Başarısız');
    }
  };
  return (
    <div>
      {firstName} {lastName}
      <br />
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

      <div>
        <input
          type="text"
          placeholder="Kullanıcı Adı"
          value={inputUserName}
          onChange={(e) => setInputUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Şifre"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Giriş Yap</button>
        <div>{loginMessage}</div>
      </div>
    </div>

  )
}

export default App
