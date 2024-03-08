import { memo, useState } from 'react';
import "../header/style.scss"
import { AiOutlineHeart, AiOutlineDown, AiOutlineShopping } from "react-icons/ai";
import logo from "../../../../assets/imgs/logo.png";
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
                                    <a href="#">Sign in</a>
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
                            <a href="./index.html">
                                <img src={logo} alt=""/>

                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <nav className="header__menu mobile-menu">
                            <ul>
                                <li className="active"><a href="./index.html">Home</a></li>
                                <li><a href="./shop.html">Shop</a></li>
                                <li><a href="#">Pages</a>
                                    <ul className="dropdown">
                                        <li><a href="./about.html">About Us</a></li>
                                        <li><a href="./shop-details.html">Shop Details</a></li>
                                        <li><a href="./shopping-cart.html">Shopping Cart</a></li>
                                        <li><a href="./checkout.html">Check Out</a></li>
                                        <li><a href="./blog-details.html">Blog Details</a></li>
                                    </ul>
                                </li>
                                <li><a href="./blog.html">Blog</a></li>
                                <li><a href="./contact.html">Contacts</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <div className="header__nav__option">
                            <a href="#" className="search-switch">
                                <img src={search} alt=""/>
                            </a>
                            <a href="#">
                                <img src={heart} alt=""/>

                            </a>
                            <a href="#">
                                <img src={cart} alt=""/>
                            </a>
                            <div class="price">$0.00</div>
                        </div>
                    </div>
                </div>
                <div className="canvas__open"><i class="fa fa-bars"></i></div>
            </div>

        </div>
    );
}

export default memo(Header);