import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();

  const loginhandler = (e) =>{
    e.preventDefault();
    const data = {
      email:e.target.email.value,
      pass:e.target.pass.value
    }
    let logdata = data;
    if(data.email === "admin@gmail.com"){
        logdata = {...data, role: "admin"}
    }
    

    localStorage.setItem('login', JSON.stringify(logdata));
    navigate('/');
  }

 
  return (
    <>
      <form onSubmit={loginhandler}>
       
       <div className='row col-md-4 mx-auto'>
       <h1 className='mx-auto text-primary mb-4'>Login</h1>
       <div className='form-group'>
            <input name='email'  type='email' className='form-control' placeholder='Enter Email' />
        </div>
        <br /><br />
        <div className='form-group'>
            <input name='pass'  type='password' className='form-control' placeholder='Enter Password'  />
        </div>
        <br /><br />
        <div className='form-group'>
        <input  type='submit' className='form-control btn btn-primary'  value='Login'/>

        </div>
        <Link to='/'>
            <button className='btn btn-dark mt-2 form-control'> Back</button>
        </Link>
       </div>
      </form>
    </>
  )
}

export default Login
