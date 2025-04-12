import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import {Container, Navbar, NavbarBrand} from "reactstrap";
import './App.css';
import ProjectLogo from "./app/assets/img/logo.png";
// import ProjectCard from './features/projects/ProjectCard.js';
// import ProjectList from './features/projects/ProjectsList.js';
import ProjectsDirectoryPage from './pages/ProjectsDirectoryPage.js';
import Header from "./components/Header.js";
import Footer from './components/Footer';


function App() {


  return (
    <div className="App">
       <Header />
        {/* <ProjectCard project={PROJECTS[0]} /> */}
        {/* <ProjectList /> */}
        <ProjectsDirectoryPage /> 
        <Footer /> 
    </div>
  );
}

export default App;
