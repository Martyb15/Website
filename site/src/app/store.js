import { configureStore } from '@reduxjs/toolkit';
import { projectsReducer } from '../features/projects/projectsSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { skillsReducer } from '../features/skills/skillsSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';
import logger from 'redux-logger';


export const store = configureStore({
  reducer: {
    projects:    projectsReducer,
    comments:    commentsReducer,
    skills:      skillsReducer,
    promotions:  promotionsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});

console.log(store.getState());