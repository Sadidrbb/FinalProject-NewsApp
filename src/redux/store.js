import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './articlesSlice';
import savedArticlesReducer from './savedArticlesSlice';

const store = configureStore({
  reducer: {
    articles: articlesReducer,
    savedArticles: savedArticlesReducer,
  },
});

export default store;
