import { useState } from 'react';
import { Card } from '../Card/Card';
import { SearchForm } from '../SearchForm/SearchForm';
import { arr } from '../utils/const';

export function Catalog({ isActiveForm }) {
  const [catalogArr /*setCatalogArr*/] = useState(arr);

  const handleDownloadMore = () => {};

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      {isActiveForm && <SearchForm />}
      <ul className="catalog-categories nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Все
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Женская обувь
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Мужская обувь
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Обувь унисекс
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Детская обувь
          </a>
        </li>
      </ul>
      <div className="row">
        {catalogArr.map((i) => {
          return (
            <Card title={i.title} price={i.price} key={i.id} img={i.images} />
          );
        })}
      </div>
      <div className="text-center">
        <button
          className="btn btn-outline-primary"
          onClick={handleDownloadMore}
        >
          Загрузить ещё
        </button>
      </div>
    </section>
  );
}
