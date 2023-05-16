import React from 'react';
import Home from './header';
import Courses from './courses';
import { Container } from "react-bootstrap";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HighSchoolLessons from './HighSchoolLessons';
import Statistics from './Statistics';
import Login from './login';
import Chapter from './chapter';
import SignUp from './signup';
// Στο App.js
import './App.css';


function App() {
  return (
    <BrowserRouter>
   =
      <Home />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Courses />} />
            <Route path="/courses/:courseId" element={<Chapter />} />
            <Route path="/high-school-lessons" element={<HighSchoolLessons />} />
            <Route exact path="/conect" element={<Login/>} />
            <Route exact path="/login" element={<SignUp/>} />
            <Route  exact path="/projects" element={<Statistics />} />

          </Routes>
        </Container>
      </main>
     
    </BrowserRouter>
  );
}

export default App;







