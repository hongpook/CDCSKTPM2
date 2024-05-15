import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

// Import your custom components
import CustomLayout from './Utils/customLayout';
import Dashboard from './dashboard/dashboard';

// Import your resource components
import ProductList from './products/productList';
import ProductEdit from './products/editProduct';
import ProductCreate from './products/addNewProduct';

import PostList from './blogs/blogList';
import PostEdit from './blogs/updateBlog';
import PostCreate from './blogs/addNewBlog';

import UserList from './users/getUser';
import UserEdit from './users/editUser';
import UserCreate from './users/addUser';

const dataProvider = jsonServerProvider('http://localhost:3001/');

const AdminAdidas = () => {
    return (
        <Admin dataProvider={dataProvider} layout={CustomLayout} dashboard={Dashboard}>
            {/* Mục quản lý Sản phẩm */}
            <Resource name="products" list={ProductList} edit={ProductEdit} create={ProductCreate} />

            {/* Mục quản lý Bài viết */}
            <Resource name="blogs" list={PostList} edit={PostEdit} create={PostCreate} />

            {/* Mục quản lý Người dùng */}
            <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
        </Admin>
    );
};

export default AdminAdidas;
