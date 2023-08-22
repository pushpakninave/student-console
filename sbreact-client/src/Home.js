import React from 'react'

const Home = () => {
    const centerCopyright = {
        fontSize: "20px",
        display: "flex",
        justifyContent: "center",
    }
    return (
        <div className="Home container  text-white h-100">
            <h2>Student Management Console:</h2>

            <div>
                <h4>Project Description:</h4><br />
                <h5>1. Objective:</h5>
                <code>
                    The Student Management System is a web-based application designed to manage student-related information in an educational institution. It involves creating, updating,
                    and maintaining student records, course information, enrollment details, and more.<br /><br />
                </code>
                <h5>2. Technology Stack:</h5>
                <code>
                    Backend Framework: Spring Boot<br />
                    Frontend Framework: React.js<br />
                    Database: Oracle Database<br />
                    Communication: RESTful APIs<br />
                    Build and Dependency Management: Maven (for Spring Boot) and npm (for React.js)<br /><br />
                </code>
                <h5>3.Architecture:</h5>
                <code><ul>
                    <li>The backend is developed using Spring Boot, which provides a solid foundation for building RESTful APIs.</li>
                    <li>The frontend is developed using React.js, a popular JavaScript library for building user interfaces.</li>
                    <li>The Oracle database stores student records, course information, enrollment details, and more.</li>
                    <li>Communication between the frontend and backend is achieved through RESTful APIs, allowing seamless interaction between the two layers.</li>
                </ul></code>
                <h5>4. Workflow:</h5>
                endpoints --
                <ul>
                    <code><li>/view-students </li></code>
                    <p>To view all the students present in the database</p>
                    <code><li>/add-students</li></code>
                    <p>To add new student in the database</p>
                    <code><li>/student-profile/id</li></code>
                    <p>To add new student in the database</p>
                    <code><li>/edit-student/id</li></code>
                    <p>To edit existing student in the database</p>

                </ul>
            </div>
            <div style={centerCopyright}>
                <code ><p>&#169; 2023 Pushpak Ninave.</p> </code>
            </div>

        </div >
    )
}

export default Home
