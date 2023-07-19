import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStateQuery } from '../../thunks/productsThunk';
import Logo from '../Logo/Logo';
import logo from '../../img/header-logo.png';
import { arrNav } from '../../utils/const';
import { setActiveCategory } from '../../thunks/categoriesThunk';
import { orderMess } from '../../store/orderSlice';

export function Header() {
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchInput = useRef(null);

  const [active, setActive] = useState(false);
  const [query, setQuery] = useState('');

  const totalItems = useSelector((state) => state.cart.totalItems);
  const activeCategory = useSelector((state) => state.categories.active);

  // навидение фокуса в инпут поиска в шапке
  useEffect(() => {
    active && searchInput.current.focus();
  }, [active]);

  // сброс состояний каталога и корзины
  useEffect(() => {
    if (pathname === '/ra16-diploma') {
      dispatch(setStateQuery(''));
      dispatch(setActiveCategory(0));
      setQuery('');
      setActive(false);
    }
    if (pathname !== '/cart') {
      dispatch(orderMess(''));
    }
  }, [pathname, dispatch]);

  // переход по поиску в шапке в каталог
  const handleSearchTogglerClick = (e) => {
    setActive((active) => !active);
    query.length > 0 && navigate('/catalog');
    dispatch(setStateQuery(query));
    dispatch(setActiveCategory(activeCategory));
    setQuery('');
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchTogglerClick();
    }
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
  };

  return (
    <header className="container header-fixed">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Logo src={logo} />
            <div className="collapase navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                {arrNav.map((i, index) => {
                  return (
                    <li
                      className={`nav-item${
                        pathname === i.path ? ' active' : ''
                      }`}
                      key={index}
                    >
                      <NavLink to={i.path} className="nav-link">
                        {i.title}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
              <div>
                <div className="header-controls-pics">
                  <div
                    onClick={handleSearchTogglerClick}
                    data-id="search-expander"
                    className="header-controls-pic header-controls-search"
                  ></div>
                  <div
                    className="header-controls-pic header-controls-cart"
                    onClick={handleCartClick}
                  >
                    {totalItems && totalItems > 0 ? (
                      <div className="header-controls-cart-full">
                        {totalItems}
                      </div>
                    ) : (
                      ''
                    )}
                    <div className="header-controls-cart-menu"></div>
                  </div>
                </div>
                <form
                  data-id="search-form"
                  className={`header-controls-search-form form-inline${
                    active ? '' : ' invisible'
                  }`}
                  onSubmit={handleSubmitSearch}
                >
                  <input
                    className="form-control"
                    placeholder="Поиск"
                    value={query}
                    ref={searchInput}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyPress}
                  />
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
