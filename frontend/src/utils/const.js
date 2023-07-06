export const baseUrl = process.env.REACT_APP_URL || 'http://localhost:7070';

export const getOrderApi = (order) => {
  fetch(baseUrl + '/api/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  });
};
