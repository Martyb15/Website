import { COMMENTS } from "../../app/shared/COMMENTS"; 
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    commentsArray: COMMENTS
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState
});

export const commentsReducer = commentsSlice.reducer;

export const selectCommentsByProjectId = ( projectId ) => (state) => {
    return state.comments.commentsArray.filter((comment) => comment.projectId === parseInt(projectId));
};