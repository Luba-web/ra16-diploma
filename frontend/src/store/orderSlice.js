import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    // data: [],
    error: '',
    loading: false,
    mess: '',
  },
  reducers: {
    orderLoading: (state, action) => {
      state.loading = true;
    },
    // orderReceived: (state, action) => {
    //   state.loading = false;
    //   state.data = action.payload;
    // },
    orderError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    orderMess: (state, action) => {
      state.loading = false;
      state.mess = action.payload;
    },
  },
});

export const { orderLoading, orderError, orderMess } = orderSlice.actions;

export default orderSlice.reducer;
