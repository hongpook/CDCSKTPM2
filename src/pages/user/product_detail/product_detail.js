import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { AiOutlineRight, AiOutlineRetweet } from "react-icons/ai";
import { BsFillStarFill, BsFillHeartFill } from "react-icons/bs";
import PriceComponent from "format_price";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CutContentCommponent from "component/cutContent";
import Pagination from "component/Pagination_relatedProduct";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  const [activeTabImg, setActiveTabImg] = useState("tabs-1");

  const handleTabClickImg = (tabIdImg) => {
    setActiveTabImg(tabIdImg);
  };
  // handle tabs
  const [activeTab, setActiveTab] = useState("tabs-5");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      {product ? (
        <>
          <section class="shop-details">
            <div class="product__details__pic">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="product__details__breadcrumb">
                      <Link to="/">Home</Link>
                      <AiOutlineRight />
                      <Link to="/shop">Shop</Link>
                      <AiOutlineRight />
                      <span>Product Details</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-3">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                        <a
                          className={`nav-link ${
                            activeTabImg === "tabs-1" ? "active" : ""
                          }`}
                          onClick={() => handleTabClickImg("tabs-1")}
                          role="tab"
                        >
                          <div
                            className="product__thumb__pic set-bg"
                            style={{
                              backgroundImage: `url(${require("../images/products/" +
                                product.image)})`,
                            }}
                          ></div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${
                            activeTabImg === "tabs-2" ? "active" : ""
                          }`}
                          onClick={() => handleTabClickImg("tabs-2")}
                          role="tab"
                        >
                          <div
                            className="product__thumb__pic set-bg"
                            style={{
                              backgroundImage: `url(${require("../images/products/" +
                                product.imgdetail_1)})`,
                            }}
                          ></div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${
                            activeTabImg === "tabs-3" ? "active" : ""
                          }`}
                          onClick={() => handleTabClickImg("tabs-3")}
                          role="tab"
                        >
                          <div
                            className="product__thumb__pic set-bg"
                            style={{
                              backgroundImage: `url(${require("../images/products/" +
                                product.imgdetail_2)})`,
                            }}
                          ></div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${
                            activeTabImg === "tabs-4" ? "active" : ""
                          }`}
                          onClick={() => handleTabClickImg("tabs-4")}
                          role="tab"
                        >
                          <div
                            className="product__thumb__pic set-bg"
                            style={{
                              backgroundImage: `url(${require("../images/products/" +
                                product.imgdetail_3)})`,
                            }}
                          >
                            <i className="fa fa-play"></i>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-md-9">
                    <div className="tab-content">
                      <div
                        className={`tab-pane ${
                          activeTabImg === "tabs-1" ? "active" : ""
                        }`}
                        id="tabs-1"
                        role="tabpanel"
                      >
                        <div className="product__details__pic__item">
                          <img
                            src={require("../images/products/" + product.image)}
                            alt=""
                          />
                        </div>
                      </div>
                      <div
                        className={`tab-pane ${
                          activeTabImg === "tabs-2" ? "active" : ""
                        }`}
                        id="tabs-2"
                        role="tabpanel"
                      >
                        <div className="product__details__pic__item">
                          <img
                            src={require("../images/products/" +
                              product.imgdetail_1)}
                            alt=""
                          />
                        </div>
                      </div>
                      <div
                        className={`tab-pane ${
                          activeTabImg === "tabs-3" ? "active" : ""
                        }`}
                        id="tabs-3"
                        role="tabpanel"
                      >
                        <div className="product__details__pic__item">
                          <img
                            src={require("../images/products/" +
                              product.imgdetail_2)}
                            alt=""
                          />
                        </div>
                      </div>
                      <div
                        className={`tab-pane ${
                          activeTabImg === "tabs-4" ? "active" : ""
                        }`}
                        id="tabs-4"
                        role="tabpanel"
                      >
                        <div className="product__details__pic__item">
                          <img
                            src={require("../images/products/" +
                              product.imgdetail_3)}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="product__details__content">
              <div class="container">
                <div class="row d-flex justify-content-center">
                  <div class="col-lg-8">
                    <div class="product__details__text">
                      <h4>{product.name}</h4>
                      <div class="rating">
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <span> - 5 Reviews</span>
                      </div>
                      <h3>
                        <PriceComponent price={product.price} />
                      </h3>
                      <div class="product__details__option">
                        <div class="product__details__option__size">
                          <span>Size:</span>
                          <label for="xxl">
                            xxl
                            <input type="radio" id="xxl" />
                          </label>
                          <label class="active" for="xl">
                            xl
                            <input type="radio" id="xl" />
                          </label>
                          <label for="l">
                            l
                            <input type="radio" id="l" />
                          </label>
                          <label for="sm">
                            s
                            <input type="radio" id="sm" />
                          </label>
                        </div>
                        <div class="product__details__option__color">
                          <span>Color:</span>
                          <label class="c-1" for="sp-1">
                            <input type="radio" id="sp-1" />
                          </label>
                          <label class="c-2" for="sp-2">
                            <input type="radio" id="sp-2" />
                          </label>
                          <label class="c-3" for="sp-3">
                            <input type="radio" id="sp-3" />
                          </label>
                          <label class="c-4" for="sp-4">
                            <input type="radio" id="sp-4" />
                          </label>
                          <label class="c-9" for="sp-9">
                            <input type="radio" id="sp-9" />
                          </label>
                        </div>
                      </div>
                      <div class="product__details__cart__option">
                        <div class="quantity">
                          <div class="pro-qty">
                            <input type="text" value="1" />
                          </div>
                        </div>
                        <a href="#" class="primary-btn">
                          add to cart
                        </a>
                      </div>
                      <div class="product__details__btns__option">
                        <a href="#">
                          <BsFillHeartFill /> add to wishlist
                        </a>
                        <a href="#">
                          <AiOutlineRetweet /> Add To Compare
                        </a>
                      </div>
                      <div class="product__details__last__option">
                        <h5>
                          <span>Guaranteed Safe Checkout</span>
                        </h5>
                        <img
                          src="img/shop-details/details-payment.png"
                          alt=""
                        />
                        <ul>
                          <li>
                            <span>SKU:</span> {product.sku}
                          </li>
                          <li>
                            <span>Categories:</span> {product.category}
                          </li>
                          <li>
                            <span>Tag:</span> {product.tags}{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Tabs content */}
                <div className="row">
                  <div className="col-lg-12">
                    <Box className="product__details__tab">
                      <Box
                        sx={{
                          borderBottom: 1,
                          borderColor: "divider",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Tabs
                          value={activeTab}
                          onChange={(event, newValue) =>
                            handleTabClick(newValue)
                          }
                          aria-label="product tabs"
                        >
                          <Tab
                            label="Description"
                            value="tabs-5"
                            sx={{ minWidth: "unset", textAlign: "center" }}
                          />
                          <Tab
                            label="Additional information"
                            value="tabs-6"
                            sx={{ minWidth: "unset", textAlign: "center" }}
                          />
                        </Tabs>
                      </Box>
                      <Box className="tab-content">
                        <Box
                          role="tabpanel"
                          hidden={activeTab !== "tabs-5"}
                          id="tabs-5"
                        >
                          <Box className="product__details__tab__content">
                            <Box className="product__details__tab__content__item">
                              <Box className="row">
                                <Box className="col-6">
                                  <h5>{product.name}</h5>
                                  <p>{product.descriptions}</p>
                                </Box>
                                <Box className="col-6">
                                  <img
                                    src={require("../images/products/" +
                                      product.image)}
                                    alt=""
                                  />
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        <Box
                          role="tabpanel"
                          hidden={activeTab !== "tabs-6"}
                          id="tabs-6"
                        >
                          <Box className="product__details__tab__content">
                            <Box className="product__details__tab__content__item">
                              <p><b>Chi tiết sản phẩm: </b><CutContentCommponent
                                paragraph={product.product_info}
                              /></p>
                              <p>
                                <b>Màu:</b> {product.color}{" "}
                              </p>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pelated products */}
          <section class="related spad">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <h3 class="related-title">Related Product</h3>
                  <Pagination/>
                </div>
              </div>
              <div class="row"></div>
            </div>
          </section>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductDetail;
