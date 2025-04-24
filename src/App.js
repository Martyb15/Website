import React from 'react';
import './App.css';
import ProjectsDirectoryPage from './pages/ProjectsDirectoryPage.js';
import Header from "./components/Header.js";
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage.js';
import ContactPage from './pages/ContactPage.js';
import ProjectDetailPage from './pages/ProjectsDetailPage.js'; 
import AboutPage from './pages/AboutPage.js';

function App() {


  return (
    <div className="App">
       <Header />

        <Routes> 
          <Route path="/" element={<HomePage />}/>
          <Route path="contact" element={<ContactPage />}/>
          <Route path="directory" element={<ProjectsDirectoryPage />} />
          <Route path='directory/:projectId' element={<ProjectDetailPage />} />
          <Route path='about' element={<AboutPage />} />
        </Routes>

        <Footer /> 
    </div>
  );
}

export default App;
