import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logoWhite from '../assets/logo-white.png';

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img style={{filter: "brightness(0) invert(1)"}} src={logoWhite} alt=""  /><span>Khan estate</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" width="40" height="40" style={{ objectFit: 'contain' }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


export default MyNavbar;
