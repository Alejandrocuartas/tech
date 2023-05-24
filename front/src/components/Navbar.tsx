import React from 'react';

import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const NavbarComponent = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt="logo"
                        src="https://ncsa.jp/application/files/7416/1941/7095/nehops_8p_NotePC.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    {' '}
                    DigiWeb
                </Navbar.Brand>
                <div className='d-flex flex-row-reverse'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    );
};

const Navbar2 = () => {
    return (
        <Navbar sticky="top" bg='light' expand="lg">
            <Container>
                <Navbar.Brand href="#" className="navbar-brand d-flex align-items-center">
                    <img
                        alt="logo"
                        src="https://th.bing.com/th/id/R.b757f2bca8039d4a08882d38f4c1b8f0?rik=l1HvTt1fIsaMmQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ftwitter-logo-png-logo-twitter-in-png-2500.png&ehk=qSLAOlUdmImpXk6Jj6NUgKgK5gv%2fq1TGUwvlzdeBiNA%3d&risl=&pid=ImgRaw&r=0"
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
                        <Nav.Link href="#contact">Contacto</Nav.Link>
                        <Nav.Link href="#us">Nosotros</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export {
    Navbar2,
    Navbar
}
