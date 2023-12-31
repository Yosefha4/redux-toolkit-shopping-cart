import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarElement() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">Redux Toolkit</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px"}}
            navbarScroll
          >
            <Nav.Link href="/cardList">Products</Nav.Link>
          </Nav>
          <Nav.Link  href="/cart">0 my card</Nav.Link>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarElement;
