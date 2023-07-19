import { Loader } from '../Loader/Loader';
import { Link } from 'react-router-dom';
import { Error } from '../Error/Error';
import { Category } from '../Category/Category';
import { useCallback } from 'react';

export function Categories({
  error,
  loading,
  active,
  handleCategoryClick,
  categories,
}) {
  const drawCategory = useCallback(
    (categories) => {
      return categories.map(({ id, title }) => (
        <Category
          key={id}
          id={id}
          active={active}
          title={title}
          handleCategoryClick={handleCategoryClick}
        />
      ));
    },
    [categories, handleCategoryClick, active]
  );
  return (
    <>
      {error ? <Error message={error} /> : null}
      {loading ? (
        <Loader />
      ) : (
        <ul className="catalog-categories nav justify-content-center">
          <li className="nav-item">
            {/* eslint-disable-next-line*/}
            <Link
              type="button"
              className={active === 0 ? 'nav-link active' : 'nav-link'}
              onClick={() => handleCategoryClick(0)}
            >
              Все
            </Link>
          </li>
          {categories && drawCategory(categories, handleCategoryClick)}
        </ul>
      )}
    </>
  );
}
