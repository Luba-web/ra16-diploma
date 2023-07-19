import { Loader } from '../Loader/Loader';
import { Link } from 'react-router-dom';
import { Error } from '../Error/Error';

export default function CategoriesFilter({
  error,
  loading,
  active,
  handleCategoryClick,
  categories,
}) {
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
          {categories &&
            categories.map((categor) => (
              <li className="nav-item" key={categor.id}>
                {/* eslint-disable-next-line*/}
                <Link
                  type="button"
                  className={
                    active === categor.id ? 'nav-link active' : 'nav-link'
                  }
                  onClick={() => handleCategoryClick(categor.id)}
                >
                  {categor.title}
                </Link>
              </li>
            ))}
        </ul>
      )}
    </>
  );
}
