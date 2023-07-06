import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    topSales: [],
    error: '',
    loading: false,
    searchQuery: '',
    next: [],
  },
  reducers: {
    productsLoading: (state, action) => {
      state.loading = true;
    },
    productsReceived: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    topSalesReceived: (state, action) => {
      state.loading = false;
      state.topSales = action.payload;
    },
    productsAppend: (state, action) => {
      state.loading = false;
      state.data = [...state.data, ...action.payload];
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setOffset: (state, action) => {
      state.next = action.payload;
    },
    productsError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  productsLoading,
  productsReceived,
  productsError,
  setSearchQuery,
  setOffset,
  productsAppend,
  topSalesReceived,
} = productsSlice.actions;

export default productsSlice.reducer;
