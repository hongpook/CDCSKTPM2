import { memo } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineRight, AiOutlineSearch } from "react-icons/ai";
import Accordion from 'react-bootstrap/Accordion';
import BreadCrumb from 'component/BreadCrumb_option';
import BreadCrumb_option from 'component/BreadCrumb_option';
import Products from 'data';
import Heart from '../../../assets/imgs/imgIcon/heart.png';
import Compare from '../../../assets/imgs/imgIcon/compare.png';
import Search from '../../../assets/imgs/imgIcon/search.png';


import PriceComponent from '../../../format_price';

const Shop = () =>{
    const Categories = [
        {
            name: 'Men',
        },
        {
            name: 'Woman',
        },
        {
            name: 'Bag',
        },
        {
            name: 'Clothing',
        },
        {
            name: 'Shoes',
        },
        {
            name: 'Accessories',
        },
        {
            name: 'Kid',
        },
    ];

    const Branding = [
        {
            name: 'Louis Vuitton',
        },
        {
            name: 'Chanel',
        },
        {
            name: 'Hermes',
        },
        {
            name: 'Gucci',
        }
    ];

    const Filter_Price = [
        {
            name: '$0 - $50',
        },
        {
            name: '$50 - $100',
        },
        {
            name: '$100 - $150',
        },
        {
            name: '$150 - $250',
        },
        {
            name: '$250+',
        },
    ];

    const Sizes = [
        {
            name: 'S',
        },
        {
            name: 'M',
        },
        {
            name: 'L',
        },
        {
            name: 'XL',
        },
        {
            name: '2XL',
        },
        {
            name: '3XL',
        },
    ];

    const Colors = [
        {
            name: '',
        },
        {
            name: '',
        },
        {
            name: '',
        },
        {
            name: '',
        },
        {
            name: '',
        },
        {
            name: '',
        },
    ];

    const Tags = [
        {
            name: 'Product',
        },
        {
            name: 'Bags',
        },
        {
            name: 'Shoes',
        },
        {
            name: 'Fashion',
        },
        {
            name: 'Clothing',
        },
        {
            name: 'Hats',
        },
        {
            name: 'Accessories',
        },
    ]

    return (
        
        <>
            <BreadCrumb_option/>

            <section class="shop spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="shop__sidebar">
                                <div class="shop__sidebar__search">
                                    <form action="#">
                                        <input type="text" placeholder="Search..."/>
                                        <button type="submit"><span class="icon_search"><AiOutlineSearch /></span></button>
                                    </form>
                                </div>
                                <div class="shop__sidebar__accordion">
                                    <div class="accordion" id="accordionExample">
                                        <Accordion defaultActiveKey="0">
                                            <div className='card'>

                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>Categories</Accordion.Header>
                                                    <Accordion.Body>
                                                        <ul class="nice-scroll">
                                                            {
                                                                Categories.map((item) =>(
                                                                    <li><a href="#">{ item.name}</a></li>
                                                                ))
                                                            }
                                                            
                                                        </ul>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </div>
                                            <div className='card'>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header>Branding</Accordion.Header>
                                                    <Accordion.Body>
                                                        <ul>
                                                            {
                                                                Branding.map((branch) => (
                                                                    <li><a href="#">{ branch.name}</a></li>
                                                                ))
                                                            }
                                                            
                                                        </ul>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </div>
                                            <div className='card'>
                                                <Accordion.Item eventKey="2">
                                                    <Accordion.Header>Filter Price</Accordion.Header>
                                                    <Accordion.Body>
                                                        <ul>
                                                            {
                                                                Filter_Price.map((price) => (
                                                                    <li><a href="#"> { price.name} </a></li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </div>
                                            <div className='card'>
                                                <Accordion.Item eventKey="3">
                                                    <Accordion.Header>Size</Accordion.Header>
                                                    <Accordion.Body>
                                                        <div class="card-body">
                                                            <div class="shop__sidebar__size">
                                                                {
                                                                    Sizes.map((size)=>(
                                                                        <label for={size.name}>{size.name}
                                                                            <input type="radio" id={size.name}/>
                                                                        </label>
                                                                    ))
                                                                }
                                                                
                                                            </div>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </div>
                                            <div className='card'>
                                                <Accordion.Item eventKey="4">
                                                    <Accordion.Header>Tags</Accordion.Header>
                                                    <Accordion.Body>
                                                            {
                                                                Tags.map((tag) => (
                                                                    <li><a href="#"> { tag.name} </a></li>
                                                                ))
                                                            }
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </div>
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-9">
                            <div class="shop__product__option">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="shop__product__option__left">
                                            <p>Showing 1–12 of 126 results</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="shop__product__option__right">
                                            <p>Sort by Price:</p>
                                            <select>
                                                <option value="">Low To High</option>
                                                <option value="">$0 - $55</option>
                                                <option value="">$55 - $100</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                {
                                    Products.map((itemProduct, index) =>(
                                        <div class="col-lg-4 col-md-6 col-sm-6" key = {itemProduct.id}>
                                            <div class="product__item sale">
                                                <div class="product__item__pic set-bg" style={{ backgroundImage: `url(${itemProduct.image})` }}>
                                                    <span class="label">{itemProduct.sale}</span>
                                                    <ul class="product__hover">
                                                        <li><a href="#"><img src={Heart} alt=""/></a></li>
                                                        <li><a href="#"><img src={Compare} alt=""/> <span>Compare</span></a></li>
                                                        <li><a href="#"><img src={Search} alt=""/></a></li>
                                                    </ul>
                                                </div>
                                                <div class="product__item__text">
                                                    <h6>{itemProduct.name}</h6>
                                                    <a href="#" class="add-cart">+ Add To Cart <Link to={`/shop/${itemProduct.id}`}><PriceComponent price={itemProduct.price} /></Link></a>
                                                    <div class="rating">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                    <h5><PriceComponent price={itemProduct.price} /></h5>
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
                                    ))
                                }
                                
                                
                                
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="product__pagination">
                                        <a class="active" href="#">1</a>
                                        <a href="#">2</a>
                                        <a href="#">3</a>
                                        <span>...</span>
                                        <a href="#">21</a>
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

export default memo(Shop);