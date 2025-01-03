import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../assets/images/IN VINUM.png';

function AppHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img 
          className="logo"
          src={logo}
          alt={"logo"}
          />
          Vinum in via aeternum</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">Sobre nosotros</Nav.Link>
            <Nav.Link href="#services">Servicios</Nav.Link>
            <Nav.Link href="#works">Próximos eventos</Nav.Link>
            <Nav.Link href="#teams">Vinos</Nav.Link>
            <Nav.Link href="#blog">Prensa</Nav.Link>
            <Nav.Link href="#contact">Contáctanos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;