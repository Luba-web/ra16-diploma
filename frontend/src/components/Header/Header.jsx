import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStateQuery } from '../../thunks/productsThunk';
import Logo from '../Logo/Logo';
import logo from '../../img/header-logo.png';

export function Header() {
  const { pathname } = useLocation();
  const [active, setActive] = useState(false);
  const [query, setQuery] = useState('');
  const searchInput = useRef(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const totalItems = useSelector((state) => state.cart.totalItems);

  useEffect(() => {
    active && searchInput.current.focus();
  });

  const handleSearchTogglerClick = () => {
    setActive((active) => !active);
    query.length > 0 && navigate('/catalog');
    dispatch(setStateQuery(query));
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
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Logo src={logo} />
            <div className="collapase navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                <li className={`nav-item${pathname === '/' ? ' active' : ''}`}>
                  <NavLink to="/ra16-diploma" className="nav-link">
                    Главная
                  </NavLink>
                </li>
                <li
                  className={`nav-item${
                    pathname === '/catalog' ? ' active' : ''
                  }`}
                >
                  <NavLink className="nav-link" to="/catalog">
                    Каталог
                  </NavLink>
                </li>
                <li
                  className={`nav-item${
                    pathname === '/about' ? ' active' : ''
                  }`}
                >
                  <NavLink className="nav-link" to="/about">
                    О магазине
                  </NavLink>
                </li>
                <li
                  className={`nav-item${
                    pathname === '/contacts' ? ' active' : ''
                  }`}
                >
                  <NavLink className="nav-link" to="/contacts">
                    Контакты
                  </NavLink>
                </li>
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
