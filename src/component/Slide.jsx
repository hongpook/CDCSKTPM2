import { memo } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Banners from 'dataBanner';

const Banner = () =>{
    return (
        <>
            <Carousel>
                {
                    Banners.map((item) =>(
                        <Carousel.Item>
                            <img src={item.img}/>
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }
                
                
                
            </Carousel>
        </>
    );
};

export default memo(Banner);