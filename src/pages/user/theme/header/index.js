import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import "../header/style.scss"
import {  AiOutlineDown, AiOutlineMenu } from "react-icons/ai";
import logo from "../../../../assets/imgs/Adidas_Logo.png";
import cart from "../../../../assets/imgs/imgIcon/cart.png";
import heart from "../../../../assets/imgs/imgIcon/heart.png";
import search from "../../../../assets/imgs/imgIcon/search.png";
import { ROUTERS } from 'utils/router';

const Header = () =>{


    const [menus, setMenus] = useState([
        {
            name: 'Home',
            path: ROUTERS.USER.HOME,
        },
        {
            name: 'Shop',
            path: ROUTERS.USER.SHOP,
        },
        {
            name: 'Pages',
            path: ROUTERS.USER.HOME,
            isShowSubMenu: false,
            child:[
                {
                    name: 'About Us',
                    path: ROUTERS.USER.ABOUT_US,
                },
                {
                    name: 'Shop Detail',
                    path: ROUTERS.USER.PRODUCT,
                },
                {
                    name: 'Shopping Cart',
                    path: ROUTERS.USER.HOME,
                },
                {
                    name: 'Check Out',
                    path: ROUTERS.USER.HOME,
                },
                {
                    name: 'Blog Detail',
                    path: ROUTERS.USER.HOME,
                }
            ]
        },
        {
            name: 'Blog',
            path: ROUTERS.USER.BLOG,
        },
        {
            name: 'Contact',
            path: ROUTERS.USER.CONTACT,
        }

    ])
    return (
        <div className='header '>

            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-7">
                            <div className="header__top__left">
                                <p>Free shipping, 30-day return or refund guarantee.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5">
                            <div className="header__top__right">
                                <div className="header__top__links">
                                    <Link to="/login">Sign in</Link>
                                    <a href="#">FAQs</a>
                                </div>
                                <div className="header__top__hover">
                                    <span>Usd <AiOutlineDown /></span>
                                    <ul>
                                        <li>USD</li>
                                        <li>EUR</li>
                                        <li>USD</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <div className="header__logo">
                            <Link to="/">
                                <img src={logo} alt="" />

                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <nav className="header__menu mobile-menu">
                            <ul>

                                {/* {
                                    menus?.map((menu, menuKey) =>(
                                        <li key={menuKey} className={menuKey === 0 ? "active" : ""}> 
                                            <Link to={menu?.path}>
                                                {menu?.name}
                                            </Link>

                                            {
                                                menu.child && (
                                                    <ul className="dropdown">
                                                        {
                                                            menu.child.map((childItem, childKey) =>(
                                                                <li key={`${menuKey} - ${childKey}`}>
                                                                    <Link to={childItem.path}>
                                                                        {childItem.name}
                                                                    </Link>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                )
                                            }
                                        </li>
                                    ))
                                } */}
                                <li className="active"><Link to="/">Home</Link></li>
                                <li><Link to="/shop">Shop</Link></li>
                                <li><Link to="#">Pages</Link>
                                    <ul className="dropdown">
                                        <li><Link to="/aboutUs">About Us</Link></li>
                                        <li><Link to="/product">Shop Details</Link></li>
                                        <li><Link to="/productList">Shopping Cart</Link></li>
                                        <li><Link to="/table">Check Out</Link></li>
                                        <li><Link to="">Blog Details</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/blogs">Blog</Link></li>
                                <li><Link to="/contact">Contacts</Link></li>
                                
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <div className="header__nav__option">
                            <Link to="/search" className="search-switch" >
                                <img src={search} alt="" />
                                
                            </Link>
                            <Link to="#">
                                <img src={heart} alt=""/>

                            </Link>
                            <Link to="#">
                                <img src={cart} alt=""/>
                            </Link>
                            <div class="price">$0.00</div>
                        </div>
                    </div>
                </div>
                <div className="canvas__open"><AiOutlineMenu /></div>
            </div>
        </div>
        
    );
}

export default memo(Header);