import React from 'react';
import { Menu } from 'react-admin';
import { AiFillShopping, AiFillFileText } from 'react-icons/ai';
import { BsPersonFill } from "react-icons/bs";

const CustomMenu = (props) => (
    <Menu {...props}>
        <Menu.DashboardItem />
        <Menu.Item to="/products" primaryText="Products" leftIcon={<AiFillShopping />} />
        <Menu.Item to="/blogs" primaryText="Blogs" leftIcon={<AiFillFileText />} />
        <Menu.Item to="/users" primaryText="Users" leftIcon={<BsPersonFill />} />
    </Menu>
);

export default CustomMenu;
