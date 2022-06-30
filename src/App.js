import './App.css';
import { Routes, Route } from "react-router-dom";
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
import Home from './components/home/Home';
import CompletedTasks from './components/home/CompletedTasks';
import ToDo from './components/home/ToDo';
import Calendars from './components/home/Calendars';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='completedTasks' element={<CompletedTasks></CompletedTasks>}></Route>
        <Route path='toDo' element={<ToDo></ToDo>}></Route>
        <Route path='calender' element={<Calendars></Calendars>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
