import React from 'react';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'

function Navbarboot({ Name, Home, About, mode, togglemode, buttontext }) {
    return (
        <div >
            <Navbar bg={mode} expand="lg" variant={mode}>
                <Container fluid  >
                <Navbar.Brand >{Name}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <NavLink to="/" style={{ color: mode === "light" ? "black" : "white", textDecoration: "none" }} className='mx-5'>{Home}</NavLink>
                            <NavLink to="about" style={{ color: mode === "light" ? "black" : "white", textDecoration: "none" }} className='mx-5'>{About}</NavLink>
                        </Nav>
                        <Form.Check type="switch" label={buttontext} onClick={togglemode} id="custom-switch" />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbarboot;