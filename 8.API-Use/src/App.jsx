import axios from 'axios'
import './App.css'
import { useEffect } from 'react';


const BASE_URL = "http://localhost:3001"

function App() {

  // const getAllUsers = async () => {
  //   const response = await axios.get(BASE_URL + "/users");
  //   console.log(response.data)
  // }
  // const getUserById = async (userID) => {
  //   const response = await axios.get(`${BASE_URL}/users/${userID}`);
  //   console.log(response.data)
  // }

  // const createUser = async (newUser) => {
  //   const response = await axios.post(`${BASE_URL}/users`, newUser)
  //   console.log(response)
  // }

  // const updateUser = async (userID, updatedUser) => {
  //   const response = await axios.put(`${BASE_URL}/users/${userID}`, updatedUser)
  //   console.log(response)

  // }

  // const deleteUserById = async (userID) => {
  //   const response = await axios.delete(`${BASE_URL}/users/${userID}`)
  //   console.log(response)
  // }


  const getUserById = async (userID) => {
    const response = await axios.get(`${BASE_URL}/users/${userID}`);
    return response.data.postID;
  }


  const getPostByID = async (postID) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postID}`)
    return response.data;
  }

  const getPost = async () => {
    const postID = await getUserById(1);

    const response = await getPostByID(postID);

    console.log(response)
  }


  useEffect(() => {
    getPost()
  }, [])

  return (
    <>

    </>
  )
}

export default App
