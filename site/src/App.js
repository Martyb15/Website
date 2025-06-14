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
import { useSelector } from 'react-redux';    
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProjects } from './features/projects/projectsSlice.js';
import { fetchSkills } from './features/skills/skillsSlice.js';
import { fetchCertification } from './features/certifications/certificationsSlice.js';
import { fetchComments } from './features/comments/commentsSlice.js';

function App() {
  const dispatch = useDispatch(); 

  useEffect( () => {
    dispatch(fetchProjects()); 
    dispatch(fetchSkills()); 
    dispatch(fetchCertification());
    dispatch(fetchComments())
  }, [dispatch]);


  const wholeStore = useSelector(state => state);   
  console.log('Store contents:', wholeStore);       


  return (
<div className="d-flex flex-column min-vh-100">
      <Header />

      
      <main className="flex-fill container">
        <Routes>
        <Route path="/"                    element={<HomePage              />}/>
          <Route path="contact"              element={<ContactPage           />}/>
          <Route path="directory"            element={<ProjectsDirectoryPage />} />
          <Route path='directory/:projectId' element={<ProjectDetailPage     />} />
          <Route path='about'                element={<AboutPage             />} />
        </Routes>
      </main>

      <Footer />
    </div>


    
  );
}

export default App;
