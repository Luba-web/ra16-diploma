export function Card({ title, price, key, img }) {
  return (
    <div className="col-4" key={key}>
      <div className="card catalog-item-card thumbnail">
        <img src={img[0]} className="card-img-top img-custom" alt={title} />
        <div className="card-body">
          <p className="card-text">{title}</p>
          <p className="card-text">{`${price} руб.`}</p>
          <a href="/products/1.html" className="btn btn-outline-primary">
            Заказать
          </a>
        </div>
      </div>
    </div>
  );
}
