import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services ,setServices] = useState([])
    useEffect(()=>{
        fetch('https://damp-hollows-28113.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <>
          <h2 className="text-center my-3 py-2">Our Services</h2>
            <Container>
                 <Row>
                            {
                               services.map(service=><Service
                               key={service._id}
                               service={service}
                               ></Service>)
                            }
                 </Row>
            </Container>
        </>
    );
};

export default Services;