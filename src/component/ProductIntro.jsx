import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Link } from "react-router-dom";
import heart from "../assets/imgs/imgIcon/heart.png";
import compare from "../assets/imgs/imgIcon/compare.png";
import search from "../assets/imgs/imgIcon/search.png";
import { BsFillStarFill } from "react-icons/bs";
import PriceComponent from "format_price";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function ProductIntro() {
  const [value, setValue] = useState("1");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products") // Change the URL to your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setProducts(shuffleArray(data)); // Shuffle the products array
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [value]); // Fetch products whenever the value changes (tab changes)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App" >
      
      <div >
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{
                          borderBottom: 1,
                          borderColor: "divider",
                          display: "flex",
                          justifyContent: "center",
                        }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="All Products" value="1" />
                <Tab label="Originals" value="2" />
                <Tab label="SportWear" value="3" />
                <Tab label="TERREX" value="4" />
                <Tab label="SUSTAINABILITY" value="5" />
              </TabList>
            </Box>
            <TabPanel value="1">
                <div className="row">
                  {products.slice(0, 8).map((product) => (
                    <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                      <div class="product__item">
                      <Link to={`/products/${product.id}`}>
                          <div class="product__item__pic set-bg" style={{ backgroundImage: `url(${require('../pages/user/images/products/' + product.image)})` }}>
                              <span class="label">New</span>
                              <ul class="product__hover">
                                  <li><Link to="#"><img src={heart} alt=""/></Link></li>
                                  <li><Link to="#"><img src={compare} alt=""/> <span>Compare</span></Link></li>
                                  <li><Link to="/search"><img src={search} alt=""/></Link></li>
                              </ul>
                          </div>
                          </Link>
                          <div class="product__item__text">
                              <h6>{product.name}</h6>
                              <a href="#" class="add-cart">+ Add To Cart</a>
                              <div class="rating">
                                  <BsFillStarFill/>
                                  <BsFillStarFill/>
                                  <BsFillStarFill/>
                                  <BsFillStarFill/>
                                  <BsFillStarFill/>
                              </div>
                              <h5><PriceComponent price={product.price}/></h5>
                              <div class="product__color__select">
                                  <label for="pc-1">
                                      <input type="radio" id="pc-1"/>
                                  </label>
                                  <label class="active black" for="pc-2">
                                      <input type="radio" id="pc-2"/>
                                  </label>
                                  <label class="grey" for="pc-3">
                                      <input type="radio" id="pc-3"/>
                                  </label>
                              </div>
                          </div>
                      </div>
                  </div>
                  ))}
                </div>
            </TabPanel>
            <TabPanel value="2">
            <div className="row">
                  {products.slice(0, 8).map((product) => (
                    <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                      <div class="product__item">
                        <Link to={`/products/${product.id}`}>
                          <div class="product__item__pic set-bg" style={{ backgroundImage: `url(${require('../pages/user/images/products/' + product.image)})` }}>
                              <span class="label">New</span>
                              <ul class="product__hover">
                                  <li><Link to="#"><img src={heart} alt=""/></Link></li>
                                  <li><Link to="#"><img src={compare} alt=""/> <span>Compare</span></Link></li>
                                  <li><Link to="/search"><img src={search} alt=""/></Link></li>
                              </ul>
                          </div>
                          </Link>
                          <div class="product__item__text">
                              <h6>{product.name}</h6>
                              <a href="#" class="add-cart">+ Add To Cart</a>
                              <div class="rating">
                                  <BsFillStarFill/>
                                  <BsFillStarFill/>
                                  <BsFillStarFill/>
                                  <BsFillStarFill/>
                                  <BsFillStarFill/>

                              </div>
                              <h5><PriceComponent price={product.price}/></h5>
                              <div class="product__color__select">
                                  <label for="pc-1">
                                      <input type="radio" id="pc-1"/>
                                  </label>
                                  <label class="active black" for="pc-2">
                                      <input type="radio" id="pc-2"/>
                                  </label>
                                  <label class="grey" for="pc-3">
                                      <input type="radio" id="pc-3"/>
                                  </label>
                              </div>
                          </div>
                      </div>
                  </div>
                  ))}
                </div>
            </TabPanel>
            <TabPanel value="3">
            <div className="row">
                  {products.slice(0, 8).map((product) => (
                    <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                      <div class="product__item">
                      <Link to={`/products/${product.id}`}>
                          <div class="product__item__pic set-bg" style={{ backgroundImage: `url(${require('../pages/user/images/products/' + product.image)})` }}>
                              <span class="label">New</span>
                              <ul class="product__hover">
                                  <li><Link to="#"><img src={heart} alt=""/></Link></li>
                                  <li><Link to="#"><img src={compare} alt=""/> <span>Compare</span></Link></li>
                                  <li><Link to="/search"><img src={search} alt=""/></Link></li>
                              </ul>
                          </div>
                          </Link>
                          <div class="product__item__text">
                              <h6>{product.name}</h6>
                              <a href="#" class="add-cart">+ Add To Cart</a>
                              <div class="rating">
                                <BsFillStarFill/>
                                <BsFillStarFill/>
                                <BsFillStarFill/>
                                <BsFillStarFill/>
                                <BsFillStarFill/>
                                  
                              </div>
                              <h5><PriceComponent price={product.price}/></h5>
                              <div class="product__color__select">
                                  <label for="pc-1">
                                      <input type="radio" id="pc-1"/>
                                  </label>
                                  <label class="active black" for="pc-2">
                                      <input type="radio" id="pc-2"/>
                                  </label>
                                  <label class="grey" for="pc-3">
                                      <input type="radio" id="pc-3"/>
                                  </label>
                              </div>
                          </div>
                      </div>
                  </div>
                  ))}
                </div>
            </TabPanel>
            <TabPanel value="4">
            <div className="row">
                  {products.slice(0, 8).map((product) => (
                    <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                      <div class="product__item">
                      <Link to={`/products/${product.id}`}>
                          <div class="product__item__pic set-bg" style={{ backgroundImage: `url(${require('../pages/user/images/products/' + product.image)})` }}>
                              <span class="label">New</span>
                              <ul class="product__hover">
                                  <li><Link to="#"><img src={heart} alt=""/></Link></li>
                                  <li><Link to="#"><img src={compare} alt=""/> <span>Compare</span></Link></li>
                                  <li><Link to="/search"><img src={search} alt=""/></Link></li>
                              </ul>
                          </div>
                          </Link>
                          <div class="product__item__text">
                              <h6>{product.name}</h6>
                              <a href="#" class="add-cart">+ Add To Cart</a>
                              <div class="rating">
                                <BsFillStarFill/>
                                <BsFillStarFill/>
                                <BsFillStarFill/>
                                <BsFillStarFill/>
                                <BsFillStarFill/>
                                  
                              </div>
                              <h5><PriceComponent price={product.price}/></h5>
                              <div class="product__color__select">
                                  <label for="pc-1">
                                      <input type="radio" id="pc-1"/>
                                  </label>
                                  <label class="active black" for="pc-2">
                                      <input type="radio" id="pc-2"/>
                                  </label>
                                  <label class="grey" for="pc-3">
                                      <input type="radio" id="pc-3"/>
                                  </label>
                              </div>
                          </div>
                      </div>
                  </div>
                  ))}
                </div>
            </TabPanel>
            <TabPanel value="5">
            <div className="row">
                  {products.slice(0, 8).map((product) => (
                    <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                      <div class="product__item">
                      <Link to={`/products/${product.id}`}>
                          <div class="product__item__pic set-bg" style={{ backgroundImage: `url(${require('../pages/user/images/products/' + product.image)})` }}>
                              <span class="label">New</span>
                              <ul class="product__hover">
                                  <li><Link to="#"><img src={heart} alt=""/></Link></li>
                                  <li><Link to="#"><img src={compare} alt=""/> <span>Compare</span></Link></li>
                                  <li><Link to="/search"><img src={search} alt=""/></Link></li>
                              </ul>
                          </div>
                          </Link>
                          <div class="product__item__text">
                              <h6>{product.name}</h6>
                              <a href="#" class="add-cart">+ Add To Cart</a>
                              <div class="rating">
                                <BsFillStarFill/>
                                <BsFillStarFill/>
                                <BsFillStarFill/>
                                <BsFillStarFill/>
                                <BsFillStarFill/>
                                  
                              </div>
                              <h5><PriceComponent price={product.price}/></h5>
                              <div class="product__color__select">
                                  <label for="pc-1">
                                      <input type="radio" id="pc-1"/>
                                  </label>
                                  <label class="active black" for="pc-2">
                                      <input type="radio" id="pc-2"/>
                                  </label>
                                  <label class="grey" for="pc-3">
                                      <input type="radio" id="pc-3"/>
                                  </label>
                              </div>
                          </div>
                      </div>
                  </div>
                  ))}
                </div>
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
}

export default ProductIntro;
