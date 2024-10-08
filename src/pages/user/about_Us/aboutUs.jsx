
import BreadCrumb from 'component/BreadCrumb';
import Team_Member from 'component/Team_Member';
import { memo } from 'react';

import client_1 from '../../../assets/imgs/clients/client-1.png';
import client_2 from '../../../assets/imgs/clients/client-2.png';
import client_3 from '../../../assets/imgs/clients/client-3.png';
import client_4 from '../../../assets/imgs/clients/client-4.png';
import client_5 from '../../../assets/imgs/clients/client-5.png';
import client_6 from '../../../assets/imgs/clients/client-6.png';
import client_8 from '../../../assets/imgs/clients/client-8.png';
import client_7 from '../../../assets/imgs/clients/client-7.png';
import about_us from '../../../assets/imgs/about/about-us.jpg';
import testimonial_pic from '../../../assets/imgs/about/testimonial-pic.jpg';
import testimonial_author from '../../../assets/imgs/about/testimonial-pic.jpg';

const AboutUs = () =>{
    return (
        <>
            
            <BreadCrumb title="About Us"/>

            <section class="about spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="about__pic">
                                <img src={about_us} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-6">
                            <div class="about__item">
                                <h4>Who We Are ?</h4>
                                <p>Contextual advertising programs sometimes have strict policies that need to be adhered too.
                                Let’s take Google as an example.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6">
                            <div class="about__item">
                                <h4>Who We Do ?</h4>
                                <p>In this digital generation where information can be easily obtained within seconds, business
                                cards still have retained their importance.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6">
                            <div class="about__item">
                                <h4>Why Choose Us</h4>
                                <p>A two or three storey house is the ideal way to maximise the piece of earth on which our home
                                sits, but for older or infirm people.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="testimonial">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-6 p-0">
                            <div class="testimonial__text">
                                <span class="icon_quotations"></span>
                                <p>“Going out after work? Take your butane curling iron with you to the office, heat it up,
                                    style your hair before you leave the office and you won’t have to make a trip back home.”
                                </p>
                                <div class="testimonial__author">
                                    <div class="testimonial__author__pic">
                                        <img src={testimonial_author} alt=""/>
                                    </div>
                                    <div class="testimonial__author__text">
                                        <h5>Augusta Schultz</h5>
                                        <p>Fashion Design</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 p-0">
                            <div class="testimonial__pic set-bg" style={{ backgroundImage: `url(${testimonial_pic})` }}></div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="counter spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="counter__item">
                                <div class="counter__item__number">
                                    <h2 class="cn_num">102</h2>
                                </div>
                                <span>Our <br />Clients</span>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="counter__item">
                                <div class="counter__item__number">
                                    <h2 class="cn_num">30</h2>
                                </div>
                                <span>Total <br />Categories</span>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="counter__item">
                                <div class="counter__item__number">
                                    <h2 class="cn_num">102</h2>
                                </div>
                                <span>In <br />Country</span>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="counter__item">
                                <div class="counter__item__number">
                                    <h2 class="cn_num">98</h2>
                                    <strong>%</strong>
                                </div>
                                <span>Happy <br />Customer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Team_Member/>

            <section class="clients spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title">
                                <span>Partner</span>
                                <h2>Happy Clients</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                            <a href="#" class="client__item"><img src={client_1} alt=""/></a>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                            <a href="#" class="client__item"><img src={client_2} alt=""/></a>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                            <a href="#" class="client__item"><img src={client_3} alt=""/></a>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                            <a href="#" class="client__item"><img src={client_4} alt=""/></a>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                            <a href="#" class="client__item"><img src={client_5} alt=""/></a>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                            <a href="#" class="client__item"><img src={client_6} alt=""/></a>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                            <a href="#" class="client__item"><img src={client_7} alt=""/></a>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                            <a href="#" class="client__item"><img src={client_8} alt=""/></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default memo(AboutUs);