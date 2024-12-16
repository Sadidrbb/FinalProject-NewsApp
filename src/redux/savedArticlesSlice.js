import { createSlice } from '@reduxjs/toolkit';

const savedArticlesSlice = createSlice({
  name: 'savedArticles',
  initialState: [], // Daftar artikel yang disimpan
  reducers: {
    saveArticle(state, action) {
      // Menambahkan artikel ke daftar jika belum ada
      if (!state.some((article) => article._id === action.payload._id)) {
        state.push(action.payload);
      }
    },
    unsaveArticle(state, action) {
      // Menghapus artikel berdasarkan ID
      return state.filter((article) => article._id !== action.payload);
    },
  },
});

export const { saveArticle, unsaveArticle } = savedArticlesSlice.actions;
export default savedArticlesSlice.reducer;
