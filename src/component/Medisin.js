import React from 'react';

function Medisin(props) {
    return (
  <>

<div>

<Model show={show} setShow={setShow} />
< EditModel show={edit} setShow={setedit} data={editdata} />
<div className="d-grid gap-1 col-4 mx-auto" >
    <button type="button" className="btn btn-secondary " onClick={onclickbut} >add Medicen</button>
    <div className='d-flex justify-content-center my-4'>


        <button className="btn btn-info" onClick={onclickAAdstock}> add</button>
        {stock}
        <button className="btn btn-info" onClick={onclickRemovestock}> remov </button>
        {/* <button className="btn btn-info" onClick={onclickbtn1}> btn1</button> */}
        {/* <button className="btn btn-info" onClick={onclickbtn2}> btn2</button> */}
    </div>
</div>

<Table striped bordered hover>
    <thead>
        <tr>
            <th>#</th>
            <th> name</th>
            <th>Quantity</th>
            <th>price</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {
            data.map((i, index) => {
                return (
                    <tr key={index}>
                        <td>{i.id}</td>
                        <td>{i.name}</td>
                        <td>{i.quantity}</td>
                        <td>{i.price}</td>
                        <td><button className="appointment-btn scrollto" onClick={() => onclickdelet(i.id)}> delet</button>
                            <button className="btn btn-success" onClick={() => onclickEdit(i)}> Edit</button></td>
                    </tr>
                )
            })
        }
    </tbody>
</Table>

</div >

  </>
    );
}

export default Medisin;