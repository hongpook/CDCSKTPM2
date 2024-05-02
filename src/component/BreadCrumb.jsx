import { memo } from 'react';
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const BreadCrumb_aboutUs = ({title}) =>{
    return (
        <>
            <section class="breadcrumb-option">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb__text">
                                <h4>{title}</h4>
                                <div class="breadcrumb__links">
                                    <Link to="/">Home</Link>
                                    <AiOutlineRight />
                                    <span>{title}</span>
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