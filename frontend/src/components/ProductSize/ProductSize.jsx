export function ProductSize({
  sizes,
  activeSize,
  setActiveSize,
  handleDecrement,
  handleIncrement,
  quantity,
  addToCart,
  title,
  price,
}) {
  return (
    <>
      <div className="text-center">
        <p>
          Размеры в наличии:
          {sizes
            .filter((item) => item.available)
            .map((item) => (
              <span
                key={item.size}
                className={`catalog-item-size${
                  activeSize === item.size ? ' selected' : ''
                }`}
                onClick={() => setActiveSize(item.size)}
              >
                {item.size}
              </span>
            ))}
        </p>
        <p>
          Количество:{' '}
          <span className="btn-group btn-group-sm pl-2">
            <button className="btn btn-secondary" onClick={handleDecrement}>
              -
            </button>
            <span className="btn btn-outline-primary">{quantity}</span>
            <button className="btn btn-secondary" onClick={handleIncrement}>
              +
            </button>
          </span>
        </p>
      </div>
      <button
        className="btn btn-danger btn-block btn-lg"
        disabled={activeSize === '' ? true : false}
        onClick={() => addToCart(title, price)}
      >
        В корзину
      </button>
    </>
  );
}
