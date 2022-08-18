import React from 'react';
import './App.css';
import Home from './pages';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} exact /> 
        {/* <Route path='/signin' element={<SigninPage />} exact /> */}
      </Routes>
    </Router>
  );
}

export default App;
