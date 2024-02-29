import React from 'react'
import {useDispatch} from 'react-redux'
import {logout} from '../../store/authSlice'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function LogoutBtn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutHandler = async () => {
      try {
       
        const response = await axios.post('/api/v1/users/logout')
        console.log("response in logoutbtn: ", response);
        if(response) {
          dispatch(logout())
          
          navigate('/login')
          console.log("user logout successfully");
        }
        return response
       
    } catch (error) {
        console.log("In LogoutBtn - LogoutHandler :: logout :: error", error);
    }
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn