import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from '../../src/features/articles/articlesSlice';
import categoriesReducer from '../../src/features/categories/categoriesSlice';
import sessionReducer from '../../src/features/session/sessionSlice';
import authorsReducer from '../../src/features/authors/authorsSlice';

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    categories: categoriesReducer,
    session: sessionReducer,
    authors: authorsReducer
  },
});
