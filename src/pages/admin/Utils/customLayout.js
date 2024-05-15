import React from 'react';
import { Layout } from 'react-admin';
import CustomAppBar from './customAppbar';
import CustomMenu from './customMenu';

const CustomLayout = (props) => <Layout {...props} appBar={CustomAppBar} menu={CustomMenu} />;

export default CustomLayout;
