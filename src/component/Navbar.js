import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'



const Navbar = (props) => {

    const [islogin, setlogin] = useState(false)
    const location = useLocation();

    useEffect(() => {
        if (!localStorage.getItem('login')) {
            setlogin(true);
        } else {
            setlogin(false);
        }
    }, [location])

    const LogoutHandler = ()=>{
        localStorage.removeItem('login');
    }

    return (
        <>
            <nav className=" navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold" >HOSPITAL</Link>
                    <button className="navbar-toggler" type="button" >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" >
                        <ul className="navbar-nav m-auto">
                            {/* <li className="nav-item">
                                <Link to='/' className="nav-link active" >Home</Link>
                            </li> */}
                            {/* <li className="nav-item">
                                <Link to='/Medisin' className="nav-link active" >Medisin</Link>
                            </li> */}

                            {JSON.parse(localStorage.getItem('login'))?.role === 'admin'? <li className="nav-item">
                                <Link to='/Doctor' className="nav-link" >Doctor</Link>
                            </li> : <li className="nav-item">
                                <Link to='/book' className="nav-link">BookAppointment</Link>
                            </li>}


                        </ul>
                        <div>
                            {
                                islogin === true ? <Link to='/login'>

                                    <button type='submit' className='btn btn-primary'>Login</button>

                                </Link> : <Link to='/login'>

                                    <button type='submit' onClick={LogoutHandler} className='btn btn-primary'>Logout</button>

                                </Link>
                            }

                        </div>
                    </div>
                </div>

            </nav>

        </>
    )
}

export default Navbar
