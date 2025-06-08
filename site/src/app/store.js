import { configureStore } from '@reduxjs/toolkit';
import { projectsReducer } from '../features/projects/projectsSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { skillsReducer } from '../features/skills/skillsSlice';
import { certificationsReducer } from '../features/certifications/certificationsSlice';
import { userReducer } from '../features/user/userSlice';
import logger from 'redux-logger';


export const store = configureStore({
  reducer: {
    projects:        projectsReducer,
    comments:        commentsReducer,
    skills:          skillsReducer,
    certifications:  certificationsReducer,
    user:            userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});

console.log(store.getState());