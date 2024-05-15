import { memo } from 'react';
import Map from '../../../component/Map';

const Contact = () =>{
    return (
        <>
            <Map/>

            <section class="contact spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="contact__text">
                                <div class="section-title">
                                    <span>Information</span>
                                    <h2>Contact Us</h2>
                                    <p>As you might expect of a company that started out as a high-end fashion house, we pay close attention.</p>
                                </div>
                                <ul>
                                    <li>
                                        <h4>Viet Nam</h4>
                                        <p>12 Đ. Phan Văn Trị, Phường 7, Gò Vấp, Thành phố Hồ Chí Minh <br />+83 39-442-1371</p>
                                    </li>
                                    <li>
                                        <h4>Malaysia</h4>
                                        <p>Lot 155, First Floor, Suria KLCC, 50088, Kuala Lumpur, Malaysia. <br />+60 03-22018048</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="contact__form">
                                <form action="#">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <input type="text" placeholder="Name"/>
                                        </div>
                                        <div class="col-lg-6">
                                            <input type="text" placeholder="Email"/>
                                        </div>
                                        <div class="col-lg-12">
                                            <textarea placeholder="Message"></textarea>
                                            <button type="submit" class="site-btn">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default memo(Contact);