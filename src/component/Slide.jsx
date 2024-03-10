import { memo } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import hero_1 from '../assets/imgs/hero/hero-1.jpg';
import hero_2 from '../assets/imgs/hero/hero-2.jpg';

const Banner = () =>{
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img src={hero_1}/>
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={hero_2}/>
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
        </>
    );
};

export default memo(Banner);