import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/sb-admin-2.css';

import Students from './Students';
import CreateStudent from './CreateStudent';
import Portal from './Portal';
import Login from './Login';
import StudentsView from './StudentView';
import EditStudents from './EditStudent';
import Teachers from './Teacher';
import TeacherView from './TeacherView';
import EditTeacher from './EditTeacher';
import CreateTeacher from './CreateTeacher';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/portal' element={<Portal />}>
          <Route path='students' element={<Students />}></Route>
          <Route path='students/:id' element={<StudentsView />}></Route>
          <Route path='students/edit/:id' element={<EditStudents />}></Route>
          <Route path='createstudent' element={<CreateStudent />}></Route>
          <Route path='teacher' element={<Teachers/>}></Route>
          <Route path='teacher/:id' element={<TeacherView />}></Route>
          <Route path='teacher/edit/:id' element={<EditTeacher />}></Route>
          <Route path='createteacher' element={<CreateTeacher />}></Route>
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;

