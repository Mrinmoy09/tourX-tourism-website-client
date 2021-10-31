import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className="mt-5 bg-info">
        <Container className="container-fluid">
            <Row>
                <Col sm={6}>
                    <img src="https://i.ibb.co/mNmm42y/tahirpur.jpg" alt="" className="img-fluid"/>
                </Col>
                <Col sm={4} className="mx-auto my-auto">
                    <h2 className="text-center">Your Comfort Is Our Priority</h2>
                    <p className="text-black-50 text-center">We are not a agency.We dont see us as a businessman.We are a group of people who loves to travel.
                    So,What are you waiting for.Let's see the world together</p>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export default About;