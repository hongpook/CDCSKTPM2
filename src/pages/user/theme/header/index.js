import { memo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../header/style.scss"
import {  AiOutlineDown, AiOutlineMenu } from "react-icons/ai";
import logo from "../../../../assets/imgs/Adidas_Logo.png";
import cart from "../../../../assets/imgs/imgIcon/cart.png";
import heart from "../../../../assets/imgs/imgIcon/heart.png";
import search from "../../../../assets/imgs/imgIcon/search.png";

const Header = () =>{

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
                                
                                
                                <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                                <li><NavLink to="/shop" activeClassName="active">Shop</NavLink></li>
                                <li>
                                <NavLink to="#" activeClassName="active">Pages</NavLink>
                                <ul className="dropdown">
                                    <li><NavLink to="/aboutUs" activeClassName="active">About Us</NavLink></li>
                                    <li><NavLink to="/product" activeClassName="active">Shop Details</NavLink></li>
                                    <li><NavLink to="/productList" activeClassName="active">Shopping Cart</NavLink></li>
                                    <li><NavLink to="" activeClassName="active">Check Out</NavLink></li>
                                    <li><NavLink to="/cart2" activeClassName="active">Blog Details</NavLink></li>
                                </ul>
                                </li>
                                <li><NavLink to="/blogs" activeClassName="active">Blog</NavLink></li>
                                <li><NavLink to="/contact" activeClassName="active">Contacts</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <div className="header__nav__option">
                            <Link to="/search" className="search-switch" >
                                <img src={search} alt="" />
                                
                            </Link>
                            <Link to="">
                                <img src={heart} alt=""/>

                            </Link>
                            <Link to="/cart">
                                <img src={cart} alt=""/>
                            </Link>
                            <div class="price"></div>
                        </div>
                    </div>
                </div>
                <div className="canvas__open"><AiOutlineMenu /></div>
            </div>
        </div>
        
    );
}

export default memo(Header);