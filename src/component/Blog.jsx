import { memo } from 'react';
import calender from '../assets/imgs/imgIcon/calendar.png';
import blog_1 from '../assets/imgs/blog/blog-1.jpg';
import blog_2 from '../assets/imgs/blog/blog-2.jpg';
import blog_3 from '../assets/imgs/blog/blog-3.jpg';
import blog_4 from '../assets/imgs/blog/blog-4.jpg';
import blog_5 from '../assets/imgs/blog/blog-5.jpg';
import blog_6 from '../assets/imgs/blog/blog-6.jpg';
import blog_7 from '../assets/imgs/blog/blog-7.jpg';
import blog_8 from '../assets/imgs/blog/blog-8.jpg';
import blog_9 from '../assets/imgs/blog/blog-9.jpg';

const Blog = () =>{
    return (
        <>
            <section class="blog spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="blog__item">
                                <div class="blog__item__pic set-bg" style={{ backgroundImage: `url(${blog_1})` }}></div>
                                <div class="blog__item__text">
                                    <span><img src={calender} alt=""/> 16 February 2020</span>
                                    <h5>What Curling Irons Are The Best Ones</h5>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="blog__item">
                                <div class="blog__item__pic set-bg" style={{ backgroundImage: `url(${blog_2})` }}></div>
                                <div class="blog__item__text">
                                    <span><img src={calender} alt=""/> 21 February 2020</span>
                                    <h5>Eternity Bands Do Last Forever</h5>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="blog__item">
                                <div class="blog__item__pic set-bg" style={{ backgroundImage: `url(${blog_3})` }}></div>
                                <div class="blog__item__text">
                                    <span><img src={calender} alt=""/> 28 February 2020</span>
                                    <h5>The Health Benefits Of Sunglasses</h5>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="blog__item">
                                <div class="blog__item__pic set-bg" style={{ backgroundImage: `url(${blog_4})` }}></div>
                                <div class="blog__item__text">
                                    <span><img src={calender} alt=""/> 16 February 2020</span>
                                    <h5>Aiming For Higher The Mastopexy</h5>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="blog__item">
                                <div class="blog__item__pic set-bg" style={{ backgroundImage: `url(${blog_5})` }}></div>
                                <div class="blog__item__text">
                                    <span><img src={calender} alt=""/> 21 February 2020</span>
                                    <h5>Wedding Rings A Gift For A Lifetime</h5>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="blog__item">
                                <div class="blog__item__pic set-bg" style={{ backgroundImage: `url(${blog_6})` }}></div>
                                <div class="blog__item__text">
                                    <span><img src={calender} alt=""/> 28 February 2020</span>
                                    <h5>The Different Methods Of Hair Removal</h5>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="blog__item">
                                <div class="blog__item__pic set-bg" style={{ backgroundImage: `url(${blog_7})` }}></div>
                                <div class="blog__item__text">
                                    <span><img src={calender} alt=""/> 16 February 2020</span>
                                    <h5>Hoop Earrings A Style From History</h5>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="blog__item">
                                <div class="blog__item__pic set-bg" style={{ backgroundImage: `url(${blog_8})` }}></div>
                                <div class="blog__item__text">
                                    <span><img src={calender} alt=""/> 21 February 2020</span>
                                    <h5>Lasik Eye Surgery Are You Ready</h5>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="blog__item">
                                <div class="blog__item__pic set-bg" style={{ backgroundImage: `url(${blog_9})` }}></div>
                                <div class="blog__item__text">
                                    <span><img src={calender} alt=""/> 28 February 2020</span>
                                    <h5>Lasik Eye Surgery Are You Ready</h5>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default memo(Blog);