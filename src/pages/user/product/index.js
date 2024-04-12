import { memo } from 'react';
import { Link } from 'react-router-dom';
import Products from '../../../data';
import PriceComponent from 'format_price';

const Product = () =>{
    return (
        <>
            <h1>Trang sản phẩm</h1>
            <ul>
                {
                    Products.map((product) =>(
                        // <li><Link to={`/product/${product.id}`}>{product.name}</Link></li>
                        <li><Link to={`/product/${product.id}`}>{product.name}</Link></li>
                    ))
                }
            </ul>
        </>
    );
};

export default memo(Product);