import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header/Header';
import store from './store';
import { Provider } from 'react-redux';
import StudentForm from './components/Student/StudentForm';
import StudentView from './components/studentview/StudentView';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; 
import UpdateStudentForm from "./components/Updateform/Updateform";

function App() {
   const data = {name:'jhon dev', rollno:'12', grid:'4444', mail:'jhon@gmail.com'}
  return (
    <Provider store={store}>
      <>
        <Header data={data}/>
          {/* <Routes>
            <Route path="/" element={<StudentForm />} />
            <Route path="/StudentView" element={<StudentView />} />
            <Route path="/UpdateStudentForm" element={<UpdateStudentForm />} />
          </Routes> */}
      </>
    </Provider>
  )
}

export default App;
