import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import { useSelector } from 'react-redux';

function Doctor(props) {
    
    // const tdata = useSelector((state) => state.tasksreducer.tdata)
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([]);
    const [Update, setUpdate] = useState();
    const [dopen, setDopen] = React.useState(false);
    const [did, setDid] = useState()
    const [uid, setUid] = useState()
    const Counter = useSelector(state =>state.Counter)


    const handleClickDopen = (id) => {
        setDopen(true);
        setDid(id);
    };

    const handleClickOpen = () => {
        setOpen(true);
        setUpdate()
    };

    const handleClose = () => {
        setOpen(false);
        setUpdate()
        setDopen()
        formik.resetForm();
    };


    let tasks = {
        name: yup.string().required('please enter name'),
        date: yup.string().required('please enter date'),
        fild: yup.string().required('please enter fild'),
        experience: yup.string().required('please enter experience'),
    }


    let schema = yup.object().shape(tasks);

    const formik = useFormik({
        initialValues: {
            name: '',
            date: '',
            fild: '',
            experience: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            if (Update) {
                handleupdate(values)
            } else {
                handleSubmitdata(values)
            }
        }
    })

    const handleupdate = (values) => {
        let localdata = JSON.parse(localStorage.getItem("tasks"));

        let udata = localdata.map((l, i) => {
            if (l.id === uid) {
                return { id: uid, ...values };
            } else {
                return l;
            }
        })
        console.log(udata);

        localStorage.setItem("tasks", JSON.stringify(udata))
        setOpen(false)
        setUpdate(false)
        loadData()
    }

    const handleSubmitdata = (values) => {
        let localdata = JSON.parse(localStorage.getItem("tasks"));

        let data = {
            id: Math.floor(Math.random() * 1000),
            ...values
        }

        if (localdata === null) {
            localStorage.setItem("tasks", JSON.stringify([data]))
        } else {
            localdata.push(data)
            localStorage.setItem("tasks", JSON.stringify(localdata))
        }

        setOpen(false);
        loadData()

    }


    const loadData = () => {
        let localData = JSON.parse(localStorage.getItem("tasks"))

        if (localData !== null) {
            setData(localData)
        }
    }

    useEffect(
        () => {
            loadData()
        },
        [])

    const columns = [
        // { field: 'id', headerName: 'Id', width: 130 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'date', headerName: ' date', width: 130 },
        { field: 'fild', headerName: 'fild', width: 130 },
        { field: 'experience', headerName: 'experience', width: 130 },
        {
            field: 'delete', headerName: 'Delete', width: 130,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="delete" onClick={() => handleClickDopen(params.row.id)}>
                        <DeleteIcon />
                    </IconButton>
                </>
            )
        },
        {
            field: 'edit', headerName: 'Edit', width: 130,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="edit" onClick={() => handleEdit(params)}>
                        <CreateIcon />
                    </IconButton>
                </>
            )
        }
    ];



    const handleEdit = (params) => {
        setOpen(true);
        //console.log(params.row);
        setUid(params.row.id)
        setUpdate(true)
        console.log(params.row.id)
        formik.setValues({
            name: params.row.name,
            date: params.row.date,
            fild: params.row.fild,
            experience: params.row.experience,
        });
    }

    const handleDelete = () => {
        let localData = JSON.parse(localStorage.getItem("tasks"))

        let filterData = localData.filter((v, i) => v.id !== did);

        localStorage.setItem("tasks", JSON.stringify(filterData));
        loadData()
        setDopen(false)
    }

    return (


        <Box>
            <Container>
                <div>
                    <center>
                        <Button variant="outlined" onClick={() => handleClickOpen()}>
                            Add tasks
                        </Button>

                        <p>{Counter.Counter}</p>
                    </center>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={data}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />

                    </div>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Add tasks</DialogTitle>
                        <Formik values={formik}>
                            <Form onSubmit={formik.handleSubmit}>
                                <DialogContent>

                                    <TextField
                                        margin="dense"
                                        id="name"
                                        label="name"
                                        type="name"
                                        fullWidth
                                        variant="standard"
                                        onChange={formik.handleChange}
                                        value={formik.values.name}
                                        helperText={formik.errors.name}
                                        error={formik.errors.name ? true : false}

                                    />

                                    {
                                        formik.errors.name && formik.touched.name ? <p>{formik.errors.name}</p> : ''
                                    }

                                    <TextField
                                        margin="dense"
                                        id="date"
                                        label="date"
                                        type="date"
                                        fullWidth
                                        variant="standard"
                                        onChange={formik.handleChange}
                                        value={formik.values.date}
                                        helperText={formik.errors.date}
                                        error={formik.errors.date ? true : false}
                                    />
                                    {
                                        formik.errors.date && formik.touched.date ? <p>{formik.errors.date}</p> : ''
                                    }

                                    <TextField
                                        margin="dense"
                                        id="fild"
                                        label="fild"
                                        fullWidth
                                        variant="standard"
                                        onChange={formik.handleChange}
                                        value={formik.values.fild}
                                        helperText={formik.errors.fild}
                                        error={formik.errors.fild ? true : false}

                                    />
                                    {
                                        formik.errors.fild && formik.touched.fild ? <p>{formik.errors.fild}</p> : ''
                                    }
                                    <TextField
                                        margin="dense"
                                        id="experience"
                                        label="experience"
                                        fullWidth
                                        variant="standard"
                                        onChange={formik.handleChange}
                                        value={formik.values.experience}
                                        helperText={formik.errors.experience}
                                        error={formik.errors.experience ? true : false}
                                    />
                                    {
                                        formik.errors.experience && formik.touched.experience ? <p>{formik.errors.experience}</p> : ''
                                    }
                                    <DialogActions>
                                        <Button onClick={handleClose}>Cancel</Button>
                                        <Button type="submit">Submit</Button>
                                    </DialogActions>
                                </DialogContent>
                            </Form>
                        </Formik>
                    </Dialog>
                    <div>
                        <Dialog
                            open={dopen}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                                {"Are You Sure Delete tasks Data ...? "}
                            </DialogTitle>
                       
                            <DialogActions>
                                <Button onClick={() => handleDelete()} autofocus>yes</Button>
                                <Button onClick={handleClose}>No</Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </div>
            </Container>
        </Box>

    )



}

export default Doctor;