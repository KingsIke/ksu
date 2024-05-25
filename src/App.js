import './App.css';
import React from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
// import NavBar from './components/Nav/DropNav/DropNav';
import Home from './components/Home/home';
import HealthScience from './components/Colleges/healthSciences';

function App() {
  return (
    < React.Fragment >
    <Router>
      <div className="App">
        {/* <Navbar /> */}

        <div className="">
          <Routes>
            <Route path='/' element={< Home/>} />
            <Route path='/health_Sciences' element={< HealthScience/>} />
         
        

          
            {/* <Route path='*' element={<NotFound />} />  */}



          </Routes>

        </div>
      </div>
    </Router>
  </React.Fragment >
  );
}

export default App;