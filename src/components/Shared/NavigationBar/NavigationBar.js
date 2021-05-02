import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar expand="lg">
            <Navbar.Brand className='text-white' href="#home">Muhammad Naqib</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto ml-auto">
                    <Nav.Link className='text-white' href="home">Home</Nav.Link>
                    <Nav.Link className='text-white' href="about">About</Nav.Link>
                    <Nav.Link className='text-white' href="projects">Projects</Nav.Link>
                    <Nav.Link className='text-white' href="blogs">Blogs</Nav.Link>
                    <Nav.Link className='text-white' href="contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;