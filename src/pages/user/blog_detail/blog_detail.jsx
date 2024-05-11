import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { BsFacebook, BsYoutube, BsTwitter, BsLinkedin, BsFillPersonPlusFill  } from "react-icons/bs";

const BlogDetail = () => {
    const [blog, setBlog] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/blogs/${id}`);
                setBlog(response.data);
            } catch (error) {
                console.error('Error fetching blog:', error);
            }
        };

        fetchBlog();
    }, [id]); // Re-run effect when ID changes

    return (
        <>
            <section className="blog-hero spad">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-9 text-center">
                            <div className="blog__hero__text">
                                <h2>{blog.name}</h2> {/* Assuming title is a property of the blog */}
                                <ul>
                                    <li>By: {blog.author_name}</li> {/* Assuming author is a property of the blog */}
                                    <li>{blog.created_at}</li> {/* Assuming created_at is a property of the blog */}
                                    <li> Comments</li> {/* Assuming comments_count is a property of the blog */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blog-details spad">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-12">
                            <div className="blog__details__pic">
                                {/* <img src={require("../images/blogs/" + blog.image)}  alt={blog.name} />  */}
                                {blog.image && <img src={require('../images/blogs/' + blog.image)} />}
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="blog__details__content">
                                <div class="blog__details__share">
                                    <span>share</span>
                                    <ul>
                                        <li><a href="#"><BsFacebook/></a></li>
                                        <li><a href="#" class="twitter"><BsTwitter /></a></li>
                                        <li><a href="#" class="youtube"><BsYoutube /></a></li>
                                        <li><a href="#" class="linkedin"><BsLinkedin /></a></li>
                                    </ul>
                                </div>
                                <div class="blog__details__text">
                                    <p> {blog.content} </p>
                                </div>
                                <div class="blog__details__quote">
                                    <i class="fa fa-quote-left"></i>
                                    <p>“When designing an advertisement for a particular product many things should be
                                        researched like where it should be displayed.”</p>
                                    <h6>_ John Smith _</h6>
                                </div>
                                <div class="blog__details__text">
                                    <p>Vyo-Serum along with tightening the skin also reduces the fine lines indicating aging of
                                        skin. Problems like dark circles, puffiness, and crow’s feet can be control from the
                                        strong effects of this serum.</p>
                                    <p>Hydroderm is a multi-functional product that helps in reducing the cellulite and giving
                                        the body a toned shape, also helps in cleansing the skin from the root and not letting
                                        the pores clog, nevertheless also let’s sweeps out the wrinkles and all signs of aging
                                        from the sensitive near the eyes.</p>
                                </div>
                                <div class="blog__details__option">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <div class="blog__details__author">
                                                <div class="blog__details__author__pic">
                                                    <BsFillPersonPlusFill />
                                                </div>
                                                <div class="blog__details__author__text">
                                                    <p> {blog.author_name} </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <div class="blog__details__tags">
                                                <a href="#">#Fashion</a>
                                                <a href="#">#Trending</a>
                                                <a href="#">#2020</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="blog__details__btns">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <a href="" class="blog__details__btns__item">
                                                <p><span class="arrow_left"></span> Previous Pod</p>
                                                <h5>It S Classified How To Utilize Free Classified Ad Sites</h5>
                                            </a>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <a href="" class="blog__details__btns__item blog__details__btns__item--next">
                                                <p>Next Pod <span class="arrow_right"></span></p>
                                                <h5>Tips For Choosing The Perfect Gloss For Your Lips</h5>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="blog__details__comment">
                                    <h4>Leave A Comment</h4>
                                    <form action="#">
                                        <div class="row">
                                            <div class="col-lg-4 col-md-4">
                                                <input type="text" placeholder="Name"/>
                                            </div>
                                            <div class="col-lg-4 col-md-4">
                                                <input type="text" placeholder="Email"/>
                                            </div>
                                            <div class="col-lg-4 col-md-4">
                                                <input type="text" placeholder="Phone"/>
                                            </div>
                                            <div class="col-lg-12 text-center">
                                                <textarea placeholder="Comment"></textarea>
                                                <button type="submit" class="site-btn">Post Comment</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Other sections */}
        </>
    );
}

export default BlogDetail;
