import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterCustom from './router';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../src/style/style.scss";
import 'bootstrap/dist/css/bootstrap.css';

import Home from './pages/user/home/index';
import Shop from './pages/user/shop/index';
import Contact from './pages/user/contact/index';
import AboutUs from './pages/user/about_Us/aboutUs';
import Blogs from './pages/user/blog/index';
import Product from './pages/user/showProduct/show_product';
import ProductDetail from "pages/user/product_detail/product_detail";
import Header from 'pages/user/theme/header';
import Footer from 'pages/user/theme/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <RouterCustom /> */}
    <Header/>
    <Routes>
        <Route>
          <Route path='/' element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="/product" element={<Product />} />
          <Route path="product/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    <Footer/>
  </BrowserRouter>
);

