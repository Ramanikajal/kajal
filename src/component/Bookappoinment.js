import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Bookappoinment = () => {

const navigate = useNavigate()

  const submitHandler = (e) =>{
    e.preventDefault();
     
    const doctor = {
      name:e.target.name.value,
      email:e.target.email.value,
      phone:e.target.phone.value,
      date:e.target.date.value,
      msg:e.target.msg.value
    }
          if (localStorage.getItem('productdata')) {
            const data = JSON.parse(localStorage.getItem('productdata'));
            data.push(doctor);
            localStorage.setItem('productdata', JSON.stringify(data));
        } else {

            const defaultData = JSON.stringify([doctor]);
            localStorage.setItem('productdata', defaultData);
        }
     
        navigate('/list')
  }
  return (
    <>
      <div className='row col-md-4 mx-auto mt-5 bg-light'>
        <form onSubmit={submitHandler}>
          <div className='form-group'>
            <input name='name' type='text' placeholder='Enter Name' className='form-control mt-3'/>
          </div>
          <br />
          <div className='form-group'>
            <input  name='email'  type='email' placeholder='Enter Email' className='form-control'/>
          </div>
          <br />
          <div className='form-group'>
            <input  name='phone'  type='number' placeholder='Phone' className='form-control'/>
          </div>
          <br />
          <div className='form-group'>
            <input  name='date'  type='date'  className='form-control'/>
          </div>
          <br />
          <div className='form-group'>
            <input  name='msg' type='text' placeholder='Appoinment Details' className='form-control'/>
          </div>
          <br />
          <div className='form-group'>
            <button className='form-control btn btn-primary mb-3'>Send Appoinments</button>
          </div>
        </form>
      </div> 
    </>
  )
}

export default Bookappoinment
