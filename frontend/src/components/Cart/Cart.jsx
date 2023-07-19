import { Link } from 'react-router-dom';

export function Cart({ storage, handleDelete, totalPrice }) {
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
          {storage.map((item) => (
            <tr key={item.nano}>
              <td>{item.id}</td>
              <td>
                <Link to={`/products/${item.id}`}>{item.title}</Link>
              </td>
              <td>{item.activeSize}</td>
              <td>{item.quantity}</td>
              <td>{new Intl.NumberFormat('ru-RU').format(item.price)}</td>
              <td>
                {new Intl.NumberFormat('ru-RU').format(
                  item.price * item.quantity
                )}{' '}
                руб.
              </td>
              <td>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => handleDelete(item.nano)}
                >
                  Удалить
                </button>
              </td>
            </tr>
          ))}
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
