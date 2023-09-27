import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { InputContext } from "../App";
import { useContext } from "react";

function NavBar() {
  const [navbarsearch, setNavbarSearch] = useContext(InputContext);
  function handleInputChange(e) {
    setNavbarSearch(e.target.value);
  }

  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-3">
        <Container fluid>
          <Navbar.Brand>Predicitify Weather App </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to={"/"}>
                  Hem
                </Nav.Link>

                <Nav.Link as={Link} to={"/contact"}>
                  Kontakt
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="text"
                  placeholder="Sök stad"
                  className="me-2"
                  aria-label="Search"
                  value={navbarsearch}
                  onChange={handleInputChange}
                />
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
