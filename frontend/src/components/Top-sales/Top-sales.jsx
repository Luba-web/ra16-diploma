import { useDispatch, useSelector } from 'react-redux';
import { fetchTopSales } from '../../thunks/productsThunk';
import { useEffect } from 'react';
import { Loader } from '../Loader/Loader';
import { ProductItem } from '../ProductItem/ProductItem';

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
      {error && (
        <div className="alert alert-danger">Призошла ошибка {error}</div>
      )}
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
