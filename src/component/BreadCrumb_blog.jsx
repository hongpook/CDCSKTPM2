import { memo } from 'react';
import BreadCrumb_blg from '../assets/imgs/breadcrumb-bg.jpg';

const BreadCrumb_blog = () =>{
    return (
        <>
            <section class="breadcrumb-blog set-bg" style={{ backgroundImage: `url(${BreadCrumb_blg})` }}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h2>Our Blog</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default memo(BreadCrumb_blog);