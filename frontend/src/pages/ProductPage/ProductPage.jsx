import { useSelector } from 'react-redux';
import { Loader } from '../../components/Loader/Loader';
import { Product } from '../../components/Product/Product';
import { Error } from '../../components/Error/Error';

export function ProductPage() {
  const product = useSelector((state) => state.products.data);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  return (
    <>
      {error ? <Error message={error} /> : null}
      {loading ? <Loader /> : null}
      {product && (
        <section className="catalog-item">
          <h2 className="text-center">{product.title}</h2>
          <Product product={product} />
        </section>
      )}
    </>
  );
}
