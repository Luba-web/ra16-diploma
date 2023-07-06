//каталог

import { Catalog } from '../../components/Catalog/Catalog';
import { SearchForm } from '../../components/SearchForm/SearchForm';

export function CatalogPage() {
  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      <SearchForm />
      <Catalog />
    </section>
  );
}
