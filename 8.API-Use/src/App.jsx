import axios from 'axios'
import './App.css'
import { useEffect } from 'react';


const BASE_URL = "http://localhost:3006"

function App() {

  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data)
  }
  const getUserById = async (userID) => {
    const response = await axios.get(`${BASE_URL}/users/${userID}`);
    console.log(response.data)
  }
  useEffect(() => {
    getUserById(2);
  }, [])

  return (
    <>

    </>
  )
}

export default App
