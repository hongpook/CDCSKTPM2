import { memo } from "react";
import "../home/style.scss";
import ProductIntro from "component/ProductIntro";
import { Link } from "react-router-dom";
import BlogIntro from "component/BlogIntro";

import banner_1 from "../../../assets/imgs/banner/banner-1.jpg";
import banner_2 from "../../../assets/imgs/banner/banner-2.jpg";
import banner_3 from "../../../assets/imgs/banner/banner-3.jpg";

import instagram_1 from "../../../assets/imgs/instagram/instagram-1.jpg";
import instagram_2 from "../../../assets/imgs/instagram/instagram-2.jpg";
import instagram_3 from "../../../assets/imgs/instagram/instagram-3.jpg";
import instagram_4 from "../../../assets/imgs/instagram/instagram-4.jpg";
import instagram_5 from "../../../assets/imgs/instagram/instagram-5.jpg";
import instagram_6 from "../../../assets/imgs/instagram/instagram-6.jpg";

import Slide from "component/Slide";

const home = () => {
  return (
    <>
      <Slide />

      <section class="banner spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 offset-lg-4">
              <div class="banner__item">
                <div class="banner__item__pic">
                  <img src={banner_1} alt="" />
                </div>
                <div class="banner__item__text">
                  <h2>Clothing Collections 2030</h2>
                  <Link to="/shop">Shop now</Link>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="banner__item banner__item--middle">
                <div class="banner__item__pic">
                  <img src={banner_2} alt="" />
                </div>
                <div class="banner__item__text">
                  <h2>Accessories</h2>
                  <Link to="/shop">Shop now</Link>
                </div>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="banner__item banner__item--last">
                <div class="banner__item__pic">
                  <img src={banner_3} alt="" />
                </div>
                <div class="banner__item__text">
                  <h2>Shoes Spring 2030</h2>
                  <Link to="/shop">Shop now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="product spad">
        <div class="container">
          <ProductIntro />
        </div>
      </section>

      <section class="categories spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="categories__text">
                <h2>
                  Clothings Hot <br /> <span>Shoe Collection</span> <br />{" "}
                  Accessories
                </h2>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="categories__hot__deal">
                <img
                  src={require("../images/products/Giay_Samba_OG_Navy.jpg")}
                  alt=""
                />
                <div class="hot__deal__sticker">
                  <span>Sale Of</span>
                  <h5>$29.99</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-4 offset-lg-1">
              <div class="categories__deal__countdown">
                <span>Deal Of The Week</span>
                <h2>Multi-pocket Chest Bag Black</h2>
                <div class="categories__deal__countdown__timer" id="countdown">
                  <div class="cd-item">
                    <span>3</span>
                    <p>Days</p>
                  </div>
                  <div class="cd-item">
                    <span>1</span>
                    <p>Hours</p>
                  </div>
                  <div class="cd-item">
                    <span>50</span>
                    <p>Minutes</p>
                  </div>
                  <div class="cd-item">
                    <span>18</span>
                    <p>Seconds</p>
                  </div>
                </div>
                <Link to="/shop" class="primary-btn">
                  Shop now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="instagram spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="instagram__pic">
                <div
                  class="instagram__pic__item set-bg"
                  style={{ backgroundImage: `url(${instagram_1})` }}
                ></div>
                <div
                  class="instagram__pic__item set-bg"
                  style={{ backgroundImage: `url(${instagram_2})` }}
                ></div>
                <div
                  class="instagram__pic__item set-bg"
                  style={{ backgroundImage: `url(${instagram_3})` }}
                ></div>
                <div
                  class="instagram__pic__item set-bg"
                  style={{ backgroundImage: `url(${instagram_4})` }}
                ></div>
                <div
                  class="instagram__pic__item set-bg"
                  style={{ backgroundImage: `url(${instagram_5})` }}
                ></div>
                <div
                  class="instagram__pic__item set-bg"
                  style={{ backgroundImage: `url(${instagram_6})` }}
                ></div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="instagram__text">
                <h2>Instagram</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <h3>#Adidas_Vietnam</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="latest spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title">
                <span>Latest News</span>
                <h2>Fashion New Trends</h2>
              </div>
            </div>
          </div>
          <BlogIntro />
        </div>
      </section>
    </>
  );
};

export default memo(home);
