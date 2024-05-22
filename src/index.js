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
import SearchProduct from 'pages/user/search/search';
import BlogDetail from 'pages/user/blog_detail/blog_detail';
import Cart from 'pages/user/cart/cart';
import ShoppingCart from 'pages/user/product_list/test';
import AdminAdidas from 'pages/admin';
import EditBlogForm from 'pages/admin/blogs/updateBlog';

const user = window.localStorage.getItem("user")

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  {user ?
  <>
  <AdminAdidas />
    </>
  : <>
   <Header/>
    <Routes>
        <Route>
          <Route path='/' element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<BlogDetail />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="productList" element={<ProductList />} />
          <Route path="search" element={<SearchProduct />} />
          <Route path="cart" element={<Cart />} />
          <Route path="cart2" element={<ShoppingCart />} />
        </Route>
      </Routes>
    <Footer/>
  </>}
    
  </BrowserRouter>
);

