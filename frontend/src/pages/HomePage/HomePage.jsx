//главная страница
import { Catalog } from '../../components/Catalog/Catalog';
import { TopSales } from '../../components/Top-sales/Top-sales';

export const HomePage = () => {
  return (
    <>
      <TopSales />
      <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        <Catalog />
      </section>
    </>
  );
};
