import React from 'react';
import { Button, Container, Nav, Navbar,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png'

const NavBar = () => {
    
    const {user,logOut} = useAuth();

    return (
        <>
            
            <Navbar bg="primary" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end ">
                        <Nav.Link as={Link} to="/home" className="text-white">Home</Nav.Link>
                        {user?.email ?
                            <>
                            <Nav.Link as={Link} to="/addservice" className="text-white">Add Service</Nav.Link>
                            <Nav.Link as={Link} to="/myBookings" className="text-white">My Bookings</Nav.Link>
                            <Nav.Link as={Link} to="/manageBookings" className="text-white">Manage Bookings</Nav.Link>
                            <Button onClick={logOut} variant="light">Logout</Button>
                            </>
                            
                            
                            :
                            <Nav.Link as={Link} to="/login" className="text-white">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: {user.displayName}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;