import './App.css';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
import Home from './components/home/Home';
import CompletedTasks from './components/home/CompletedTasks';
import ToDo from './components/home/ToDo';
import Calendars from './components/home/Calendars';
import EditeTask from './components/home/EditeTask';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='completedTasks' element={<CompletedTasks></CompletedTasks>}></Route>
        <Route path='toDo' element={<ToDo></ToDo>}></Route>
        <Route path='editeTask/:id' element={<EditeTask></EditeTask>}></Route>
        <Route path='calender' element={<Calendars></Calendars>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
