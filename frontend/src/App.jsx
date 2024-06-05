// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Assets/menBanner.jpg'
import women_banner from './Assets/womenBanner.jpg'
import kid_banner from './Assets/kidBanner.jpg'
import 'aos/dist/aos.css';
import AOS from 'aos';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: false,
    });
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Shop />}></Route>
        <Route path='/men' element={<ShopCategory banner={men_banner} category="men" />}></Route>
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />}></Route>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kids" />}></Route>
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product />}></Route>
        </Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/login' element={<LoginSignup />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App




