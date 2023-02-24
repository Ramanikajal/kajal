import React from 'react'
import {  Navigate } from 'react-router-dom'

const Private = (props) => {
    
    if(!JSON.parse(localStorage.getItem('login'))?.email){
        return  <Navigate to='/login' />
    }
  return (
    <div>
        {props.children}
    </div>
  )
}

export default Private
