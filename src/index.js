import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../src/style/style.scss";
import 'bootstrap/dist/css/bootstrap.css';

import Home from './pages/user/home/index';
import Shop from './pages/user/shop/index';
import Contact from './pages/user/contact/index';
import AboutUs from './pages/user/about_Us/aboutUs';
import Blogs from './pages/user/blog/index';
import ProductDetail from "pages/user/product_detail/product_detail";
import Header from 'pages/user/theme/header';
import Footer from 'pages/user/theme/footer';
import LoginPage from 'pages/user/login/login';
import ProductList from 'pages/user/product_list/product_list';
import TableItem from 'pages/user/product/index';
import SearchProduct from 'pages/user/search/search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <RouterCustom /> */}
    <Header/>
    <Routes>
        <Route>
          <Route path='/' element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="shop/:id" element={<ProductDetail />} />
          <Route path="productList" element={<ProductList />} />
          <Route path="table" element={<TableItem />} />
          <Route path="search" element={<SearchProduct />} />
          
        </Route>
      </Routes>
    <Footer/>
  </BrowserRouter>
);

