//корзина
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countItems } from '../../thunks/cartThunk';
import { getStorageItems } from '../../storage/localStorage';
import { Loader } from '../../components/Loader/Loader';
import { Order } from '../../components/Order/Order';
import { Cart } from '../../components/Cart/Cart';
import { Error } from '../../components/Error/Error';
import { getOrderApi } from '../../thunks/orderThunk';

export function CartPage() {
  const dispatch = useDispatch();
  const miniLocalStorage = getStorageItems();
  const [totalPrice, setTotalPrice] = useState(0);
  const [storage, setStorage] = useState(miniLocalStorage);
  const [contacts, setContacts] = useState({ phone: '', address: '' });

  const loading = useSelector((state) => state.order.loading);
  const error = useSelector((state) => state.order.error);
  const mess = useSelector((state) => state.order.mess);

  useEffect(() => {
    setTotalPrice(
      new Intl.NumberFormat('ru-RU').format(
        storage.reduce((prev, next) => prev + +next.price * +next.quantity, 0)
      )
    );
    dispatch(
      countItems(storage.reduce((prev, next) => prev + +next.quantity, 0))
    );
  }, [dispatch, storage]);

  const handleDelete = (nanoId) => {
    const newStorage = storage.filter((item) => item.nano !== nanoId);
    localStorage.setItem('items', JSON.stringify(newStorage));
    setStorage(newStorage);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContacts((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitOrder = (e) => {
    e.preventDefault();
    const orderObject = {
      owner: contacts,
      items: storage.map((item) => ({
        id: +item.id,
        price: item.price,
        count: item.quantity,
      })),
    };

    dispatch(getOrderApi(orderObject));

    localStorage.removeItem('items');
    setStorage([]);
  };

  return (
    <>
      {storage && storage.length > 0 ? (
        ''
      ) : (
        <>
          <h2 className="text-center">Корзина пуста</h2>
          {mess && <div className="alert alert-success">{mess}</div>}
        </>
      )}

      {error ? <Error message={error} /> : null}
      {loading ? <Loader /> : ''}
      {storage && storage.length > 0 && (
        <>
          <Cart
            totalPrice={totalPrice}
            handleDelete={handleDelete}
            storage={storage}
          />
          <Order
            submitOrder={submitOrder}
            handleChange={handleChange}
            address={contacts.address}
            phone={contacts.phone}
          />
        </>
      )}
    </>
  );
}
