import { Route, Routes } from 'react-router';
import { Header } from '../Header/Header';
import { HomePage } from '../../pages/HomePage/HomePage';
import { AboutShopPage } from '../../pages/AboutShopPage/AboutShopPage';
import { Footer } from '../Footer/Footer';
import { CartPage } from '../../pages/CartPage/CartPage';
import { CatalogPage } from '../../pages/CatalogPage/CatalogPage';
import { ContactsPage } from '../../pages/ContactsPage/ContactsPage';
import { NotFoundPage } from '../../pages/NotFoundPage/NotFoundPage';
import { ProductPage } from '../../pages/ProductPage/ProductPage';
import { Bunner } from '../Banner/Banner';
import banner from '../../img/banner.jpg';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="row">
          <div className="col">
            <Bunner src={banner} />
            <Routes>
              <Route path="/ra16-diploma" exact element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/about" element={<AboutShopPage />} />
              <Route path="/catalog" element={<CatalogPage />} />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
