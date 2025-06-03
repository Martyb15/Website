import { SKILLS } from "../../app/shared/SKILLS";
import { createSlice } from '@reduxjs/toolkit'; 

const initialState = {
    skillsArray: SKILLS
};

const skillsSlice = createSlice({
    name: 'skills',
    initialState
});

export const skillsReducer = skillsSlice.reducer;

export const selectFeaturedSkill = (state) => {
    return state.skills.skillsArray.find((skill) => skill.featured);
};

export const selectAllSkills = (state) => {
    return state.skills.skillsArray;
};