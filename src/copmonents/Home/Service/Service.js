import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    
    const {_id,title,img,description,price} = service;
    return (
        <>
           <Col sm xs={6} md={4}>
           <Card>
  <Card.Img variant="top" src={img} className="img-fluid"/>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
    {description}
    </Card.Text>
    <Card.Text>
    {price}
    </Card.Text>
    <Link to={`/booking/${_id}`}><Button variant="primary">Book This Service</Button></Link>
  </Card.Body>
</Card>    
           </Col> 
        </>
    );
};

export default Service;