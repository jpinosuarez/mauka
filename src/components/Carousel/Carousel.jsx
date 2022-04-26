import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from "../../img/mauka-banner-oton_o-invierno.jpg";
import banner2 from "../../img/mauka_web_home_lanzamiento_s22_banner-madebetter.jpg";

const HeaderCarousel = () => {
    return (
        <Carousel className='container my-4'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default HeaderCarousel;