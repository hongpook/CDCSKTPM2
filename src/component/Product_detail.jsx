import React from 'react';

function Product_detail({ image, colection_img }) {
    return (
        <div className="row">
            <div className="col-lg-3 col-md-3">
                <ul className="nav nav-tabs" role="tablist">
                    {colection_img.map((item, index) => (
                        <li key={index} className="nav-item">
                            <a className={index === 0 ? "nav-link active" : "nav-link"} data-toggle="tab" href={`#tabs-${index + 1}`} role="tab">
                                <div className="product__thumb__pic set-bg" style={{ backgroundImage: `url(${item.url_img})` }}></div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="col-lg-6 col-md-9">
                <div className="tab-content">
                    {colection_img.map((item, index) => (
                        <div key={index} className={index === 0 ? "tab-pane active" : "tab-pane"} id={`tabs-${index + 1}`} role="tabpanel">
                            <div className="product__details__pic__item">
                                <img src={item.url_img} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Product_detail;
