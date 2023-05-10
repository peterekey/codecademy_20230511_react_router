import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from '../../starting_code/src/features/articles/articlesSlice';
import categoriesReducer from '../../starting_code/src/features/categories/categoriesSlice';
import sessionReducer from '../../starting_code/src/features/session/sessionSlice';
import authorsReducer from '../../starting_code/src/features/authors/authorsSlice';

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    categories: categoriesReducer,
    session: sessionReducer,
    authors: authorsReducer
  },
});
