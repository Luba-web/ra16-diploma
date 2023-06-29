import { useEffect, useState } from 'react';
import { Card } from '../Card/Card';
import { arr } from '../utils/const';

export function TopSales() {
  const [catalogArr /*setCatalogArr*/] = useState(arr);

  useEffect(() => {}, []);

  return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      <div className="row">
        {catalogArr.map((i) => {
          return (
            <Card title={i.title} price={i.price} key={i.id} img={i.images} />
          );
        })}
      </div>
    </section>
  );
}
