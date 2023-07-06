import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import categoriesReducer from './categoriesSlice';
import cartReducers from './cartSlice';

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    cart: cartReducers,
    products: productsReducer,
  },
});
