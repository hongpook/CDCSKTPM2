import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Heart from "../../../assets/imgs/imgIcon/heart.png";
import Compare from "../../../assets/imgs/imgIcon/compare.png";
import Search from "../../../assets/imgs/imgIcon/search.png";
import { Link } from "react-router-dom";
import PriceComponent from "../../../format_price";
import BreadCrumb from 'component/BreadCrumb';
import { BsSearch } from "react-icons/bs";

const SearchProduct = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    if (!isSearching) {
      fetchProducts();
    }
  }, [isSearching]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    setIsSearching(true);
    const results = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <BreadCrumb title="Search"/>
      <br/>
      <div className='container'>
        <div>
          <input
            type="text"
            placeholder="Enter product name..."
            value={searchTerm}
            onChange={handleChange}
            className='col-10'
          />
          <button className='col-2' onClick={handleSearch}><BsSearch/></button>

        </div>
        <br/>
        <div className='row'>
          {isSearching
            ? searchResults.map(product => (
              <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix" key={product.id}>
                  <div class="product__item sale">
                      <Link to={`/shop/${product.id}`}>
                      <div
                          class="product__item__pic set-bg"
                          style={{ backgroundImage: `url(${require('../images/products/' + product.image)})` }}
                      >
                          <span class="label">{product.sale}</span>
                          <ul class="product__hover">
                          <li>
                              <a href="#">
                              <img src={Heart} alt="" />
                              </a>
                          </li>
                          <li>
                              <a href="#">
                              <img src={Compare} alt="" /> <span>Compare</span>
                              </a>
                          </li>
                          <li>
                              <a href="#">
                              <img src={Search} alt="" />
                              </a>
                          </li>
                          </ul>
                      </div>
                      </Link>
                      <div class="product__item__text">
                      <h6>{product.name}</h6>
                      <a href="#" class="add-cart">
                          + Add To Cart{" "}
                      </a>
                      <div class="rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star-o"></i>
                      </div>
                      <h5>
                          <PriceComponent price={product.price} />
                      </h5>
                      <div class="product__color__select">
                          <label for="pc-7">
                          <input type="radio" id="pc-7" />
                          </label>
                          <label class="active black" for="pc-8">
                          <input type="radio" id="pc-8" />
                          </label>
                          <label class="grey" for="pc-9">
                          <input type="radio" id="pc-9" />
                          </label>
                      </div>
                      </div>
                  </div>
              </div>
              ))
            : null}
        </div>
      </div>
      <br/>
    </div>
  );
};

export default SearchProduct;
