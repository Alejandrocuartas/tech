import React from 'react';

import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const NavbarComponent = () => {
    return (
        <Navbar sticky="top" bg='light' expand="lg">
            <Container>
                <Navbar.Brand href="#" className="navbar-brand d-flex align-items-center">
                    <img
                        alt="logo"
                        src="https://ncsa.jp/application/files/7416/1941/7095/nehops_8p_NotePC.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    {' '}
                    <strong>DigiWeb</strong>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav ">
                    <Nav className="me-auto">
                        <Nav.Link href="#services">Servicios</Nav.Link>
                        <Nav.Link href="#refs">Referencias</Nav.Link>
                        <Nav.Link href="#us">Nosotros</Nav.Link>
                        <Nav.Link href="#contact">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;
