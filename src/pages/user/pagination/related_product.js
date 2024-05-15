import React, { Component } from "react";
import { Link } from "react-router-dom";
import Heart from "../../../assets/imgs/imgIcon/heart.png";
import Compare from "../../../assets/imgs/imgIcon/compare.png";
import Search from "../../../assets/imgs/imgIcon/search.png";
import PriceComponent from "../../../format_price";
import "bootstrap/dist/css/bootstrap.css";
import { AiFillStar } from "react-icons/ai";

class TableItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      newsPerPage: 5,
    };
  }

  render() {
    const { data } = this.props;
    return (
      <div
        class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix"
        key={data.id}
      >
        <div class="product__item sale">
          <Link to={`/products/${data.id}`}>
            <div
              class="product__item__pic set-bg"
              style={{
                backgroundImage: `url(${require("../images/products/" +
                  data.image)})`,
              }}
            >
              <span class="label">{data.sale}</span>
              <ul class="product__hover">
                <li>
                  <Link to="/">
                    <img src={Heart} alt="" />
                  </Link>
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
            <h6>{data.name}</h6>
            <a href="#" class="add-cart">
              + Add To Cart{" "}
            </a>
            <div class="rating">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <h5>
              <PriceComponent price={data.price} />
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
    );
  }
}
export default TableItem;
