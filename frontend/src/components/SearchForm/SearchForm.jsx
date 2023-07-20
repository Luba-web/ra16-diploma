import {
  fetchProducts,
  setStateOffset,
  setStateQuery,
} from '../../thunks/productsThunk';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';

export function SearchForm() {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.products.searchQuery);
  const activeCategory = useSelector((state) => state.categories.active);

  const [word, setWord] = useState(query ? query : '');

  useEffect(() => {
    setWord(query);
  }, [query]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      dispatch(setStateQuery(word));
      if (word.length > 0) {
        dispatch(setStateQuery(word));
        dispatch(fetchProducts(activeCategory, e));
        dispatch(setStateOffset(activeCategory, e, 12));
      }
    },
    [word, activeCategory]
  );

  const handleChange = (e) => {
    if (e.target.value.length === 0) {
      dispatch(setStateQuery(''));
    }
    setWord(e.target.value);
  };

  const handleBlur = (e) => {
    handleSubmit(e);
  };

  return (
    <form className="catalog-search-form form-inline" onSubmit={handleSubmit}>
      <input
        className="form-control"
        value={word}
        placeholder="Поиск"
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={() => setWord('')}
      />
    </form>
  );
}
