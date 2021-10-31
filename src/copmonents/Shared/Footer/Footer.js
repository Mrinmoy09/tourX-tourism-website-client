import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-primary mt-5">
        <Container className="sticky-bottom">
        <Row>
            <Col md={5}>
            <h3>About TourX</h3>
              <p>We are one of the biggest tourism group of Bangladesh.This is not just a business.You can be One of us.</p>
            </Col>
            <Col md={4}>
              <h3>Our Services</h3>
              <p>We just dont have any limit.We will travel the world together</p>
            </Col>
            <Col md={3}>
              <h3>Contact us</h3>
              <p>Phone: 171-115-0092-119</p>
              <p>email: caremed@doc.com</p>
            </Col>
            <small className="text-center p-2 m-3 copyright">Created by &copy;mrinmoyarnob</small>
         </Row>
         
        </Container>
    </div>
    );
};

export default Footer;