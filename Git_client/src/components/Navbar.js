import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navIcon1 from "../assets/Icons/AccountUser.svg";
import navIcon2 from "../assets/Icons/Notification_Simple.svg";

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Toll-Booth</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/login">Home</Nav.Link>
            <Nav.Link href="#Balance">Balance</Nav.Link>
            <Nav.Link href="#Pricing">Pricing</Nav.Link>
            <Nav.Link href="#Features">Features</Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <a href="#user">
                <img src={navIcon1} alt="navIcon1" />
              </a>
              <a href="#notify">
                <img src={navIcon2} alt="navIcon2" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
