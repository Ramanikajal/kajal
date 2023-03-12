import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";

const Listappoinment = () => {
  // const data = useSelector((data) => data.appDelta.Appdata)

  const [datadetails, setdatadetails] = useState([])

  useEffect(() => {
    setdatadetails(JSON.parse(localStorage.getItem('productdata')) || []);
  }, [])

  return (
    <>
     <table className='table table-dark table-bordered table-hover mt-5'>
        <thead className=' text-info bg-light '>
          <tr >
            
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>DATE</th>
            <th>MASSAGE</th>
          </tr>
        </thead>
        <tbody>
          {
            datadetails.map( (i) => {
              return <tr >
                <td>{i.name}</td>
                <td>{i.email}</td>
                <td>{i.phone}</td>
                <td>{i.date}</td>
                <td>{i.msg}</td>
              </tr>
            })
          }
              
        </tbody>
      </table> 
    </>
  )
}

export default Listappoinment
