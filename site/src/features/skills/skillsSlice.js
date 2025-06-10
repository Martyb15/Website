// import { SKILLS } from "../../app/shared/oldData/SKILLS";
import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'; 
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageUrl } from "../../utils/mapImageUrl";

export const fetchSkills = createAsyncThunk(
    'skills/fetchSkills',
    async () => {
        const response = await fetch(baseUrl + 'skills');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json(); 
        return data; 
    }
);

const initialState = {
    skillsArray: [],
    isLoading: true, 
    errMsg: ''
};

const skillsSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchSkills.pending]: (state) => {
            state.isLoading = true; 
        },
        [fetchSkills.fulfilled]: (state, action) => {
            state.isLoading = false; 
            state.errMsg = '';
            state.skillsArray = mapImageUrl(action.payload); 
        },
        [fetchSkills.rejected]: (state, action) => {
            state.isLoading = false; 
            state.errMsg = action.errMsg ? action.error.message : 'Fetch Failed';
        }
    }
});

export const skillsReducer = skillsSlice.reducer;

export const selectAllSkills = (state) => {
    return state.skills.skillsArray;
};

export const selectFeaturedSkill = (state) => {
    return {
        featuredItem: state.skills.skillsArray.find((skill) => skill.featured),
        isLoading: state.skills.isLoading,
        errMsg: state.skills.errMsg 
    };
};