import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import { FaEye, FaEdit, FaTrashAlt } from 'react-icons/fa'
import Search from '../common/Search';

const StudentView = () => {
  const customStyle = {
    height: '100%'
  }
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const result = await axios.get("http://localhost:8081/students", {
      validateStatus: () => {
        return true;
      }
    }
    );
    if (result.status === 302) {
      setStudents(result.data);
    }
    setStudents(result.data)
  };
  const handleDelete =
    async (id) => {
      await axios.delete(`http://localhost:8081/students/delete/${id}`);
      loadStudents();
    }
  return (
    <div style={customStyle}>
      <section>
        <Search search={search}
          setSearch={setSearch}
        />
        <table className='table table-bordered table-hover shadow'>
          <thead>
            <tr className='text-center'>
              <th>ID</th>
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>EMAIL</th>
              <th>DEPARTMENT</th>
              <th colSpan='3'>ACTIONS</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {students.filter((st) => st.firstName.toLowerCase().includes(search))
              .map((student, index) => (
                <tr key={student.id}>
                  <th scope='row' key={index}>
                    {index + 1}
                  </th>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.email}</td>
                  <td>{student.department}</td>
                  <td className='mx-2'><Link to={`/student-profile/${student.id}`} className='btn btn-info'><FaEye /></Link></td>
                  <td className='mx-2'><Link to={`/edit-student/${student.id}`} className='btn btn-warning'><FaEdit /></Link></td>
                  <td className='mx-2'><Link to={`/view-students`} className='btn btn-danger'
                    onClick={() => {
                      if (window.confirm("Are you sure you want to delete this student")) {
                        handleDelete(student.id)
                      }
                    }}><FaTrashAlt /></Link></td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default StudentView
