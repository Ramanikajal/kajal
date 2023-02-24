import React from 'react'
import {  Navigate } from 'react-router-dom'


const Adminrouter = (props) => {
    
    if(!JSON.parse(localStorage.getItem('login'))?.role === 'admin'){
        return  <Navigate to='/login'/>
    }
  return (
    <>
        {props.children}
    </>
  ) 
}

export default Adminrouter
