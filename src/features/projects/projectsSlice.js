// file name is camelcase rather than pascel case cause it does not export a react component. 
import { PROJECTS } from "../../app/shared/PROJECTS"
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projectsArray: PROJECTS
}

const projectsSlice = createSlice({
    name: 'projects',
    initialState
});

export const projectsReducer = projectsSlice.reducer; 

export const selectAllProjects = (state) => {
    return state.projects.projectsArray; 
};

// export const selectRandomProject = () => {
//     return PROJECTS[Math.floor(PROJECTS.length * Math.random())];

// };

export const selectProjectById = (id) => (state) => {
    return state.projects.projectsArray.find((project) => project.id === parseInt(id));
}

export const selectFeaturedProject = (state) => {
    return state.projects.projectsArray.find((project) => project.featured);
}