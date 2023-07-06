import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { getStorageItems } from '../../storage/localStorage';
import { fetchProducts } from '../../thunks/productsThunk';
import { Loader } from '../../components/Loader/Loader';

export function ProductPage() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = useSelector((state) => state.products.data);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  const [quantity, setQuantity] = useState(1);
  const [activeSize, setActiveSize] = useState('');

  const storage = getStorageItems();

  useEffect(() => {
    dispatch(fetchProducts('', '', '', id));
  }, [dispatch, id]);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => (prev -= 1));
    }
  };

  const handleIncrement = () => {
    setQuantity((prev) => (prev += 1));
  };

  const availabilityOfProducts = () => {
    return product.sizes && product.sizes.some((item) => item.available);
  };

  const addToCart = (title, price) => {
    const idx = storage.findIndex((item) => item.id === id);
    if (idx > -1) {
      const item = storage[idx];
      if (item.activeSize === activeSize) {
        storage[idx].quantity += quantity;
      } else {
        storage.push({
          nano: nanoid(),
          id,
          title,
          quantity,
          activeSize,
          price,
        });
      }
    } else {
      storage.push({ nano: nanoid(), id, title, quantity, activeSize, price });
    }
    localStorage.setItem('items', JSON.stringify(storage));
    navigate('/cart');
  };

  return (
    <>
      {error && (
        <div className="alert alert-danger">Призошла ошибка {error}</div>
      )}
      {loading ? <Loader /> : null}
      {product && (
        <section className="catalog-item">
          <h2 className="text-center">{product.title}</h2>
          <div className="row">
            <div className="col-5">
              {product.images && (
                <img src={product.images[0]} className="img-fluid" alt="" />
              )}
            </div>
            <div className="col-7">
              <table className="table table-bordered">
                <tbody>
                  {product.sku && (
                    <tr>
                      <td>Артикул</td>
                      <td>{product.sku}</td>
                    </tr>
                  )}
                  {product.manufacturer && (
                    <tr>
                      <td>Производитель</td>
                      <td>{product.manufacturer}</td>
                    </tr>
                  )}
                  {product.color && (
                    <tr>
                      <td>Цвет</td>
                      <td>{product.color}</td>
                    </tr>
                  )}
                  {product.material && (
                    <tr>
                      <td>Материалы</td>
                      <td>{product.material}</td>
                    </tr>
                  )}
                  {product.season && (
                    <tr>
                      <td>Сезон</td>
                      <td>{product.season}</td>
                    </tr>
                  )}
                  {product.reason && (
                    <tr>
                      <td>Повод</td>
                      <td>{product.reason}</td>
                    </tr>
                  )}
                </tbody>
              </table>
              {availabilityOfProducts() && (
                <>
                  <div className="text-center">
                    <p>
                      Размеры в наличии:
                      {product.sizes
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
                        <button
                          className="btn btn-secondary"
                          onClick={handleDecrement}
                        >
                          -
                        </button>
                        <span className="btn btn-outline-primary">
                          {quantity}
                        </span>
                        <button
                          className="btn btn-secondary"
                          onClick={handleIncrement}
                        >
                          +
                        </button>
                      </span>
                    </p>
                  </div>
                  <button
                    className="btn btn-danger btn-block btn-lg"
                    disabled={activeSize === '' ? true : false}
                    onClick={() => addToCart(product.title, product.price)}
                  >
                    В корзину
                  </button>
                </>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
