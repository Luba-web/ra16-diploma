import { Link } from 'react-router-dom';

export function ProductInfo({
  nano,
  id,
  title,
  activeSize,
  quantity,
  price,
  handleDelete,
}) {
  return (
    <tr key={nano}>
      <td>{id}</td>
      <td>
        <Link to={`/products/${id}`}>{title}</Link>
      </td>
      <td>{activeSize}</td>
      <td>{quantity}</td>
      <td>{new Intl.NumberFormat('ru-RU').format(price)}</td>
      <td>{new Intl.NumberFormat('ru-RU').format(price * quantity)} руб.</td>
      <td>
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={() => handleDelete(nano)}
        >
          Удалить
        </button>
      </td>
    </tr>
  );
}
