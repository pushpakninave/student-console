import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const AddStudent = () => {
    let navigate = useNavigate();
    const [student, setStudent] = useState({
        firstName: "",
        lastName: "",
        email: "",
        department: ""
    });

    const { firstName, lastName, email, department } = student;
    // set students fields from the input form. 
    const handleInputChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value })
    }
    // since the usestate now sets the values of fields of student object
    // next is to save the student object into the database using axios 
    const saveStudent = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8081/students", student);
        navigate("/view-students")
    }
    return (
        <div className='col-sm-8 w-100 bg-dark py-5 px-5 shadow'>
            <form onSubmit={(e) => { saveStudent(e) }}>
                <div className='input-group  mu-5 mb-5'>
                    <label
                        className='input-group-text'
                        htmlFor='firstName'>
                        first Name
                    </label>
                    <input
                        className='form-control col-sm-6'
                        type='text'
                        name='firstName'
                        id='firstName'
                        required
                        value={firstName}
                        onChange={(e) => handleInputChange(e)} />
                </div>
                <div className='input-group mb-5'>
                    <label
                        className='input-group-text'
                        htmlFor='lastName'>
                        Last Name
                    </label>
                    <input
                        className='form-control col-sm-6'
                        type='text'
                        name='lastName'
                        id='lastName'
                        required
                        value={lastName}
                        onChange={(e) => handleInputChange(e)} />
                </div>
                <div className='input-group mb-5'>
                    <label
                        className='input-group-text'
                        htmlFor='email'>
                        Email
                    </label>
                    <input
                        className='form-control col-sm-6'
                        type='email'
                        name='email'
                        id='email'
                        required
                        value={email}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div className='input-group mb-5'>
                    <label
                        className='input-group-text'
                        htmlFor='department'>
                        Department
                    </label>
                    <input
                        className='form-control col-sm-6'
                        type='text'
                        name='department'
                        id='department'
                        required
                        value={department}
                        onChange={(e) => handleInputChange(e)} />
                </div>
                <div className='row mb-5'>
                    <div className='col-sm-2'>
                        <button
                            type='submit'
                            className='btn btn-outline-success btn-lg'
                        >
                            save
                        </button>
                    </div>
                    <div className='col-sm-2'>
                        <Link
                            to={"/view-students"}
                            type='submit'
                            className='btn btn-outline-warning btn-lg'
                        >
                            Cancel
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddStudent
