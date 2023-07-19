import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    data: [],
    error: '',
    loading: false,
    active: 0,
  },
  reducers: {
    categoriesLoading: (state, action) => {
      state.loading = true;
    },
    categoriesReceived: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    categoriesError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    activeCategory: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const {
  categoriesLoading,
  categoriesReceived,
  categoriesError,
  activeCategory,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
