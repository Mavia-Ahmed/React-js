import React from 'react';
import { Carousel } from 'react-bootstrap';

function CarouselComponent({ slides }) {
  return (
    <Carousel>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={slide.image}
            alt={slide.alt}
            style={{ height: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;