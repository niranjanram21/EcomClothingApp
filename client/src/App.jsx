// eslint-disable-next-line no-unused-vars
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Shop />}></Route>
        <Route path='/men' element={<ShopCategory category="men" />}></Route>
        <Route path='/women' element={<ShopCategory category="women" />}></Route>
        <Route path='/kids' element={<ShopCategory category="kids" />}></Route>
        <Route path='/product' element={<Product />}>
          <Route path=':product' element={<Product />}></Route>
        </Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/login' element={<LoginSignup />}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
