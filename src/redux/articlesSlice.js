import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async Thunk untuk fetch data artikel
export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async (search) => {
    const res = await fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=${process.env.REACT_APP_API_KEY}`
    );
    const data = await res.json();
    return data.response.docs;
  }
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    search: 'indonesia', // Default pencarian
    isLoading: false,
    error: null,
  },
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSearch } = articlesSlice.actions;
export default articlesSlice.reducer;
