import { useParams } from 'react-router-dom';
import products from '../../../data';
import PriceComponent from 'format_price';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsChevronRight, BsFillHeartFill, BsRepeat } from "react-icons/bs";


const ProductDetail = () => {
  const { id } = useParams();
  
  // Lấy thông tin chi tiết sản phẩm từ ID
  const product = products.find(item => item.id === parseInt(id));

  // Lưu trữ danh sách ảnh để hiển thị
  const [images, setImages] = useState([product.image, ...product.collection_img.map(img => img.url_img)]);

  // State để lưu trữ hình ảnh đang được chọn
  const [selectedImage, setSelectedImage] = useState(product.image);

  // Hàm xử lý khi người dùng chọn một hình ảnh từ các tab
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <>
        <section class="shop-details">
            <div class="product__details__pic">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="product__details__breadcrumb">
                                <Link to='/'>Home</Link>
                                <BsChevronRight />
                                <Link to='/shop'>Shop</Link>
                                <BsChevronRight />
                                <span>Product Details</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <ul className="nav nav-tabs" role="tablist">
                            {images.map((img, index) => (
                                <li className="nav-item" key={index}>
                                <a
                                    className={`nav-link ${img === selectedImage ? 'active' : ''}`}
                                    data-toggle="tab"
                                    href={`#tabs-${index + 1}`}
                                    role="tab"
                                    onClick={() => handleImageClick(img)}
                                >
                                    <div
                                    className="product__thumb__pic set-bg"
                                    style={{ backgroundImage: `url(${img})` }}
                                    ></div>
                                </a>
                                </li>
                            ))}
                            </ul>
                        </div>
                        <div className="col-lg-6 col-md-9">
                            <div className="tab-content">
                            {images.map((img, index) => (
                                <div
                                className={`tab-pane ${img === selectedImage ? 'active' : ''}`}
                                id={`tabs-${index + 1}`}
                                role="tabpanel"
                                key={index}
                                >
                                <div className="product__details__pic__item">
                                    <img src={img} alt={`Image ${index + 1}`} />
                                </div>
                                </div>
                            ))}
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
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-o"></i>
                                    <span> - 5 Reviews</span>
                                </div>
                                <h3><PriceComponent price={product.price} /></h3>
                                <p>Coat with quilted lining and an adjustable hood. Featuring long sleeves with adjustable
                                    cuff tabs, adjustable asymmetric hem with elastic side tabs and a front zip fastening
                                with placket.</p>
                                <div class="product__details__option">
                                    <div class="product__details__option__size">
                                        <span>Size:</span>
                                        <label for="xxl">xxl
                                            <input type="radio" id="xxl"/>
                                        </label>
                                        <label class="active" for="xl">xl
                                            <input type="radio" id="xl"/>
                                        </label>
                                        <label for="l">l
                                            <input type="radio" id="l"/>
                                        </label>
                                        <label for="sm">s
                                            <input type="radio" id="sm"/>
                                        </label>
                                    </div>
                                    <div class="product__details__option__color">
                                        <span>Color:</span>
                                        <label class="c-1" for="sp-1">
                                            <input type="radio" id="sp-1"/>
                                        </label>
                                        <label class="c-2" for="sp-2">
                                            <input type="radio" id="sp-2"/>
                                        </label>
                                        <label class="c-3" for="sp-3">
                                            <input type="radio" id="sp-3"/>
                                        </label>
                                        <label class="c-4" for="sp-4">
                                            <input type="radio" id="sp-4"/>
                                        </label>
                                        <label class="c-9" for="sp-9">
                                            <input type="radio" id="sp-9"/>
                                        </label>
                                    </div>
                                </div>
                                <div class="product__details__cart__option">
                                    <div class="quantity">
                                        <div class="pro-qty">
                                            <input type="text" value="1"/>
                                        </div>
                                    </div>
                                    <a href="#" class="primary-btn">add to cart</a>
                                </div>
                                <div class="product__details__btns__option">
                                    <Link to=""><BsFillHeartFill /> add to wishlist</Link>
                                    <Link to=""><BsRepeat /> Add To Compare</Link>
                                </div>
                                <div class="product__details__last__option">
                                    <h5><span>Guaranteed Safe Checkout</span></h5>
                                    <img src="img/shop-details/details-payment.png" alt=""/>
                                    <ul>
                                        <li><span>SKU:</span> {product.sku}</li>
                                        <li><span>Categories:</span> {product.category}</li>
                                        <li><span>Tag:</span> {product.tags}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="related spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h3 class="related-title">Related Product</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                    <div class="product__item">
                        <div class="product__item__pic set-bg" data-setbg="img/product/product-1.jpg">
                            <span class="label">New</span>
                            <ul class="product__hover">
                                <li><a href="#"><img src="img/icon/heart.png" alt=""/></a></li>
                                <li><a href="#"><img src="img/icon/compare.png" alt=""/> <span>Compare</span></a></li>
                                <li><a href="#"><img src="img/icon/search.png" alt=""/></a></li>
                            </ul>
                        </div>
                        <div class="product__item__text">
                            <h6>Piqué Biker Jacket</h6>
                            <a href="#" class="add-cart">+ Add To Cart</a>
                            <div class="rating">
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <h5>$67.24</h5>
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
                <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                    <div class="product__item">
                        <div class="product__item__pic set-bg" data-setbg="img/product/product-2.jpg">
                            <ul class="product__hover">
                                <li><a href="#"><img src="img/icon/heart.png" alt=""/></a></li>
                                <li><a href="#"><img src="img/icon/compare.png" alt=""/> <span>Compare</span></a></li>
                                <li><a href="#"><img src="img/icon/search.png" alt=""/></a></li>
                            </ul>
                        </div>
                        <div class="product__item__text">
                            <h6>Piqué Biker Jacket</h6>
                            <a href="#" class="add-cart">+ Add To Cart</a>
                            <div class="rating">
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <h5>$67.24</h5>
                            <div class="product__color__select">
                                <label for="pc-4">
                                    <input type="radio" id="pc-4"/>
                                </label>
                                <label class="active black" for="pc-5">
                                    <input type="radio" id="pc-5"/>
                                </label>
                                <label class="grey" for="pc-6">
                                    <input type="radio" id="pc-6"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                    <div class="product__item sale">
                        <div class="product__item__pic set-bg" data-setbg="img/product/product-3.jpg">
                            <span class="label">Sale</span>
                            <ul class="product__hover">
                                <li><a href="#"><img src="img/icon/heart.png" alt=""/></a></li>
                                <li><a href="#"><img src="img/icon/compare.png" alt=""/> <span>Compare</span></a></li>
                                <li><a href="#"><img src="img/icon/search.png" alt=""/></a></li>
                            </ul>
                        </div>
                        <div class="product__item__text">
                            <h6>Multi-pocket Chest Bag</h6>
                            <a href="#" class="add-cart">+ Add To Cart</a>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <h5>$43.48</h5>
                            <div class="product__color__select">
                                <label for="pc-7">
                                    <input type="radio" id="pc-7"/>
                                </label>
                                <label class="active black" for="pc-8">
                                    <input type="radio" id="pc-8"/>
                                </label>
                                <label class="grey" for="pc-9">
                                    <input type="radio" id="pc-9"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                    <div class="product__item">
                        <div class="product__item__pic set-bg" data-setbg="img/product/product-4.jpg">
                            <ul class="product__hover">
                                <li><a href="#"><img src="img/icon/heart.png" alt=""/></a></li>
                                <li><a href="#"><img src="img/icon/compare.png" alt=""/> <span>Compare</span></a></li>
                                <li><a href="#"><img src="img/icon/search.png" alt=""/></a></li>
                            </ul>
                        </div>
                        <div class="product__item__text">
                            <h6>Diagonal Textured Cap</h6>
                            <a href="#" class="add-cart">+ Add To Cart</a>
                            <div class="rating">
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <h5>$60.9</h5>
                            <div class="product__color__select">
                                <label for="pc-10">
                                    <input type="radio" id="pc-10"/>
                                </label>
                                <label class="active black" for="pc-11">
                                    <input type="radio" id="pc-11"/>
                                </label>
                                <label class="grey" for="pc-12">
                                    <input type="radio" id="pc-12"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </>
    

    
  );
};

export default ProductDetail;