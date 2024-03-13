import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  user: null,
  loading: false,
  error: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },

    setError(state, action) {
      state.error = action.payload;
    },

    setBooks(state, action) {
      state.books = action.payload;
    },

    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setLoading, setError, setBooks, setUser } = appSlice.actions;

export default appSlice.reducer;
