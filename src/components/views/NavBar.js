import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <Navbar bg="primary" variant="dark" className="mt-4">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Blog.app
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
