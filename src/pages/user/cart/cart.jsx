import React from "react";
import BreadCrumb from "component/BreadCrumb";
import { Link } from "react-router-dom";
import { BsArrowRepeat } from "react-icons/bs";
import './style.scss';
import PriceComponent from "format_price";
import { useSelector, useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeCart } from '../../../redux/slice/cartItem';

const Cart = () => {
    const productCart = useSelector((state) => state.cart.CartArr)
    const dispatch = useDispatch()

    const handleIncrease = (id) => {
        dispatch(increaseQuantity({ id }))
    }

    const handleDecrease = (id) => {
        dispatch(decreaseQuantity({ id }))
    }

    const handleremoveCart = (id) => {
        dispatch(removeCart({ id }))
    }

    const totalPrice = productCart.reduce((total, product) => total + (product.price * product.quantity), 0)

    return (
        <>
            <BreadCrumb title="Shopping Cart" />
            <section className="shopping-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            {
                                productCart.length === 0 ? (
                                    <div className="empty-cart">
                                        <h2>Your cart is currently empty</h2>
                                        <Link to="/shop" className="primary-btn">Return to shop</Link>
                                    </div>
                                ) : (
                                    <div className="shopping__cart__table">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Name</th>
                                                    <th>Quantity</th>
                                                    <th>Total</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    productCart.map(product => (
                                                        <tr key={product.id}>
                                                            <td className="product__cart__item">
                                                                <div className="product__cart__item__pic">
                                                                    <img className="imgCart" src={require('../images/products/' + product.image)} alt="" />
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <h6>{product.name}</h6>
                                                            </td>
                                                            <td className="quantity__item">
                                                                <div className="quantity">
                                                                    <div className="pro-qty-2">
                                                                        <button onClick={() => handleIncrease(product.id)}>+</button>
                                                                        <input type="text" value={product.quantity} readOnly />
                                                                        <button onClick={() => handleDecrease(product.id)}>-</button>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="cart__price"><PriceComponent price={product.price * product.quantity} /></td>
                                                            <td className="cart__close">
                                                                <button onClick={() => handleremoveCart(product.id)}>Xóa</button>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                )
                            }
                            {
                                productCart.length > 0 && (
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="continue__btn">
                                                <Link to="/shop">Continue Shopping</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="continue__btn update__btn">
                                                <Link to="/"><BsArrowRepeat /> Update cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div className="col-lg-4">
                            {
                                productCart.length > 0 && (
                                    <>
                                        <div className="cart__discount">
                                            <h6>Discount codes</h6>
                                            <form action="#">
                                                <input type="text" placeholder="Coupon code" />
                                                <button type="submit">Apply</button>
                                            </form>
                                        </div>
                                        <div className="cart__total">
                                            <h6>Cart total</h6>
                                            <ul>
                                                <li>Subtotal <span><PriceComponent price={totalPrice} /></span></li>
                                                <li>Total <span><PriceComponent price={totalPrice} /></span></li>
                                            </ul>
                                            <Link to='/checkOut' className="primary-btn">Proceed to checkout</Link>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart;
