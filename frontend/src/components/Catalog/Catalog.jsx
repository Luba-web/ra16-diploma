import { useDispatch, useSelector } from 'react-redux';
import { Categories } from '../Categories/Categories';
import { ProductsList } from '../ProductsList/ProductsList';
import { useCallback, useEffect, useState } from 'react';
import {
  appendProducts,
  fetchProducts,
  setStateOffset,
} from '../../thunks/productsThunk';
import {
  fetchCategories,
  setActiveCategory,
} from '../../thunks/categoriesThunk';

export function Catalog() {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories.data);
  const loadingCategories = useSelector((state) => state.categories.loading);
  const errorCategories = useSelector((state) => state.categories.error);
  const activeCategory = useSelector((state) => state.categories.active);

  const query = useSelector((state) => state.products.searchQuery);
  const products = useSelector((state) => state.products.data);
  const loadingProduct = useSelector((state) => state.products.loading);
  const errorProduct = useSelector((state) => state.products.error);
  const next = useSelector((state) => state.products.next);

  const [offset, setOffset] = useState(6);

  useEffect(() => {
    dispatch(fetchProducts(activeCategory, query));
    dispatch(setStateOffset('', query, 6));
    dispatch(fetchCategories());
  }, [dispatch, query, activeCategory]);

  const handleMoreClick = useCallback(() => {
    setOffset((prev) => prev + 6);
    dispatch(appendProducts(activeCategory, query, offset));
    dispatch(setStateOffset(activeCategory, query, offset + 6));
  }, [dispatch, activeCategory, query, offset]);

  const handleCategoryClick = useCallback(
    (id) => {
      dispatch(setActiveCategory(id));
      dispatch(fetchProducts(id, query));
      dispatch(setStateOffset(id, query, 12));
    },
    [dispatch, query]
  );

  return (
    <>
      <Categories
        categories={categories}
        handleCategoryClick={handleCategoryClick}
        active={activeCategory}
        loading={loadingCategories}
        error={errorCategories}
      />
      <ProductsList
        handleMoreClick={handleMoreClick}
        products={products}
        loading={loadingProduct}
        error={errorProduct}
        next={next}
      />
    </>
  );
}
