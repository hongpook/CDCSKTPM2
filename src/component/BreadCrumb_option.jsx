import { memo } from 'react';
import { AiOutlineRight, AiOutlineSearch } from "react-icons/ai";

const BreadCrumb = () =>{
    return (
        <>
            <section class="breadcrumb-option">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb__text">
                                <h4>Shop</h4>
                                <div class="breadcrumb__links">
                                    <a href="">Home</a>
                                    <AiOutlineRight />
                                    <span>Shop</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default memo(BreadCrumb);