import { useDispatch, useSelector } from 'react-redux';
import { fetchTopSales } from '../../thunks/productsThunk';
import { useEffect } from 'react';
import { Loader } from '../Loader/Loader';
import { ProductItem } from '../ProductItem/ProductItem';
import { Error } from '../Error/Error';

export function TopSales() {
  const dispatch = useDispatch();
  const topSales = useSelector((state) => state.products.topSales);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(fetchTopSales());
  }, [dispatch]);

  return topSales ? (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      {error ? <Error message={error} /> : null}
      {loading ? (
        <Loader />
      ) : (
        <div className="row">
          {topSales.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  ) : null;
}
