import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import Navbar from './component/common/Navbar';
import StudentView from './component/student/StudentView';
import AddStudent from './component/student/AddStudent';
import EditStudent from './component/student/EditStudent';
import StudentPofile from './component/student/StudentProfile';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <main className="container bg-dark bg-gradient h-100 pt-5 pb-5">
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}></Route>
          <Route
            exact
            path="/view-students"
            element={<StudentView />}></Route>
          <Route
            exact
            path="/add-students"
            element={<AddStudent />}></Route>
          <Route
            exact
            path="/edit-student/:id"
            element={<EditStudent />}></Route>
          <Route
            exact
            path="/student-profile/:id"
            element={<StudentPofile />}></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
