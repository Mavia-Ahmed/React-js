// src/components/Navbar.jsx
import { Navbar, Nav, Container } from 'react-bootstrap';

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img style={{filter: "brightness(0) invert(1)"}} src="/logo-white.png" alt="logo"  /><span>Khan estate</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" width="40" height="40" style={{ objectFit: 'contain' }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Service</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
