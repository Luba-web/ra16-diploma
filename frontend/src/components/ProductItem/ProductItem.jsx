import { Link } from 'react-router-dom';

export function ProductItem({ product }) {
  return (
    <div className="col-4 mr-bt">
      <div className="card">
        {product.images && (
          <img
            src={product.images[0]}
            className="card-img-top img-custom"
            alt={product.title}
          />
        )}

        <div className="card-body">
          <p className="card-text card-text-custom">{product.title}</p>
          <p className="card-text">{product.price} руб.</p>
          <Link
            to={`/products/${product.id}`}
            className="btn btn-outline-primary"
          >
            Заказать
          </Link>
        </div>
      </div>
    </div>
  );
}
