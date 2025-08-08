import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardItem from './CardItem';

const CardSection = () => {
  const cards = [
    {
      title: 'Card 1',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
      img: '/hero.jpg',
    },
    {
      title: 'Card 2',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
      img: '/hero2.webp',
    },
    {
      title: 'Card 3',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
      img: '/hero3.webp',
    },
  ];

  return (
    <Container className="my-5">
      <Row>
        {cards.map((card, index) => (
          <Col md={4} key={index} className="mb-4">
            <CardItem title={card.title} text={card.text} img={card.img} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardSection;
