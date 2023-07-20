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
          <Product
            sizes={product.sizes}
            title={product.title}
            price={product.price}
            images={product.images}
            sku={product.sku}
            manufacturer={product.manufacturer}
            color={product.color}
            material={product.material}
            season={product.season}
            reason={product.reason}
          />
        </section>
      )}
    </>
  );
}
