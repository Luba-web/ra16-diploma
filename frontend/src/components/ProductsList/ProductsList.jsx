import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../Loader/Loader';
import {
  fetchProducts,
  setStateOffset,
  appendProducts,
} from '../../thunks/productsThunk';
import { useEffect, useState } from 'react';
import { ProductItem } from '../ProductItem/ProductItem';

export function ProductsList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const query = useSelector((state) => state.products.searchQuery);
  const next = useSelector((state) => state.products.next);
  const activeCategory = useSelector((state) => state.categories.active);

  const [offset, setOffset] = useState(6);

  useEffect(() => {
    dispatch(fetchProducts('', query));
    dispatch(setStateOffset('', query, 6));
  }, [dispatch, query]);

  const handleMoreClick = () => {
    setOffset((prev) => prev + 6);
    dispatch(appendProducts(activeCategory, query, offset));
    dispatch(setStateOffset(activeCategory, query, offset + 6));
  };

  return products && products.length > 0 ? (
    <>
      <>
        {error && (
          <div className="alert alert-danger">Призошла ошибка {error}</div>
        )}
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
          <button className="btn btn-outline-primary" onClick={handleMoreClick}>
            Загрузить ещё
          </button>
        </div>
      )}
    </>
  ) : (
    <div>Товаров на складе нет</div>
  );
}
