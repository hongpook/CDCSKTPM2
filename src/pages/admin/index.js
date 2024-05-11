import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { Route } from 'react-router-dom';

// Import các components quản lý tương ứng
import ProductList from './products/productList';
import ProductEdit from './products/editProduct';
import ProductCreate from './products/addNewProduct';

import PostList from './blogs/blogList';
import PostEdit from './blogs/updateBlog';
import PostCreate from './blogs/addNewBlog';

import UserList from './users/getUser';
import UserEdit from './users/editUser';
import UserCreate from './users/addUser';
import BlogList from './admin';

const dataProvider = jsonServerProvider('http://localhost:3001/');

const AdminAdidas = () => (
    <Admin dataProvider={dataProvider}>
        {/* Navbar */}
        <Route path="/" render={() => <div>Navbar</div>} />

        {/* Mục quản lý Sản phẩm */}
        <Resource name="products" list={ProductList} edit={ProductEdit} create={ProductCreate} />

        {/* Mục quản lý Bài viết */}
        <Resource name="blogs" list={PostList} edit={PostEdit} create={PostCreate} />

        {/* Mục quản lý Người dùng */}
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
    </Admin>
);

export default AdminAdidas;
