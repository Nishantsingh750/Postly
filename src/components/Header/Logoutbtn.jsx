import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../Store/authSlice'

function Logoutbtn() {
    const dispatch = useDispatch()
    const logoutHandler = ()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
   <button className='inline-bock px-6 py-2 mx-4 duration-200 hover:bg-blue-100 rounded-full space-x-4 ' onClick={logoutHandler}>
    Logout
   </button>
  )
}

export default Logoutbtn