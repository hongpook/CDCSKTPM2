import { memo } from 'react';
import { AiOutlineRight, AiOutlineSearch } from "react-icons/ai";

const BreadCrumb_aboutUs = () =>{
    return (
        <>
            <section class="breadcrumb-option">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb__text">
                                <h4>About Us</h4>
                                <div class="breadcrumb__links">
                                    <a href="">Home</a>
                                    <AiOutlineRight />
                                    <span>About Us</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default memo(BreadCrumb_aboutUs);