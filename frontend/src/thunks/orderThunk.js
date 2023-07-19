import { orderError, orderLoading, orderMess } from '../store/orderSlice';
import { baseUrl } from '../utils/const';

export const getOrderApi = (order) => (dispatch) => {
  dispatch(orderLoading());

  fetch(baseUrl + '/api/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  })
    .then((req) => {
      if (req.ok) {
        return req;
      } else {
        return dispatch(orderError('Произошла ошибка' + req.statusText));
      }
    })
    .then((json) => {
      console.log(json);
      // dispatch(orderReceived(json));
      dispatch(orderMess('Ваш заказ успешно отправлен!'));
    })
    .catch((err) => dispatch(orderError(`Произошла ошибка: ${err}`)));
};
