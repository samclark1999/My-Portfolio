import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/sections/About/About';
import Projects from './components/sections/Projects/Projects';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path ='/' exact element={<Home/>}/>
          <Route path ='/projects' exact element={<Projects/>}/>
          <Route path ='/about' exact element={<About/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
