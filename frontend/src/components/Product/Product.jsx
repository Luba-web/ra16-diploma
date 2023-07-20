import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getStorageItems } from '../../storage/localStorage';
import { nanoid } from '@reduxjs/toolkit';
import { fetchProducts } from '../../thunks/productsThunk';
import { useDispatch } from 'react-redux';
import { ProductSize } from '../ProductSize/ProductSize';
import { ProductCell } from '../ProductCell/ProductCell';

export function Product({
  sizes,
  title,
  price,
  images,
  sku,
  manufacturer,
  color,
  material,
  season,
  reason,
}) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [activeSize, setActiveSize] = useState('');

  useEffect(() => {
    dispatch(fetchProducts('', '', '', id));
  }, [dispatch, id]);

  const storage = getStorageItems();

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => (prev -= 1));
    }
  };

  const handleIncrement = () => {
    setQuantity((prev) => (prev += 1));
  };

  // Добовление в корзину товара
  const addToCart = useCallback(
    (title, price) => {
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
        storage.push({
          nano: nanoid(),
          id,
          title,
          quantity,
          activeSize,
          price,
        });
      }
      localStorage.setItem('items', JSON.stringify(storage));
      navigate('/cart');
    },
    [storage, title, price]
  );
  // если размеры есть в наличии
  const drawSizesProduct = useCallback(
    (sizes) => {
      if (sizes.some((item) => item.available)) {
        return (
          <ProductSize
            sizes={sizes}
            activeSize={activeSize}
            setActiveSize={setActiveSize}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            quantity={quantity}
            addToCart={addToCart}
            title={title}
            price={price}
          />
        );
      }
    },
    [
      sizes,
      handleDecrement,
      handleIncrement,
      setActiveSize,
      activeSize,
      quantity,
      addToCart,
      title,
      price,
    ]
  );

  return (
    <div className="row">
      <div className="col-5">
        {images && <img src={images[0]} className="img-fluid" alt="" />}
      </div>
      <div className="col-7">
        <ProductCell
          sku={sku}
          manufacturer={manufacturer}
          color={color}
          material={material}
          season={season}
          reason={reason}
        />
        {sizes && drawSizesProduct(sizes)}
      </div>
    </div>
  );
}
