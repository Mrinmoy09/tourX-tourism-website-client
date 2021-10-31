import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 h-25 img-fluid"
      src="https://i.ibb.co/K9nZhJ4/carousel1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Sylhet</h3>
      <p>Tahirpur Upazilla,Sunamganj,Sylhet</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100 h-25 img-fluid"
      src="https://i.ibb.co/5WDWRZX/carousel2.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Nafakhum</h3>
      <p>Nafakhum.Bandarban</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-25 img-fluid"
      src="https://i.ibb.co/7S1dbfP/carousel3.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Sajek</h3>
      <p>Sajek,Chittagang</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;