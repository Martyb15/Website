// import { CERTIFICATION } from "../../app/shared/oldData/CERTIFICATION";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../app/shared/baseUrl";
import { mapImageUrl } from "../../utils/mapImageUrl";


export const fetchCertification = createAsyncThunk (
    'certifications/fetchCertification',
    async () => {
        const response = await fetch(baseUrl + 'certifications');
        if (!response.ok) {
            return Promise('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json(); 
        return data; 
    }
);

const initialState = {
    certificationsArray: [],
    isLoading: true,
    errMsg: ''
};

const certificationsSlice = createSlice({
    name: 'certifications',
    initialState, 
    reducers: {},
    extraReducers: {
        [fetchCertification.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchCertification.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = ''; 
            state.certificationsArray = mapImageUrl(action.payload);
        },
        [fetchCertification.rejected]: (state, action) => {
            state.isLoading = false; 
            state.errMsg = action.errMsg ? action.error.message : 'Fetch Failed'
        }
    }
});

export const certificationsReducer = certificationsSlice.reducer; 

export const selectFeaturedCertifications = (state) => {
    return {
        featuredItem: state.certifications.certificationsArray.find((certification) => certification.featured),
        isLoading: state.certifications.isLoading,
        errMsg: state.certifications.errMsg
    }
}
