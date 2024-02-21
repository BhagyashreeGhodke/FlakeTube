import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [username, setUsername] = useState("")

  useEffect( () => {
    axios.get('/api/v1/login')
    .then( (response) => {
      setUsername(response.data)
      console.log("response: ",response);
      console.log("response.data: ",response.data);
    })
    .catch( (error) => {
      console.log("check axios in App.jsx :: error :: ",error);
    })
  }, [])
  
  return (
    <>
      <h1>FlakeTube</h1>
      <p>Username: {username}</p>

    </>
  )
}

export default App
