// import { COMMENTS } from "../../app/shared/COMMENTS"; 
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../app/shared/baseUrl";

const initialState = {
    commentsArray: [],
    isLoading: true,
    errMsg: ''
};

// GET Thunk /comments
export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async () => {
        const response = await fetch(baseUrl + 'comments');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status); 
        }
        return await response.json();
    }
);

// POST Thunk
export const postComment = createAsyncThunk(
    'comments/postComment', 
    async (comment, {dispatch}) => {
        const response = await fetch(baseUrl + 'comments', {
            method: 'POST',
            body: JSON.stringify(comment),
            headers: { 'Content-Type': 'application/json' }
        }); 
        if (!response.ok) {
            return Promise.reject('Unable to post, stauts: ' +response.status); 
        }
        const data = await response.json();
        dispatch(addComment(data)); 
        
    }
)


// SLICE
const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment: (state, action) => {
            // json-server already returned the full comment (id included)
            state.commentsArray.push(action.payload);
        }
    },
    extraReducers: {
        // fetchComments
        [fetchComments.pending]:   (state)          => { state.isLoading = true; },
        [fetchComments.fulfilled]: (state, action)  => {
            state.isLoading  = false;
            state.errMsg     = '';
            state.commentsArray = action.payload;
        },
        [fetchComments.rejected]:  (state, action)  => {
            state.isLoading = false;
            state.errMsg    = action.error ? action.error.message : 'Fetch failed';
        },
        // postComment
        [postComment.rejected]:    (state, action)  => {
            alert('Your comment could not be posted\nError: ' + action.error.message);
        }
    }
});

export const { addComment } = commentsSlice.actions;

export const commentsReducer = commentsSlice.reducer;


export const selectCommentsByProjectId = (projectId) => (state) =>
    state.comments?.commentsArray
        ? state.comments.commentsArray.filter(
              (c) => c.projectId === parseInt(projectId, 10)
          )
        : [];
