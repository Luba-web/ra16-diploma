import { useCallback } from 'react';
import { ProductInfo } from '../ProductInfo/ProductInfo';

export function Cart({ storage, handleDelete, totalPrice }) {
  const drawProductInfo = useCallback(
    (storage, handleDelete) => {
      storage.map(({ nano, id, title, activeSize, quantity, price }) => (
        <ProductInfo
          nano={nano}
          id={id}
          title={title}
          activeSize={activeSize}
          quantity={quantity}
          price={price}
          handleDelete={handleDelete}
        />
      ));
    },
    [storage, handleDelete]
  );
  return (
    <section className="cart">
      <h2 className="text-center">Корзина</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Название</th>
            <th scope="col">Размер</th>
            <th scope="col">Кол-во</th>
            <th scope="col">Стоимость</th>
            <th scope="col">Итого</th>
            <th scope="col">Действия</th>
          </tr>
        </thead>
        <tbody>
          {drawProductInfo(storage, handleDelete)}
          <tr>
            <td colSpan="5" className="text-right">
              Общая стоимость
            </td>
            <td>{totalPrice} руб.</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
