import axios from 'axios'
import './App.css'
import { useEffect } from 'react';


const BASE_URL = "http://localhost:3001"

function App() {

  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data)
  }
  const getUserById = async (userID) => {
    const response = await axios.get(`${BASE_URL}/users/${userID}`);
    console.log(response.data)
  }

  const createUser = async (newUser) => {
    const response = await axios.post(`${BASE_URL}/users`, newUser)
    console.log(response)
  }

  const updateUser = async (userID, updatedUser) => {
    const response = await axios.put(`${BASE_URL}/users/${userID}`, updatedUser)
    console.log(response)

  }

  useEffect(() => {

    const newUser = {
      "username": "Bilal",
      "password": "1234"
    }
    updateUser("1", newUser)
  }, [])

  return (
    <>

    </>
  )
}

export default App
