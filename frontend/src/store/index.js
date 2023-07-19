import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import categoriesReducer from './categoriesSlice';
import cartReducers from './cartSlice';
import orderReducers from './orderSlice';

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    cart: cartReducers,
    products: productsReducer,
    order: orderReducers,
  },
});
