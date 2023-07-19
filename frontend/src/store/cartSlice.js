import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    data: [],
    totalItems: 0,
    error: '',
    loading: false,
  },
  reducers: {
    cartLoading: (state, action) => {
      state.loading = true;
    },
    totalItems: (state, action) => {
      state.loading = false;
      state.totalItems = action.payload;
    },
    cartItems: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    cartError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { totalItems, cartItems, cartLoading, cartError } =
  cartSlice.actions;

export default cartSlice.reducer;
