import { cartItems, totalItems } from '../store/cartSlice';

export const countItems = (num) => (dispatch) => {
  dispatch(totalItems(num));
};
export const setCartItems = (obj) => (dispatch) => {
  dispatch(cartItems(obj));
};
