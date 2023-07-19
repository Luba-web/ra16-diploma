import { Loader } from '../Loader/Loader';
import { ProductItem } from '../ProductItem/ProductItem';
import { Error } from '../Error/Error';

export function ProductsList({
  products,
  error,
  loading,
  next,
  handleMoreClick,
}) {
  return products && products.length > 0 ? (
    <>
      <>
        {error ? <Error message={error} /> : null}
        {loading ? (
          <Loader />
        ) : (
          <div className="row">
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        )}
      </>
      {next.length > 0 && (
        <div className="text-center">
          <button
            className="btn btn-outline-primary btn-outline-primary-mr"
            onClick={handleMoreClick}
          >
            Загрузить ещё
          </button>
        </div>
      )}
    </>
  ) : (
    <div>Товаров на складе нет</div>
  );
}
