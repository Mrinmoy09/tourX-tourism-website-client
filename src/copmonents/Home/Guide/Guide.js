import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Guide = () => {
    return (
        <div>
            <h2 className="my-3 py-2 text-center">Our Guides</h2>
            <Container>
                <Row>
                    <Col md={4}>
                    <Card>
  <Card.Img variant="top" src="https://i.ibb.co/whhs0bH/guide1.jpg" className="img-fluid" />
  <Card.Body>
    <Card.Title>Anne marrie</Card.Title>
    <Card.Text>
      Senior Guide
    </Card.Text>
  </Card.Body>
</Card>
                    </Col>

                    <Col md={4}>
                    <Card>
  <Card.Img variant="top" src="https://i.ibb.co/0MdNhtS/guide2.jpg" className="img-fluid" />
  <Card.Body>
    <Card.Title>Shawn Paul</Card.Title>
    <Card.Text>
      Senior Guide
    </Card.Text>
  </Card.Body>
</Card>
                    </Col>
 
                    <Col md={4}>
                    <Card>
  <Card.Img variant="top" src="https://i.ibb.co/RTZn82M/guide3.jpg" className="img-fluid" />
  <Card.Body>
    <Card.Title>Jimmy Kimmel</Card.Title>
    <Card.Text>
      Junior Guide
    </Card.Text>
  </Card.Body>
</Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Guide;