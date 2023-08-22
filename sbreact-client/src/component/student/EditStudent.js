import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditStudent = () => {
    let navigate = useNavigate();
    const { id } = useParams();
    const [student, setStudent] = useState({
        firstName: "",
        lastName: "",
        email: "",
        department: ""
    });

    const { firstName, lastName, email, department } = student;
    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const result = await axios.get(`http://localhost:8081/students/student/${id}`);
        setStudent(result.data)
    };
    // set students fields from the input form. 
    const handleInputChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value })
    }
    // since the usestate now sets the values of fields of student object
    // next is to save the student object into the database using axios 
    const updateStudent = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8081/students/update/${id}`, student);
        navigate("/view-students")
    }
    return (
        <div className='col-sm-8 py-2 px-5 shadow'>
            <h2 className='mt-5'>Edit Student</h2>
            <form onSubmit={(e) => { updateStudent(e) }}>
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

export default EditStudent
